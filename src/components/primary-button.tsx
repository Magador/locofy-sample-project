import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./primary-button.module.css";

type PrimaryButtonType = {
  searchFlights?: string;

  /** Style props */
  primaryButtonPosition?: Property.Position;
  primaryButtonWidth?: Property.Width;
  primaryButtonHeight?: Property.Height;
  primaryButtonCursor?: Property.Cursor;
  primaryButtonBorder?: Property.Border;
  primaryButtonPadding?: Property.Padding;
  primaryButtonBackgroundColor?: Property.BackgroundColor;
  primaryButtonTop?: Property.Top;
  primaryButtonLeft?: Property.Left;
  rectangleDivBackgroundColor?: Property.BackgroundColor;
  searchFlightsLeft?: Property.Left;
  searchFlightsDisplay?: Property.Display;
};

const PrimaryButton: FunctionComponent<PrimaryButtonType> = ({
  searchFlights,
  primaryButtonPosition,
  primaryButtonWidth,
  primaryButtonHeight,
  primaryButtonCursor,
  primaryButtonBorder,
  primaryButtonPadding,
  primaryButtonBackgroundColor,
  primaryButtonTop,
  primaryButtonLeft,
  rectangleDivBackgroundColor,
  searchFlightsLeft,
  searchFlightsDisplay,
}) => {
  const primaryButtonStyle: CSS.Properties = useMemo(() => {
    return {
      position: primaryButtonPosition,
      width: primaryButtonWidth,
      height: primaryButtonHeight,
      cursor: primaryButtonCursor,
      border: primaryButtonBorder,
      padding: primaryButtonPadding,
      backgroundColor: primaryButtonBackgroundColor,
      top: primaryButtonTop,
      left: primaryButtonLeft,
    };
  }, [
    primaryButtonPosition,
    primaryButtonWidth,
    primaryButtonHeight,
    primaryButtonCursor,
    primaryButtonBorder,
    primaryButtonPadding,
    primaryButtonBackgroundColor,
    primaryButtonTop,
    primaryButtonLeft,
  ]);

  const rectangleDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const searchFlightsStyle: CSS.Properties = useMemo(() => {
    return {
      left: searchFlightsLeft,
      display: searchFlightsDisplay,
    };
  }, [searchFlightsLeft, searchFlightsDisplay]);

  return (
    <div className={styles.primaryButton} style={primaryButtonStyle}>
      <div className={styles.primaryButtonChild} style={rectangleDivStyle} />
      <div className={styles.searchFlights} style={searchFlightsStyle}>
        {searchFlights}
      </div>
    </div>
  );
};

export default PrimaryButton;
