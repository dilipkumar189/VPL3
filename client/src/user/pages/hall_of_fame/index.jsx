import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getHallOfFame } from "../../../api"; // Adjust the import path as needed

export default function HallOfFame() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await getHallOfFame();
        setHeroes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Hall of Fame data:", error);
        setLoading(false);
      }
    };

    fetchHeroes();
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-base-100 h-auto py-16">
        <div className="mx-16">
          <div className="mx-auto md:mb-12 max-w-4xl">
            <h1 className="md:text-[40px] text-[26px] font-bold text-center">
              Hall of Fame
            </h1>
          </div>
          <div>
            <h1 className="md:text-[36px] text-xl font-bold py-8">
              Heroes of 2023
            </h1>
            {loading ? (
              <p>Loading Hall of Fame data...</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {heroes.map((hero, index) => (
                  <div
                    key={index}
                    className="card card-compact bg-transparent md:w-40"
                  >
                    <figure>
                      <img
                        src={
                          hero.hofImage ||
                          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                        alt={hero.name}
                        className="rounded-full w-full h-[160px]"
                      />
                    </figure>
                    <div className="card-body text-center">
                      <h3 className="font-bold">{hero.name}</h3>
                      <p className="text-gray-500">{hero.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
