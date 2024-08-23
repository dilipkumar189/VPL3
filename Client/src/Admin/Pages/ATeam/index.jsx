import React from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';

export default function ATeam() {
    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="px-4 mt-3 sm:ml-64">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-200 sticky top-20 bg-white z-10">
                        <tr>
                            <th></th>
                            <th>Team Name</th>
                            <th>Village</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>1</th>
                            <td className='font-bold'>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td><button className="btn btn-sm btn-outline">View</button></td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td className='font-bold'>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td><button className="btn btn-sm btn-outline">View</button></td>
                        </tr>
                        <tr className="hover">
                            <th>3</th>
                            <td className='font-bold'>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td><button className="btn btn-sm btn-outline">View</button></td>
                        </tr>
        
                    </tbody>
                </table>
            </div>
        </div>
    )
}


