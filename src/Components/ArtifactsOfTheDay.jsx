import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router";

const ArtifactsOfTheDay = () => {
  const [artifact, setArtifact] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/dailyArtifact").then((res) => {
      setArtifact(res.data);
    });
  }, []);

  if (!artifact) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-dots loading-lg text-primary"></span>
      </div>
    );
  }

  const {
    _id,
    ArtifactImage,
    ArtifactName,
    artifactType,
    DiscoveredBy,
    PresentLocation,
    description,
  } = artifact;

  return (
    <section className="">
      <motion.h2
        className="text-3xl font-bold text-center mt-20 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Artifact of the Day
      </motion.h2>

      <motion.div
        className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={ArtifactImage}
          alt={ArtifactName}
          className="w-full h-72 object-cover"
        />

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{ArtifactName}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>
                <strong>Type:</strong> {artifactType}
              </li>
              <li>
                <strong>Discovered By:</strong> {DiscoveredBy || "Unknown"}
              </li>
              <li>
                <strong>Current Location:</strong>{" "}
                {PresentLocation || "Unknown"}
              </li>
            </ul>
          </div>

          <div className="mt-6 text-right">
            <Link to={`/artifactsDetails/${_id}`}>
              <button className="btn bg-black text-white hover:bg-gray-800 transition px-6">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ArtifactsOfTheDay;
