import { FunctionComponent, useState, useCallback } from "react";
import MatterhornPopup from "./matterhorn-popup";
import PortalPopup from "./portal-popup";
import PrimaryButton from "./primary-button";
import styles from "./results-wrapper.module.css";

type ResultsWrapperType = {
  roomTypeImageUrl?: string;
  roomTypeName?: string;
  hotelName?: string;
  roomPrice?: string;
  roomSize?: string;
};

const ResultsWrapper: FunctionComponent<ResultsWrapperType> = ({
  roomTypeImageUrl,
  roomTypeName,
  hotelName,
  roomPrice,
  roomSize,
}) => {
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.resultsCard}>
        <img
          className={styles.resultsImageIcon}
          alt=""
          src={roomTypeImageUrl}
        />
        <div className={styles.resultsDetails}>
          <div className={styles.resultsTitle}>
            <div className={styles.resultAndVideo}>
              <div className={styles.kingBedStandard}>{roomTypeName}</div>
              <b className={styles.holidayInnExpre}>{hotelName}</b>
              <div className={styles.review}>
                <div className={styles.reviews}>(1,136 reviews)</div>
                <div className={styles.stars}>
                  <div className={styles.div}>4.7</div>
                  <img className={styles.vectorIcon} alt="" src={roomPrice} />
                </div>
              </div>
            </div>
            <img
              className={styles.videoIcon}
              alt=""
              src={roomSize}
              onClick={openMatterhornPopup}
            />
          </div>
          <div className={styles.priceAndCta}>
            <div className={styles.pricing}>
              <b className={styles.s286}>$S 286</b>
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
      {isMatterhornPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMatterhornPopup}
        >
          <MatterhornPopup onClose={closeMatterhornPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ResultsWrapper;
