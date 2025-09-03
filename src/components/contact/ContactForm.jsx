import React, { useId, useState, useRef } from "react";
import { useFormStatus } from "react-dom";
import styles from "./ContactForm.module.css";
import { sendMessage, reportBug } from "../../services/message-service";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm(props) {
  const setShowDialog = props.setShowDialog;
  const setDialogMessage = props.setDialogMessage;
  const setDialogType = props.setDialogType;
  const popupDurationInMs = props.popupDurationInMs;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const nameInputId = useId();
  const emailInputId = useId();
  const subjectInputId = useId();
  const messageInputId = useId();

  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  function submitForm() {
    //Save the token from the ReCAPTCHA
    const token = recaptchaRef.current.getValue();

    //Add the form content and ReCAPTCHA to template params object
    let emailObject = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      "g-recaptcha-response": token,
    };

    //reset the ReCAPTCHA
    recaptchaRef.current.reset();

    sendMessage(emailObject).then(
      (response) => {
        if (response.status === 200) {
          //On success
          setDialogMessage("Message sent");
          setDialogType("success");
          setShowDialog(true);

          setTimeout(() => {
            setShowDialog(false);

            setDialogMessage("");
            setDialogType("");
          }, popupDurationInMs);
        }
      },
      (error) => {
        //On error
        setDialogMessage("An error occured");
        setDialogType("danger");
        setShowDialog(true);

        reportBug({ bug: error.message });

        setTimeout(() => {
          setShowDialog(false);

          setDialogMessage("");
          setDialogType("");
        }, popupDurationInMs);
      }
    );

    setFormIsValid(false);
  }

  return (
    <form
      ref={formRef}
      action={submitForm}
      className={styles.form}
      data-test="contact-form"
    >
      <section>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          id={nameInputId}
          required={true}
          pattern=".*[a-zA-Z].*"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
            setFormIsValid(formRef.current.checkValidity() && captcha);
          }}
          data-test="name-input"
        />
      </section>

      <section>
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          id={emailInputId}
          required={true}
          placeholder="Enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
            setFormIsValid(formRef.current.checkValidity() && captcha);
          }}
          data-test="email-input"
        />
      </section>

      <section>
        <label htmlFor="">Subject</label>
        <input
          type="text"
          name="subject"
          id={subjectInputId}
          required={true}
          pattern=".*[a-zA-Z].*"
          placeholder="Why are you contacting me"
          onChange={(e) => {
            setSubject(e.target.value);
            setFormIsValid(formRef.current.checkValidity() && captcha);
          }}
          data-test="subject-input"
        />
      </section>

      <section>
        <label htmlFor="">Message</label>
        <textarea
          name="message"
          id={messageInputId}
          required={true}
          placeholder="Type your message"
          onChange={(e) => {
            setMessage(e.target.value);
            setFormIsValid(formRef.current.checkValidity() && captcha);
          }}
          data-test="message-textarea"
        ></textarea>
      </section>

      <section>
        <ReCAPTCHA
          sitekey="6LfeE70rAAAAAEAlM4c8xfkpPtMWBaxaPzQwJdl9"
          ref={recaptchaRef}
          onChange={(value) => {
            setCaptcha(value === undefined ? false : true);
            setFormIsValid(
              formRef.current.checkValidity() &&
                (value === undefined ? false : true)
            );
          }}
        />
      </section>

      <SubmitSection formIsValid={formIsValid} />
    </form>
  );
}

function SubmitSection(props) {
  const formIsValid = props.formIsValid;
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className={styles.submitBtn}
      disabled={status.pending ? true : !formIsValid}
      data-test="submit-btn"
    >
      {status.pending ? "sending message..." : "Send message"}
    </button>
  );
}

export default ContactForm;
