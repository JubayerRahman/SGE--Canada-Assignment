import "./Footer.css"
import logo from '../../public/footerLogo.png'
import footerImage from "../../public/footerShape.png"
import footerimage from "../../public/footerImage.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutubeSquare } from "react-icons/fa";





function Footer() {
  return (
    <div className="footerMain relative z-20  min-h-[200px] mt-[-300px] md:mt-[-60px]">
            <img src={footerImage} alt="" />
        <div className="footerContent bg-[#081831] p-[20px] ">
        <h1 className="text-center mt-[20px] font-[600]">Our Students are Our Reference</h1>
        <img className="mx-auto w-[170px] pt-[25px]"  src={logo} alt="" />

        <div className="border-t-2 container mx-auto mt-[50px] pt-[20px] flex flex-col md:flex-row items-start justify-between flex-1 ">
            <div className="w-[24%]" >
                <h1 className="text-[16px]">About Shabuj Global Education</h1>
                <br></br>
                <h1 className="text-[16px]">Lorem ipsum dolor sit amet consectetur. Amet commodo bibendum ac sem molestie. Nisi imperdiet orci nulla in. Convallis eu ligula neque id varius sit lacus et. Pellentesque porta interdum morbi enim ultrices egestas aliquet amet. Aliquet elit amet porttitor posuere.</h1>
            </div>
            <div className="w-[24%]" >
                <h1 className="text-[16px]">Study Destinations</h1>
                <br></br>
                <h1 className="text-[16px]">
                UK
                <br />
                USA
                <br />
                Canada
                <br />
                Australia
                <br />
                Germany
                <br />
                New Zealand
                </h1>
            </div>
            <div className="w-[24%]" >
                <h1 className="text-[16px]">Services for students</h1>
                <br></br>
                <h1 className="text-[16px]">
                Counselling
                <br />
                Test Preparation
                <br />
                Course, Country & University Selection
                <br />
                Scholarship
                <br />
                File Assessment
                <br />
                Services for institutions
                <br />
                Services for partners
                </h1>
            </div>
            <div className="w-[24%]" >
                <h1 className="text-[16px]">Company</h1>
                <br></br>
                <h1 className="text-[16px]">
                About Us
                <br />
                Careers 
                <br />
                Events
                <br />
                Blog
                <br />
                Contact Us
                <br />
                search universities
                <br />
                upcoming events
                <br />
                book online counselling
                </h1>
            </div>
        </div>
        <div className="border-t-2 container mx-auto mt-[50px] pt-[20px] flex flex-col md:flex-row gap-5  items-start justify-between flex-1 ">
            <img className="w-[580px]"  src={footerimage} alt="" />
            <div className="md:w-[50%]">
                <h1 className="text-[16px] text-center ">OUR OFFICE</h1>
                <div className="grid grid-cols-1  md:grid-cols-3">
                <div className="row-span-2" >
                    <h1 className="text-[16px] text-[#5093FB] pb-[10px]">Head Office (London)</h1>
                    <h1 className="text-[16px] text-[#5093FB] pb-[10px] ">South Asian Regional <br />  Head Office (Dhaka)</h1>
                    <h1 className="text-[16px]  pb-[10px]">Chattogram Office</h1>
                    <h1 className="text-[16px]  pb-[10px]">Sylhet Office</h1>
                </div>
                <div>
                    <h1 className="text-[16px] text-[#5093FB] pb-[10px]">India Office </h1>
                    <h1 className="text-[16px]  pb-[10px]">Kannur</h1>
                    <h1 className="text-[16px]  pb-[10px]">Kochi </h1>
                </div>
                <div>
                    <h1 className="text-[16px] text-[#5093FB] pb-[10px]"> Nigeria Office  </h1>
                    <h1 className="text-[16px]  pb-[10px]">Lagos</h1>
                    <h1 className="text-[16px]  pb-[10px]">Abuja </h1>
                </div>
                <div>
                    <h1 className="text-[16px] text-[#5093FB] pb-[10px]"> Middle East Office </h1>
                    <h1 className="text-[16px]  pb-[10px]">Dubai</h1>
                </div>
                </div>
            </div>
        </div>
        <div className="border-t-2 container mx-auto mt-[50px] pt-[20px] flex flex-col md:flex-row  items-start justify-between flex-1 ">
            <div className="flex items-center gap-2 mx-auto md:mx-0">
                <h1 className="text-[25px]"><FaFacebookF/></h1>
                <h1 className="text-[25px]"><FaInstagram/></h1>  
                <h1 className="text-[25px]"><FaLinkedinIn/></h1>  
                <h1 className="text-[25px]"><FaYoutubeSquare/></h1>  
            </div>
            <div className="flex flex-col md:flex-row  items-center gap-3">
                <h1 className="text-[14px] text-center  text-[#cacaca]">Copyright © 2024, All Right Reserved Shabuj Global Education</h1>
                <h1 className="text-[14px] text-center  text-[#cacaca]">Terms & Conditions</h1>
                <h1 className="text-[14px] text-center  text-[#cacaca]">Privacy Policy</h1>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer