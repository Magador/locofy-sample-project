import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./flight-container.module.css";

type FlightContainerType = {
  flightDetails?: string;
  airlineName?: string;
  departureTime?: string;
  flightDuration?: string;
  arrivalTime?: string;
  flightPrice?: string;

  /** Style props */
  propTransform?: Property.Transform;
};

const FlightContainer: FunctionComponent<FlightContainerType> = ({
  flightDetails,
  airlineName,
  departureTime,
  flightDuration,
  arrivalTime,
  flightPrice,
  propTransform,
}) => {
  const turkishIconStyle: CSS.Properties = useMemo(() => {
    return {
      transform: propTransform,
    };
  }, [propTransform]);

  return (
    <div className={styles.flightCard}>
      <div className={styles.airlineSection}>
        <img
          className={styles.turkishIcon}
          alt=""
          src={flightDetails}
          style={turkishIconStyle}
        />
        <div className={styles.singaporeAirlines}>{airlineName}</div>
      </div>
      <div className={styles.flightDetailsSection}>
        <div className={styles.departureDetails}>
          <div className={styles.am}>{departureTime}</div>
          <div className={styles.sin}>SIN</div>
        </div>
        <div className={styles.flightduration}>
          <img className={styles.flighticon} alt="" src="/flighticon.svg" />
          <div className={styles.h55mNonStop}>{flightDuration}</div>
        </div>
        <div className={styles.arrivalDetails}>
          <div className={styles.am}>{arrivalTime}</div>
          <div className={styles.sin1}>LAX</div>
        </div>
      </div>
      <div className={styles.priceSection}>
        <img className={styles.priceSectionChild} alt="" src="/vector-1.svg" />
        <b className={styles.s730}>{flightPrice}</b>
      </div>
    </div>
  );
};

export default FlightContainer;
