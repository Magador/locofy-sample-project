import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HotelCardContainer from "./hotel-card-container";
import styles from "./popular-stays-container.module.css";
const PopularStaysContainer: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/hotels-page");
  }, [navigate]);

  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <div className={styles.popularStaysTitle}>
          <b className={styles.popularStays1}>Popular Stays</b>
        </div>
        <button
          className={styles.viewAllStaysButton}
          onClick={onViewAllStaysButtonClick}
        >
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright4.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <HotelCardContainer
          accommodationDetails="/unsplashrlwe8f8anoc@2x.png"
          accommodationType="Entire bungalow"
          accommodationName="Matterhorn Suites"
          accommodationPrice="$575/night"
          accommodationReviews="(60 reviews)"
          accommodationRating="4.9"
          accommodationDimensions="/vector3.svg"
        />
        <HotelCardContainer
          accommodationDetails="/unsplashtsn8bpopveo@2x.png"
          accommodationType="2-Story beachfront suite"
          accommodationName="Discovery Shores"
          accommodationPrice="$360/night"
          accommodationReviews="(116 reviews)"
          accommodationRating="4.8"
          accommodationDimensions="/vector4.svg"
          propFlex="1"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
        <HotelCardContainer
          accommodationDetails="/unsplashrlwe8f8anoc1@2x.png"
          accommodationType="Single deluxe hut"
          accommodationName="Arctic Hut "
          accommodationPrice="$420/night"
          accommodationReviews="(78 reviews)"
          accommodationRating="4.7"
          accommodationDimensions="/vector5.svg"
          propFlex="1"
          propGap="5px"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardContainer
          accommodationDetails="/unsplashyqrybvxug5q@2x.png"
          accommodationType="Deluxe King Room"
          accommodationName="Lake Louise Inn"
          accommodationPrice="$244/night"
          accommodationReviews="(63 reviews)"
          accommodationRating="4.6"
          accommodationDimensions="/vector6.svg"
          propFlex="unset"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright5.svg" />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
