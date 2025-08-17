import React from "react";
import styles from "./ContactPage.module.css";
import Header from "../components/navigation/Header";

function ContactPage() {
  return (
    <div className={styles.main}>
      <Header />

      <h1>Contact page</h1>
    </div>
  );
}

export default ContactPage;
