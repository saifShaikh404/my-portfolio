import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import HeroImage from '../assets/heroImage.png'

const Home = () => {
  return (
    <div name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div 
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >

        {/* content  */}
        <div className="flex flex-col justify-center h-full">
            <h2 className="text-white text-4xl sm:text-7xl font-bold">I'm a Full Stack Developer</h2>
            <p className="text-gray-500 py-4 max-w-md">
                I have 8 months of experience building and designing web application. Currently, I love to
                 work on web application using technologies like React, Node JS, Express JS and MongoDB.
            </p>
            <div>
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Portfolio 
                    <span className="group-hover:rotate-90 duration-150">
                    <MdOutlineKeyboardArrowRight className="ml-1" size={25}/>
                    </span>
                </button>
            </div>
        </div>
        {/* image  */}
        <div>
            <img 
                src={HeroImage} alt="my pfp"
                className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
        </div>

      </div>
    </div>
  )
}

export default Home
