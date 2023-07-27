import { FunctionComponent } from "react";
import styles from "./flight-main-container.module.css";

type FlightMainContainerType = {
  flightOrigin?: string;
  flightDestination?: string;
  flightOriginCode?: string;
  departureDate?: string;
  returnDate?: string;
};

const FlightMainContainer: FunctionComponent<FlightMainContainerType> = ({
  flightOrigin,
  flightDestination,
  flightOriginCode,
  departureDate,
  returnDate,
}) => {
  return (
    <div className={styles.flightMainContainer}>
      <div className={styles.toAndFrom}>
        <div className={styles.fromDetails}>
          <b className={styles.sin}>{flightOrigin}</b>
        </div>
        <img className={styles.durationIcon} alt="" src={flightDestination} />
        <div className={styles.toDetails}>
          <b className={styles.lax}>{flightOriginCode}</b>
        </div>
      </div>
      <div className={styles.departOn7Container}>
        <b>{departureDate}</b>
        <span>{returnDate}</span>
      </div>
    </div>
  );
};

export default FlightMainContainer;
