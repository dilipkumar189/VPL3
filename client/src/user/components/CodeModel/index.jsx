// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { validateCode } from "../../../api";
// // import { validateCode } from "; // backend API

// export default function CodeModal({ onClose }) {
//   const [code, setCode] = useState("");
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const handleValidate = async (e) => {
//     e.preventDefault();
//     if (!code.trim()) {
//       toast.error("Please enter your code");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await validateCode({ code }); // API call
//       if (res.data.message.includes("valid")) {
//         toast.success("✅ Code verified!");
//         onClose(); // close modal
//         navigate("/addteam", { state: { code } }); // pass code to form
//       }
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Invalid code");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white p-8 rounded-2xl shadow-xl w-96 relative">
//         <h2 className="text-2xl font-bold mb-4 text-center">Enter Team Code</h2>
//         <form onSubmit={handleValidate} className="space-y-4">
//          <input
//   type="text"
//   placeholder="Enter your unique code"
//   value={code}
//   onChange={(e) => setCode(e.target.value)}
//   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800 placeholder-gray-400"
// />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
//           >
//             {loading ? "Checking..." : "Validate Code"}
//           </button>
//         </form>
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-3 text-gray-500 hover:text-black"
//         >
//           ✖
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { validateCode } from "../../../api"; // your backend API

export default function CodeModal({ onClose }) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleValidate = async () => {
    if (!code.trim()) {
      toast.error("Please enter your code");
      return;
    }

    setLoading(true);
    try {
      console.log("code :", code);
      const res = await validateCode({ code }); // API call

      console.log("ressss :", res);
      // console.log("res.data :", res.data.team.length);
      if (res.status === 200 ) {
        toast.success("Code verified!");
        onClose(); // close modal
        navigate("/addteam", { state: { code , team: res.data.team} }); // pass code to form
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" />
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        {/* Modal */}
        <div className="bg-white p-8 rounded-2xl shadow-xl w-96 relative">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Enter Team Code
          </h2>

          {/* Input */}
          <input
            type="text"
            placeholder="Enter your unique code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-800 placeholder-gray-400"
          />

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleValidate}
              disabled={loading}
              className="flex-1 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              {loading ? "Checking..." : "Validate Code"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

