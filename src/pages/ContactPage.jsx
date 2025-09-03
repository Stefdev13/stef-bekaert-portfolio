import React, { useState } from "react";
import { useTheme } from "../context/ThemeProvider";
import styles from "./ContactPage.module.css";
import Header from "../components/navigation/Header";
import ContactForm from "../components/contact/ContactForm";
import DialogBox from "../components/DialogBox";
import PopupMessage from "../components/PopupMessage";

function ContactPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [dialogType, setDialogType] = useState("");

  const theme = useTheme();

  const popupDurationInMs = 5000;

  return (
    <div className={styles.main}>
      <Header />

      <img
        src={
          theme ? "/images/contact-bg-light.png" : "/images/contact-bg-dark.png"
        }
        alt="a backgroud image with a paper plane"
        className={styles.bgImage}
      />

      <div className={styles.wrapper}>
        <div className={styles.textBlock}>
          <h1 className="heading">Contact me</h1>
          <p className="text">
            Enter your contact details and a message, and I will get back to
            you.
          </p>
          <p className="comment">//Unless I’m on vacation...</p>
        </div>
        <div className={styles.dialogBox}>
          {/* <DialogBox
            title="Buy me a beer"
            text="This is really just here to show that I can integrate a payment processor, but feel free to buy me a beer anyway."
            dialogType=""
            primaryBtn={{
              btnText: "Buy me a beer",
              onClick: () => buyMeABeerFunction(),
            }}
          /> */}
        </div>
        <div className={styles.contactForm}>
          <ContactForm
            setShowDialog={setShowDialog}
            setDialogMessage={setDialogMessage}
            setDialogType={setDialogType}
            popupDurationInMs={popupDurationInMs}
          />
        </div>
      </div>

      <PopupMessage
        type={dialogType}
        show={showDialog}
        dialogMessage={dialogMessage}
        popupDurationInMs={popupDurationInMs}
      />
    </div>
  );
}

export default ContactPage;
