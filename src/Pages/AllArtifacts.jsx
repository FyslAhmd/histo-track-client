import axios from "axios";
import React, { useEffect, useState } from "react";
import ArtifactsCard from "../Components/ArtifactsCard";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
  if (loading)
    return <h1 className="text-5xl font-bold text-center my-10">Loading...</h1>;
  return (
    <div>
      <h1>All Artifacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact) => (
          <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
