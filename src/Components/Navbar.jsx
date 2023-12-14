import React, { useState } from 'react'
import { cseer } from '../Assets'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            {/*Desktop Menu*/}
            <div class="">
                <div class="">
                    <div class="relative flex items-center justify-between">
                        <div
                            class="p-4 xl:basis-4/12 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
                        >
                            <a
                                href="https://cseersdao.com/"
                                aria-label="Company"
                                class="inline-flex items-center"
                            >
                                <img src={cseer} alt='cseer' class="w-48 xl:w-64" />
                            </a>
                        </div>

                        <div
                            class="relative rounded-3xl rounded-tl-none rounded-br-none hidden lg:flex md:basis-9/12 justify-between bg-black px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
                        >
                            <ul class="flex items-center space-x-8 lg:flex">
                                <li>
                                    <a
                                        href="https://cseersdao.com/about"
                                        aria-label="Our product"
                                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                    >About</a>
                                </li>
                                <li>
                                    <a
                                        href="https://medium.com/@CseersDao"
                                        aria-label="Our product"
                                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                    >Blog</a>
                                </li>
                                <li>
                                    <a
                                        href="https://cseersdao.com/clumsy-astro-master/"
                                        aria-label="Product pricing"
                                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                    >Play </a>
                                </li>
                                <li>
                                    <a
                                        href="https://cseersdao.com/cseersai"
                                        aria-label="About us"
                                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                    >CSeersAI</a>
                                </li>
                                <li>
                                    <a
                                        href="./"
                                        aria-label="About us"
                                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                    >RMC</a>
                                </li>
                            </ul>
                            <ul class="items-center hidden space-x-8 lg:flex">
                                <li>
                                    <a
                                        href="./login"
                                        class="inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                        aria-label="Sign up"
                                    >
                                        Join CSeersDAO
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/*Mobile menu*/}
                        <div class="lg:hidden">
                            <button
                                aria-label="Open Menu"
                                title="Open Menu"
                                class="p-2 mr-4 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                    ></path>
                                </svg>
                            </button>

                            {/*Mobile menu dropdown*/}
                            {isMenuOpen && (
                            <div
                                class="absolute top-0 left-0 w-full lg:hidden"
                            >
                                <div class="p-5 bg-black rounded-3xl shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                href="https://cseersdao.com/"
                                                aria-label="Company"
                                                class="inline-flex items-center"
                                            >
                                                <img src={cseer} alt='cseer' class="w-64" />
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => setIsMenuOpen(false)}
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            <li>
                                                <a
                                                    href="https://cseersdao.com/about"
                                                    aria-label="Our product"
                                                    class="font-medium text-white"
                                                >About</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    href="https://medium.com/@CseersDao"
                                                    aria-label="Our product"
                                                    class="font-medium text-white"
                                                >Blog</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    href="https://cseersdao.com/clumsy-astro-master/"
                                                    aria-label="Product pricing"
                                                    class="font-medium text-white"
                                                >Play</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    href="https://cseersdao.com/cseersai"
                                                    aria-label="About us"
                                                    class="font-medium text-white"
                                                >CSeersAI</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    href="./"
                                                    aria-label="About us"
                                                    class="font-medium text-white"
                                                >RMC</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    href="./login"
                                                    class="inline-flex items-center justify-center h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300"
                                                    aria-label="Sign up"
                                                >
                                                    Join CSeersDAO
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar