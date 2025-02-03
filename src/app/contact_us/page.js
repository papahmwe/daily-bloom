'use client'; // Required for using React hooks and client-side interactivity

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Image from "next/image";


export default function ContactUs() {
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-2xl w-full max-w-5xl">
      {/* Left Section */}
      <div className="bg-[#8174FF] p-6 rounded-lg">
        <p className="font-bold font-['Montserrat'] text-white mb-4 ">Get in Touch</p>
        <h2 className="text-2xl text-white font-['Montserrat'] font-bold mb-4">
          How Can I Help? Reach Out Feedback To Us.
        </h2>
        <p className="text-white font-['Montserrat'] mb-4">
          We're here to help. Send us a
          message, and we'll be here for you.
        </p>
        <hr className='mb-0'></hr>
        {/* Contact Form */}
        <form action="#" method="POST" className="mx-auto mt-10 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-[20px] font-['Montserrat'] font-bold text-white"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-[20px] font-['Montserrat'] font-bold text-white"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-[20px] font-['Montserrat'] font-bold text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-[20px] font-['Montserrat'] font-bold text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue={''}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-10 justify-end items-center inline-flex sm:col-span-2">
              <button
                type="submit"
                className="block w-[156] rounded-md bg-white px-3.5 py-2.5 text-center text-[16px] font-['Montserrat'] text-[#8174FF] font-bold shadow-xs hover:border-violet-500"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="pt-[91px] pb-[60px] left-[750px]  rounded-[15px] border-2 border-[#8174ff] flex-col justify-start items-start gap-2.5 inline-flex">
        <Image
          src="/assets/contact.png" 
          alt="Contact Image" 
          width={360} 
          height={620}
          className="object-cover"
        />
      </div>
    </div>
  </div>
  );
}
      
 