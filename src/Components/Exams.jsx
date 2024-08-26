import arrow from "../../public/arrow.svg"

function Exams() {
  return (
    <div className='bg-[#EFF6FF] mt-[100px]'>
        <h1 className='text-center text-[30px]  md:text-[56px] font-[600] pt-[50px]'>Exams Required to Study in Canada</h1>
        <div className="p-[20px]">
          <div className="flex flex-col md:flex-row  gap-5">
            <div className="shadow-xl rounded-3xl md:w-[48%]  border-2 h-[200px] overflow-hidden  p-[20px] group  cursor-pointer hover:h-[250px] duration-500 delay-150 ">
              <h1 className=" text-[25px] md:text-[40px] font-[600] drop-shadow-2xl ">English Language Proficiency Exams</h1>
              <img className="mx-auto group-hover:hidden" src={arrow} alt="" />
              <h1 className="text-[14px] font-[400] text-blue-800  mt-[20px]duration-800">. International English Language Testing System (IELTS)
                <br />
                  . Test of English as a Foreign Language (TOFEL)
                  <br />
                  . The Pearson Test of English (PTE)
                </h1>
            </div>
            <div className="shadow-xl rounded-3xl md:w-[48%]  border-2 h-[200px] overflow-hidden  p-[20px] group  cursor-pointer hover:h-[250px] duration-500 delay-150 ">
              <h1 className="text-[25px] md:text-[40px] font-[600] drop-shadow-2xl ">Graduation Admission Requirements</h1>
              <img className="mx-auto group-hover:hidden" src={arrow} alt="" />
              <h1 className="text-[14px] font-[400] text-blue-800 mt-[20px]">. International English Language Testing System (IELTS)
                <br />
                  . Test of English as a Foreign Language (TOFEL)
                  <br />
                  . The Pearson Test of English (PTE)
                </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-5 mt-[20px]">
            <div className="shadow-xl rounded-3xl md:w-[48%]  border-2 h-[200px] overflow-hidden  p-[20px] group  cursor-pointer hover:h-[250px] duration-500 delay-150 ">
              <h1 className="text-[25px] md:text-[40px] font-[600] drop-shadow-2xl ">Undergraduation Admission Requirements</h1>
              <h1 className="text-[14px] font-[400] text-blue-800 hidden mt-[20px]  group-hover:block">
                .  General Certificate of Secondary Education (GCSE)
                <br />
                  .Advanced Level (A-Level exams)
                  <br />
                  . international Baccalaureate (IB) Diploma
                  <br />
                  . Advanced Placement (AP) Exams
                  <br />
                  .  SAT or ACT
                </h1>
              <img className="mx-auto group-hover:hidden" src={arrow} alt="" />
            </div>
            <div className="shadow-xl rounded-3xl md:w-[48%]  border-2 h-[200px] overflow-hidden  p-[20px] group  cursor-pointer hover:h-[250px] duration-500 delay-150 ">
              <h1 className="text-[25px] md:text-[40px] font-[600] drop-shadow-2xl ">Subject-Specific Exams</h1>
              <h1 className="text-[14px] font-[400] text-blue-800 hidden mt-[20px]  group-hover:block">
                .  General Certificate of Secondary Education (GCSE)
                <br />
                  .Advanced Level (A-Level exams)
                  <br />
                  . international Baccalaureate (IB) Diploma
                  <br />
                  . Advanced Placement (AP) Exams
                  <br />
                  .  SAT or ACT
                </h1>
              <img className="mx-auto group-hover:hidden" src={arrow} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Exams