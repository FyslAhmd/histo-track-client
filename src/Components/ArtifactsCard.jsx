import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ArtifactsCard = ({ artifact }) => {
  const {
    _id,
    ArtifactImage,
    ArtifactName,
    description,
    artifactType,
    DiscoveredBy,
    PresentLocation,
    totalLiked,
  } = artifact;

  return (
    <motion.div className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <figure className="overflow-hidden">
        <motion.img
          src={ArtifactImage}
          alt="Artifact"
          className="w-full h-40 object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </figure>

      <div className="card-body p-4 space-y-1">
        <h2 className="text-xl font-semibold text-gray-800">{ArtifactName}</h2>
        <p className="text-gray-600 text-sm">{description?.slice(0, 150)}...</p>

        <div className="card-actions mt-4 flex justify-between items-center w-full">
          <span className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-md">
            {totalLiked} Liked
          </span>
          <Link to={`/artifactsDetails/${_id}`}>
            <button className="btn bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-md">
              Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtifactsCard;
