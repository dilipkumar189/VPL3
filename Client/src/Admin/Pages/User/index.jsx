import React from 'react'
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';

export default function User() {
    return (
        <div className="">
            <Header />
            <Sidebar />
            <div className="px-4 mt-3 sm:ml-64">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-200 sticky top-20 bg-white z-10">
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Captain</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='hover'>
                            <th>1</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td><input type="checkbox" className="toggle toggle-sm toggle-success" /></td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className='hover'>
                            <th>2</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Carroll Group
                                <br />
                                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                            </td>
                            <td><input type="checkbox" className="toggle toggle-sm toggle-success" /></td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr className='hover'>
                            <th>3</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Carroll Group
                                <br />
                                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                            </td>
                            <td><input type="checkbox" className="toggle toggle-sm toggle-success" /></td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}


