"use client";

import React, { useState } from "react";
import TextInput from "../TextInput";
import {
  BsFillChatFill,
  BsFillEnvelopeFill,
  BsFillFolderFill,
  BsPeople,
  BsPeopleFill,
} from "react-icons/bs";
import { BiChat, BiEnvelope, BiFolder } from "react-icons/bi";
import { PiPhone, PiPhoneFill } from "react-icons/pi";
import { MdMessage } from "react-icons/md";
import Link from "next/link";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className="w-full lg:w-1/2 shadow-lg p-7 rounded-2xl bg-white">
      <div className="w-full flex flex-col lg:flex-row items-center gap-0 lg:gap-10 mt-4">
        <TextInput
          label="Your name"
          icon={BsPeopleFill}
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <TextInput
          label="Your email"
          icon={BsFillEnvelopeFill}
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-10 lg:mt-4">
        <TextInput
          label="Phone Number"
          icon={PiPhoneFill}
          placeholder="Enter Your Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required={false}
        />
        <TextInput
          label="Subject"
          icon={BsFillFolderFill}
          placeholder="Enter Your Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required={true}
        />
      </div>
      <div className="w-full lg:my-4">
        <label className="uppercase block text-sm font-medium text-gray-700 mb-1">
          YOUR MESSAGE (OPTIONAL)
        </label>
        <div className="flex items-start border border-text-color-dark-two rounded-md px-3 py-2 bg-white shadow-sm focus-within:ring-1 focus-within:ring-black">
          <textarea
            cols={30}
            rows={7}
            name={"message"}
            required={false}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={"Enter Your Message"}
            className="w-full border-none outline-none bg-transparent text-sm text-gray-800 placeholder-gray-400 py-2"
          />
          <BsFillChatFill className="text-black mr-2" size={20} />
        </div>
      </div>
      <p className="uppercase text-xs md:text-sm leading-4 mt-4 mb-8 font-medium">
        I agree to receive SMS communications from Anchor Bridge Consulting.
        Review our{" "}
        <a href="/privacy-policy" className="text-blue-700">
          Privacy Policy
        </a>
        for details.
      </p>

      <button className="w-full bg-black text-xl hover:bg-white border border-black rounded-tl-lg rounded-br-lg text-white hover:rounded-tr-lg hover:rounded-bl-lg hover:rounded-tl-none hover:rounded-br-none  hover:text-black p-4 cursor-pointer duration-500 ">
        <Link href="/privacy-policy">Submit</Link>
      </button>
    </div>
  );
};

export default ContactForm;
