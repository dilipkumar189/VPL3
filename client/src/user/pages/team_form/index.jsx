// import React, { useState, useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import InputField from "../../components/InputField";
// import { useNavigate, useLocation } from "react-router-dom";
// import { addTeam, getTeamByCode, getTeamById } from "../../../api"; // your API functions

// export default function TeamForm() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const code = location.state?.code;
//   const teamid = location.state?.team;
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [editMode, setEditMode] = useState(false);
//   const [teamData, setTeamData] = useState(null);

//   // Fetch team if already registered

//   console.log({"code": code, "teamid": teamid})

//   useEffect(() => {
//   const fetchTeam = async () => {
//     if (!teamid) return; // if null, skip fetching

//     try {
//       const res = await getTeamById(teamid);
//       if (res?.data) {
//         setTeamData(res.data);
//       }
//     } catch (err) {
//       console.log("No existing team for this code:", err);
//     }
//   };

//   fetchTeam();
// }, [teamid]);


//   // 🔹 Handle form change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTeamData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//   if (previousData) {
//     setFormData({
//       name: previousData.name || "",
//       vn: previousData.vn || "",
//     });
//   }
// }, [previousData]);

//  const handleChange = (e, key) => {
//     setFormData({ ...formData, [key]: e.target.value });
//   };

//   // 🔹 Handle player change
//   const handlePlayerChange = (index, field, value) => {
//     setTeamData((prev) => {
//       const updatedPlayers = [...(prev?.players || Array(14).fill({}))];
//       updatedPlayers[index] = { ...updatedPlayers[index], [field]: value };
//       return { ...prev, players: updatedPlayers };
//     });
//   };

//   // 🔹 Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     toast.loading(editMode ? "Updating team..." : "Submitting team...", {
//       position: "top-center",
//     });

//     try {
//       const formData = new FormData(e.target);
//       formData.append("entryCode", code);

//       const res = await addTeam(formData); // same API for simplicity
//       toast.dismiss();
//       toast.success(editMode ? "✅ Team updated!" : "✅ Team registered!");
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

//       <div className="relative w-full h-64 md:h-80 lg:h-96">
//         <img
//           src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1920&auto=format&fit=crop"
//           alt="Cricket Stadium"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple/50 flex items-center justify-center">
//           <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500 bg-clip-text text-transparent drop-shadow-2xl text-center tracking-wider">
//             {editMode ? "UPDATE TEAM" : "TEAM REGISTRATION"}
//           </h1>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-12">
//   {teamData && !editMode ? (
//     <div className="bg-white shadow-lg rounded-xl p-6 space-y-8 text-center">
//       <div className="flex flex-col items-center">
//         <img
//           src={teamData.logo}
//           alt="Team Logo"
//           className="w-32 h-32 rounded-full border-4 border-orange-400 object-cover mb-4"
//         />
//         <h2 className="text-3xl font-bold text-gray-800 mb-2">
//           {teamData.team_name}
//         </h2>
//         <p className="text-gray-600 text-lg">
//           🏏 Captain: <span className="font-semibold">{teamData.captain}</span>
//         </p>
//         <p className="text-gray-600 text-lg">
//           📞 Mobile: <span className="font-semibold">{teamData.mobile}</span>
//         </p>
//         <p className="text-gray-600 text-lg">
//           🏠 Village: <span className="font-semibold">{teamData.village}</span>
//         </p>
//       </div>

//       <div className="flex justify-center gap-4 mt-6">
//         <button
//           onClick={() => navigate("/team")}
//           className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Go to Team Page
//         </button>

