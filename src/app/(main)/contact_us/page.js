"use client"; // Required for using React hooks and client-side interactivity

import { toast } from "sonner";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className=" bg-backgroundPrimary w-[85%] mx-auto my-8 flex justify-center items-center gap-5">
      {/* Left Section */}
      <div className="bg-[#8174FF] p-7 rounded-[10px] w-[50%] h-[95vh]">
        <div className="flex flex-col justify-start items-start gap-4 mb-5">
          <p className="font-[600] text-[20px] font-montserrat text-backgroundPrimary tracking-wide">
            Get in Touch
          </p>
          <h2 className="tracking-wide text-[30px] text-backgroundPrimary font-montserrat font-[600] leading-[39.01px] ">
            How Can I Help? Reach Out
            <br />
            Feedback To Us.
          </h2>
          <p className="tracking-wide text-[18px] text-backgroundPrimary font-montserrat font-[500] leading-[20px]">
            Have questions or feedback? We’ve here to help. Send us a message.
            and we’ll be here for you.
          </p>
        </div>
        <hr></hr>
        {/* Contact Form */}
        <form action="#" method="POST" className="mt-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-[20px] font-montserrat font-[500] text-backgroundPrimary tracking-wide "
              >
                First name
              </label>
              <div className="">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-[10px] bg-backgroundPrimary opacity-80 px-5 py-3 outline-none "
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-[20px] font-montserrat font-[500] text-backgroundPrimary tracking-wide"
              >
                Last name
              </label>
              <div className="">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-[10px] bg-backgroundPrimary opacity-80 px-5 py-3 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-[20px] font-montserrat font-[500] text-backgroundPrimary tracking-wide"
              >
                Email
              </label>
              <div className="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-[10px] bg-backgroundPrimary opacity-80 px-5 py-3 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-[20px] font-montserrat font-[500] text-backgroundPrimary tracking-wide"
              >
                Message
              </label>
              <div className="">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-[10px] bg-backgroundPrimary opacity-80 px-5 py-3 outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className=" justify-end items-center inline-flex sm:col-span-2">
              <button
                type="button"
                onClick={() =>
                  toast("Send Successfully! 🎉", {
                    duration: 1000,
                    style: {
                      backgroundColor: "#8778FB",
                      color: "#FFFFFF",
                      letterSpacing: "0.025rem",
                      borderRadius: "10px",
                      outline: "none",
                      border: "none",
                      padding: " 18px",
                      fontSize: "16px",
                      fontFamily: "Montserrat, sans-serif",
                    },
                  })
                }
                className="block py-2 px-10 rounded-[10px] bg-backgroundSecondary bg-opacity-80 text-center text-[20px] font-montserrat font-[600] tracking-wide text-mainPrimary hover:bg-opacity-100 shadow-inner duration-700 transition-all"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="rounded-[10px] border border-[#8174ff] flex justify-center items-center p-7 w-[30%] h-[95vh]">
        <Image
          src="/assets/contact_images/contact.png"
          alt="Contact Image"
          width={360}
          height={620}
        />
      </div>
    </div>
  );
}
