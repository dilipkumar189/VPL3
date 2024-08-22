import React from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';

export default function SType() {
    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="px-4 mt-3 sm:ml-64">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-100 sticky top-20 bg-white z-10">
                        <tr>
                            <th></th>
                            <th>Sponser Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