//         <button
//           onClick={() => setEditMode(true)}
//           className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
//         >
//           ✏️ Edit Team
//         </button>
//       </div>
//     </div>
//   ) : (
//     // ✅ Case 2: Either Editing or New Registration
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
//       <form onSubmit={handleSubmit} className="p-8 space-y-12">
//         <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
//           {editMode ? "Update Team Information" : "Team Registration"}
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <InputField
//             label="Team Name"
//             name="team_name"
//             value={teamData?.team_name || ""}
//             onChange={handleChange}
//             required
//           />
//           <InputField
//             label="Village"
//             name="village"
//             value={teamData?.village || ""}
//             onChange={handleChange}
//             required
//           />
//           <InputField
//             label="Sponsor 1"
//             name="sponser_1"
//             value={teamData?.sponser_1 || ""}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Sponsor 2"
//             name="sponser_2"
//             value={teamData?.sponser_2 || ""}
//             onChange={handleChange}
//           />
//           <InputField
//             label="Captain"
//             name="captain"
//             value={teamData?.captain || ""}
//             onChange={handleChange}
//             required
//           />
//           <InputField
//             label="Mobile"
//             name="mobile"
//             value={teamData?.mobile || ""}
//             onChange={handleChange}
//             required
//           />
//           <InputField type="file" label="Team Logo" name="logo" />
//         </div>

// <div>
//   <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
//     Squad Details
//   </h2>
//   <div className="overflow-x-auto rounded-xl border border-gray-200">
//     <table className="w-full text-sm">
//       <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
//         <tr>
//           <th className="px-6 py-4 text-left">#</th>
//           <th className="px-6 py-4 text-left">Name</th>
//           <th className="px-6 py-4 text-left">Aadhar</th>
//           <th className="px-6 py-4 text-left">Village</th>
//           <th className="px-6 py-4 text-left">Role</th>
//           <th className="px-6 py-4 text-left">Photo</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Array.from({ length: 14 }, (_, i) => {
//           const player = teamData?.players?.[i] || {};
//           return (
//             <tr key={i} className="even:bg-gray-50">
//               <td className="px-6 py-3 font-medium">{i + 1}</td>
//               <td className="px-6 py-3">
//                 <InputField
//                   name={`player${i + 1}_name`}
//                   value={player.name || ""}
//                   onChange={(e) =>
//                     handlePlayerChange(i, "name", e.target.value)
//                   }
//                   placeholder="Player Name"
//                 />
//               </td>
//               <td className="px-6 py-3">
//                 <InputField
//                   name={`player${i + 1}_aadhar`}
//                   value={player.aadhar || ""}
//                   onChange={(e) =>
//                     handlePlayerChange(i, "aadhar", e.target.value)
//                   }
//                   placeholder="Aadhar ID"
//                 />
//               </td>
//               <td className="px-6 py-3">
//                 <InputField
//                   name={`player${i + 1}_village`}
//                   value={player.village || ""}
//                   onChange={(e) =>
//                     handlePlayerChange(i, "village", e.target.value)
//                   }
//                   placeholder="Village"
//                 />
//               </td>
//               <td className="px-6 py-3">
//                 <select
//                   name={`player${i + 1}_role`}
//                   value={player.role || "Batsman"}
//                   onChange={(e) =>
//                     handlePlayerChange(i, "role", e.target.value)
//                   }
//                   className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
//                 >
//                   <option>Batsman</option>
//                   <option>WK/Batsman</option>
//                   <option>Bowler</option>
//                   <option>All Rounder</option>
//                 </select>
//               </td>
//               <td className="px-6 py-3">
//                 <InputField type="file" name={`player${i + 1}Image`} />
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   </div>
// </div>

//         <div className="flex justify-end">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="px-12 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 disabled:opacity-50 transition"
//           >
//             {isSubmitting
//               ? editMode
//                 ? "🔄 Updating..."
//                 : "🔄 Registering..."
//               : editMode
//               ? "✏️ Update Team"
//               : "🚀 Register Team"}
//           </button>
//         </div>
//       </form>
//     </div>
//   )}
// </div>

//       <Toaster />
//       <Footer />
//     </>
//   );
// }

// ------perfect working---------

