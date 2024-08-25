import React, { useEffect } from 'react';
import { motion } from "framer-motion"
import layer1Bg1 from "../../public/layer1bg1.png";
import layer2Bg2 from "../../public/layer1bg2.png";
import layer2Bg from "../../public/2ndlayerImage.png";
import layer3Bg from "../../public/layer3Bg.png";
import layer4Bg from "../../public/layer4img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import './HeroSection.css';

function HeroSection() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
      
  return (
    <div className=' md:mt-[50px] hero-container rounded-b-[40px] h-[290px]  md:h-fit'>
      <div className='flex items-center justify-between'>
        <motion.div 
        initial= {{x:0}}
        animate={{x:50}}    
        transition={{repeat: Infinity, duration:2, repeatType: "reverse"}}
          // data-aos="fade-right"
           className=" layer1">
            <img className='w-[800px] object-contain mt-[-200px] md:mt-[0px]  md:w-full'  src={layer1Bg1} alt="" />
        </motion.div> 
        <motion.div 
        initial= {{x:0}}
        animate={{x:-50}}    
        transition={{repeat: Infinity, duration:2, repeatType: "reverse"}}
        data-aos="fade-left" className=" layer2">
          <img className='w-[800px] object-contain mt-[-200px] md:mt-[0px]   md:w-full'  src={layer2Bg2} alt="" />
        </motion.div>
      </div>
      <div data-aos="fade-up" className="hero-image layer3">
        <img className='w-[600px] object-contain mt-[-150px] md:mt-[0px]   md:w-full'  src={layer2Bg} alt="" />
      </div>
      <div data-aos="fade-up" className="hero-image layer4">
        <img className='w-[600px] object-contain mt-[-150px] md:mt-[0px]   md:w-full'  src={layer3Bg} alt="" />
      </div>
      <motion.div
      initial= {{y:-20}}
      animate={{y:50}}    
      transition={{repeat: Infinity, duration:2, repeatType: "reverse"}}
      data-aos="fade-up" className="hero-image layer5">
        <img className='w-[600px] object-contain mt-[-110px] md:mt-[0px]   md:w-full' src={layer4Bg} alt="" />
      </motion.div>
      <motion.div
      initial= {{y:100}}
      animate={{y:0}}    
      transition={{repeat: Infinity, duration:2, repeatType: "reverse"}}
      data-aos="fade-up" className="hero-image layer6">
        <h1 className='text-[30px] md:text-[64px] font-[700] text-[#FF1A1A] text-center'>Study in CANADA</h1>
        <h1 className='text[12px] md:text-[18px] text-center text-[#191F2C]'>Here’s a comprehensive guide for all <br /> students who want to study in Canada</h1>
      </motion.div>
    </div>
  );
}

export default HeroSection;
