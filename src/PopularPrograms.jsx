import React from 'react'
import "./popolarPrograms.css"

function PopularPrograms() {
  return (
    <div className='bg-[#fafafa] mx-auto pt-[50px] pb-[50px] pl-[15%]  ml-auto mr-auto  flex justify-center flex-col'>
        <h1 className='text-[18px] md:text-[50px] font-[600]'>Popular programs to study</h1> 
        <h className='text-[16px] md:text-[50px] font-[600] flex items-start'> in the US 
            <div className='overflow-hidden h-[26px]  md:h-[70px] text-[14px] md:text-[50px]'>
                <span className='AnimationText ml-[5px] '> Computer Science</span> 
                <span className='AnimationText ml-[5px] '> Business</span> 
                <span className='AnimationText ml-[5px] '> Engineering</span> 
                <span className='AnimationText ml-[5px] '> Health Science</span> 
                <span className='AnimationText ml-[5px] '> Physiotherapy</span> 
                <span className='AnimationText ml-[5px] '> Information technolog</span> 
                <span className='AnimationText ml-[5px] '> Animation and gaming </span> 
            </div>
        </h>
    </div>
  )
}

export default PopularPrograms