// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import { getTeam } from "../../../api";

// export default function Team() {
//   const [teams, setTeams] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchTeams = async () => {
//       try {
//         const response = await getTeam();
//         setTeams(response.data);
//       } catch (err) {
//         console.error("Error fetching teams:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTeams();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <section className="bg-base-100 h-auto py-16">
//         <div className="mx-16">
//           <div className="mx-auto pb-16 max-w-4xl">
//             <h1 className="md:text-[40px] text-xl font-bold text-center">
//               VPL - {teams.length} Teams
//             </h1>
//           </div>
//           {loading ? (
//             <div className="flex justify-center items-center h-64">
//               <span className="loading loading-spinner loading-lg"></span>
//             </div>
//           ) : (
//             <div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {teams.map((team) => (
//                   <Link to={`/teamview/${team._id}`} key={team._id}>
//                     <div className="card card-compact bg-base-100 md:w-80 md:h-80 shadow-xl hover:shadow-2xl transition-shadow duration-300">
//                       <figure>
//                         <img
//                           src={
//                             team.logo ||
//                             "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//                           }
//                           alt={team.team_name}
//                         />
//                       </figure>
//                       <div className="card-body">
//                         <h2 className="card-title">{team.team_name}</h2>
//                         <p>{team.village}</p>
//                       </div>
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getTeam } from "../../../api";

export default function Team() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getTeam();
        setTeams(response.data);
      } catch (err) {
        console.error("Error fetching teams:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16">
        <div className="mx-6 sm:mx-12 lg:mx-20">
          {/* Section Title */}
          <div className="mx-auto pb-12 max-w-4xl text-center">
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-wide text-gray-800">
              Meet the Teams
            </h1>
            <div className="mt-2 h-1 w-24 mx-auto bg-green-500 rounded-full"></div>
            <p className="mt-4 text-gray-600 text-sm md:text-base">
              VPL – {teams.length} Teams Competing for Glory!
            </p>
          </div>

          {/* Loader */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <span className="loading loading-spinner loading-lg text-green-600"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {teams.map((team) => (
                <Link to={`/teamview/${team._id}`} key={team._id}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                    <div className="p-6 flex flex-col items-center">
                      {/* Logo */}
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-500 shadow-md mb-4">
                        <img
                          src={
                            team.logo ||
                            "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                          }
                          alt={team.team_name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {/* Team Info */}
                      <h2 className="text-lg font-bold uppercase tracking-wide text-gray-800 text-center">
                        {team.team_name}
                      </h2>
                      <span className="mt-2 px-3 py-1 text-xs font-semibold bg-green-100 text-green-600 rounded-full">
                        {team.village}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
