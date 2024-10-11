import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InputField from "../../components/InputField";
import { addTeam } from "../../../api";
import { useNavigate } from "react-router-dom";

const MAX_FILE_SIZE = 500 * 1024;

const validateFileSize = (file) => {
  if (file && file.size > MAX_FILE_SIZE) {
    return false;
  }
  return true;
};

export default function TeamForm() {
  const [teamData, setTeamData] = useState({
    team_name: "",
    village: "",
    sponser_1: "",
    sponser_2: "",
    captain: "",
    mobile: "",
    logo: null,
  });

  const [players, setPlayers] = useState(
    Array(14)
      .fill()
      .map(() => ({
        name: "",
        adhar: "",
        village: "",
        role: "Batsman",
        image: null,
      }))
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (!validateFileSize(file)) {
      toast.error("Image size should be less than 500 KB", {
        position: "top-center",
        autoClose: 3000,
      });
      e.target.value = ""; // Clear the file input
      return;
    }
    setTeamData((prev) => ({ ...prev, [field]: file }));
  };

  const handlePlayerChange = (index, field, value) => {
    if (field === "image") {
      const file = value;
      if (!validateFileSize(file)) {
        toast.error(
          `Player ${index + 1} image size should be less than 500 KB`,
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
        return;
      }
    }
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      updatedPlayers[index] = { ...updatedPlayers[index], [field]: value };
      return updatedPlayers;
    });
  };

  const validateForm = () => {
    // Check if all team data fields are filled
    const isTeamDataFilled = Object.values(teamData).every(
      (value) => value !== "" && value !== null
    );

    // Check if all player information is filled
    const isAllPlayersFilled = players.every(
      (player) => player.name && player.adhar && player.village && player.image
    );

    return isTeamDataFilled && isAllPlayersFilled;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all fields for the team and players", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    setIsSubmitting(true);
    const loadingToastId = toast.loading("Submitting team data...", {
      position: "top-center",
    });

    const formData = new FormData();

    // Append team data
    Object.entries(teamData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append player data
    players.forEach((player, index) => {
      formData.append(`player${index + 1}`, JSON.stringify(player));
      if (player.image) {
        formData.append(`player${index + 1}Image`, player.image);
      }
    });

    try {
      // const response = await fetch("http://localhost:4000/addteam", {
      //   method: "POST",
      //   body: formData,
      // });
      const response = await addTeam(formData);

      // if (!response.ok) {
      //   throw new Error("Failed to create team");
      // }

      toast.dismiss(loadingToastId);
      navigate("/team");
      setTimeout(() => {
        toast.success("Team created successfully!", {
          position: "top-center",
          autoClose: 3000,
        });
      }, 100);
    } catch (error) {
      console.error("Error creating team:", error);
      toast.dismiss(loadingToastId);
      toast.error("Failed to create team.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-indigo-600 text-white py-4 px-6">
            <h1 className="text-2xl font-bold">Add Team</h1>
          </div>
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <InputField
                label="Team Name"
                name="team_name"
                value={teamData.team_name}
                onChange={handleChange}
              />
              <InputField
                label="Village"
                name="village"
                value={teamData.village}
                onChange={handleChange}
              />
              <InputField
                label="Sponsor 1"
                name="sponser_1"
                value={teamData.sponser_1}
                onChange={handleChange}
              />
              <InputField
                label="Sponsor 2"
                name="sponser_2"
                value={teamData.sponser_2}
                onChange={handleChange}
              />
              <InputField
                label="Captain"
                name="captain"
                value={teamData.captain}
                onChange={handleChange}
              />
              <InputField
                label="Mobile"
                name="mobile"
                value={teamData.mobile}
                onChange={handleChange}
              />
              <InputField
                label="Team Logo (max 500 KB)"
                name="logo"
                type="file"
                onChange={(e) => handleFileChange(e, "logo")}
              />
            </div>

            <h2 className="text-xl font-semibold mb-4">Player Information</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Aadhar</th>
                    <th className="px-4 py-2">Village</th>
                    <th className="px-4 py-2">Role</th>
                    <th className="px-4 py-2">Image</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-4 py-2">
                        <InputField
                          label={`Player ${index + 1} Name`}
                          name={`player${index + 1}Name`}
                          value={player.name}
                          onChange={(e) =>
                            handlePlayerChange(index, "name", e.target.value)
                          }
                        />
                      </td>
                      <td className="px-4 py-2">
                        <InputField
                          label={`Player ${index + 1} Aadhar`}
                          name={`player${index + 1}Adhar`}
                          value={player.adhar}
                          onChange={(e) =>
                            handlePlayerChange(index, "adhar", e.target.value)
                          }
                        />
                      </td>
                      <td className="px-4 py-2">
                        <InputField
                          label={`Player ${index + 1} Village`}
                          name={`player${index + 1}Village`}
                          value={player.village}
                          onChange={(e) =>
                            handlePlayerChange(index, "village", e.target.value)
                          }
                        />
                      </td>
                      <td className="px-4 py-2">
                        <select
                          value={player.role}
                          onChange={(e) =>
                            handlePlayerChange(index, "role", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="Batsman">Batsman</option>
                          <option value="WK/Batsman">WK/Batsman</option>
                          <option value="Bowler">Bowler</option>
                          <option value="All Rounder">All Rounder</option>
                        </select>
                      </td>
                      <td className="px-4 py-2">
                        <InputField
                          label={`Player ${index + 1} Image (max 500 KB)`}
                          name={`player${index + 1}Image`}
                          type="file"
                          onChange={(e) =>
                            handlePlayerChange(
                              index,
                              "image",
                              e.target.files[0]
                            )
                          }
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Team"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Toaster />
      <Footer />
    </>
  );
}
