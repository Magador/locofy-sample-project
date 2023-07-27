import { FunctionComponent } from "react";
import PrimaryButton from "./primary-button";
import styles from "./results-container.module.css";

type ResultsContainerType = {
  hotelName?: string;
  hotelDescription?: string;
  roomType?: string;
  hotelReviews?: string;
  hotelRating?: string;
  hotelPrice?: string;
  hotelPricePerNight?: string;
};

const ResultsContainer: FunctionComponent<ResultsContainerType> = ({
  hotelName,
  hotelDescription,
  roomType,
  hotelReviews,
  hotelRating,
  hotelPrice,
  hotelPricePerNight,
}) => {
  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsImageIcon} alt="" src={hotelName} />
      <div className={styles.resultsDetails}>
        <div className={styles.resultsTitle}>
          <div className={styles.result}>
            <b className={styles.freehandLosAngeles}>{hotelDescription}</b>
            <div className={styles.bedInQuad}>{roomType}</div>
            <div className={styles.review}>
              <div className={styles.reviews}>{hotelReviews}</div>
              <div className={styles.stars}>
                <div className={styles.div}>{hotelRating}</div>
                <img className={styles.vectorIcon} alt="" src={hotelPrice} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricing}>
            <b className={styles.s198}>{hotelPricePerNight}</b>
            <div className={styles.night}>/night</div>
          </div>
          <PrimaryButton
            searchFlights="View Details"
            primaryButtonPosition="absolute"
            primaryButtonWidth="10.25rem"
            primaryButtonHeight="2.88rem"
            primaryButtonCursor="pointer"
            primaryButtonBorder="none"
            primaryButtonPadding="0"
            primaryButtonBackgroundColor="transparent"
            primaryButtonTop="37.58px"
            primaryButtonLeft="0.49px"
            rectangleDivBackgroundColor="#1262af"
            searchFlightsLeft="calc(50% - 54.5px)"
            searchFlightsDisplay="inline-block"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
