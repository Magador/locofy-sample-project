import { FunctionComponent } from "react";
import DestinationContainer from "./destination-container";
import styles from "./popular-destinations-container.module.css";
const PopularDestinationsContainer: FunctionComponent = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className={styles.cardsContainer}>
        <DestinationContainer
          destinationPrice="/parisimage@2x.png"
          destinationName="Paris"
          destinationPriceRange="$699"
        />
        <DestinationContainer
          destinationPrice="/greeceimage@2x.png"
          destinationName="Greece"
          destinationPriceRange="$1079"
          propWidth="6.25rem"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="47.39px"
        />
        <DestinationContainer
          destinationPrice="/norwayimage@2x.png"
          destinationName="Norway"
          destinationPriceRange="$895"
          propWidth="5.68rem"
          propDisplay="inline-block"
          propWidth1="5.68rem"
          propLeft="38.39px"
        />
        <DestinationContainer
          destinationPrice="/tuscanyimage@2x.png"
          destinationName="Tuscany"
          destinationPriceRange="$1245"
          propWidth="6.29rem"
          propDisplay="inline-block"
          propWidth1="6.29rem"
          propLeft="48.09px"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright1.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
