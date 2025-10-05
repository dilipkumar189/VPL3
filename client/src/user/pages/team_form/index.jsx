import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InputField from "../../components/InputField";
// import { addTeam } from "../../../api";
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
      const response = await fetch("https://vpl-api.vercel.app/addteam", {
        method: "POST",
        body: formData,
      });
      // const response = await addTeam(formData);

      if (!response.ok) {
        throw new Error("Failed to create team");
      }

      toast.dismiss(loadingToastId);
      toast.success("Team created successfully!", {
        position: "top-center",
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/team");
      }, 1000);
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-600 to-blue-600 py-16">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=80&h=80&fit=crop&crop=center" 
                alt="Cricket" 
                className="w-16 h-16 rounded-full mr-4 border-4 border-white shadow-lg"
              />
              <h1 className="text-4xl font-bold text-white">Team Registration</h1>
            </div>
            <p className="text-xl text-green-100">Register your cricket team for the tournament</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 -mt-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <form onSubmit={handleSubmit} className="p-8">
            {/* Team Information Section */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=40&h=40&fit=crop&crop=center" 
                  alt="Team" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <h2 className="text-2xl font-bold text-gray-800">Team Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
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
            </div>

            {/* Players Section */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=40&h=40&fit=crop&crop=center" 
                  alt="Players" 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <h2 className="text-2xl font-bold text-gray-800">Squad Details</h2>
                <span className="ml-auto bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">14 Players Required</span>
              </div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                        <th className="px-6 py-4 text-left font-semibold">Player</th>
                        <th className="px-6 py-4 text-left font-semibold">Aadhar ID</th>
                        <th className="px-6 py-4 text-left font-semibold">Village</th>
                        <th className="px-6 py-4 text-left font-semibold">Role</th>
                        <th className="px-6 py-4 text-left font-semibold">Photo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {players.map((player, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                                {index + 1}
                              </div>
                              <InputField
                                label={`Player ${index + 1} Name`}
                                name={`player${index + 1}Name`}
                                value={player.name}
                                onChange={(e) =>
                                  handlePlayerChange(index, "name", e.target.value)
                                }
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <InputField
                              label={`Player ${index + 1} Aadhar`}
                              name={`player${index + 1}Adhar`}
                              value={player.adhar}
                              onChange={(e) =>
                                handlePlayerChange(index, "adhar", e.target.value)
                              }
                            />
                          </td>
                          <td className="px-6 py-4">
                            <InputField
                              label={`Player ${index + 1} Village`}
                              name={`player${index + 1}Village`}
                              value={player.village}
                              onChange={(e) =>
                                handlePlayerChange(index, "village", e.target.value)
                              }
                            />
                          </td>
                          <td className="px-6 py-4">
                            <select
                              value={player.role}
                              onChange={(e) =>
                                handlePlayerChange(index, "role", e.target.value)
                              }
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                            >
                              <option value="Batsman">🏏 Batsman</option>
                              <option value="WK/Batsman">🧤 WK/Batsman</option>
                              <option value="Bowler">⚡ Bowler</option>
                              <option value="All Rounder">🌟 All Rounder</option>
                            </select>
                          </td>
                          <td className="px-6 py-4">
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
              </div>
            </div>

            {/* Submit Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=40&h=40&fit=crop&crop=center" 
                    alt="Trophy" 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Ready to register your team?</p>
                    <p className="text-sm text-gray-600">Make sure all information is correct before submitting</p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Registering Team...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      🏆 Register Team
                    </div>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>

      <Toaster />
      <Footer />
    </>
  );
}

// ------------
// import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import InputField from "../../components/InputField";
// import { useNavigate, useLocation } from "react-router-dom";
// import { addTeam } from "../../../api"; // your existing addTeam API

// export default function TeamForm() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const code = location.state?.code; // validated unique code
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     toast.loading("Submitting team data...", { position: "top-center" });

//     try {
//       // gather form data
//       const formData = new FormData(e.target);

//       // append the validated code
//       formData.append("entryCode", code);

//       // call backend API to create team
//       const res = await addTeam(formData);

//       toast.dismiss();
//       toast.success("✅ Team registered successfully!");
//       navigate("/team");
//     } catch (err) {
//       toast.dismiss();
//       toast.error(err.response?.data?.message || "❌ Error submitting team");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       {/* Hero Banner */}
//       <div className="relative w-full h-64 md:h-80 lg:h-96">
//         <img
//           src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1920&auto=format&fit=crop"
//           alt="Cricket Stadium"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple/50 flex items-center justify-center">
//           <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500 bg-clip-text text-transparent drop-shadow-2xl text-center tracking-wider">
//             TEAM REGISTRATION
//           </h1>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
//           <form onSubmit={handleSubmit} className="p-8 space-y-12">
            
//             {/* Team Info */}
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
//                 Team Information
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <InputField label="Team Name" name="team_name" required />
//                 <InputField label="Village" name="village" required />
//                 <InputField label="Sponsor 1" name="sponser_1" />
//                 <InputField label="Sponsor 2" name="sponser_2" />
//                 <InputField label="Captain" name="captain" required />
//                 <InputField label="Mobile" name="mobile" required />
//                 <InputField type="file" label="Team Logo (max 500 KB)" name="logo" />
//               </div>
//             </div>

//             {/* Players Info */}
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6 flex items-center justify-between">
//                 Squad Details
//                 <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
//                   14 Players Required
//                 </span>
//               </h2>

//               <div className="overflow-x-auto rounded-xl border border-gray-200">
//                 <table className="w-full text-sm">
//                   <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
//                     <tr>
//                       <th className="px-6 py-4 text-left">#</th>
//                       <th className="px-6 py-4 text-left">Name</th>
//                       <th className="px-6 py-4 text-left">Aadhar</th>
//                       <th className="px-6 py-4 text-left">Village</th>
//                       <th className="px-6 py-4 text-left">Role</th>
//                       <th className="px-6 py-4 text-left">Photo</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {Array(14)
//                       .fill()
//                       .map((_, i) => (
//                         <tr
//                           key={i}
//                           className="even:bg-gray-50 hover:bg-gray-100 transition"
//                         >
//                           <td className="px-6 py-3 font-medium">{i + 1}</td>
//                           <td className="px-6 py-3">
//                             <InputField
//                               name={`player${i + 1}_name`}
//                               placeholder="Player Name"
//                               required
//                             />
//                           </td>
//                           <td className="px-6 py-3">
//                             <InputField
//                               name={`player${i + 1}_aadhar`}
//                               placeholder="Aadhar ID"
//                               required
//                             />
//                           </td>
//                           <td className="px-6 py-3">
//                             <InputField
//                               name={`player${i + 1}_village`}
//                               placeholder="Village"
//                               required
//                             />
//                           </td>
//                           <td className="px-6 py-3">
//                             <select
//                               name={`player${i + 1}_role`}
//                               className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
//                             >
//                               <option>Batsman</option>
//                               <option>WK/Batsman</option>
//                               <option>Bowler</option>
//                               <option>All Rounder</option>
//                             </select>
//                           </td>
//                           <td className="px-6 py-3">
//                             <InputField type="file" name={`player${i + 1}_photo`} />
//                           </td>
//                         </tr>
//                       ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Submit */}
//             <div className="flex justify-end">
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="px-12 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:from-orange-600 hover:via-red-600 hover:to-pink-700 focus:ring-4 focus:ring-orange-300 disabled:opacity-50 transition-all duration-300 transform hover:scale-110 hover:shadow-orange-500/50"
//               >
//                 {isSubmitting ? "🔄 REGISTERING..." : "🚀 REGISTER TEAM"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <Toaster />
//       <Footer />
//     </>
//   );
// }
