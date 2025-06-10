import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ArtifactsCard from "../Components/ArtifactsCard";
import { use } from "react";
import AuthContext from "../provider/AuthContext";
import LoadingThreeDotsJumping from "../Components/LoadingThreeDotsJumping";

const LikedArtifacts = () => {
  const { user } = use(AuthContext);
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "HistoTrack | Liked Artifacts";
    if (user?.email) {
      axios
        .get(`http://localhost:5000/liked-artifacts?email=${user.email}`)
        .then((res) => {
          setLikedArtifacts(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) return <LoadingThreeDotsJumping></LoadingThreeDotsJumping>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Liked Artifacts</h2>

      {likedArtifacts.length === 0 ? (
        <motion.div
          className="text-center text-gray-600 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xl font-semibold">
            You haven't liked any artifacts yet.
          </p>
          <p className="text-gray-500 mt-2">
            Start exploring and click the like button on your favorite
            artifacts!
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {likedArtifacts.map((artifact) => (
            <ArtifactsCard
              key={artifact._id}
              artifact={artifact}
            ></ArtifactsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedArtifacts;
