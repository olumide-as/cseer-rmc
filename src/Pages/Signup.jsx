import React from 'react'
import { Navbar } from '../Components'
import { cseer, herobg, herorobot } from '../Assets'

const Signup = () => {
    return (
        <div>
            <section className="bg-center bg-contain"

                style={{
                    backgroundImage: `url(${herobg})`
                }}>
                <div className="px-4 py-12 md:p-12">
                    <div
                        className="rounded-3xl rounded-bl-none"
                    >
                        {/*Menu*/}
                        <Navbar />

                        {/*Signup*/}
                        <div className="grid xl:grid-cols-2">
                            <div className="bg-center bg-cover"

                                style={{
                                    backgroundImage: `url(${herorobot})`,
                                }}></div>
                            <div className="mx-2 my-8 p-4 md:m-24 md:p-12 bg-white/30 rounded-3xl space-y-8">
                                <img src={cseer} alt="cseer" />
                                <div>
                                    <h4 className="text-cyan-300 text-center text-2xl">
                                        Create an Account
                                    </h4>
                                    <p className="text-cyan-300 text-center">
                                        I have an account,
                                        <a
                                            href="./login"
                                            aria-label="Company"
                                            title="Company"
                                            className="text-emerald-300"
                                        > Login</a>
                                    </p>
                                </div>
                                <form>
                                    <div className="mb-1 sm:mb-2">
                                        <input
                                            placeholder="Name"
                                            required=""
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white/0 border border-cyan-300 rounded-2xl text-white focus:text-white"
                                            id="name"
                                            name="name"
                                        />
                                        <div className="mb-1 sm:mb-2">
                                            <input
                                                placeholder="Email"
                                                required=""
                                                type="text"
                                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white/0 border border-cyan-300 rounded-2xl text-white focus:text-white"
                                                id="email"
                                                name="email"
                                            />
                                            <div className="mb-1 sm:mb-2">
                                                <input
                                                    placeholder="Password"
                                                    required=""
                                                    type="password"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white/0 border border-cyan-300 rounded-2xl text-white focus:text-white" id="password"
                                                    name="password"
                                                />
                                            </div>
                                            <div className="mb-1 sm:mb-2">
                                                <input
                                                    placeholder="Confirm Password"
                                                    required=""
                                                    type="confirm_password"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white/0 border border-cyan-300 rounded-2xl text-white focus:text-white" id="password"
                                                    name="confrim_password"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-4 mb-2 sm:mb-4">
                                            <button
                                                type="submit"
                                                className="w-full inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                            >
                                                Create Account
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup