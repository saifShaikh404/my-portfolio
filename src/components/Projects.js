import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Projects = () => {

    const projects = [
        {
            id: 1,
            img: arrayDestruct
        },
        {
            id: 2,
            img: installNode
        },
        {
            id: 3,
            img: reactParallax
        },
        {
            id: 4,
            img: reactSmooth
        },
        {
            id: 5,
            img: navbar
        },
        {
            id: 6,
            img: reactWeather
        },
    ]

  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* heading  */}
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">My Projects</p>
            <p className="py-6">Checkout some of my work right here</p>
        </div>

        {/* card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                projects.map((ele, index) => {
                    return(
                        <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
                            <div className="rounded-md overflow-hidden">
                                <img src={ele.img} alt="" className="rounded-md duration-200 hover:scale-105 " />
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Demo</button>
                                <button className="w-1/2 px-6 m-4 duration-200 hover:scale-105">Code</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>

      </div>
    </div>
  )
}

export default Projects
