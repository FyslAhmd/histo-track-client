import React from "react";
import HomeSlider from "../Components/HomeSlider";
import FeaturedArtifacts from "../Components/FeaturedArtifacts";
import ArtifactsOfTheDay from "../Components/ArtifactsOfTheDay";
import ArtifactStats from "../Components/ArtifactStats";

const Home = () => {
  return (
    <div>
      <HomeSlider></HomeSlider>
      <FeaturedArtifacts></FeaturedArtifacts>
      <ArtifactsOfTheDay></ArtifactsOfTheDay>
      <ArtifactStats></ArtifactStats>
    </div>
  );
};

export default Home;
