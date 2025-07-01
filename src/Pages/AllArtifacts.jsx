import axios from "axios";
import React, { useEffect, useState } from "react";
import ArtifactsCard from "../Components/ArtifactsCard";
import LoadingThreeDotsJumping from "../Components/LoadingThreeDotsJumping";
import { FaSearch } from "react-icons/fa";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [filteredArtifacts, setFilteredArtifacts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);

  // Load data when component mounts or sortOption changes
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "HistoTrack | All Artifacts";

    setLoading(true);
    axios
      .get(`https://histotrack.vercel.app/allArtifacts?sort=${sortOption}`)
      .then((res) => {
        setArtifacts(res.data);
        setFilteredArtifacts(res.data); // will be filtered by searchText later
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [sortOption]);

  // Filter artifacts by search text
  useEffect(() => {
    const filtered = artifacts.filter((artifact) =>
      artifact.ArtifactName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredArtifacts(filtered);
  }, [searchText, artifacts]);

  if (loading) return <LoadingThreeDotsJumping />;

  return (
    <div className="px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 my-6">
        <div className="w-full lg:w-1/4 relative">
          <FaSearch className="absolute top-3 left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-full outline-none focus:border-green-600 transition-all"
          />
        </div>

        <div className="w-full lg:w-1/4">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full border rounded-full px-4 py-2 outline-none focus:border-green-600"
          >
            <option value="">Sort by</option>
            <option value="name-asc">Name (A → Z)</option>
            <option value="name-desc">Name (Z → A)</option>
            <option value="likes-desc">Likes (High → Low)</option>
            <option value="likes-asc">Likes (Low → High)</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
