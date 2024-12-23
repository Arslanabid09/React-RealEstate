import React from 'react';

const Footer = () => {
  return (
    <footer className=" mt-32 bg-black text-white font-SpaceGrotesk py-14  ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-8xl font-Anton tracking-widest animate-pulse px-6">Bond</h1>
        <div className="flex flex-col md:flex-row gap-10 px-16">
          <ul className="space-y-4">
            <li className="text-gray-300 font-semibold">Site Map</li>
            <li className="text-sm hover:underline cursor-pointer">Our Work</li>
            <li className="text-sm hover:underline cursor-pointer">Our Client</li>
            <li className="text-sm hover:underline cursor-pointer">Contact Us</li>
          </ul>
          <ul className="space-y-4">
            <li className="text-gray-300 font-semibold">Follow Us</li>
            <li className="text-sm hover:underline cursor-pointer">Instagram</li>
            <li className="text-sm hover:underline cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>
      <hr className=' mt-20 mx-6' />
      <h2 className='my-2 text-end px-7 text-gray-300 text-sm'> © 2024 Bond. All rights reserved</h2>
    </footer>
  );
};

export default Footer;
