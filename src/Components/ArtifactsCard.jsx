import React from "react";
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
  } = artifact;

  return (
    <div className="card bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <figure className="overflow-hidden">
        <img
          src={ArtifactImage}
          alt="Artifact"
          className="w-full h-50 object-cover"
        />
      </figure>

      <div className="card-body p-4 space-y-1">
        <h2 className="text-xl font-semibold text-gray-800">{ArtifactName}</h2>
        <p className="text-gray-600 text-sm">{description?.slice(0, 150)}...</p>

        <div className="text-sm text-gray-700">
          <p>
            <span className="font-medium">Type:</span> {artifactType}
          </p>
          <p>
            <span className="font-medium">Discovered By:</span> {DiscoveredBy}
          </p>
          <p>
            <span className="font-medium">Location:</span> {PresentLocation}
          </p>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/artifactsDetails/${_id}`}>
            <button className="btn bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-md">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactsCard;
