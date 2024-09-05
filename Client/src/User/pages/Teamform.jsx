import React, { useState } from 'react';
import { toast } from "react-toastify";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { createTeam } from '../../services/api';

export default function Teamform() {
    const [teamData, setTeamData] = useState({
        team_name: '',
        village: '',
        sponser_1: '',
        sponser_2: '',
        captain: '',
        mobile: '',
        logo: null,
        player1: { name: '', adhar: '', village: '', role: '', image: null },
        player2: { name: '', adhar: '', village: '', role: '', image: null },
        player3: { name: '', adhar: '', village: '', role: '', image: null },
        player4: { name: '', adhar: '', village: '', role: '', image: null },
        player5: { name: '', adhar: '', village: '', role: '', image: null },
        player6: { name: '', adhar: '', village: '', role: '', image: null },
        player7: { name: '', adhar: '', village: '', role: '', image: null },
        player8: { name: '', adhar: '', village: '', role: '', image: null },
        player9: { name: '', adhar: '', village: '', role: '', image: null },
        player10: { name: '', adhar: '', village: '', role: '', image: null },
        player11: { name: '', adhar: '', village: '', role: '', image: null },
        player12: { name: '', adhar: '', village: '', role: '', image: null },
        player13: { name: '', adhar: '', village: '', role: '', image: null },
        player14: { name: '', adhar: '', village: '', role: '', image: null },
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
        formData.append('team_name', teamData.team_name);
        formData.append('village', teamData.village);
        formData.append('sponser_1', teamData.sponser_1);
        formData.append('sponser_2', teamData.sponser_2);
        formData.append('captain', teamData.captain);
        formData.append('mobile', teamData.mobile);
        formData.append('logo', teamData.logo);

        // Append player data
        for (let i = 1; i <= 14; i++) {
            const playerKey = `player${i}`;
            formData.append(playerKey, JSON.stringify(teamData[playerKey]));
            if (teamData[playerKey].image) {
                formData.append(`${playerKey}Image`, teamData[playerKey].image);
            }
        }

        try {
            await createTeam(formData);
            toast.success("Team created successfully!", {
                position: "top-center",
                autoClose: 1500,
            });
            console.log("Data inserted successfully", teamData);
        } catch (error) {
            console.error("Error inserting data:", error.response ? error.response.data : error.message);
            toast.error("Failed to create team.", {
                position: "top-center",
                autoClose: 1500,
            });
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


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        3
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player3')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player3')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player3')}
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
                                            onChange={(e) => handleChange(e, 'player3')}
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
                                            onChange={(e) => handleFileChange(e, 'player3.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        4
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player4')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player4')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player4')}
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
                                            onChange={(e) => handleChange(e, 'player4')}
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
                                            onChange={(e) => handleFileChange(e, 'player4.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        5
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player5')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player5')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player5')}
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
                                            onChange={(e) => handleChange(e, 'player5')}
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
                                            onChange={(e) => handleFileChange(e, 'player5.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        6
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player6')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player6')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player6')}
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
                                            onChange={(e) => handleChange(e, 'player6')}
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
                                            onChange={(e) => handleFileChange(e, 'player6.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        7
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player7')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player7')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player7')}
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
                                            onChange={(e) => handleChange(e, 'player7')}
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
                                            onChange={(e) => handleFileChange(e, 'player7.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>



                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        8
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player8')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player8')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player8')}
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
                                            onChange={(e) => handleChange(e, 'player8')}
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
                                            onChange={(e) => handleFileChange(e, 'player8.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        9
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player9')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player9')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player9')}
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
                                            onChange={(e) => handleChange(e, 'player9')}
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
                                            onChange={(e) => handleFileChange(e, 'player9.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        10
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player10')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player10')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player10')}
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
                                            onChange={(e) => handleChange(e, 'player10')}
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
                                            onChange={(e) => handleFileChange(e, 'player10.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        11
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player11')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player11')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player11')}
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
                                            onChange={(e) => handleChange(e, 'player11')}
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
                                            onChange={(e) => handleFileChange(e, 'player11.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        12
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player12')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player12')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player12')}
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
                                            onChange={(e) => handleChange(e, 'player12')}
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
                                            onChange={(e) => handleFileChange(e, 'player12.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>


                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        13
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player13')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player13')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player13')}
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
                                            onChange={(e) => handleChange(e, 'player13')}
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
                                            onChange={(e) => handleFileChange(e, 'player13.image')}
                                            className='border-[1px] md:w-[150px] w-[100px] text-[11px] h-[28px]' 
                                            required
                                        />
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-100 mx-0 ">
                                    <td className="border-[1px] border-black px-4 border-b md:w-[50px] w-[40px]">
                                        14
                                    </td>
                                    <td className="border-[1px] border-black p-0  border-b md:w-[150px] ">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={(e) => handleChange(e, 'player14')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b md:w-[100px]">
                                        <input
                                            type="text"
                                            name='adhar'
                                            onChange={(e) => handleChange(e, 'player14')}
                                            className='px-2 md:w-[150px] w-[100px]'
                                            required
                                        />
                                    </td>
                                    <td className="border-[1px] border-black px-0 border-b w-[100px]">
                                        <input
                                            type="text"
                                            name='village'
                                            onChange={(e) => handleChange(e, 'player14')}
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
                                            onChange={(e) => handleChange(e, 'player14')}
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
                                            onChange={(e) => handleFileChange(e, 'player14.image')}
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
