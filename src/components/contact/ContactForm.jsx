import React, { useId, useState, useRef } from "react";
import { useFormStatus } from "react-dom";
import styles from "./ContactForm.module.css";
import { sendMessage, reportBug } from "../../services/message-service";

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
  const captchaInputId = useId();

  const formRef = useRef(null);

  function submitForm() {
    let emailObject = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

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

    setFormIsValid(formRef.current.checkValidity());
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
            setFormIsValid(formRef.current.checkValidity());
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
            setFormIsValid(formRef.current.checkValidity());
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
            setFormIsValid(formRef.current.checkValidity());
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
            setFormIsValid(formRef.current.checkValidity());
          }}
          data-test="message-textarea"
        ></textarea>
      </section>

      <section className={styles.captcha}>
        <input
          type="checkbox"
          name="captcha"
          id={captchaInputId}
          required={true}
          onChange={() => {
            setCaptcha(!captcha);
            setFormIsValid(formRef.current.checkValidity());
          }}
          data-test="captcha-checkbox"
        />
        <label htmlFor="">I'm not a robot</label>
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
