import React, { use, useEffect } from "react";
import AuthContext from "../provider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddArtifacts = () => {
  const { user } = use(AuthContext);
  const { email, displayName } = user;

  useEffect(() => {
    document.title = "HistoTrack | Add Artifact";
  }, []);

  const handleAddArtifact = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formInfo = Object.fromEntries(formData.entries());
    const artifactsData = { ...formInfo, email, displayName, totalLiked: 0 };
    //store to db
    axios
      .post("http://localhost:5000/allArtifacts", artifactsData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Artifact has been Added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-3xl text-center text-base-content font-bold my-5">
        Add Artifacts
      </h1>
      <form
        onSubmit={handleAddArtifact}
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
            required
          />
        </div>

        <div>
          <label className=" text-xl ">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={displayName}
            disabled
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
            value={email}
            disabled
            className="border rounded-lg p-2 text-lg w-full md:w-5/6"
            placeholder="Email"
          />
        </div>

        <button className="btn btn-neutral text-lg py-6 md:col-span-2 mx-auto mt-4">
          Add Artifacts
        </button>
      </form>
    </div>
  );
};

export default AddArtifacts;
