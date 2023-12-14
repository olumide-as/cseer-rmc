import React from 'react'
import { Footer, Modal, Navbar } from '../Components'
import { about, aboutbg, herobg, herorobot, joinbg, millionaire, rocket } from '../Assets'


const Home = () => {
    return (
        <div>

            {/*Hero*/}
            <section className="bg-center bg-contain"
                style={{
                    backgroundImage: `url(${herobg})`
                }}>
                <div className="px-4 py-12 md:p-12">
                    <div className="bg-white/20 rounded-3xl rounded-bl-none">

                        <Navbar />


                        {/*Hero Content*/}
                        <div
                            className="flex flex-col xl:flex-row justify-start items-center m-2 xl:m-8 px-2 py-24 xl:p-12"
                        >
                            <div className="space-y-4 text-left">
                                <h2 className="text-white text-3xl">Hey Aspiring Millionaires!</h2>
                                <h1 className="text-white text-5xl">
                                    Welcome to the Rekt-To-Million Club
                                </h1>
                                <a
                                    href="/"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition duration-200 rounded-2xl focus:shadow-outline focus:outline-none bg-none border"
                                    aria-label="Sign up"
                                    title="Sign up"
                                >
                                    Join RTM Club
                                </a>
                            </div>
                            <div>
                                <img src={herorobot} alt="robot" />
                            </div>
                        </div>
                    </div>


                    {/*Closing Paragraph*/}
                    <div className="flex justify-center items-center">
                        <p className="py-12 xl:w-5/12 text-white text-center">
                            Imagine this: 2024, and your life is levelling up faster than a
                            rocket on Red Bull. That’s what we’re all about at the
                            Rekt-To-Million Club – not just crypto gains but life-changing vibes
                            - making millions as your portfolio hit 10000x all for FREE.
                        </p>
                    </div>
                </div>
            </section>


            {/*About*/}
            <section
                className=" bg-center bg-contain py-24"
                style={{
                    backgroundImage: `url(${aboutbg})`,
                }}
            >

                {/*About Section 1*/}
                <div>
                    <div
                        className="flex flex-col xl:flex-row justify-start items-center md:mx-24 p-4 md:p-12"
                    >
                        <div className="space-y-4 text-left xl:w-6/12">
                            <h2 className="text-white text-5xl">Who’s the Seer Behind the Club?</h2>
                            <p className="py-12 text-white">
                                Imagine this: 2024, and your life is levelling up faster than a
                                rocket on Red Bull. That’s what we’re all about at the
                                Rekt-To-Million Club – not just crypto gains but life-changing
                                vibes - making millions as your portfolio hit 10000x all for FREE.
                            </p>
                        </div>
                        <div>
                            <img src={about} alt="about" />
                        </div>
                    </div>
                </div>


                {/*About Section 2*/}
                <div className="flex justify-center items-center">
                    <div className="space-y-4 text-center p-4 md:w-8/12">
                        <h2 className="text-white text-5xl">
                            What's Cooking in the Rekt-To-Million Lab?
                        </h2>
                        <p className="py-12 text-white">
                            Life Lessons from the Crypto Wild West: We've all been rekt, right?
                            But what if I told you those wrecks are the secret sauce to a life
                            that's not just surviving but thriving?
                            <br /><br />
                            Next-Level Opportunities: Forget the usual crypto chatter. We're
                            talking secret handshakes, alpha leaks, and opportunities that don't
                            just change your wallet but your entire world.
                            <br /><br />
                            Mentorship, Degen-Style: This isn't your grandma's mentorship. It's
                            more like a virtual chat over a crypto beer – real, raw, and
                            designed to kickstart your journey to a crazier and more successful
                            you in 2024.
                        </p>
                    </div>
                </div>
            </section>

            {/*Join RMC*/}
            <section
                className="bg-center bg-contain p-4 xl:p-24"

                style={{
                    backgroundImage: `url(${joinbg})`,
                }}
            >

                {/*Why Join RMC*/}
                <div className="bg-white/20 rounded-3xl xl:mx-48 p-4 xl:p-12 space-y-12">
                    <h2 className="text-white text-center text-5xl">Why Join RMC?</h2>
                    <div className="flex flex-col md:flex-row text-white text-left">
                        <ul className="space-y-4">
                            <li>🌟 It's completely FREE</li>
                            <li>🌟 Exclusive access to CseersDao private community</li>
                            <li>🌟 Alpha leaks and Opportunities</li>
                            <li>🌟 Early airdrop updates</li>
                            <li>🌟 WL opportunities for top web3 projects</li>
                            <li>🌟 Guides to Testnet, Mainnet & Retros</li>
                            <li>🌟 Degen calls for memecoins</li>
                        </ul>

                        <ul className="space-y-4">
                            <li>🌟 Fundamental analysis s</li>
                            <li>🌟 Virtual classNamees</li>
                            <li>🌟 Access to web3 jobs</li>
                            <li>🌟 Giveaways, Events & Crypto lectures</li>
                            <li>🌟 Complete guides on how to Airdrop</li>
                            <li>🌟 Financial Education on management & savings</li>
                            <li>
                                🌟 Community outreach, strategic partnerships & innovative IRL
                                event
                            </li>
                        </ul>
                    </div>
                </div>

                {/*How to be a Millionaire*/}
                <div className="px-4 py-24 xl:p-24">
                    <h2 className="text-white text-center text-5xl">
                        How to be a Millionaire in 2024
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-12">
                        <div
                            className="bg-white/20 rounded-3xl p-4 md:py-12 space-y-4 text-center"
                        >
                            <h3 className="text-cyan-300 text-2xl">Take The Leap</h3>
                            <p className="text-white">
                                Hit that “Early Access” button. It’s like jumping into a crypto
                                pool – refreshing and might just change your life.
                            </p>
                        </div>

                        <div
                            className="bg-white/20 rounded-3xl p-4 md:py-12 space-y-4 text-center"
                        >
                            <h3 className="text-cyan-300 text-2xl">Join the RM Club</h3>
                            <p className="text-white">
                                A club that’s not just about crypto gains but about making life l
                                egendary. We’re in this together.
                            </p>
                        </div>

                        <div
                            className="bg-white/20 rounded-3xl p-4 md:py-12 space-y-4 text-center"
                        >
                            <h3 className="text-cyan-300 text-2xl">
                                Enter the Rekt-To- Million vibe
                            </h3>
                            <p className="text-white">
                                Once you’re in, buckle up. We’re diving into a world where chaos
                                meets opportunity, and your life takes a detour to Awesome Town.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/*Be a Milionaire*/}
            <section className="bg-center bg-cover"
                style={{
                    backgroundImage: `url(${millionaire})`,
                }}>
                <div className="flex justify-start items-center px-4 py-24 md:p-12 xl:p-24">
                    <div className="space-y-4 text-left">
                        <h2 className="text-white text-5xl">Want to be a Millionaire in 2024?</h2>
                        <p className="text-white">
                            Secure your spot here for FREE (Limited to just 10k)
                        </p>
                        <a
                            href="./signup"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium text-white transition duration-200 rounded-2xl focus:shadow-outline focus:outline-none bg-none border"
                            aria-label="Early Access"
                            title="Early Access"
                        >
                            Register Now
                        </a>
                    </div>
                    <div>
                        <img src={rocket} alt="rocket" />
                    </div>
                </div>

                <Footer />


            </section>

            {/*Modal*/}
            <Modal/>



        </div>
    )
}

export default Home