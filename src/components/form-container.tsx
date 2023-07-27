import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import VariantContainedSizeLarge from "./variant-contained-size-large";
import styles from "./form-container.module.css";

type FormContainerType = {
  imageDimensions?: string;
  imageAltText?: string;
  carDimensions?: string;
  imageDimensionsText?: string;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  imageDimensions,
  imageAltText,
  carDimensions,
  imageDimensionsText,
}) => {
  return (
    <div className={styles.footerSection}>
      <div className={styles.subscribeSection}>
        <img
          className={styles.subscribeSectionBackground}
          alt=""
          src={imageDimensions}
        />
        <div className={styles.shareYourTravelsForm}>
          <div className={styles.formHeader}>
            <b className={styles.formTitleSubtext}>
              subscribe to our newsletter
            </b>
            <b className={styles.formTitle}>Get weekly updates</b>
          </div>
          <div className={styles.form}>
            <div className={styles.formText}>
              <div className={styles.fillInYour}>
                Fill in your details to join the party!
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.formText}>
                <TextField
                  className={styles.input}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Your name"
                  size="medium"
                  margin="none"
                />
              </div>
              <div className={styles.formText}>
                <TextField
                  className={styles.input}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Email address"
                  size="medium"
                  margin="none"
                />
              </div>
            </div>
            <button className={styles.button}>
              <VariantContainedSizeLarge
                button="submit"
                variantContainedSizeLargePosition="unset"
                variantContainedSizeLargeBoxSizing="border-box"
                buttonLineHeight="1.63rem"
                buttonColor="#fff"
                buttonDisplay="inline-block"
              />
            </button>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.fickleflightBio}>
          <img className={styles.logoIcon} alt="" src={carDimensions} />
          <div className={styles.fickleFlightIs}>
            Fickle Flight is your one-stop travel portal. We offer hassle free
            flight and hotel bookings. We also have all your flight needs in you
            online shop.
          </div>
          <img
            className={styles.socialIcons}
            alt=""
            src={imageDimensionsText}
          />
        </div>
        <div className={styles.footerChild} />
        <div className={styles.footerLinks}>
          <div className={styles.company}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.company1}>Company</div>
            <div className={styles.news}>News</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.howWeWork}>How we work</div>
          </div>
          <div className={styles.company}>
            <div className={styles.account}>Account</div>
            <div className={styles.support1}>Support</div>
            <div className={styles.supportCenter}>Support Center</div>
            <div className={styles.faq}>FAQ</div>
            <div className={styles.accessibility}>Accessibility</div>
          </div>
          <div className={styles.more}>
            <div className={styles.covidAdvisory}>Covid Advisory</div>
            <div className={styles.more1}>More</div>
            <div className={styles.airlineFees}>Airline Fees</div>
            <div className={styles.tips}>Tips</div>
            <div className={styles.howWeWork}>Quarantine Rules</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FormContainer;
