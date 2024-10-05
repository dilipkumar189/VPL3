import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getAdvertiser } from "../../../api"; // Adjust the import path as needed

export default function Advertiser() {
  const [advertisers, setAdvertisers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdvertisers = async () => {
      try {
        const response = await getAdvertiser();
        setAdvertisers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching advertisers:", error);
        setLoading(false);
      }
    };

    fetchAdvertisers();
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-base-500 py-16">
        <div className="mx-16">
          <div className="mx-auto pb-16 max-w-4xl">
            <h1 className="md:text-[40px] text-xl font-bold text-center">
              Advertisers
            </h1>
          </div>
          {loading ? (
            <p>Loading advertisers...</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {advertisers.map((advertiser, index) => (
                <div key={index} className="advertisement">
                  {advertiser.shopLogo ? (
                    <img
                      src={advertiser.shopLogo}
                      alt={`Ad ${index + 1}`}
                      className="w-full rounded-md shadow-lg h-[160px]"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 rounded-md shadow-lg flex items-center justify-center">
                      <span className="text-gray-500">No Image</span>
                    </div>
                  )}
                  <p className="mt-2 text-center font-semibold">
                    {advertiser.shopName || `Advertiser ${index + 1}`}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
