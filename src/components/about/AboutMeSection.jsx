import KnotAndTitle from "./KnotAndTitle";
import CtaBtn from "../../components/CtaBtn";
import styles from "./AboutMeSection.module.css";
import { motion } from "motion/react";

function AboutMeSection() {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: 0.1,
      },
    },
  };

  return (
    <div className={styles.sectionWrapper} data-test="about-section">
      <div>
        <KnotAndTitle title="Biography" location="top" />
        <div className={styles.contentAndLineWrapper}>
          <div className={styles.line} />
          <div className={styles.sectionContent}>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <div>
                <h1 className="sectionHeading">A bit about me</h1>
                <p className="comment">//And what I enjoy</p>
              </div>
            </motion.div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <div>
                <p className="text">
                  I am an ambitious and driven professional with a passion for
                  software development. I love to challenge myself and see what
                  I can achieve. I am always looking for opportunities to expand
                  my knowledge.
                </p>
                <p className="text">
                  I enjoy the process of developing a project: working out a
                  concept, creating a design, developing it, analyzing the
                  result, and iterating further.
                </p>
                <p className="text">
                  In my free time I play video games to relax, sports to
                  challenge myself, work on personal projects to learn new
                  things and hang out with friends to have fun.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <CtaBtn btnType="contact" btnText="Contact Me" />
            </motion.div>
          </div>
        </div>
      </div>
      <img
        src="/images/about-me-image.png"
        alt="Image of me"
        className={styles.aboutImg}
      />
    </div>
  );
}

export default AboutMeSection;
