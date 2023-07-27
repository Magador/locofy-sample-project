import { FunctionComponent } from "react";
import BookingOptionsCard from "./booking-options-card";
import styles from "./search-filter-container.module.css";
const SearchFilterContainer: FunctionComponent = () => {
  return (
    <div className={styles.searchFilters}>
      <div className={styles.resultsSummary}>
        <div className={styles.resultsParent}>
          <div className={styles.results}>10 out of 177 Results</div>
          <img className={styles.frameChild} alt="" src="/vector-2.svg" />
        </div>
      </div>
      <BookingOptionsCard stopOptionsText="Stops" />
      <BookingOptionsCard
        stopOptionsText="Booking Options"
        propWidth="13.81rem"
        propWidth1="11.81rem"
      />
      <BookingOptionsCard
        stopOptionsText="Flight Experience"
        propWidth="19.43rem"
        propWidth1="12.38rem"
      />
      <img className={styles.frameChild} alt="" src="/vector-2.svg" />
      <BookingOptionsCard
        stopOptionsText="Airlines"
        propWidth="11.31rem"
        propWidth1="5.49rem"
      />
    </div>
  );
};

export default SearchFilterContainer;
