import { FunctionComponent } from "react";
import FormContainer from "./form-container";
import styles from "./newsletter-container.module.css";
const NewsletterContainer: FunctionComponent = () => {
  return (
    <div className={styles.footerSection}>
      <FormContainer
        imageDimensions="/newsletter-section-background@2x.png"
        carDimensions="/logo1.svg"
        imageDimensionsText="/social-icons1.svg"
      />
    </div>
  );
};

export default NewsletterContainer;
