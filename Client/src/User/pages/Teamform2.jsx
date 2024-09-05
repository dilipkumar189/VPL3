import React, { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Teamform() {
    const [teamData, setTeamData] = useState({
        team_name: '1',
        village: '1',
        sponser_1: '1',
        sponser_2: '1',
        captain: '1',
        mobile: '2',
        logo: null,
        player1: { name: '2', adhar: '2', village: '1', role: '2', image: null },
        player2: { name: '2', adhar: '2', village: '2', role: '2', image: null }
      });
    
      const handleChange = (e, player = null) => {
        if (player) {
          setTeamData({
            ...teamData,
            [player]: { ...teamData[player], [e.target.name]: e.target.value }
          });
        } else {
          setTeamData({ ...teamData, [e.target.name]: e.target.value });
        }
      };
    
      const handleFileChange = (e, field) => {
        setTeamData({ ...teamData, [field]: e.target.files[0] });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        // Append basic team data
        formData.append('team_name', teamData.team_name);
        formData.append('village', teamData.village);
        formData.append('sponser_1', teamData.sponser_1);
        formData.append('sponser_2', teamData.sponser_2);
        formData.append('captain', teamData.captain);
        formData.append('mobile', teamData.mobile);
        
        // Append logo if it exists
        if (teamData.logo) {
            formData.append('logo', teamData.logo);
        }
    
        // Append player1 data
        formData.append('player1_name', teamData.player1.name);
        formData.append('player1_adhar', teamData.player1.adhar);
        formData.append('player1_village', teamData.player1.village);
        formData.append('player1_role', teamData.player1.role);
        if (teamData.player1.image) {
            formData.append('player1Image', teamData.player1.image);
        }
    
        // Append player2 data
        formData.append('player2_name', teamData.player2.name);
        formData.append('player2_adhar', teamData.player2.adhar);
        formData.append('player2_village', teamData.player2.village);
        formData.append('player2_role', teamData.player2.role);
        if (teamData.player2.image) {
            formData.append('player2Image', teamData.player2.image);
        }
    
        // Debugging: Log the formData contents
        for (let pair of formData.entries()) {
            console.log(`${pair[0]}: ${pair[1]}`);
        }
    
        try {
            const response = await axios.post('http://localhost:4000/api/addteam2', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            console.log(response.data);
            // Handle success (e.g., show a success message, reset form)
        } catch (error) {
            console.error('Error submitting form:', error.response ? error.response.data : error.message);
            // Handle error (e.g., show error message)
        }
    };
    return (
        <>
            <Navbar />
            <div className='border-2 lg:mx-[200px]'>

                <h1 className='text-center mt-10 text-[25px] font-semibold'>Add Team</h1>

                <form onSubmit={handleSubmit} className='lg:w-[800px] md:py-10 py-2 mx-auto '>
                    <div className="">
                        <div className="border-b py-6 border-gray-900/10 md:px-[100px] px-2">
                            <h2 className=" font-semibold my-0 text-gray-900">Team Information</h2>
                            <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-6">
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="team_name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Team Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="team_name"
                                            type="text"
                                            name="team_name"
                                            onChange={handleChange}
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Team name'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="village" className="block text-sm font-medium leading-6 text-gray-900">
                                        Village
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="village"
                                            type="text"
                                            name="village"
                                            onChange={handleChange}
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Village name'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="sponser_1" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sponsor-1
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="sponser_1"
                                            type="text"
                                            name="sponser_1"
                                            onChange={handleChange}
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Sponsor-1 name'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="sponser_2" className="block text-sm font-medium leading-6 text-gray-900">
                                        Sponsor-2
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="sponser_2"
                                            type="text"
                                            name="sponser_2"
                                            onChange={handleChange}
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Sponsor-2 name'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="captain" className="block text-sm font-medium leading-6 text-gray-900">
                                        Captain Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="captain"
                                            type="text"
                                            name="captain"
                                            onChange={handleChange}
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Captain Name'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
                                        Mobile No.
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="mobile"
                                            type="text"
                                            name="mobile"
                                            onChange={handleChange}
                                            className="block w-full rounded-sm sm:rounded-md
                                             border-[1px] px-2 sm:py-1.5 py-1 text-gray-900 shadow-sm   sm:text-sm text-[12px] sm:leading-6"
                                            placeholder='Enter Mobile Number'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3 col-span-1">
                                    <label htmlFor="logo" className="block text-sm font-medium leading-6  text-gray-900">
                                        Team Logo
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="logo"
                                            type="file"
                                            name="logo"
                                            onChange={(e) => handleFileChange(e, 'logo')}
                                            className="sm:file-input md:file-input-bordered border-[1px] rounded-sm border-black text-[11px] bg-white md:h-10 w-[160px]  md:w-full md:max-w-xs"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* add team details */}

                    {/* <div className="overflow-x-auto"> */}
                    <div className="overflow-x-auto mt-20 ">
                        <table className=" md:w-[800px] w-[540px]">
                            <thead>
                                <tr className="text-[12px] bg-slate-200">
                                    <th className="py-2 border-[1px] border-black">Sr no.</th>
                                    <th className="py-2 border-[1px] border-black">Name</th>
                                    <th className="py-2 border-[1px] border-black">Aadhar No.</th>
                                    <th className="py-2 border-[1px] border-black">Village</th>
                                    <th className="py-2 border-[1px] border-black">Role</th>
                                    <th className="py-2 border-[1px] border-black">Image</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        1
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player1')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player1')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player1')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        {/* <input type="text" className=' px-2 md:w-[150px] w-[100px]' /> */}
                                        <select
                                            id=""
                                            className='border-2 text-[13px]'
                                            name="role"
                                            onChange={(e) => handleChange(e, 'player1')}
                                            defaultValue="Batsman"
                                        >
                                            <option value="Batsman">Batsman</option>
                                            <option value="WK/Batsman">WK/Batsman</option>
                                            <option value="Bowler">Bowler</option>
                                            <option value="All Rounder">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input 
                                            type="file" 
                                            name='image' 
                                            onChange={(e) => handleFileChange(e, 'player1.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        2
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player2')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player2')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player2')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        {/* <input type="text" className=' px-2 md:w-[150px] w-[100px]' /> */}
                                        <select
                                            id=""
                                            className='border-2 text-[13px]'
                                            name="role"
                                            onChange={(e) => handleChange(e, 'player2')}
                                            defaultValue="Batsman"
                                        >
                                            <option value="Batsman">Batsman</option>
                                            <option value="WK/Batsman">WK/Batsman</option>
                                            <option value="Bowler">Bowler</option>
                                            <option value="All Rounder">All Rounder</option>
                                        </select>
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[150px]">
                                        <input 
                                            type="file" 
                                            name='image' 
                                            onChange={(e) => handleFileChange(e, 'player2.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>

            </div>
            <Footer />
        </>
    )
}
