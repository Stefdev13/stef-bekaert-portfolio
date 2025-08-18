import React from "react";
import KnotAndTitle from "./KnotAndTitle";
import CtaBtn from "../../components/CtaBtn";
import styles from "../../pages/AboutPage.module.css";

function AboutMeSection() {
  return (
    //These styles are defined in the AboutPage css module instead of in their own css module for simplicity and reusability
    <div className={styles.topSectionWrapper}>
      <KnotAndTitle title="Biography" location="top" />
      <div className={styles.sectionContent}>
        <div>
          <h1 className="sectionHeading">A bit about me</h1>
          <p className="comment">//And what I enjoy</p>
        </div>
        <div>
          <p className="text">
            I am an ambitious and driven professional with a passion for
            software development. I love to challenge myself and see what I can
            achieve. I am always looking for opportunities to expand my
            knowledge.
          </p>
          <p className="text">
            I enjoy the process of developing a project: working out a concept,
            creating a design, developing it, analyzing the result, and
            iterating further.
          </p>
          <p className="text">
            In my free time I play video games to relax, sports to challenge
            myself, work on personal projects to learn new things and hang out
            with friends to have fun.
          </p>
        </div>
        <CtaBtn btnType="contact" btnText="Contact Me" />
      </div>
    </div>
  );
}

export default AboutMeSection;
