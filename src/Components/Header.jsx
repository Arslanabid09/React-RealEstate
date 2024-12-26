import React, { useState } from 'react';
import { FaBarsStaggered } from 'react-icons/fa6'; // Updated icon for cancel
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <header className="font-SpaceGrotesk border-b border-gray-300 py-5">
            {/* Header Container */}
            <div className="flex justify-between items-center px-5">
                {/* Logo Section */}
                <Link to={'/'} className="text-center tracking-wider">
                    <h1 className="font-light text-5xl">VIBE</h1>
                    <span className="font-semibold">Housing Network</span>
                </Link>

                {/* Hamburger Menu for Small Screens */}
                {!toggle ? (
                    <FaBarsStaggered
                        onClick={() => setToggle(true)}
                        className="block md:hidden text-xl cursor-pointer z-40"
                    />
                ) : null}

                {/* Navigation Menu for Large Screens */}
                <ul className="hidden md:flex  gap-10 text-base font-">
                    <li className="cursor-pointer hover:text-gray-500"><Link to={'/'}>Home</Link></li>
                    <li className="cursor-pointer hover:text-gray-500"><Link to={'/our-work'}>Our Work</Link></li>
                    <li className="cursor-pointer hover:text-gray-500"><Link to={''}>Our Clients</Link></li>
                    <li className="cursor-pointer hover:text-gray-500"><Link to={'/contact'}> Contact Us</Link></li>
                </ul>
            </div>

            {/* Full-Screen Navigation Menu for Small Screens */}
            <nav
                className={`${
                    toggle ? 'flex' : 'hidden'
                } fixed inset-0 bg-black text-white px-5 text-5xl`}
            >
                {toggle ? (
                    <span
                        className="absolute top-3 right-5 text-white text-3xl cursor-pointer"
                        onClick={() => setToggle(false)}
                    >
                        <FaTimes />
                    </span>
                ) : null}
                <ul className="flex md:hidden flex-col gap-8 items-start justify-center h-full">
                    <li className="border-b">Home</li>
                    <li className="border-b">Our Work</li>
                    <li className="border-b">Our Clients</li>
                    <li className="border-b">Contact Us</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
