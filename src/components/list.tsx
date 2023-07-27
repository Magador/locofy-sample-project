import { FunctionComponent } from "react";
import IconFalseHoverFalseDisab from "./icon-false-hover-false-disab";
import ContentTypeTextOnlyState from "./content-type-text-only-state";
import styles from "./list.module.css";
const List: FunctionComponent = () => {
  return (
    <div className={styles.list}>
      <IconFalseHoverFalseDisab
        option="Singapore - Changi (LAX)"
        iconFalseHoverFalseDisabPosition="unset"
        iconFalseHoverFalseDisabWidth="347px"
        iconFalseHoverFalseDisabAlignSelf="unset"
        iconFalseHoverFalseDisabHeight="36px"
      />
      <ContentTypeTextOnlyState
        option1="Ninoy Aquiono International Airport (NAIA"
        contentTypeTextOnlyStatePosition="unset"
        contentTypeTextOnlyStateAlignSelf="stretch"
      />
      <IconFalseHoverFalseDisab
        option="Mactan International Airport (MIA)"
        iconFalseHoverFalseDisabPosition="unset"
        iconFalseHoverFalseDisabWidth="unset"
        iconFalseHoverFalseDisabAlignSelf="stretch"
        iconFalseHoverFalseDisabHeight="unset"
      />
      <IconFalseHoverFalseDisab
        option="Clark International Airport (CIA)"
        iconFalseHoverFalseDisabPosition="unset"
        iconFalseHoverFalseDisabWidth="unset"
        iconFalseHoverFalseDisabAlignSelf="stretch"
        iconFalseHoverFalseDisabHeight="unset"
      />
      <IconFalseHoverFalseDisab
        option="Charles de Gaulle Airport (CGA)"
        iconFalseHoverFalseDisabPosition="unset"
        iconFalseHoverFalseDisabWidth="347px"
        iconFalseHoverFalseDisabAlignSelf="unset"
        iconFalseHoverFalseDisabHeight="unset"
      />
    </div>
  );
};

export default List;
