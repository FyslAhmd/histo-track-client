import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import LoadingThreeDotsJumping from "../Components/LoadingThreeDotsJumping";
import { use } from "react";
import AuthContext from "../provider/AuthContext";
import Swal from "sweetalert2";

const MyArtifacts = () => {
  const { user } = use(AuthContext);
  const [myArtifacts, setMyArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HistoTrack | My Artifacts";
    const fetchMyArtifacts = async () => {
      if (user?.email) {
        const idToken = await user.getIdToken();
        await axios
          .get(
            `https://histotrack.vercel.app/myArtifacts?email=${user?.email}`,
            {
              headers: {
                authorization: `Bearer ${idToken}`,
              },
            }
          )
          .then((res) => {
            setMyArtifacts(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.error(err);
            setLoading(false);
          });
      }
    };
    fetchMyArtifacts();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://histotrack.vercel.app/allArtifacts/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Artifact has been deleted.",
                icon: "success",
              });
              const remainingArtifacts = myArtifacts.filter(
                (artifact) => artifact._id !== id
              );
              setMyArtifacts(remainingArtifacts);
              navigate("/allArtifacts");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  if (loading) return <LoadingThreeDotsJumping />;

  return (
    <div className="overflow-x-auto text-base-content px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">My Artifacts</h2>

      {myArtifacts.length === 0 ? (
        <div className="text-center text-gray-600 mt-10">
          <p className="text-xl font-semibold">No artifacts added yet.</p>
          <p className="text-gray-500 mt-2">
            Start contributing by adding artifacts!
          </p>
        </div>
      ) : (
        <>
          <div className="hidden md:block">
            <table className="table w-full">
              <thead>
                <tr className="text-lg bg-base-200 text-base-content">
                  <th>Artifact Name</th>
                  <th>Type</th>
                  <th>Discovered At</th>
                  <th>Location</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myArtifacts.map((artifact) => (
                  <tr key={artifact._id}>
                    <td className="font-semibold">{artifact.ArtifactName}</td>
                    <td>{artifact.artifactType}</td>
                    <td>{artifact.DiscoveredAt}</td>
                    <td>{artifact.PresentLocation}</td>
                    <td className="text-center space-x-2">
                      <Link to={`/updateArtifact/${artifact._id}`}>
                        <button className="btn btn-sm bg-green-700 text-white font-bold">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(artifact._id)}
                        className="btn btn-sm bg-red-700 text-white font-bold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {myArtifacts.map((artifact) => (
              <div
                key={artifact._id}
                className="bg-base-200 p-4 rounded shadow text-base-content"
              >
                <p>
                  <span className="font-bold">Name:</span>{" "}
                  {artifact.ArtifactName}
                </p>
                <p>
                  <span className="font-bold">Type:</span>{" "}
                  {artifact.artifactType}
                </p>
                <p>
                  <span className="font-bold">Discovered At:</span>{" "}
                  {artifact.DiscoveredAt}
                </p>
                <p>
                  <span className="font-bold">Location:</span>{" "}
                  {artifact.PresentLocation}
                </p>
                <div className="mt-2 space-x-2">
                  <Link to={`/updateArtifact/${artifact._id}`}>
                    <button className="btn btn-sm bg-green-700 text-white font-bold">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(artifact._id)}
                    className="btn btn-sm bg-red-700 text-white font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyArtifacts;
