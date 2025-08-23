import React from "react";
import styles from "./ContactPage.module.css";
import Header from "../components/navigation/Header";
import ContactForm from "../components/contact/ContactForm";
import DialogBox from "../components/DialogBox";

function ContactPage() {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <div className={styles.textBlock}>
            <h1 className="heading">Contact me</h1>
            <p className="text">
              Enter your contact details and a message, and I will get back to
              you.
            </p>
            <p className="comment">//Unless I’m on vacation...</p>
          </div>
          <DialogBox
            title="Buy me a beer"
            text="This is really just here to show that I can integrate a payment processor, but feel free to buy me a beer anyway."
            dialogType=""
            primaryBtn={{
              btnText: "Buy me a beer",
              onClick: () => buyMeABeerFunction(),
            }}
          />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
