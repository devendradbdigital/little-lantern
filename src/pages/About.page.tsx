import React from "react";
import styles from "./AboutPage.module.scss"; // SCSS for styling
import TopTitleImageComponent from "../components/Aboutpage/TopTitleImage.component";
import MissionPhilosophyComponent from "../components/Aboutpage/MissionPhilosophy.component";
import TheLanternDifferenceComponent from "../components/Aboutpage/TheLanternDifference.component";
import OurFounderComponent from "../components/Aboutpage/OurFounder.component";

const AboutPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <TopTitleImageComponent />
      <MissionPhilosophyComponent />
      <TheLanternDifferenceComponent />
      <OurFounderComponent />
    </div>
  );
};

export default AboutPage;