import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InputField from "../../components/InputField";
import { useNavigate, useLocation } from "react-router-dom";
import { addTeam, getTeamById } from "../../../api";

export default function TeamForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const code = location.state?.code;
  const teamid = location.state?.team;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [teamData, setTeamData] = useState(null);
  const [teamFetched, setTeamFetched] = useState(false); //  to check DB fetch

  console.log({ code, teamid });

  const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB

  // ✅ Reusable file size validation
  const validateFileSize = (file) => {
    if (file && file.size > MAX_FILE_SIZE) {
      toast.error("❌ File size must be less than 1 MB");
      return false;
    }
    return true;
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!validateFileSize(file)) {
      e.target.value = ""; // reset the file input
      return;
    }
    setTeamData((prev) => ({ ...prev, logo: file }));
  };

  // const handlePlayerImageChange = (index, e) => {
  //   const file = e.target.files[0];
  //   if (!validateFileSize(file)) return; // Stop if invalid

  //   setTeamData((prev) => {
  //     const updatedPlayers = [...(prev?.players || [])];
  //     updatedPlayers[index] = {
  //       ...updatedPlayers[index],
  //       image: file,
  //     };
  //     return { ...prev, players: updatedPlayers };
  //   });
  // };

  const handlePlayerImageChange = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!validateFileSize(file)) {
      e.target.value = "";
      return;
    }

    setTeamData((prev) => {
      const updatedPlayers = [...(prev?.players || Array(14).fill({}))];
      updatedPlayers[index] = { ...updatedPlayers[index], image: file };
      return { ...prev, players: updatedPlayers };
    });
  };

  //  Fetch existing team (if teamid present)
  useEffect(() => {
    const fetchTeam = async () => {
      if (!teamid) {
        setTeamFetched(false);
        return;
      }

      try {
        const res = await getTeamById(teamid);
        if (res?.data) {
          setTeamData(res.data);
          setTeamFetched(true);
        } else {
          setTeamFetched(false);
        }
      } catch (err) {
        console.log("No existing team for this code:", err);
        setTeamFetched(false);
      }
    };

    fetchTeam();
  }, [teamid]);

  console.log("team data:", teamData)

  // ✅ Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Handle player field changes
  const handlePlayerChange = (index, field, value) => {
    setTeamData((prev) => {
      const updatedPlayers = [...(prev?.players || Array(14).fill({}))];
      updatedPlayers[index] = { ...updatedPlayers[index], [field]: value };
      return { ...prev, players: updatedPlayers };
    });
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    toast.loading(editMode ? "Updating team..." : "Submitting team...", {
      position: "top-center",
    });

    try {
      const formData = new FormData(e.target);
      formData.append("entryCode", code);

      const res = await addTeam(formData);
      toast.dismiss();
      toast.success(editMode ? "✅ Team updated!" : "✅ Team registered!");
      navigate("/team");
    } catch (err) {
      toast.dismiss();
      toast.error(err.response?.data?.message || "❌ Error submitting team");
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log({ "teamFetchd": teamFetched, "teamdata": teamData, "edti": editMode })

  // ✅ If data fetched & not editing — show view card
  if (teamFetched && teamData && !editMode) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="bg-white shadow-lg rounded-xl p-8 space-y-6 text-center border">
            <img
              src={teamData.logo}
              alt="Team Logo"
              className="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 object-cover"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {teamData.team_name}
            </h2>
            {/* <div className="flex border gap-6 mx-8">
              <p className="text-gray-600 text-lg">
                <strong>Captain:</strong> {teamData.captain}
              </p>
              <p className="text-gray-600 text-lg">
                <strong>Mobile:</strong> {teamData.mobile}
              </p>
              <p className="text-gray-600 text-lg">
                <strong>Village:</strong> {teamData.village}
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setEditMode(true)}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
              >
                Edit Team
              </button>
              <button
                onClick={() => navigate("/team")}
                className="px-6 py-3 bg-gray-200 font-semibold rounded-lg shadow hover:bg-gray-300 transition"
              >
                Go to Team Page
              </button>
            </div> */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl shadow-inner py-6 px-4 flex flex-col md:flex-row justify-center items-center gap-6 text-lg font-medium text-gray-700">
      <div className="flex items-center gap-2">
        <span className="text-orange-600 font-semibold">Captain:</span>
        <span>{teamData.captain}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-orange-600 font-semibold">Mobile:</span>
        <span>{teamData.mobile}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-orange-600 font-semibold">Village:</span>
        <span>{teamData.village}</span>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-center gap-6 mt-8">
      <button
        onClick={() => setEditMode(true)}
        className="px-4 md:px-8 py-2 md:py-2 bg-[#334155] text-sm md:text-base text-white font-semibold rounded-lg shadow hover:bg-[#4c5e77] transition-transform transform"
      >
        Edit Team
      </button>
      <button
        onClick={() => navigate('/team')}
        className="px-4 md:px-8 py-2 md:py-2 bg-gray-100 text-sm md:text-base text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-200 transition-transform transform hover:scale-105"
      >
        Go to Team Page
      </button>
    </div>
          </div>
        </div>
        <Toaster />
        <Footer />
      </>
    );
  }

  // ✅ New team or edit mode form
  return (
    <>
      <Navbar />

      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1920&auto=format&fit=crop"
          alt="Cricket Stadium"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-purple/50 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-400 via-yellow-300 to-red-500 bg-clip-text text-transparent drop-shadow-2xl text-center tracking-wider">
            {editMode ? "UPDATE TEAM" : "TEAM REGISTRATION"}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
                Team Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <InputField
                  label="Team Name"
                  name="team_name"
                  value={teamData?.team_name || ""}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Village"
                  name="village"
                  value={teamData?.village || ""}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Sponsor 1"
                  name="sponser_1"
                  value={teamData?.sponser_1 || ""}
                  onChange={handleChange}
                />
                <InputField
                  label="Sponsor 2"
                  name="sponser_2"
                  value={teamData?.sponser_2 || ""}
                  onChange={handleChange}
                />
                <InputField
                  label="Captain"
                  name="captain"
                  value={teamData?.captain || ""}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Mobile"
                  name="mobile"
                  value={teamData?.mobile || ""}
                  onChange={handleChange}
                  required
                />
                <InputField
                  type="file"
                  label="Team Logo"
                  name="logo"
                  onChange={handleLogoChange} />
              </div>
            </div>

            <div>
  <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-green-500 pb-3 mb-6 text-center">
    Squad Details
  </h2>

  <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
    <table className="w-full text-sm">
      <thead className="bg-gray-100 text-gray-700 text-xs sm:text-sm">
        <tr>
          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold">#</th>
          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold">Name</th>
          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold">Aadhar</th>
          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold">Village</th>
          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold">Role</th>
          <th className="px-3 sm:px-4 py-2 sm:py-3 text-left font-semibold">Photo</th>
        </tr>
      </thead>

      <tbody>
        {Array(14)
          .fill()
          .map((_, i) => (
            <tr
              key={i}
              className="even:bg-gray-50 hover:bg-green-50 transition-colors duration-200"
            >
              <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-gray-700 text-center">
                {i + 1}
              </td>

              <td className="px-3 sm:px-4 py-1 sm:py-2">
                <input
                  type="text"
                  placeholder="Player Name"
                  value={teamData?.players?.[i]?.name || ""}
                  onChange={(e) => handlePlayerChange(i, "name", e.target.value)}
                  className="w-[100px] lg:w-full text-xs lg:text-sm px-2 sm:px-3 py-1 md:py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
                />
              </td>

              <td className="px-3 sm:px-4 py-1 sm:py-2">
                <input
                  type="text"
                  placeholder="Aadhar ID"
                  value={teamData?.players?.[i]?.aadhar || ""}
                  onChange={(e) => handlePlayerChange(i, "aadhar", e.target.value)}
                  className="w-[100px] lg:w-full text-xs lg:text-sm px-2 sm:px-3 py-1 md:py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
                />
              </td>

              <td className="px-3 sm:px-4 py-1 sm:py-2">
                <input
                  type="text"
                  placeholder="Village"
                  value={teamData?.players?.[i]?.village || ""}
                  onChange={(e) => handlePlayerChange(i, "village", e.target.value)}
                  className="w-[100px] lg:w-full text-xs lg:text-sm px-2 sm:px-3 py-1 md:py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
                />
              </td>

              <td className="px-3 sm:px-4 py-1 sm:py-2">
                <select
                  value={teamData?.players?.[i]?.role || "Batsman"}
                  onChange={(e) => handlePlayerChange(i, "role", e.target.value)}
                  className="w-[100px] lg:w-full text-xs lg:text-sm px-2 sm:px-3 py-1 md:py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 text-gray-700"
                >
                  <option>Batsman</option>
                  <option>WK/Batsman</option>
                  <option>Bowler</option>
                  <option>All Rounder</option>
                </select>
              </td>

              <td className="px-3 sm:px-4 py-1 sm:py-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handlePlayerImageChange(i, e)}
                  className="w-[100px] lg:w-full text-xs lg:text-sm file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs md:file:text-sm file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
                />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>


            {/* <div>
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">
                Squad Details
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">#</th>
                      <th className="px-6 py-4 text-left">Name</th>
                      <th className="px-6 py-4 text-left">Aadhar</th>
                      <th className="px-6 py-4 text-left">Village</th>
                      <th className="px-6 py-4 text-left">Role</th>
                      <th className="px-6 py-4 text-left">Photo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array(14)
                      .fill()
                      .map((_, i) => (
                        <tr key={i} className="even:bg-gray-50">
                          <td className="px-6 py-3 font-medium">{i + 1}</td>
                          <td className="px-6 py-3">
                            <InputField
                              name={`player${i + 1}_name`}
                              value={teamData?.players?.[i]?.name || ""}
                              onChange={(e) =>
                                handlePlayerChange(i, "name", e.target.value)
                              }
                              placeholder="Player Name"
                            />
                          </td>
                          <td className="px-6 py-3">
                            <InputField
                              name={`player${i + 1}_aadhar`}
                              value={teamData?.players?.[i]?.aadhar || ""}
                              onChange={(e) =>
                                handlePlayerChange(i, "aadhar", e.target.value)
                              }
                              placeholder="Aadhar ID"
                            />
                          </td>
                          <td className="px-6 py-3">
                            <InputField
                              name={`player${i + 1}_village`}
                              value={teamData?.players?.[i]?.village || ""}
                              onChange={(e) =>
                                handlePlayerChange(i, "village", e.target.value)
                              }
                              placeholder="Village"
                            />
                          </td>
                          <td className="px-6 py-3">
                            <select
                              name={`player${i + 1}_role`}
                              value={teamData?.players?.[i]?.role || "Batsman"}
                              onChange={(e) =>
                                handlePlayerChange(i, "role", e.target.value)
                              }
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                            >
                              <option>Batsman</option>
                              <option>WK/Batsman</option>
                              <option>Bowler</option>
                              <option>All Rounder</option>
                            </select>
                          </td>
                          <td className="px-6 py-3">
                            <InputField
                              type="file"
                              name={`player${i + 1}Image`}
                              accept="image/*"
                              onChange={(e) =>
                                handlePlayerImageChange(i, e)
                              }
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div> */}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-12 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:scale-105 disabled:opacity-50 transition"
              >
                {isSubmitting
                  ? editMode
                    ? "🔄 UPDATING..."
                    : "🔄 REGISTERING..."
                  : editMode
                    ? "✏️ UPDATE TEAM"
                    : "🚀 REGISTER TEAM"}
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
