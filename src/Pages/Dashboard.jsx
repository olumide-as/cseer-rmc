import React from 'react'
import { Navbar } from '../Components'
import { favicon, herobg } from '../Assets'

const Dashboard = () => {
    return (
        <div>
            <section className="bg-center bg-fixed"
            
      style={{
        backgroundImage: `url(${herobg})`,
      }}>
                <div className="px-4 py-12 md:p-12">
                    <div className="bg-white/20 rounded-3xl rounded-bl-none">
                        <Navbar />

                        
      {/*Hero Content*/}
                        <div
                            className="text-white flex flex-col text-center xl:space-y-0 xl:flex-row justify-end items-center m-2 xl:m-8 px-2 xl:p-12"
                        >
                            <div className="order-2 xl:order-1 p-4">
                                <p className="text-2xl">200 Points</p>
                                <p>10 Referrals</p>
                            </div>
                            <div
                                className="flex flex-col xl:flex-row xl:space-x-4 order-1 xl:order-2 p-4"
                            >
                                <img src={favicon} alt="user" />
                                <div>
                                    <p>@username</p>
                                    <p>wallet address</p>
                                </div>
                            </div>
                        </div>
                    </div>

                         {/*Task and Leaderboard*/}
                    <div className="bg-white/20 rounded-3xl flex flex-col md:flex-row">
                        <div className="basis-4/12 p-4 m-4 border rounded-3xl space-y-12">
                            <div>
                                <h3 className="text-white text-3xl">Earn Points</h3>
                                <p className="text-white">Carry out each task to earn more points</p>
                            </div>
                            <div>
                                <div className="space-y-2 py-4">
                                    <p className="text-white text-xl">5 Points</p>
                                    <p className="text-white">Submit Your Email</p>
                                    <form>
                                        <div className="mb-1 sm:mb-2">
                                            <input
                                                placeholder="Email"
                                                required=""
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white/0 border border-cyan-300 rounded-2xl text-white focus:text-white"
                                                id="email"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="w-full inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    <hr />
                                </div>

                                <div className="space-y-2 py-4">
                                    <p className="text-white text-xl">10 Points</p>
                                    <p className="text-white">Follow @cseersdao</p>
                                    <div className="mt-4 mb-2 p-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                        >
                                            Follow
                                        </button>
                                    </div>
                                    <hr />
                                </div>

                                <div className="space-y-2 py-4">
                                    <p className="text-white text-xl">10 Points</p>
                                    <p className="text-white">
                                        Follow the Seer behind the Club @Dtwo_Seers
                                    </p>
                                    <div className="mt-4 mb-2 p-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                        >
                                            Follow
                                        </button>
                                    </div>
                                    <hr />
                                </div>

                                <div className="space-y-2 py-4">
                                    <p className="text-white text-xl">15 Points</p>
                                    <p className="text-white">Like and RT this tweet</p>
                                    <div className="mt-4 mb-2 p-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                        >
                                            Tweet
                                        </button>
                                    </div>
                                    <hr />
                                </div>

                                <div className="space-y-2 py-4">
                                    <p className="text-white text-xl">15 Points</p>
                                    <p className="text-white">Join out Telegram Channel</p>
                                    <div className="mt-4 mb-2 p-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                        >
                                            Telegram
                                        </button>
                                    </div>
                                    <hr />
                                </div>

                                <div className="space-y-2 py-4">
                                    <p className="text-white text-xl">15 Points</p>
                                    <p className="text-white">Join out Discord Channel</p>
                                    <div className="mt-4 mb-2 p-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                        >
                                            Discord
                                        </button>
                                    </div>
                                    <hr />
                                </div>

                                <div className="space-y-2 py-4">
                                    <p className="text-white text-xl">20 Points</p>
                                    <p className="text-white">Share this tweet</p>
                                    <div className="mt-4 mb-2 p-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                        >
                                            Tweet
                                        </button>
                                    </div>
                                    <hr />
                                </div>

                                <div className="space-y-2 py-4">
                                    <p className="text-white text-xl">15 Points</p>
                                    <p className="text-white">Refer Friends</p>
                                    <div className="mt-4 mb-2 p-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                        >
                                            Referral Link
                                        </button>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>

                        <div className="basis-8/12 p-4 m-4 border rounded-3xl">
                            <h3 className="text-white text-3xl">Leaderboard</h3>
                            <p className="text-white">You're ranked #1134</p>
                            <div
                                className="p-8 text-white flex flex-col rounded justify-center overflow-x-auto"
                            >
                                <table className="w-full table-auto">
                                    <thead>
                                        <tr className="border-y-2">
                                            <th className="p-2">Rank</th>
                                            <th className="p-2">Name</th>
                                            <th className="p-2">Invited By</th>
                                            <th className="p-2">Points</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-2">01</td>
                                            <td className="p-2">Malcolm Lockyer</td>
                                            <td className="p-2">The Eagles</td>
                                            <td className="p-2">390</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">02</td>
                                            <td className="p-2">The Eagles</td>
                                            <td className="p-2">Earth</td>
                                            <td className="p-2">350</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">03</td>
                                            <td className="p-2">Malcolm Lockyer</td>
                                            <td className="p-2">Earth</td>
                                            <td className="p-2">280</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default Dashboard