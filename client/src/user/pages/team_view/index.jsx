// import React from "react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// export default function TeamView() {
//   return (
//     <>
//       <Navbar />
//       <section className="bg-base-100 h-auto py-16">
//         <div className="mx-16">
//           <div className="mx-auto pb-16 max-w-4xl">
//             <h1 className="md:text-[40px] text-xl font-bold text-center">
//               DHANDHAR - 11 BAGRA
//             </h1>
//           </div>
//           <div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//               <div className="card card-compact bg-transparent md:w-40">
//                 <figure>
//                   <img
//                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                     alt="Img"
//                     className="rounded-full w-full h-auto"
//                   />
//                 </figure>
//                 <div className="card-body text-center">
//                   <h3 className="font-bold">Dinesh Suthar</h3>
//                   <p className="text-gray-500">All-Rounder</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import { getTeam, getTeamById } from "../../../api";

// export default function TeamView() {
//   const [team, setTeam] = useState(null);
//   const [teams, setTeams] = useState([]);

//   const { id } = useParams();

//   useEffect(() => {
//     const fetchTeams = async () => {
//       try {
//         const response = await getTeam();
//         setTeams(response.data);
//       } catch (err) {
//         console.error("Error fetching teams:", err);
//       }
//     };

//     fetchTeams();
//   }, []);

//   useEffect(() => {
//     const fetchTeam = async () => {
//       try {
//         const response = await getTeamById(id);
//         setTeam(response.data);
//       } catch (err) {
//         console.error("Error fetching team:", err);
//       }
//     };

//     fetchTeam();
//   }, [id]);

//   if (!team) return <div>Loading...</div>;

//   return (
//     <>
//       <Navbar />
//       <div className="flex">
// {/* Sidebar */}
// <aside className="w-1/4 bg-base-200 p-4">
//   <h2 className="text-4xl font-bold mb-4">VPL-3 Teams</h2>
//   <ul>
//     {teams.map((team) => (
//       <Link to={`/teamview/${team._id}`} key={team._id}>
//         <li className="mb-2 border-4 text-2xl font-semibold">
//           {team.team_name}
//         </li>
//       </Link>
//     ))}
//   </ul>
// </aside>

//         {/* Main content */}
//         <main className="w-4/5">
//           <section className="bg-base-100 h-auto py-16">
//             <div className="mx-8">
//               <div className="mx-auto pb-12 max-w-4xl">
//                 <h1 className="md:text-[40px] text-xl font-bold text-center">
//                   {team.team_name} - {team.village}
//                 </h1>
//               </div>
//               <div>
//                 <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//                   {team.players.map((player) => (
//                     <div
//                       key={player._id}
//                       className="card card-compact bg-transparent w-full"
//                     >
//                       <div className="w-40 h-40 mx-auto overflow-hidden rounded-full border-4 border-gray-200">
//                         <img
//                           src={
//                             player.image ||
//                             "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                           }
//                           alt={player.name}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="card-body text-center">
//                         <h3 className="font-bold">{player.name}</h3>
//                         <p className="text-gray-500">{player.role}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//       <Footer />
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getTeam, getTeamById } from "../../../api";

export default function TeamView() {
  const [team, setTeam] = useState(null);
  const [teams, setTeams] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [loadingTeams, setLoadingTeams] = useState(true);
  const [loadingTeam, setLoadingTeam] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getTeam();
        setTeams(response.data);
      } catch (err) {
        console.error("Error fetching teams:", err);
      } finally {
        setLoadingTeams(false);
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await getTeamById(id);
        setTeam(response.data);
      } catch (err) {
        console.error("Error fetching team:", err);
      } finally {
        setLoadingTeam(false);
      }
    };

    fetchTeam();
  }, [id]);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const hideSidebar = () => {
    setIsVisible(false);
  };

  const renderTeamList = () => (
    <ul>
      {teams.map((team) => (
        <Link to={`/teamview/${team._id}`} key={team._id}>
          <li className="mb-2 border-[1px] rounded-2xl px-[2px] align-middle text-[15px] font-semibold flex py-[2px] hover:bg-sky-400">
            <img
              src={
                team.logo ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="team"
              className="w-[28px] mr-[10px] rounded-full h-[28px] object-cover"
            />
            {team.team_name}
          </li>
        </Link>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar className="w-full" />
      <div className="flex relative bg-gray-100">
        {/* Sidebar for Mobile */}
        {isVisible && (
          <aside className="w-2/3 bg-white border-[1px] border-slate-300 text-black p-4 absolute top-0 left-0 z-10 m-2 rounded-md ">
            <p className="text-[23px] font-bold mb-4">
              VPL-3 Teams
              <button
                onClick={hideSidebar}
                className="ml-[40px] border-[1px] text-dark text-[14px] py-[2px] px-[8px] rounded"
              >
                X
              </button>
            </p>
            {loadingTeams ? (
              <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-md"></span>
              </div>
            ) : (
              renderTeamList()
            )}
          </aside>
        )}

        {/* Sidebar for Desktop */}
        <aside
          className="w-1/4 bg-white p-4 hidden md:block shadow-md m-4 rounded-md text-gray-800 sticky h-full"
          style={{ top: "82px" }}
        >
          <h2 className="text-4xl font-bold mb-4">VPL-3 Teams</h2>
          {loadingTeams ? (
            <div className="flex justify-center items-center h-64">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            renderTeamList()
          )}
        </aside>

        <div className="flex-grow">
          <button
            onClick={toggleVisibility}
            className="mb-4 block md:hidden border-[1px] rounded-md m-2 p-[2px] bg-white"
          >
            {isVisible ? "" : "Teams"}
          </button>

          {/* Main content */}
          <main className="w-full p-4">
            <section className="bg-white shadow-md text-gray-800 h-auto py-8 md:py-16 rounded-md">
              {loadingTeam ? (
                <div className="flex justify-center items-center h-64">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              ) : team ? (
                <div className="mx-8">
                  <div className="mx-auto pb-12 max-w-4xl">
                    <h1 className="md:text-[40px] text-xl font-bold text-center">
                      {team.team_name} - {team.village}
                    </h1>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
                      {team.players.map((player) => (
                        <div
                          key={player._id}
                          className="card card-compact bg-transparent w-full"
                        >
                          <div className="md:w-40 md:h-40 w-28 h-28 mx-auto overflow-hidden rounded-full border-4 border-gray-200">
                            <img
                              src={
                                player.image ||
                                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                              }
                              alt={player.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="card-body text-center">
                            <p className="font-bold md:text-[14px] text-[9px] leading-3">
                              {player.name}
                            </p>
                            <p className="text-gray-400 md:text-[14px] text-[9px] mt-[-5px] md:mt-0 leading-3">
                              {player.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">Team not found</div>
              )}
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
