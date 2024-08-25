import React from 'react'
import { FaCheckCircle } from "react-icons/fa";


function Quickfacts() {
  return (
    <div className='mt-[50px]'>
        <h1 className='text-center text-[28px] text-[#1F1F1F] font-[600]'>Quick facts</h1>
        <div className='md:pl-[50px] md:pr-[50px] md:pt-[40px]'>
        <div className='flex flex-col md:flex-row w-full gap-[10px] p-[20px] md:p-[0px]   justify-evenly md:items-center'>
            <div className='flex  items-start md:w-[30%]'>
                <h1 className='h-[18px] text-[#3B82F6]'> <FaCheckCircle/> </h1>
                <h1 className='text-[14px]'> &nbsp; Countries Considered to be Among <br />  the Safest on a Global Scale</h1>
            </div>
            <div className='flex items-start md:w-[30%]'>
                <h1 className='h-[18px] text-[#3B82F6]'> <FaCheckCircle/> </h1>
                <h1 className='text-[14px]'> &nbsp; The Post Study Work Visa allows <br />  for a period of up to three years.</h1>
            </div>
            <div className='flex items-start md:w-[30%]'>
                <h1 className='h-[18px] text-[#3B82F6]'> <FaCheckCircle/> </h1>
                <h1 className='text-[14px]'> &nbsp; Opportunities for Research, Teaching <br />  & Graduate Assistantships</h1>
            </div>
        </div>
            <div className='flex flex-col md:flex-row  justify-evenly md:pt-[40px] gap-[10px]  md:items-center  p-[20px] md:p-[0px]  '>
                <div className='flex items-start md:w-[30%]'>
                    <h1 className='h-[18px] text-[#3B82F6]'> <FaCheckCircle/> </h1>
                    <h1 className='text-[14px]'> &nbsp; Excellent Immigration Opportunities</h1>
                </div>
                <div className='flex items-start md:w-[30%]'>
                    <h1 className='h-[18px] text-[#3B82F6]'> <FaCheckCircle/> </h1>
                    <h1 className='text-[14px]'> &nbsp; Paid Internships Available</h1>
                </div>
                <div className='flex items-start md:w-[30%]'>
                    <h1 className='h-[18px] text-[#3B82F6]'> <FaCheckCircle/> </h1>
                    <h1 className='text-[14px]'> &nbsp; Hands-on learning</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quickfacts