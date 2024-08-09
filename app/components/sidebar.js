'use client'
import Link from 'next/link';
import React, { useState,  } from 'react';
import { FiAlignRight } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import logo from "../../public/Img/logowhite.png";
import { IoIosHome } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { BsLaptopFill } from "react-icons/bs";
import { IoCalendarClear } from "react-icons/io5";

export const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={`xl:h-[100vh]  fixed xl:static bg-custom-blue w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto border-r border-gray-300 h-full -left-full top-0 p-8 z-50 flex flex-col justify-between transition-all text-white ${showMenu ? "left-0" : "-left-full"}`}>
                <div className="mb-8"> 
                <div className="flex items-center space-x-2 mb-12">
                    <Image src={logo} alt="logo" className="w-11
                        " />
                       <div className="ml-2">
                            <h1 className="text-2xl font-medium">Hermes</h1>
                            <p className="text-[8px] font-light">Transformando vidas, construyendo futuro. </p>
                        </div>
                </div>
        
                    <ul className='text-white'>
                        <li>
                            <Link href="/homeView" className='flex items-center gap-4 py-4 px-4  hover:bg-narvy-blue rounded-xl transition-colors'>
                                <IoIosHome  className='w-5 h-5' />
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/reportsView" className='flex items-center gap-4 py-3 px-4  hover:bg-narvy-blue rounded-xl transition-colors'>
                            <BsGraphUp />
                                Reportes
                            </Link>
                        </li>
                        <li>
                        <Link href="/movementsView" className='flex items-center gap-4 py-3 px-4 hover:bg-narvy-blue rounded-xl transition-colors'>
                        <FaClock />
                        Consulta movimientos
                    </Link>

                        </li>
                        <li>
                            <Link href="/equipmentView" className='flex items-center gap-4 py-3 px-4 hover:bg-narvy-blue rounded-xl transition-colors'>
                            <BsLaptopFill />
                                Consulta equipos
                            </Link>
                        </li>
                        <li>
                            <Link href="/eventsView" className='flex items-center gap-4 py-3 px-4  hover:bg-narvy-blue rounded-xl transition-colors'>
                            <IoCalendarClear />
                                Consulta eventos
                            </Link>
                        </li>
                    </ul>
            </div>

                <ul>
                    <li className='flex items-center gap-4 py-3 px-4 hover:bg-narvy-blue rounded-xl transition-colors'> <IoSettings/>
                        Configuración 
                    </li>

                </ul>
                   {/* bton */}
                    <button onClick={toggleMenu} className='text-white bg-custom-blue fixed bottom-4 right-4 p-2 text-lg rounded-full lg:hidden'>

                        {showMenu ? <IoClose/> : <FiAlignRight/>}
                    </button>
            </div>
    );
}; 