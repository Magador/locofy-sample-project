import { FunctionComponent, useState, useMemo, useCallback } from "react";
import MatterhornPopup from "./matterhorn-popup";
import PortalPopup from "./portal-popup";
import CSS, { Property } from "csstype";
import styles from "./hotel-card-container.module.css";

type HotelCardContainerType = {
  accommodationDetails?: string;
  accommodationType?: string;
  accommodationName?: string;
  accommodationPrice?: string;
  accommodationReviews?: string;
  accommodationRating?: string;
  accommodationDimensions?: string;

  /** Style props */
  propFlex?: Property.Flex;
  propGap?: Property.Gap;
  propWidth?: Property.Width;
  propRight?: Property.Right;
};

const HotelCardContainer: FunctionComponent<HotelCardContainerType> = ({
  accommodationDetails,
  accommodationType,
  accommodationName,
  accommodationPrice,
  accommodationReviews,
  accommodationRating,
  accommodationDimensions,
  propFlex,
  propGap,
  propWidth,
  propRight,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const stayDetailsStyle: CSS.Properties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const vectorIconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.hotelCard1}>
        <div className={styles.hotelCard}>
          <img
            className={styles.matterhornSuitesImage}
            alt=""
            src={accommodationDetails}
          />
          <div className={styles.stayDetails} style={stayDetailsStyle}>
            <div className={styles.stayDetailsRows}>
              <div className={styles.entireBungalow}>{accommodationType}</div>
              <b className={styles.matterhornSuites}>{accommodationName}</b>
              <div className={styles.night}>{accommodationPrice}</div>
            </div>
            <img
              className={styles.videoIcon}
              alt=""
              src="/video.svg"
              onClick={openMatterhornPopup}
            />
          </div>
          <div className={styles.rating}>
            <div className={styles.reviews}>{accommodationReviews}</div>
            <div className={styles.parent}>
              <div className={styles.div}>{accommodationRating}</div>
              <img
                className={styles.vectorIcon}
                alt=""
                src={accommodationDimensions}
                style={vectorIconStyle}
              />
            </div>
          </div>
          <button className={styles.moreDetailsButton}>
            <div className={styles.button}>More details</div>
          </button>
        </div>
      </div>
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default HotelCardContainer;
