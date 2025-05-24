import React from 'react'
import Menulinks from './Menulinks'
import Logo from '../assets/Logo.png'

function Navbar(props) {
    return (
        <div>
            <header>
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 md:flex md:items-center md:gap-12">
                            <a className="block" href="#">
                                <img src={Logo} alt="" />
                            </a>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center text-gray-900 gap-6 text-sm">
                                        <Menulinks linkName= "Home" />
                                        <Menulinks linkName= "About" />
                                        <Menulinks linkName= "Booking" />
                                        <Menulinks linkName= "Cars" />
                                        <Menulinks linkName= "Contact" />
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="rounded-md bg-orange-400 px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm"
                                        href={props.btn}
                                    >
                                        Login | Sign up
                                    </a>
                                </div>

                                <div className="block md:hidden">
                                    <button
                                        className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar
