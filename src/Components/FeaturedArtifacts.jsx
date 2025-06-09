import React from "react";
import { Link, useLoaderData } from "react-router";
import ArtifactsCard from "./ArtifactsCard";

const FeaturedArtifacts = () => {
  const topArtifacts = useLoaderData();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center underline my-10">
        Featured Artifacts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topArtifacts.map((artifact) => (
          <ArtifactsCard key={artifact._id} artifact={artifact}></ArtifactsCard>
        ))}
      </div>
      <div className="text-center my-4">
        <Link
          to="/allArtifacts"
          className="btn bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-md"
        >
          <button>See More</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
