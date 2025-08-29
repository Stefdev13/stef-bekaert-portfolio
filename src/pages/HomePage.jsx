import React from "react";
import styles from "./HomePage.module.css";
import TextEffect from "../components/home/TextEffect";
import Header from "../components/navigation/Header";
import CtaBtn from "../components/CtaBtn";

function HomePage() {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.textSection}>
        <h1 className="heading">
          Hi, <span className={styles.name}>I'm Stef,</span>
        </h1>
        <div className={styles.mainLine}>
          <h1 className={`heading ${styles.lessLineHeight}`}>
            I <span className={styles.designTag}>design</span> and build{" "}
          </h1>
          <TextEffect
            letters={"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
            words={["Websites", "Mobile apps", "API's", "Backends", "Things"]}
          ></TextEffect>
        </div>

        <p className="commentSemibold">//and I enjoy doing it :)</p>
      </div>

      <CtaBtn btnType="contact" btnText="Contact Me"></CtaBtn>
    </div>
  );
}

export default HomePage;
