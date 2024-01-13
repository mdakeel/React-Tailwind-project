import React, { Component, useState } from 'react'
import logo from '../assets/logo.png'

//react icon start
import { GrLanguage } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
// react icon end

//NOTE when clink on nav menu for scroll download npm i react-scroll and import 
import { Link } from 'react-scroll';



const Navbar = () => {
    // menu icon start
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    // menu icon ende

    // menu item start using map
    const navIems = [
        {link: "Overview", path: "home"},
        {link: "Feature", path: "feature"},
        {link: "About", path: "about"},
        {link: "Pricing", path: "pricing"},
    ]
    //menu item end

    return (
    <>   
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                {/* logo and menu */}
                <div className='flex space-x-14 items-center'>
                    <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                        <img src={logo} alt="logo" className='w-10 inline-block items-center' />
                        <span>XYZ</span>
                    </a>
                    
                    {/* showing navitem using map */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navIems.map(({link,path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)
                        }
                    </ul>
                </div>
                
                {/* language & SignUp */}
                <div className='space-x-12 hidden md:flex items-center'>
                        <a href="/" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2'/>Language</a>
                    <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>
                        Sign Up
                    </button>
                </div>

                {/* menu btn. only display on mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-white text-xl focus:outline-none focus:text-gray-300'>
                        {
                            isMenuOpen ? 
                            (<FaXmark className='w-6 h-6 text-primary'/>) 
                            : 
                            (<FaBars className='w-6 h-6 text-primary'/>)
                        }
                    </button>
                </div>
                </div>
                </nav>
                {/* menu btn end */}

                {/* navitem for mobile devices start */}
                        <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                            {
                                navIems.map(({link,path}) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block text-white hover:text-gray-300 cursor-pointer'
                                onClick={toggleMenu}
                                >{link}</Link>)
                            }
                        </div>
                {/* navitem for mobile devices end */}
        </>   
    )
  
}

export default Navbar