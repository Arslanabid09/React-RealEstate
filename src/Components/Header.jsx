import React, { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6'; // Updated icon for cancel
import { FaTimes } from 'react-icons/fa';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className="h-screen relative">
            <div className="flex justify-between items-center px-5">
                <div className='text-center tracking-wider'>
                <h1 className='font-light text-5xl'>Bond</h1>
                <span className='font-semibold'>Retail Partner</span>
                </div>
                {!toggle ? (
                    <FaBarsStaggered
                        onClick={() => setToggle(true)}
                        className=" block md:hidden text-xl cursor-pointer z-40"
                    />
                ) : null}
            </div>

            <nav
                className={`${
                    toggle ? 'flex' : 'hidden'
                } fixed inset-0 bg-black text-white px-5 text-5xl z-50`}
            >
                {toggle ? (
                    <span
                        className="absolute top-3 right-5 text-white text-3xl cursor-pointer"
                        onClick={() => setToggle(false)}
                    >
                        <FaTimes/>
                    </span>
                ) : null}
                <ul className=" flex md:hidden flex-col gap-8 items-start justify-center h-full">
                    <li className="border-b">Home</li>
                    <li className="border-b">Our Work</li>
                    <li className="border-b">Our Clients</li>
                    <li className="border-b">Contact Us</li>
                </ul>
            </nav>
                {/* ul for large screen */}
                <ul className=" flex md:hidden flex-col gap-8 items-start justify-center h-full">
                    <li className="border-b">Home</li>
                    <li className="border-b">Our Work</li>
                    <li className="border-b">Our Clients</li>
                    <li className="border-b">Contact Us</li>
                </ul>
        </header>
    );
};

export default Header;
