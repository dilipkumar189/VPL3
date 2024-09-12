import React, { useState } from 'react'
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import { addSponsorType } from '../../../services/api';

const defaultValue = {
    sponsorType: '',
};


export default function STypeform() {

    const [spType, setSpType] = useState(defaultValue);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSpType({ ...spType, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            console.log("Submitting sponsorType:", spType); // Log the state
            await addSponsorType(spType);
            alert("Sponsor type added successfully!");
            navigate("/dashboard/sponsertype");
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="px-4 mt-3 sm:ml-64">
                <div className="mx-auto my-4 max-w-7xl px-4 py-4 sm:px-6 lg:px-8 border-[1px] rounded-lg shadow-sm sticky top-20 bg-white z-10">
                    <div className="grid grid-cols-9 border-b-[1px]">
                        <h1 className="text-gray-600 font-bold text-lg mb-3 col-span-7 md:col-span-8">
                            Add Sponser Type
                        </h1>
                    </div>
                    <form onSubmit={handleSubmit} >
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-5">
                                <label htmlFor="sponsorType" className="block text-sm font-medium leading-6 text-gray-900">
                                    Sponser Type
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="sponsorType"
                                        name="sponsorType"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleChange}
                                        value={spType.sponsorType}
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <Link to={'/dashboard/sponsertype'} className="text-sm font-semibold leading-6 text-gray-900">
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
                    </form>
                </div>
            </div>
        </div>
    )
}


