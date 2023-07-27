import { FunctionComponent } from "react";
import Header from "../components/header";
import LosAngelesContainer from "../components/los-angeles-container";
import HotelResultsContainer from "../components/hotel-results-container";
import FormContainer from "../components/form-container";
import styles from "./hotels-page.module.css";
const HotelsPage: FunctionComponent = () => {
  return (
    <div className={styles.hotelsPage}>
      <Header />
      <LosAngelesContainer />
      <HotelResultsContainer />
      <FormContainer
        imageDimensions="/newsletter-section-background1@2x.png"
        imageAltText="Placeholder"
        carDimensions="/logo2.svg"
        imageDimensionsText="/social-icons2.svg"
      />
    </div>
  );
};

export default HotelsPage;
