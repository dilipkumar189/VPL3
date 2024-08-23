import React from 'react'
import Header from '../../Layouts/Header';
import Sidebar from '../../Layouts/Sidebar';

const inputCss = "block py-1 px-2 w-full text-sm text-gray-900 bg-transparent border-[1px] border-gray-300 rounded-[4px] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"

const labelCss = "peer-focus:font-medium px-2 text-[13px] absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-70 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"

export default function SType() {
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
                    <form>
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-5">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">
                                    Cancel
                                </button>
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

                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-100 sticky top-60 bg-white z-10">
                        <tr>
                            <th></th>
                            <th>Sponser Type</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover">
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                        <tr className="hover">
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}


