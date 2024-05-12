import React from 'react'
import {FaLinkedin, FaGithub, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const Links = () => {

    const linksArr = [
        {
            id: 1,
            jsx: (
                <>
                    LinkedIn <FaLinkedin size={25} />
                </>
            ),
            href: "javascript:void(0);",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            jsx: (
                <>
                    GitHub <FaGithub size={25} />
                </>
            ),
            href: "https://github.com/saifShaikh404",
            style: ""
        },
        {
            id: 3,
            jsx: (
                <>
                    Facebook <FaFacebook size={25} />
                </>
            ),
            href: "javascript:void(0);",
            style: ""
        },
        {
            id: 4,
            jsx: (
                <>
                    Mail <HiOutlineMail size={25} />
                </>
            ),
            href: "mailto:shaikhb050@gmail.com",
            style: "rounded-br-md"
        },
    ]

  return (
    <div className="hidden lg:flex flex-col fixed left-0 top-[35%]">
      <ul>
        {
            linksArr.map((ele, index) => {
                return(
                    <li key={index} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] duration-150 ${ele.style}`}>
                        <a href={`${ele.href}`} className="flex justify-between items-center text-white w-full" target="_blank" rel="noreferrer">
                            {ele.jsx}
                        </a>
                    </li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Links
