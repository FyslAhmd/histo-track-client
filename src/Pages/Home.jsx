import React, { useEffect } from "react";
import HomeSlider from "../Components/HomeSlider";
import FeaturedArtifacts from "../Components/FeaturedArtifacts";
import ArtifactsOfTheDay from "../Components/ArtifactsOfTheDay";
import ArtifactStats from "../Components/ArtifactStats";
import Newsletter from "../Components/Newsletter";

const Home = () => {
  useEffect(() => {
    document.title = "HistoTrack | Home";
  }, []);
  return (
    <div>
      <HomeSlider></HomeSlider>
      <FeaturedArtifacts></FeaturedArtifacts>
      <ArtifactsOfTheDay></ArtifactsOfTheDay>
      <ArtifactStats></ArtifactStats>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
