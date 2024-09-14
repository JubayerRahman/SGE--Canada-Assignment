import React, { useState } from 'react'
import clock from "../../public/clock.png"
import coin  from "../../public/Coins-rafiki 1.svg"
import calender from "../../public/Calendar-bro 1.svg"
import deadline from "../../public/Deadline-rafiki 1.svg"

function Tabs() {
    const [btn1State, setBtn1State] = useState(true)
    const [btn2State, setBtn2State] = useState(false)
    const [btn3State, setBtn3State] = useState(false)
    const [btn4State, setBtn4State] = useState(false)

  return (
    <div className='mt-[50px] overflow-hidden  '>
        <div className='flex flex-col md:flex-row  z-[0] pl-[10px] pr-[10px] lable '>
          <div className="md:w-[25%] p-[0px]">
            <div className={`${btn1State ===true ?
                'text-[20px] font-[700] cursor-pointer p-[20px] rounded-[20px] bg-[#EFF6FF]  text-center ':
                "cursor-pointer p-[20px] rounded-[20px] bg-[#59C3CF]   text-[20px] text-white font-[700]   text-center " }`}>
            <h1 onClick={()=>{setBtn1State(true), setBtn2State(false), setBtn3State(false), setBtn4State(false)}}  >Programs & Duration</h1>
            </div>
                <div className={`${btn1State === true ? "bg-[#EFF6FF] w-full h-[50px]  mt-[-50px] ml-[20px]  hidden md:block": "bg-[#59C3CF] w-full h-[50px]  mt-[-50px] ml-[20px]  hidden md:block"  }`}>
                </div>
          </div>
          <div className='md:w-[25%] p-[0px]'>
            <div
            onClick={()=>{setBtn1State(false), setBtn2State(true), setBtn3State(false), setBtn4State(false)}} 
            className={`${btn2State ===true ?
              'text-[20px] font-[700] cursor-pointer p-[20px] rounded-[20px] bg-[#EFF6FF] text-center ':
              "cursor-pointer p-[20px] rounded-[20px] bg-[#9667EF] text-[20px] text-white font-[700] text-center  " }`}>
              <h1 >Cost of Studying</h1>
            </div>
              <div className={`${btn2State === true ? "bg-[#EFF6FF] w-full h-[50px]  mt-[-50px] ml-[20px]  hidden md:block": "bg-[#9667EF] w-full h-[50px]  mt-[-50px] ml-[20px]  hidden md:block"  }`}>
                </div>
          </div>
          <div className='md:w-[25%] p-[0px]'>
            <div onClick={()=>{setBtn1State(false), setBtn2State(false), setBtn3State(true), setBtn4State(false)}}  className={`${btn3State ===true ?
                  'text-[20px] font-[700] cursor-pointer p-[20px] rounded-[20px] bg-[#EFF6FF]  text-center  ':
                  "cursor-pointer p-[20px] rounded-[20px] bg-[#E2635E] text-[20px] text-white font-[700] text-center  " }`}>

                  <h1>Academic Intakes</h1>
              </div>
              <div className={`${btn3State === true ? "bg-[#EFF6FF] w-full h-[50px]  mt-[-50px] ml-[20px]  hidden md:block": "bg-[#E2635E] w-full h-[50px]  mt-[-50px] ml-[20px] hidden md:block"  }`}>
                </div>
          </div>
          <div  className='md:w-[25%] p-[0px]'>
            <div onClick={()=>{setBtn1State(false), setBtn2State(false), setBtn3State(false), setBtn4State(true)}}  className={`${btn4State ===true ?
                'text-[20px] font-[700] cursor-pointer p-[20px] rounded-[20px] bg-[#EFF6FF] text-center ':
                "cursor-pointer p-[20px] rounded-[20px] bg-[#58B1EA] text-[20px] text-white font-[700] text-center " }`}>
                <h1>Deadline</h1>
                </div>
          </div>
        </div>
        <div className="container1 bg-[#EFF6FF] rounded-3xl p-[15px]  z-[1] md:h-[500px] tabData ">
          <div className={`${btn1State? "flex flex-col md:flex-row  items-center justify-evenly": "hidden"}`}>
            <div className='md:w-[50%]'>
              <h1 className='text-[30px] font-[600] text-[#181A1B] text-center'>Programs and their duration in Canada</h1>
              <h1 className='text-[18px]  text-[#181A1B] text-center mb-[40px]'>Here are the programs that Canadian universities offer:</h1>
              <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className='bg-[#00205B] text-white'>
                    <th className='text-[16px] font-[700] text-center '>Qualification</th>
                    <th className='text-[16px] font-[700] text-center '>Duration</th>
                    <th className='text-[16px] font-[700] text-center '>pswr*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border-[1px]'>Associate degree</td>
                    <td className='border-[1px]'>2 years</td>
                    <td className='border-[1px]'>Up to 3 years</td>
                  </tr>
                  <tr>
                    <td className='border-[1px]'>Bachelor’s degree</td>
                    <td className='border-[1px]'>4 years</td>
                    <td className='border-[1px]'>Up to 3 years</td>
                  </tr>
                  <tr>
                    <td className='border-[1px]'>Master’s degree/MBA</td>
                    <td className='border-[1px]'>1-2 years</td>
                    <td className='border-[1px]'>Up to 3 years</td>
                  </tr>
                  <tr>
                    <td className='border-[1px]'>Doctorate or PhD</td>
                    <td className='border-[1px]'>4-7 years</td>
                    <td className='border-[1px]'>Up to 3 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            <div>
              <img className='w-[380px]'  src={clock} alt="" />
            </div>
          </div>
          <div className={`${btn2State? "flex flex-col md:flex-row  items-center justify-evenly":"hidden"}`}>
            <div className='flex flex-col items-center'>
            <h1 className='text-[30px] font-[600] text-[#181A1B] text-center mb-[20px]'>Cost of Studying</h1>
          <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className='bg-[#00205B] text-white'>
                    <th className='text-[16px] font-[700] text-center '>DEGREE</th>
                    <th className='text-[16px] font-[700] text-center '>COST IN USD/YEAR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border-[1px] font-[500]'>Foundational Course</td>
                    <td className='border-[1px] font-[500]'>$20,000</td>
                  </tr>
                  <tr>
                    <td className='border-[1px] font-[500]'>Undergraduate Courses</td>
                    <td className='border-[1px] font-[500]'>$33,623</td>
                  </tr>
                  <tr>
                    <td className='border-[1px] font-[500]'>Postgraduate Course</td>
                    <td className='border-[1px] font-[500]'>$20,120</td>
                  </tr>
                  <tr>
                  <td className='border-[1px] font-[500]'>Doctorate Course</td>
                  <td className='border-[1px] font-[500]'>$8000 to $20,000</td>
                  </tr>
                  <tr>
                  <td className='border-[1px] font-[500]'>MBA Course</td>
                  <td className='border-[1px] font-[500]'>$30,000 to $40,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          <img className='w-[450px]'  src={coin} alt="" />
          </div>
          <div className={`${btn3State? "flex flex-col md:flex-row  items-center justify-evenly":"hidden"}`}>
            <div className='flex flex-col items-center md:w-[50%]'>
            <h1 className='text-[30px] font-[600] text-[#181A1B] text-center '>Acadamic intake to Study Canada</h1>
            <h1 className='mb-[20px] mt-[10px]  text-center font-[500] w-[75%] mx-auto'>Canadian Universities usually have 3 intakes. In soome universities, intakes may also be referred to as a semester. The three intakes available in canada are:</h1>
          <div className="overflow-x-auto w-[80%]">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr className='bg-[#00205B] text-white'>
                    <th className='text-[16px] font-[700] text-center '>INTAKES</th>
                    <th className='text-[16px] font-[700] text-center '>DEADLINE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border-[1px] font-[500]'>Fall- Aug/Sep</td>
                    <td className='border-[1px] font-[500]'>November-March</td>
                  </tr>
                  <tr>
                    <td className='border-[1px] font-[500]'>Summer- May/June</td>
                    <td className='border-[1px] font-[500]'>August-February</td>
                  </tr>
                  <tr>
                    <td className='border-[1px] font-[500]'>Spring- Jan/Feb</td>
                    <td className='border-[1px] font-[500]'>July-November</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          <img className='w-[450px]'  src={calender} alt="" />
          </div>
          <div className={`${btn4State? "flex flex-col md:flex-row  items-center justify-evenly":"hidden"}`}>
            <div className='flex flex-col items-center md:w-[70%]'>
            <h1 className='text-[30px] font-[600] text-[#181A1B] text-center '>Deadline for Canaduan Universityes</h1>
            <h1 className='mb-[20px] mt-[10px]  text-center font-[500] w-[70%] mx-auto'>You need to start preparing for your Canada application 8-9 months in advance before the commencement of your program.</h1>
            </div>
          <img className='w-[450px]'  src={deadline} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Tabs