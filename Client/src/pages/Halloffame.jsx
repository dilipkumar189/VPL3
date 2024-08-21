import React from 'react'

export default function Halloffame() {
    return (
        <section className='bg-base-500 h-auto py-16'>
            <div className='mx-16'>
                <div className="mx-auto pb-16 max-w-4xl">
                    <h1 className="md:text-[40px] text-xl font-bold text-center">Hall of Fame</h1>
                </div>
                <div>
                    <h1 className="md:text-[40px] text-xl font-bold py-8">Hall of Fame 2023</h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                        <div className="card card-compact bg-base-100 w-40">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Img"
                                    className="rounded-full w-full h-auto"
                                />
                            </figure>
                            <div className="card-body text-center">
                                <h3>Dinesh Suthar</h3>
                                <p>Man of The Series</p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-40">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Img"
                                    className="rounded-full w-full h-auto"
                                />
                            </figure>
                            <div className="card-body text-center">
                                <h3>Dinesh Suthar P</h3>
                                <p>Best Batsman</p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-40">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Img"
                                    className="rounded-full w-full h-auto"
                                />
                            </figure>
                            <div className="card-body text-center">
                                <h3>Arjun Suthar</h3>
                                <p>Best Bowler</p>
                            </div>
                        </div>
                        <div className="card card-compact bg-base-100 w-40">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Img"
                                    className="rounded-full w-full h-auto"
                                />
                            </figure>
                            <div className="card-body text-center">
                                <h3>Dilip Suthar</h3>
                                <p>Best Filder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
