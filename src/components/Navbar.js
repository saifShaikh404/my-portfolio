import React, { useState } from 'react';
import { FaBars, FaTimes} from "react-icons/fa"
import {Link}  from 'react-scroll';

const Navbar = () => {

    const [nav , setNav] = useState(false)

    const links = [
        {id: 1, link: 'home'},
        {id: 2, link: 'about'},
        {id: 3, link: 'projects'},
        {id: 4, link: 'experience'},
        {id: 5, link: 'contact'}
    ]

  return (
    <header>
        <nav className="flex justify-between items-center w-full z-50 h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="font-signature text-5xl ml-2">Saif</h1>
            </div>

            {/* for pc  */}
            <ul className="hidden md:flex">
                {
                    links.map((ele, index) => {
                        return(
                            <li key={index} className="cursor-pointer px-4 capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                                <Link to={ele.link} smooth duration={500}>{ele.link}</Link>
                            </li>
                        )
                    })
                }
            </ul>

            {/* for mobile  */}
            <div className="text-gray-500 md:hidden cursor-pointer pr-4 z-10" onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }
            </div>

            {
                nav ? <ul className="md:hidden flex justify-center items-center flex-col absolute top-0 left-0 w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800">
                {
                    links.map((ele, index) => {
                        return(
                            <li key={index} className="cursor-pointer px-4 capitalize py-6 text-4xl">
                                <Link to={ele.link} onClick={() => setNav(false)} smooth duration={500}>{ele.link}</Link>
                            </li>
                        )
                    })
                }
                </ul> : null
                
            }
           

        </nav>
    </header>
  )
}

export default Navbar
