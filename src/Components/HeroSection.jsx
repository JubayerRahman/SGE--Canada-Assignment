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
    <div className='mt-[50px] hero-container rounded-b-[40px]'>
      <div className='flex items-center justify-between'>
        <motion.div 
        initial= {{x:0}}
        animate={{x:50}}    
        transition={{repeat: Infinity, duration:2, repeatType: "reverse"}}
          // data-aos="fade-right"
           className=" layer1">
            <img src={layer1Bg1} alt="" />
        </motion.div> 
        <motion.div 
        initial= {{x:0}}
        animate={{x:-50}}    
        transition={{repeat: Infinity, duration:2, repeatType: "reverse"}}
        data-aos="fade-left" className=" layer2">
            <img src={layer2Bg2} alt="" />
        </motion.div>
      </div>
      <div data-aos="fade-up" className="hero-image layer3">
        <img src={layer2Bg} alt="" />
      </div>
      <div data-aos="fade-up" className="hero-image layer4">
        <img src={layer3Bg} alt="" />
      </div>
      <motion.div
      initial= {{y:-20}}
      animate={{y:50}}    
      transition={{repeat: Infinity, duration:2, repeatType: "reverse"}}
      data-aos="fade-up" className="hero-image layer5">
        <img className="w-[100vw] object-cover" src={layer4Bg} alt="" />
      </motion.div>
      <motion.div
      initial= {{y:100}}
      animate={{y:0}}    
      transition={{repeat: Infinity, duration:2, repeatType: "reverse"}}
      data-aos="fade-up" className="hero-image layer6">
        <h1 className='text-[64px] font-[700] text-[#FF1A1A] text-center'>Study in CANADA</h1>
        <h1 className='text-[18px] text-center text-[#191F2C]'>Here’s a comprehensive guide for all <br /> students who want to study in Canada</h1>
      </motion.div>
    </div>
  );
}

export default HeroSection;
