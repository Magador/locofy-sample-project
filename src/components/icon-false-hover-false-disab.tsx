import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./icon-false-hover-false-disab.module.css";

type IconFalseHoverFalseDisabType = {
  option?: string;

  /** Style props */
  iconFalseHoverFalseDisabPosition?: Property.Position;
  iconFalseHoverFalseDisabWidth?: Property.Width;
  iconFalseHoverFalseDisabAlignSelf?: Property.AlignSelf;
  iconFalseHoverFalseDisabHeight?: Property.Height;
};

const IconFalseHoverFalseDisab: FunctionComponent<
  IconFalseHoverFalseDisabType
> = ({
  option,
  iconFalseHoverFalseDisabPosition,
  iconFalseHoverFalseDisabWidth,
  iconFalseHoverFalseDisabAlignSelf,
  iconFalseHoverFalseDisabHeight,
}) => {
  const iconFalseHoverFalseDisabStyle: CSS.Properties = useMemo(() => {
    return {
      position: iconFalseHoverFalseDisabPosition,
      width: iconFalseHoverFalseDisabWidth,
      alignSelf: iconFalseHoverFalseDisabAlignSelf,
      height: iconFalseHoverFalseDisabHeight,
    };
  }, [
    iconFalseHoverFalseDisabPosition,
    iconFalseHoverFalseDisabWidth,
    iconFalseHoverFalseDisabAlignSelf,
    iconFalseHoverFalseDisabHeight,
  ]);

  return (
    <div
      className={styles.iconfalseHoverfalseDisab}
      style={iconFalseHoverFalseDisabStyle}
    >
      <div className={styles.option}>{option}</div>
    </div>
  );
};

export default IconFalseHoverFalseDisab;
