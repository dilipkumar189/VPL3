import React, { useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { addAdvertise } from "../../../api";

const defaultValue = {
  shopName: "",
  ownerName: "",
  village: "",
  amount: "",
  shopLogo: null,
};

export default function AdvertiserForm() {
  const [advertiser, setAdvertiser] = useState(defaultValue);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdvertiser({ ...advertiser, [name]: value });
  };

  const handleFileChange = (e) => {
    setAdvertiser({ ...advertiser, shopLogo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.append("shopName", advertiser.shopName);
    // formData.append("shopLogo", advertiser.shopLogo);
    // formData.append("ownerName", advertiser.ownerName);
    // formData.append("village", advertiser.village);
    // formData.append("amount", advertiser.amount);
    Object.keys(advertiser).forEach((key) => {
      if (key !== "shopLogo") {
        formData.append(key, advertiser[key]);
      }
    });

    // Append shopLogo separately
    if (advertiser.shopLogo) {
      formData.append("shopLogo", advertiser.shopLogo);
    }

    try {
      const response = await addAdvertise(formData);
      console.log(response);
      // alert("Data inserted successfully");
      toast.success("Advertiser added successfully!", {
        duration: 2000,
      });

      setTimeout(() => {
        navigate("/admin/advertisers");
      }, 2000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to add Advertiser. Please try again.", {
        duration: 2000,
      });
    }
  };

  return (
    <div className="">
      <Toaster position="top-center" />
      <Header />
      <Sidebar />
      <div className="px-4 mt-3 sm:ml-64">
        <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
          <div className="grid grid-cols-9 border-b-[1px]">
            <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
              Add Advertiser
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="shopName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Shop Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="shopName"
                      name="shopName"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={advertiser.shopName}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="shopLogo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Logo
                  </label>
                  <div className="mt-2">
                    <input
                      id="shopLogo"
                      name="shopLogo"
                      type="file"
                      className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="ownerName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Owner Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="ownerName"
                      name="ownerName"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={advertiser.ownerName}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="village"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Village
                  </label>
                  <div className="mt-2">
                    <input
                      id="village"
                      name="village"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={advertiser.village}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Advertiser Amount
                  </label>
                  <div className="mt-2">
                    <input
                      id="amount"
                      name="amount"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                      value={advertiser.amount}
                    />
                  </div>
                </div>
                <div className="mt-6 sm:ml-28 lg-ml-0 flex items-center justify-end gap-x-6">
                  <Link
                    to={"/dashboard/advertisers"}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
