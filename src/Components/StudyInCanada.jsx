import React from 'react'
import animationImage from "../../public/2ndSectionImage.png"
import './HeroSection.css';
import { motion } from 'framer-motion';

function StudyInCanada() {
  return (
    <div className='bg-[#EFF6FF] p-[10px] md:p-[20px] mx-auto flex items-center justify-center pt-[50px]'>
        <div className='bg-[#191F2C] p-[10px]  md:p-[20px] w-[95%]  rounded-[20px] relative'>
            <motion.img 
            initial={{height:"100px", top: "-25px", left:"-25px"}}
            animate = {{height:"140px",top:0,  left:0}}
            transition={{repeat:Infinity, repeatType:"reverse", duration:2}}
            className='h-[100px]  absolute left-[-25px] top-[-25px] canadaleaf z-0 ' src={animationImage} />
            <h1 className='text-[28px]  md:text-[40px] font-[600] text-white text-center'>Why Study in Canada?</h1>
            <h1 className='text-white text-justify p-[20px] text-[14px]  md:text-[16px] z-10' >Many students choose to study in a country that has seen a threefold increase in its international student population in the last ten years. This is largely due to the presence of globally renowned universities that provide high-quality education, practical programs that emphasize hands-on learning, and comparatively affordable tuition fees compared to other English-speaking countries. Experience a high quality of life in the highly ranked cities of Vancouver and Toronto while also advancing your career in one of the economically prosperous and stable regions known for abundant resources.</h1>
        </div>
    </div>
  )
}

export default StudyInCanada