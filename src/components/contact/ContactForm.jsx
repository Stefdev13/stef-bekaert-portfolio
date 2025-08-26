import React, { useId, useState } from "react";
import { useFormStatus } from "react-dom";
import styles from "./ContactForm.module.css";
import { sendMessage } from "../../services/message-service";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState(false);

  const nameInputId = useId();
  const emailInputId = useId();
  const subjectInputId = useId();
  const messageInputId = useId();
  const captchaInputId = useId();

  function submitForm() {
    let emailObject = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    sendMessage(emailObject).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  }

  return (
    <form action={submitForm} className={styles.form}>
      <label htmlFor="">Name</label>
      <input
        type="text"
        name="name"
        id={nameInputId}
        required={true}
        placeholder="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <label htmlFor="">Email</label>
      <input
        type="email"
        name="email"
        id={emailInputId}
        required={true}
        placeholder="Enter your email address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <label htmlFor="">Subject</label>
      <input
        type="text"
        name="subject"
        id={subjectInputId}
        required={true}
        placeholder="Why are you contacting me"
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />

      <label htmlFor="">Message</label>
      <textarea
        name="message"
        id={messageInputId}
        required={true}
        placeholder="Type your message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>

      <section className={styles.captcha}>
        <input
          type="checkbox"
          name="captcha"
          id={captchaInputId}
          required={true}
          onChange={() => {
            setCaptcha(!captcha);
          }}
        />
        <label htmlFor="">I'm not a robot</label>
      </section>

      <SubmitSection />
    </form>
  );
}

function SubmitSection() {
  const status = useFormStatus();

  return (
    <button
      type="submit"
      className={styles.submitBtn}
      disabled={status.pending}
    >
      {status.pending ? "sending message..." : "Send message"}
    </button>
  );
}

export default ContactForm;
