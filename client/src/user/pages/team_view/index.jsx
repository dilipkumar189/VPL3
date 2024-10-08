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

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getTeam, getTeamById } from "../../../api";

export default function TeamView() {
  const [team, setTeam] = useState(null);
  const [teams, setTeams] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getTeam();
        setTeams(response.data);
      } catch (err) {
        console.error("Error fetching teams:", err);
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
      }
    };

    fetchTeam();
  }, [id]);

  if (!team) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-base-200 p-4">
          <h2 className="text-4xl font-bold mb-4">VPL-3 Teams</h2>
          <ul>
            {teams.map((team) => (
              <Link to={`/teamview/${team._id}`} key={team._id}>
                <li className="mb-2 border-4 text-lg font-semibold">
                  {team.team_name}
                </li>
              </Link>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main className="w-4/5">
          <section className="bg-base-100 h-auto py-16">
            <div className="mx-8">
              <div className="mx-auto pb-16 max-w-4xl">
                <h1 className="md:text-[40px] text-xl font-bold text-center">
                  {team.team_name} - {team.village}
                </h1>
              </div>
              <div>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {team.players.map((player) => (
                    <div
                      key={player._id}
                      className="border-2 card card-compact bg-transparent w-full md:w-40"
                    >
                      <div className="md:w-30 border-4">
                        <img
                          src={
                            player.image ||
                            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                          }
                          alt={player.name}
                          className="border-2 rounded-full w-full h-auto"
                        />
                      </div>
                      <div className="card-body text-center">
                        <h3 className="font-bold">{player.name}</h3>
                        <p className="text-gray-500">{player.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
