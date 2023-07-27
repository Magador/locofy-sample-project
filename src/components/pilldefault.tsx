import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./pilldefault.module.css";

type PilldefaultType = {
  beds?: string;

  /** Style props */
  pilldefaultPosition?: Property.Position;
  pilldefaultBackgroundColor?: Property.BackgroundColor;
  bedsColor?: Property.Color;
};

const Pilldefault: FunctionComponent<PilldefaultType> = ({
  beds,
  pilldefaultPosition,
  pilldefaultBackgroundColor,
  bedsColor,
}) => {
  const pilldefaultStyle: CSS.Properties = useMemo(() => {
    return {
      position: pilldefaultPosition,
      backgroundColor: pilldefaultBackgroundColor,
    };
  }, [pilldefaultPosition, pilldefaultBackgroundColor]);

  const bedsStyle: CSS.Properties = useMemo(() => {
    return {
      color: bedsColor,
    };
  }, [bedsColor]);

  return (
    <div className={styles.pilldefault} style={pilldefaultStyle}>
      <div className={styles.beds} style={bedsStyle}>
        {beds}
      </div>
    </div>
  );
};

export default Pilldefault;
