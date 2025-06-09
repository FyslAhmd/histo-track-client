import React from "react";
import { useLoaderData } from "react-router";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import axios from "axios";
import { use } from "react";
import AuthContext from "../provider/AuthContext";
import LoadingThreeDotsJumping from "../Components/LoadingThreeDotsJumping";

const ArtifactDetails = () => {
  const artifact = useLoaderData();
  const { user } = use(AuthContext);
  const userEmail = user?.email;

  const {
    _id,
    ArtifactImage,
    ArtifactName,
    CreatedAt,
    DiscoveredAt,
    DiscoveredBy,
    HistoricalContext,
    PresentLocation,
    artifactType,
    description,
    displayName,
    email,
    totalLiked,
    likedBy = [],
  } = artifact;

  const [likes, setLikes] = useState(false);
  const [liked, setLiked] = useState(totalLiked);

  useEffect(() => {
    if (!user) return <LoadingThreeDotsJumping></LoadingThreeDotsJumping>;
    window.scrollTo(0, 0);
    if (likedBy.includes(userEmail)) {
      setLikes(true);
    }
  }, [likedBy, userEmail]);

  const handleLike = async () => {
    await axios
      .patch(`http://localhost:5000/artifact/${_id}`, {
        userEmail,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          setLikes(!likes);
          setLiked(likes ? liked - 1 : liked + 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="my-6">
      <motion.div className="bg-white shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2 gap-8">
        <div className="h-full">
          <img
            src={ArtifactImage}
            alt={ArtifactName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">{ArtifactName}</h1>
            <motion.button
              onClick={handleLike}
              className="px-5 py-2 rounded-md cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              {likes ? <AiFillDislike size={28} /> : <AiFillLike size={28} />}
            </motion.button>
          </div>
          <p className="text-gray-600">{description}</p>

          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div>
              <p className="font-semibold text-gray-700">Artifact Type</p>
              <p>{artifactType}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Created</p>
              <p>{CreatedAt}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Discovered</p>
              <p>{DiscoveredAt}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Discovered By</p>
              <p>{DiscoveredBy}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Location</p>
              <p>{PresentLocation}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Total Likes</p>
              <p>{liked}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-gray-700">Historical Context</p>
            <p className="text-gray-600">{HistoricalContext}</p>
          </div>

          <div className="mt-6 border-t pt-4 text-sm">
            <p className="font-medium text-gray-700">Added by: {displayName}</p>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtifactDetails;
