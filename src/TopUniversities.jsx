import React, { useState } from 'react'
import uni1 from "../public/mcgill.png"
import uni2 from "../public/calgary.png"
import uni3 from "../public/dalhousie.png"
import uni4 from "../public/yorku.png"
import uni5 from "../public/uniW.png"
import uni6 from "../public/waterloo.png"
import uni7 from "../public/queens.png"
import uni8 from "../public/uvic.png"
import uni9 from "../public/guelph.png"
import uni10 from "../public/manitoba.png"
import { FaLocationDot } from "react-icons/fa6";


function TopUniversities() {
    const [uni1View, setUni1View] = useState(false);
    const [uni2View, setUni2View] = useState(false);
    const [uni3View, setUni3View] = useState(false);
    const [uni4View, setUni4View] = useState(false);
    const [uni5View, setUni5View] = useState(false);
    const [uni6View, setUni6View] = useState(false);
    const [uni7View, setUni7View] = useState(false);
    const [uni8View, setUni8View] = useState(false);
    const [uni9View, setUni9View] = useState(false);
    const [uni10View, setUni10View] = useState(false);
    console.log(uni1View);
    
  return (
    <div className='bg-[#EFF6FF] rounded-xl p-[20px] flex flex-col items-center justify-center'>
        <h1 className='text-[30px] text-center  md:text-[56px] font-[600] text-[#081831] mt-[50px]'>Top Universities in Canada</h1>
        <div className="flex items-start ">
          <div >
                <div className='flex flex-wrap  items-center justify-evenly mb-[20px] mt-[20px]'>
                <div 
                onClick={() => {
                    setUni1View(!uni1View), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }}  
                className="uni1 h-[120px] mt-[20px] mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800 ">
                    <img className='w-[150px]' src={uni1} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(!uni2View), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni2 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800 ">
                    <img className='w-[150px]' src={uni2} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(!uni3View), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni3 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px]' src={uni3} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(!uni4View), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni4 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800 ">
                    <img className='w-[150px]' src={uni4} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(!uni5View)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni5 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800 ">
                    <img className='w-[150px] h-[70px] object-contain ' src={uni5} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(!uni6View), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni6 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800 ">
                    <img className='w-[150px]  h-[70px] object-contain ' src={uni6} alt="" />
                </div>
                </div>
                <div className='flex flex-wrap  items-center justify-evenly mb-[20px]'>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(!uni7View), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni1 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800 ">
                    <img className='w-[150px]' src={uni7} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(!uni8View), setUni9View(false), setUni10View(false)
                }} 
                className="uni2 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px]' src={uni8} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(!uni9View), setUni10View(false)
                }} 
                className="uni3 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px]' src={uni9} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(!uni10View)
                }} 
                className="uni4 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px]' src={uni10} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(!uni1View), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni5 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px] h-[70px] object-contain ' src={uni1} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(!uni2View), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni6 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px]  h-[70px] object-contain ' src={uni2} alt="" />
                </div>
                </div>
                <div className='flex flex-wrap  items-center justify-evenly'>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(!uni3View), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni1 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px]' src={uni3} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(!uni4View), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni2 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px]' src={uni4} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(!uni5View)
                    setUni6View(false), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni3 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px] h-[70px] object-contain ' src={uni5} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(!uni6View), setUni7View(false), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni4 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px] h-[70px] object-contain ' src={uni6} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(!uni7View), setUni8View(false), setUni9View(false), setUni10View(false)
                }} 
                className="uni5 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px] h-[70px] object-contain ' src={uni7} alt="" />
                </div>
                <div
                onClick={() => {
                    setUni1View(false), setUni2View(false), setUni3View(false), setUni4View(false), setUni5View(false)
                    setUni6View(false), setUni7View(false), setUni8View(!uni8View), setUni9View(false), setUni10View(false)
                }} 
                className="uni6 h-[120px] mt-[20px]  mr-[10px]  bg-white pt-[40px] pb-[40px] pl-[20px] pr-[20px] cursor-pointer border-b-4 border-b-white  hover:border-b-4 hover:border-blue-800  ">
                    <img className='w-[150px]  h-[70px] object-contain ' src={uni8} alt="" />
                </div>
                </div>
          </div>
          <div className={`${uni1View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni1} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>McGill University</h1>
            <h1 className='pt-[20px]'>McGill University is a publicly founded research Institute situated in Montreal, Quebec, Canada. With its establishment in 1831 by royal charter, the University carries the name of James McGill, a scottish merchant, whose philanthropic donation in 1813 created the university of McGill Collage.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni2View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni2} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Calgary</h1>
            <h1 className='pt-[20px]'>McGill University is a publicly founded research Institute situated in Montreal, Quebec, Canada. With its establishment in 1831 by royal charter, the University carries the name of James McGill, a scottish merchant, whose philanthropic donation in 1813 created the university of McGill Collage.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni3View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni3} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Calgary</h1>
            <h1 className='pt-[20px]'>McGill University is a publicly founded research Institute situated in Montreal, Quebec, Canada. With its establishment in 1831 by royal charter, the University carries the name of James McGill, a scottish merchant, whose philanthropic donation in 1813 created the university of McGill Collage.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni4View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni4} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Calgary</h1>
            <h1 className='pt-[20px]'>McGill University is a publicly founded research Institute situated in Montreal, Quebec, Canada. With its establishment in 1831 by royal charter, the University carries the name of James McGill, a scottish merchant, whose philanthropic donation in 1813 created the university of McGill Collage.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni5View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni5} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Calgary</h1>
            <h1 className='pt-[20px]'>McGill University is a publicly founded research Institute situated in Montreal, Quebec, Canada. With its establishment in 1831 by royal charter, the University carries the name of James McGill, a scottish merchant, whose philanthropic donation in 1813 created the university of McGill Collage.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni6View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni6} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Calgary</h1>
            <h1 className='pt-[20px]'>McGill University is a publicly founded research Institute situated in Montreal, Quebec, Canada. With its establishment in 1831 by royal charter, the University carries the name of James McGill, a scottish merchant, whose philanthropic donation in 1813 created the university of McGill Collage.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni7View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni7} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Calgary</h1>
            <h1 className='pt-[20px]'>McGill University is a publicly founded research Institute situated in Montreal, Quebec, Canada. With its establishment in 1831 by royal charter, the University carries the name of James McGill, a scottish merchant, whose philanthropic donation in 1813 created the university of McGill Collage.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni8View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni8} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Calgary</h1>
            <h1 className='pt-[20px]'>McGill University is a publicly founded research Institute situated in Montreal, Quebec, Canada. With its establishment in 1831 by royal charter, the University carries the name of James McGill, a scottish merchant, whose philanthropic donation in 1813 created the university of McGill Collage.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni9View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni9} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Calgary</h1>
            <h1 className='pt-[20px]'>McGill University is a publicly founded research Institute situated in Montreal, Quebec, Canada. With its establishment in 1831 by royal charter, the University carries the name of James McGill, a scottish merchant, whose philanthropic donation in 1813 created the university of McGill Collage.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni10View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni10} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Calgary</h1>
            <h1 className='pt-[20px]'>McGill University is a publicly founded research Institute situated in Montreal, Quebec, Canada. With its establishment in 1831 by royal charter, the University carries the name of James McGill, a scottish merchant, whose philanthropic donation in 1813 created the university of McGill Collage.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
        </div>
    </div>
  )
}

export default TopUniversities