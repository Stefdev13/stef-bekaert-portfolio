import React, { useId, useState } from "react";
import styles from "./ContactForm.module.css";

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

  function submitForm() {}

  return (
    <div className={styles.formWrapper}>
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

        <label htmlFor="">I'm not a robot</label>
        <input
          type="checkbox"
          name="captcha"
          id={captchaInputId}
          required={true}
          onChange={() => {
            setCaptcha(!captcha);
          }}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default ContactForm;
