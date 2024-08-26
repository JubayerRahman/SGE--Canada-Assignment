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
            <h1 className='pt-[20px]'>The University of Calgary is a leading Canadian research institution located in the vibrant city of Calgary, Alberta. Known for its innovative spirit, the university offers a wide range of programs across various disciplines, fostering a strong culture of research and entrepreneurship. With a focus on sustainability and community engagement, it provides students with exceptional opportunities for academic growth and real-world experience. The campus is a hub of diversity, creativity, and forward-thinking, preparing students to become leaders in their fields.</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Alberta, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni3View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni3} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>Dalhousie University</h1>
            <h1 className='pt-[20px]'>Dalhousie University, located in Halifax, Nova Scotia, is one of Canada’s oldest and most prestigious universities. It offers a comprehensive range of programs and is renowned for its research, particularly in ocean sciences, health, and sustainability. The university is committed to providing a collaborative and inclusive learning environment, with strong ties to its local and global communities. Dalhousie’s historic campus blends tradition with modern innovation, creating a dynamic setting for academic and personal growth.</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>located in Halifax, Nova Scotia, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni4View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni4} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>York University</h1>
            <h1 className='pt-[20px]'>York University, located in Toronto, Ontario, is one of Canada's largest and most diverse universities. Known for its interdisciplinary approach, it offers a wide array of programs with a strong emphasis on social justice, sustainability, and innovation. The university fosters an inclusive and supportive environment, encouraging students to challenge the status quo and engage with global issues. With its vibrant campus life and commitment to academic excellence, York University prepares students to be critical thinkers and leaders in their fields.</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located in Toronto, Ontario, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni5View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni5} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Windsor</h1>
            <h1 className='pt-[20px]'>The University of Windsor, situated in Windsor, Ontario, is a comprehensive university known for its strong focus on research, community engagement, and cross-border partnerships. It offers a diverse range of programs with particular strengths in automotive engineering, law, and social work. The university's close proximity to the U.S. border enhances its international outlook, providing unique opportunities for collaboration and experiential learning. With a welcoming campus atmosphere, the University of Windsor is dedicated to fostering innovation and preparing students for global careers.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Quebec, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni6View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni6} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Waterloo</h1>
            <h1 className='pt-[20px]'>The University of Waterloo, located in Waterloo, Ontario, is a globally recognized leader in innovation and research, particularly known for its pioneering co-op education program. With strengths in engineering, computer science, and entrepreneurship, Waterloo has cultivated strong industry partnerships, offering students unparalleled opportunities to gain real-world experience while studying. The university’s commitment to pushing the boundaries of knowledge and technology has made it a hub for cutting-edge research and startups. Waterloo’s dynamic and forward-thinking campus environment prepares students to excel in an ever-evolving global landscape.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located in Waterloo, Ontario, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni7View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni7} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>Queen's University</h1>
            <h1 className='pt-[20px]'>Queen's University, located in Kingston, Ontario, is one of Canada’s most prestigious and historic institutions, known for its strong sense of community and academic excellence. Offering a broad range of programs, Queen's has a reputation for excellence in fields such as business, law, and health sciences. The university’s beautiful, ivy-covered campus is steeped in tradition, while also fostering a culture of innovation and leadership. With a rich history and a commitment to research and global engagement, Queen’s University provides a transformative educational experience.</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located in Kingston, Ontario, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni8View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni8} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Victoria</h1>
            <h1 className='pt-[20px]'>The University of Victoria, located in Victoria, British Columbia, is renowned for its strong focus on research, sustainability, and experiential learning. With a picturesque campus surrounded by nature, UVic offers a diverse range of programs, excelling particularly in environmental studies, ocean sciences, and Indigenous knowledge. The university fosters a close-knit community that emphasizes innovation, interdisciplinary collaboration, and global engagement. UVic’s commitment to blending academic excellence with real-world impact makes it a leading institution in Canada and beyond.</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Victoria, British Columbia, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni9View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni9} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Guelph</h1>
            <h1 className='pt-[20px]'>The University of Guelph, located in Guelph, Ontario, is renowned for its strengths in agriculture, veterinary sciences, and environmental studies. It has a strong commitment to research, sustainability, and community engagement, making it a leader in addressing global challenges like food security and environmental stewardship. The university’s welcoming campus fosters a collaborative and innovative learning environment, where students are encouraged to think critically and creatively. With a reputation for academic excellence and a focus on improving life, the University of Guelph prepares students to make meaningful contributions to society.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located in Guelph, Ontario, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
          <div className={`${uni10View? "pl-[20px] pt-[20px] pb-[20px]  w-[55%] mt-[40px] flex flex-col items-start border-l-[2px] h-[100%] ":"hidden"}`}>
            <img className='w-[200px]' src={uni10} alt="" />
            <h1 className='text-[20px] md:text-[32px] font-[600] pt-[20px]'>University of Manitoba</h1>
            <h1 className='pt-[20px]'>The University of Manitoba, situated in Winnipeg, Manitoba, is a major research institution known for its diverse academic programs and strong focus on Indigenous scholarship and community engagement. It offers a wide range of programs across disciplines such as science, engineering, business, and arts, with notable strengths in areas like agriculture and health sciences. The university’s commitment to research, innovation, and service to the community is evident in its supportive and dynamic campus environment. With a rich history and a forward-thinking approach, the University of Manitoba prepares students to excel in their careers and make a positive impact on the world.</h1>
            <h1 className='font-[600] text-[14px] mt-[20px]'>One of the Canada's leading university</h1>
            <h1 className='text-[12px] md:text-[14px] mt-[20px] flex items-center'>
                <span className='text-blue-700 mr-[5px]'><FaLocationDot /> </span>
                <h1>Located at Winnipeg, Manitoba, Canada</h1>
            </h1>
            <button className='bg-blue-700 rounded-3xl mx-auto text-white p-[5px] w-[80%]  md:w-[60%] mt-[20px]'>Apply Now</button>
          </div>
        </div>
    </div>
  )
}

export default TopUniversities