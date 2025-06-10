import axios from "axios";
import React, { useEffect, useState } from "react";
import ArtifactsCard from "../Components/ArtifactsCard";
import LoadingThreeDotsJumping from "../Components/LoadingThreeDotsJumping";
import { FaSearch } from "react-icons/fa";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [filteredArtifacts, setFilteredArtifacts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "HistoTrack | All Artifacts";

    axios
      .get("https://histotrack.vercel.app/allArtifacts")
      .then((res) => {
        setArtifacts(res.data);
        setFilteredArtifacts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = artifacts.filter((artifact) =>
      artifact.ArtifactName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredArtifacts(filtered);
  }, [searchText, artifacts]);

  if (loading) return <LoadingThreeDotsJumping />;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center my-4">
        <div></div>
        <h1 className="text-3xl font-bold underline text-center">
          All Artifacts
        </h1>
        <div className="flex justify-end">
          <div className="flex items-center border rounded-full w-64 px-3">
            <FaSearch className="mr-2" size={20} />
            <input
              type="text"
              placeholder="Search artifacts by name..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="h-8 w-full outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtifacts.length > 0 ? (
          filteredArtifacts.map((artifact) => (
            <ArtifactsCard key={artifact._id} artifact={artifact} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No artifacts found for "{searchText}"
          </p>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;
