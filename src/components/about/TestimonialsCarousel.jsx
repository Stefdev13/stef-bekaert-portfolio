import Testimonial from "./Testimonial";
import * as Constants from "../../constants/testimonials-constants";
import styles from "./TestimonialsCarousel.module.css";

function TestimonialsCarousel() {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {Constants.TESTIMONIALS.map((testimonial) => (
          <Testimonial testimonial={testimonial} key={testimonial.name} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
