import { FunctionComponent } from "react";
import HeroContainer from "../components/hero-container";
import RecentSearchesContainer from "../components/recent-searches-container";
import PopularDestinationsContainer from "../components/popular-destinations-container";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStaysContainer from "../components/popular-stays-container";
import FormContainer from "../components/form-container";
import styles from "./homepage.module.css";
const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <HeroContainer />
      <div className={styles.homeContents}>
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <FormContainer
        imageDimensions="/subscribe-section-background@2x.png"
        carDimensions="/logo.svg"
        imageDimensionsText="/social-icons.svg"
      />
    </div>
  );
};

export default Homepage;
