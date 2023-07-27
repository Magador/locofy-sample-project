import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./content-type-text-only-state.module.css";

type ContentTypeTextOnlyStateType = {
  option1?: string;

  /** Style props */
  contentTypeTextOnlyStatePosition?: Property.Position;
  contentTypeTextOnlyStateAlignSelf?: Property.AlignSelf;
};

const ContentTypeTextOnlyState: FunctionComponent<
  ContentTypeTextOnlyStateType
> = ({
  option1,
  contentTypeTextOnlyStatePosition,
  contentTypeTextOnlyStateAlignSelf,
}) => {
  const contentTypeTextOnlyStateStyle: CSS.Properties = useMemo(() => {
    return {
      position: contentTypeTextOnlyStatePosition,
      alignSelf: contentTypeTextOnlyStateAlignSelf,
    };
  }, [contentTypeTextOnlyStatePosition, contentTypeTextOnlyStateAlignSelf]);

  return (
    <div
      className={styles.contentTypetextOnlyState}
      style={contentTypeTextOnlyStateStyle}
    >
      <div className={styles.option1}>{option1}</div>
    </div>
  );
};

export default ContentTypeTextOnlyState;
