import React from 'react'
import Logo from "../../public/shabujGlobalLogo.png"
import { IoIosArrowDown } from "react-icons/io";


function Navbar() {
  return (
    <div className='bg-[#F0F8FF] p-[10px] flex items-center justify-around pl-[5%] pr-[5%]'>
        <img className='h-[50px] w-[250px] object-contain mr-[100px] ' src={Logo} alt="" />
        <div className='flex items-center justify-evenly w-[50%] cursor-pointer '>
            <h1 className='text-[16px] flex items-center'>Study Destination  <IoIosArrowDown  /> </h1>
            <h1 className='text-[16px] flex items-center'>Services  <IoIosArrowDown  /> </h1>
            <h1 className='text-[16px] flex items-center'>Test Prep.  <IoIosArrowDown  /> </h1>
            <h1 className='text-[16px] flex items-center'>About Us  <IoIosArrowDown  /> </h1>
            <button className='bg-[#BFDBFE] pl-[10px] pr-[10px] p-[5px]  rounded-2xl text-[15px]'>Login</button>
        </div>
    </div>
  )
}

export default Navbar