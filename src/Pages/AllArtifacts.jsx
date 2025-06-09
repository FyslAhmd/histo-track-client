import axios from "axios";
import React, { useEffect, useState } from "react";
import ArtifactsCard from "../Components/ArtifactsCard";
import LoadingThreeDotsJumping from "../Components/LoadingThreeDotsJumping";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get("http://localhost:5000/allArtifacts")
      .then((res) => {
        setArtifacts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  if (loading) return <LoadingThreeDotsJumping></LoadingThreeDotsJumping>;
  return (
    <div>
      <h1 className="text-3xl font-bold text-center underline my-4">
        All Artifacts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
