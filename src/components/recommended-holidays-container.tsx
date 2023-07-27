import { FunctionComponent } from "react";
import RecommendedHolidayCardContaine from "./recommended-holiday-card-containe";
import styles from "./recommended-holidays-container.module.css";
const RecommendedHolidaysContainer: FunctionComponent = () => {
  return (
    <div className={styles.recommendedHolidaysContainer}>
      <div className={styles.recTitle}>
        <b className={styles.recommendedHolidays}>Recommended Holidays</b>
        <button className={styles.viewAllHolidaysParent}>
          <div className={styles.viewAllHolidays}>View all holidays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div className={styles.recCardsContainer}>
        <RecommendedHolidayCardContaine
          packageCode="/unsplash5mv818tzxeo@2x.png"
          packageDestination="Bali"
          packageDuration="4D3N"
          packagePrice="$899"
        />
        <RecommendedHolidayCardContaine
          packageCode="/switzerlandimage@2x.png"
          packageDestination="Swiss"
          packageDuration="6D5N"
          packagePrice="$900"
        />
        <RecommendedHolidayCardContaine
          packageCode="/boracayimage@2x.png"
          packageDestination="Boracay"
          packageDuration="5D4N"
          packagePrice="$699"
        />
        <RecommendedHolidayCardContaine
          packageCode="/palawanimage@2x.png"
          packageDestination="Palawan"
          packageDuration="4D3N"
          packagePrice="$789"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllHolidays1}>View all holidays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright3.svg" />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
