import React, { useState } from 'react'
import Logo from "../../public/shabujGlobalLogo.png"
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion';
import { RxCross1 } from "react-icons/rx";




function Navbar() {

  const [menustate, setMenuSet] = useState(false)

  console.log(menustate);
  

  return (
    <div className='bg-[#F0F8FF] relative  p-[10px] flex flex-col md:flex-row  items-center justify-around pl-[5%] pr-[5%]'>
        <div className='flex justify-between items-center w-full md:w-[40%]'>
        <img className='h-[50px] w-[200px]  md:w-[250px] object-contain md:mr-[100px] ' src={Logo} alt="" />
        <h1 onClick={()=>setMenuSet(!menustate)}  className='flex md:hidden text-[30px] font-[600] cursor-pointer'><IoMdMenu/></h1>
        </div>
        <div className='hidden md:flex items-center justify-evenly w-[50%] cursor-pointer '>
            <h1 className='text-[16px] flex items-center'>Study Destination  <IoIosArrowDown  /> </h1>
            <h1 className='text-[16px] flex items-center'>Services  <IoIosArrowDown  /> </h1>
            <h1 className='text-[16px] flex items-center'>Test Prep.  <IoIosArrowDown  /> </h1>
            <h1 className='text-[16px] flex items-center'>About Us  <IoIosArrowDown  /> </h1>
            <button className='bg-[#BFDBFE] pl-[10px] pr-[10px] p-[5px]  rounded-2xl text-[15px]'>Login</button>
        </div>
        <motion.div 
        className={`${menustate ? " md:hidden  absolute h-[100vh] top-[0]  w-[80%]  flex flex-col gap-3 translate-x-2 duration-200 z-20   bg-white p-[20px] ml-[20%] shadow-xl ": "hidden"}`}>
            <h1 onClick={()=>setMenuSet(!menustate)}  className='text-right font-[800] text-[20px]  ml-[90%] '><RxCross1/></h1>
            <h1 className='text-[16px] flex items-center'>Study Destination  <IoIosArrowDown  /> </h1>
            <h1 className='text-[16px] flex items-center'>Services  <IoIosArrowDown  /> </h1>
            <h1 className='text-[16px] flex items-center'>Test Prep.  <IoIosArrowDown  /> </h1>
            <h1 className='text-[16px] flex items-center'>About Us  <IoIosArrowDown  /> </h1>
            <button className='bg-[#BFDBFE] pl-[10px] pr-[10px] p-[5px]  rounded-2xl text-[15px]'>Login</button>
        </motion.div>
    </div>
  )
}

export default Navbar