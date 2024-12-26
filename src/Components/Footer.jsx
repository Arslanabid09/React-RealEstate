import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-32 bg-black text-white font-SpaceGrotesk py-14 relative">
      <div className="flex flex-col-reverse md:flex-row justify-end items-end gap-10">
        {/* <h1 className="text-8xl font-Anton tracking-widest animate-pulse px-6 relative z-10">
          Vibe
        </h1> */}
        <div className="flex md:flex-row gap-12 px-16">
          <ul className="space-y-4">
            <li className="text-gray-300 text-sm font-semibold">Site Map</li>
            <li className="text-base hover:underline cursor-pointer">Our Work</li>
            <li className="text-base hover:underline cursor-pointer">Our Client</li>
            <li className="text-base hover:underline cursor-pointer">Contact Us</li>
          </ul>
          <ul className="space-y-4">
            <li className="text-gray-300 text-sm font-semibold">Follow Us</li>
            <li className="text-base hover:underline cursor-pointer">Instagram</li>
            <li className="text-base hover:underline cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="relative mt-20 mx-6">
        <h1 className=" text-7xl lg:text-8xl  uppercase font-SpaceGrotesk tracking-widest  text-start ">
          Vibe
        </h1>
        <hr className="border-gray-600" />
      </div>
      <h2 className="my-2 text-end px-7 text-gray-300 text-sm">
        © 2024 Vibe. All rights reserved
      </h2>
    </footer>
  );
};

export default Footer;
