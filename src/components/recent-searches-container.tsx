import { FunctionComponent, useCallback } from "react";
import FlightMainContainer from "./flight-main-container";
import { useNavigate } from "react-router-dom";
import styles from "./recent-searches-container.module.css";
const RecentSearchesContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHotelClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.upcomingFlightSection}>
      <div className={styles.upcomingFlightSection1}>
        <b className={styles.recentSearches}>Recent Searches</b>
        <div className={styles.flightDetails}>
          <div className={styles.recentSearches1}>
            <FlightMainContainer
              flightOrigin="SIN"
              flightDestination="/duration.svg"
              flightOriginCode="LAX"
              departureDate="Depart on: "
              returnDate="7 Sep 2021"
            />
            <FlightMainContainer
              flightOrigin="MY"
              flightDestination="/duration1.svg"
              flightOriginCode="DUB"
              departureDate="Depart on:"
              returnDate=" 9 Sep 2021"
            />
          </div>
          <div className={styles.prepareMenu}>
            <div className={styles.recentSearches}>Prepare for your trip</div>
            <div className={styles.tripMenus}>
              <button className={styles.hotel} onClick={onHotelClick}>
                <img
                  className={styles.hotelIcon}
                  alt=""
                  src="/hotel-icon.svg"
                />
                <div className={styles.hotel1}>Hotel</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelIcon}>
                  <div className={styles.background} />
                  <img className={styles.ticketIcon} alt="" src="/ticket.svg" />
                </div>
                <div className={styles.attractions1}>Attractions</div>
              </button>
              <button className={styles.hotel}>
                <img className={styles.hotelIcon} alt="" src="/eats-icon.svg" />
                <div className={styles.attractions1}>Eats</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelIcon}>
                  <div className={styles.background1} />
                  <img className={styles.trainIcon} alt="" src="/vector.svg" />
                </div>
                <div className={styles.attractions1}>Commute</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.taxiIcon}>
                  <div className={styles.background2} />
                  <img className={styles.taxiIcon1} alt="" src="/vector1.svg" />
                </div>
                <div className={styles.taxi1}>Taxi</div>
              </button>
              <button className={styles.hotel}>
                <div className={styles.hotelIcon}>
                  <div className={styles.background3} />
                  <img className={styles.movieIcon} alt="" src="/vector2.svg" />
                </div>
                <div className={styles.attractions1}>Movies</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
