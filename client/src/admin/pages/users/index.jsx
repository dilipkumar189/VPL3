import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { userData, updateCaptain } from "../../../api";

export default function Users() {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await userData();
    setUser(response.data);
  };

  const handleCaptainChange = async (userId, currentCaptain) => {
    try {
      const newCaptainStatus = !currentCaptain;
      const response = await updateCaptain({
        userId,
        captainStatus: newCaptainStatus,
      });

      setUser((prevUsers) =>
        prevUsers.map((u) =>
          u._id === userId ? { ...u, captain: newCaptainStatus } : u
        )
      );

      alert("Captain updated successfully!");
    } catch (error) {
      console.error("Error updating captain:", error);
      alert("Failed to update captain. Please try again.");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="">
      <Header />
      <Sidebar />
      <div className="sm:px-4 px-2 sm:ml-64">
        <div className="mx-auto my-4 max-w-7xl px-0 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm bg-white">
          <div className="grid grid-cols-9 border-b-[1px] mx-4 sm:mx-0">
            <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
              Users
            </h1>
          </div>

          <div className="overflow-x-auto">
            <table className="table sm:w-full w-[600px]">
              <thead className="sticky bg-white z-9 ">
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th></th>
                  <th>Email</th>
                  <th>Captain</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((userInfo, index) => (
                  <tr className="hover px-0" key={userInfo._id}>
                    <td>{index + 1}</td>
                    <td className="sm:px-4 px-0 w-[50px]">
                      <div className="flex items-center">
                        <div className="avatar px-0">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={userInfo.image} alt="No image" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="leading-4">
                      <h1 className="font-bold text-[11px] sm:text-[14px] ">
                        {userInfo.username}
                      </h1>
                      <p className="opacity-70 text-[11px] sm:text-sm ">
                        {userInfo.village}
                      </p>
                    </td>
                    <td>
                      <p className=" text-[12px] sm:text-sm ">
                        {userInfo.email}
                      </p>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="toggle toggle-sm toggle-success"
                        checked={userInfo.captain} // Reflects the current captain state
                        onChange={() =>
                          handleCaptainChange(userInfo._id, userInfo.captain)
                        } // Updates captain state on change
                      />
                    </td>
                    <td>
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="25"
                          height="25"
                          viewBox="0 0 30 30"
                        >
                          <path
                            fill="#FF7474"
                            d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
