import React from "react";
import styles from "./HomePage.module.css";
import TextEffect from "../components/TextEffect";
import Header from "../components/navigation/Header";
import CtaBtn from "../components/CtaBtn";

function HomePage() {
  return (
    <div className={styles.main}>
      <Header />

      <div>
        <h1 className="heading">
          Hi, <span className={styles.name}>I'm Stef,</span>
        </h1>
        <h1 className="heading">
          I <span className={styles.designTag}>design</span> and build{" "}
          <TextEffect
            letters={"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}
            words={["Websites", "Mobile apps", "API's", "Backends", "Things"]}
          ></TextEffect>
        </h1>
        <p className="comment">//and I enjoy doing it :)</p>
      </div>

      <CtaBtn btnType="contact" btnText="Contact Me"></CtaBtn>
    </div>
  );
}

export default HomePage;
