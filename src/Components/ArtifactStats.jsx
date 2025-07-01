import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import artifactIcon from "../assets/service1.png";
import userIcon from "../assets/service2.webp";
import likeIcon from "../assets/service3.png";
import locationIcon from "../assets/service4.png";

const ArtifactStats = () => {
  return (
    <motion.section
      className="mb-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl text-center font-bold mt-20 mb-2">
        Platform Statistics
      </h2>
      <p className="text-gray-600 font-medium text-center mb-8">
        HistoTrack is growing every day with amazing artifacts and passionate
        users.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center gap-2 bg-base-200 p-5 rounded-xl shadow">
          <img src={artifactIcon} alt="Artifacts" className="w-12 h-12" />
          <h3 className="text-2xl font-bold">
            <CountUp end={280} duration={5} enableScrollSpy />+
          </h3>
          <p className="text-gray-600 text-sm">Total Artifacts</p>
        </div>

        <div className="flex flex-col items-center gap-2 bg-base-200 p-5 rounded-xl shadow">
          <img src={userIcon} alt="Users" className="w-12 h-12" />
          <h3 className="text-2xl font-bold">
            <CountUp end={120} duration={5} enableScrollSpy />+
          </h3>
          <p className="text-gray-600 text-sm">Registered Users</p>
        </div>

        <div className="flex flex-col items-center gap-2 bg-base-200 p-5 rounded-xl shadow">
          <img src={likeIcon} alt="Likes" className="w-12 h-12" />
          <h3 className="text-2xl font-bold">
            <CountUp end={750} duration={5} enableScrollSpy />+
          </h3>
          <p className="text-gray-600 text-sm">Total Likes</p>
        </div>

        <div className="flex flex-col items-center gap-2 bg-base-200 p-5 rounded-xl shadow">
          <img src={locationIcon} alt="Locations" className="w-12 h-12" />
          <h3 className="text-2xl font-bold">
            <CountUp end={36} duration={5} enableScrollSpy />+
          </h3>
          <p className="text-gray-600 text-sm">Countries Represented</p>
        </div>
      </div>
    </motion.section>
  );
};

export default ArtifactStats;
