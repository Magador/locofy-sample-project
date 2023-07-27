import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./variant-contained-size-large.module.css";

type VariantContainedSizeLargeType = {
  button?: string;

  /** Style props */
  variantContainedSizeLargePosition?: Property.Position;
  variantContainedSizeLargeBoxSizing?: Property.BoxSizing;
  buttonLineHeight?: Property.LineHeight;
  buttonColor?: Property.Color;
  buttonDisplay?: Property.Display;
};

const VariantContainedSizeLarge: FunctionComponent<
  VariantContainedSizeLargeType
> = ({
  button,
  variantContainedSizeLargePosition,
  variantContainedSizeLargeBoxSizing,
  buttonLineHeight,
  buttonColor,
  buttonDisplay,
}) => {
  const variantContainedSizeLargeStyle: CSS.Properties = useMemo(() => {
    return {
      position: variantContainedSizeLargePosition,
      boxSizing: variantContainedSizeLargeBoxSizing,
    };
  }, [variantContainedSizeLargePosition, variantContainedSizeLargeBoxSizing]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      lineHeight: buttonLineHeight,
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonLineHeight, buttonColor, buttonDisplay]);

  return (
    <div
      className={styles.variantcontainedSizelarge}
      style={variantContainedSizeLargeStyle}
    >
      <div className={styles.button} style={buttonStyle}>
        {button}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;
