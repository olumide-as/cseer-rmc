import React, { useState, useEffect } from 'react';
import { rmc } from '../Assets';

const Modal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // Show the modal after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Set up an interval to show the modal every 2 minutes
    const intervalId = setInterval(() => {
      setShowModal(true);
    }, 30000); // 30 sec in milliseconds

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div class="z-10 bg-white rounded-md shadow-lg bg-center bg-cover"
          
          style={{
            backgroundImage: `url(${rmc})`,
        }}>
                    <div class="bg-black/80">
                        <div class="space-y-2 p-8 m-4 text-center">
                            <h2 class="text-3xl text-cyan-300">Rekt-To-Million Club!</h2>
                            <p class="text-white">Ready to Unleash the degen within?</p>
                        </div>
                        <div class="gap-3 p-4 border-t">
                            <button onClick={closeModal} class="w-full h-12 px-6 font-medium text-black transition duration-200 rounded-2xl shadow-md focus:shadow-outline focus:outline-none bg-gradient-to-r from-cyan-300 to-emerald-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
