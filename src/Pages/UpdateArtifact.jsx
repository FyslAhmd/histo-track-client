import axios from "axios";
import React, { useEffect } from "react";
import { useLoaderData } from "react-router";

const UpdateArtifact = () => {
  const artifact = useLoaderData();

  useEffect(() => {
    document.title = "HistoTrack | Update Artifact";
  }, []);
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
  } = artifact;

  const handleUpdateArtifact = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInfo = Object.fromEntries(formData.entries());
    const artifactsData = { ...formInfo, totalLiked };

    //store to db
    axios
      .patch(`https://histotrack.vercel.app/updateArtifact/${_id}`, artifactsData)
      .then((res) => {
        if (res.data.modifiedCount) {
          console.log("updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-center text-base-content font-bold my-5">
        Update Artifacts
      </h1>
      <form
        onSubmit={handleUpdateArtifact}
        className="w-full p-4 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="text-xl">Artifact Name</label>
          <br />
          <input
            type="text"
            name="ArtifactName"
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="Enter Artifact Name"
            defaultValue={ArtifactName}
            required
          />
        </div>

        <div>
          <label className=" text-xl">Artifact Image</label>
          <br />
          <input
            type="url"
            name="ArtifactImage"
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="Enter Image URL"
            defaultValue={ArtifactImage}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="artifactType" className="text-xl block mb-2">
            Artifact Type
          </label>
          <input
            type="text"
            name="artifactType"
            id="artifactType"
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="Select or enter artifact type"
            list="artifactTypes"
            defaultValue={artifactType}
            required
          />
          <datalist id="artifactTypes">
            <option value="Tools" />
            <option value="Weapons" />
            <option value="Documents" />
            <option value="Writings" />
            <option value="Jewelry" />
          </datalist>
        </div>

        <div>
          <label className=" text-xl">Historical Context</label>
          <br />
          <input
            type="text"
            name="HistoricalContext"
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="Enter Historical Context"
            defaultValue={HistoricalContext}
            required
          />
        </div>

        <div>
          <label className=" text-xl ">Description</label>
          <br />
          <textarea
            className="h-12 w-full md:w-5/6 border rounded-lg p-2 text-lg"
            placeholder="Description"
            name="description"
            defaultValue={description}
            required
          ></textarea>
        </div>

        <div>
          <label className=" text-xl ">Created At</label>
          <br />
          <input
            type="text"
            name="CreatedAt"
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="e.g., 100 BC"
            defaultValue={CreatedAt}
            required
          />
        </div>

        <div>
          <label className=" text-xl ">Discovered At</label>
          <br />
          <input
            type="text"
            name="DiscoveredAt"
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="e.g., 1799"
            defaultValue={DiscoveredAt}
            required
          />
        </div>

        <div>
          <label className="text-xl">Discovered By</label>
          <br />
          <input
            type="text"
            name="DiscoveredBy"
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="Enter Discovered Person Name"
            defaultValue={DiscoveredBy}
            required
          />
        </div>

        <div>
          <label className="text-xl">Present Location</label>
          <br />
          <input
            type="text"
            name="PresentLocation"
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="Enter Present Location"
            defaultValue={PresentLocation}
            required
          />
        </div>

        <div>
          <label className=" text-xl ">Name</label>
          <br />
          <input
            type="text"
            name="name"
            defaultValue={displayName}
            readOnly
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="Name"
          />
        </div>

        <div>
          <label className=" text-xl ">Email</label>
          <br />
          <input
            type="email"
            name="email"
            defaultValue={email}
            readOnly
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="Email"
          />
        </div>

        <button className="btn btn-neutral text-lg py-6 md:col-span-2 mx-auto mt-4">
          Update Artifacts
        </button>
      </form>
    </div>
  );
};

export default UpdateArtifact;
