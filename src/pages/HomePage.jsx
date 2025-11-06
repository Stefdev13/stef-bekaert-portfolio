import styles from "./HomePage.module.css";
import TextEffect from "../components/home/TextEffect";
import Header from "../components/navigation/Header";
import CtaBtn from "../components/CtaBtn";
import { motion } from "motion/react";

function HomePage() {
  return (
    <div className={styles.main} data-test="background">
      <Header />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          alignItems: "center",
        }}
      >
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

          <p className="commentSemibold" data-test="comment">
            //and I enjoy doing it :)
          </p>
        </div>
        <CtaBtn btnType="contact" btnText="Contact Me"></CtaBtn>
      </motion.div>
    </div>
  );
}

export default HomePage;
