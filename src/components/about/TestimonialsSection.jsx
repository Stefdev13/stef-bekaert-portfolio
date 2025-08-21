import KnotAndTitle from "./KnotAndTitle";
import styles from "../../pages/AboutPage.module.css";
import TestimonialsCarousel from "./TestimonialsCarousel";

function TestimonialsSection() {
  return (
    <div className={styles.bottomSectionWrapper}>
      <KnotAndTitle title="Testimonials" location="bottom" />
      <div className={styles.bottomSectionContent}>
        <div className={styles.bottomHeader}>
          <h1 className="sectionHeading">What others said about me</h1>
          <p className="comment">//Totally not made up testimonials</p>
        </div>
        <TestimonialsCarousel />
      </div>
    </div>
  );
}

export default TestimonialsSection;
