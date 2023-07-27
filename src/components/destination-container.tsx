import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./destination-container.module.css";

type DestinationContainerType = {
  destinationPrice?: string;
  destinationName?: string;
  destinationPriceRange?: string;

  /** Style props */
  propWidth?: Property.Width;
  propDisplay?: Property.Display;
  propWidth1?: Property.Width;
  propLeft?: Property.Left;
};

const DestinationContainer: FunctionComponent<DestinationContainerType> = ({
  destinationPrice,
  destinationName,
  destinationPriceRange,
  propWidth,
  propDisplay,
  propWidth1,
  propLeft,
}) => {
  const detailsStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const divStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
      width: propWidth1,
    };
  }, [propDisplay, propWidth1]);

  const fromStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <button className={styles.col1}>
      <div className={styles.pariscard}>
        <img className={styles.parisimageIcon} alt="" src={destinationPrice} />
        <div className={styles.destinationDetails}>
          <b className={styles.paris}>{destinationName}</b>
          <div className={styles.details} style={detailsStyle}>
            <div className={styles.div} style={divStyle}>
              {destinationPriceRange}
            </div>
            <div className={styles.from} style={fromStyle}>
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DestinationContainer;
