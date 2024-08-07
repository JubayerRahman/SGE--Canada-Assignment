import diplomaImg from "../../public/diplomaIng.png"
import mastersImg from "../../public/masterImg.png"
import bachelorsImg from "../../public/BAchalorImg.png"
import doctorateImg from "../../public/doctorImage.png"
import { IoIosArrowDown } from "react-icons/io";


function Requirements() {
  return (
    <div className='p-[20px]'>
        <h1 className='text-[56px] font-[600] text-center pt-[40px] '>Requirements for Studying in Canada</h1>
        <div className="mt-[50px]">
            <div className="flex gap-4">
                <div className="bg-[#59C3CF] w-[48%] shadow-lg rounded-[32px] p-[20px] h-[400px] cursor-pointer hover:h-[600px] hover:ease-out overflow-hidden relative group">
                <h1 className="text-[40px] font-[600] text-white">Diploma</h1>
                <h1 className="text-white pt-[20px]">Students usually need to have completed their secondary education, such as SSC or O-levels, with satisfactory grades. The specific grade requirements may vary depending on the university and program.</h1>
                <h1 className="text-white pt-[20px] hidden transition-opacity duration-500 group-hover:block">A minimum overall band score of 5.5 to 6.00 in IELTS, with no individual component (Reading, Writing, Listening, Speaking)  score below 5.5, a minimum overall score of 72 to 79 on the internet-based test (iBT) in TOEFL and a minimum overall score of C1 or C2 level respectively are totally required.</h1>
                <div className="flex items-center justify-between group-hover:flex-col group-hover:items-center ">
                    <h1 className="text-white text-[80px] group-hover:hidden group-hover:justify-center">< IoIosArrowDown/> </h1>
                    <img className="w-[280px] group-hover:absolute group-hover:bottom-0" src={diplomaImg} alt="Diploma" />
                </div>
                </div>
                <div className="bg-[#E2635E] w-[48%] shadow-lg rounded-[32px] p-[20px] h-[400px] cursor-pointer hover:h-[600px] hover:ease-out overflow-hidden relative group">
                <h1 className="text-[40px] font-[600] text-white">Master’s</h1>
                <h1 className="text-white pt-[20px]">Hold a relevant Bachelor's degree or an equivalent qualification from a recognized institution.
                </h1>
                <h1 className="text-white pt-[20px] hidden transition-opacity duration-500 group-hover:block">A minimum overall band score of 5.5 to 6.00 in IELTS, with no individual component (Reading, Writing, Listening, Speaking)  score below 5.5, a minimum overall score of 72 to 79 on the internet-based test (iBT) in TOEFL and a minimum overall score of C1 or C2 level respectively are totally required.</h1>
                <div className="flex items-center justify-between group-hover:flex-col group-hover:items-center ">
                    <h1 className="text-white text-[80px] group-hover:hidden group-hover:justify-center">< IoIosArrowDown/> </h1>
                    <img className="w-[280px] group-hover:absolute group-hover:bottom-0" src={mastersImg} alt="Diploma" />
                </div>
                </div>
            </div>
            <div className="flex gap-4 mt-[20px] ">
                <div className="bg-[#A881F3] w-[48%] shadow-lg rounded-[32px] p-[20px] h-[400px] cursor-pointer hover:h-[600px] hover:ease-out overflow-hidden relative group">
                <h1 className="text-[40px] font-[600] text-white">Bachelor’s</h1>
                <h1 className="text-white pt-[20px]">Students need to have completed their higher secondary education, such as HSC or A-levels, with satisfactory grades.</h1>
                <h1 className="text-white pt-[20px] hidden transition-opacity duration-500 group-hover:block">A minimum overall band score of 5.5 to 6.00 in IELTS, with no individual component (Reading, Writing, Listening, Speaking)  score below 5.5, a minimum overall score of 72 to 79 on the internet-based test (iBT) in TOEFL and a minimum overall score of C1 or C2 level respectively are totally required.</h1>
                <div className="flex items-center justify-between group-hover:flex-col group-hover:items-center ">
                    <h1 className="text-white text-[80px] group-hover:hidden group-hover:justify-center">< IoIosArrowDown/> </h1>
                    <img className="w-[280px] group-hover:absolute group-hover:bottom-0" src={bachelorsImg} alt="Diploma" />
                </div>
                </div>
                <div className="bg-[#58B1EA] w-[48%] shadow-lg rounded-[32px] p-[20px] h-[400px] cursor-pointer hover:h-[600px] hover:ease-out overflow-hidden relative group">
                <h1 className="text-[40px] font-[600] text-white">Doctorate</h1>
                <h1 className="text-white pt-[20px]">Hold a relevant Master's degree or an equivalent qualification from a recognised institution.
                </h1>
                <h1 className="text-white pt-[20px] hidden transition-opacity duration-500 group-hover:block">A minimum overall band score of 5.5 to 6.00 in IELTS, with no individual component (Reading, Writing, Listening, Speaking)  score below 5.5, a minimum overall score of 72 to 79 on the internet-based test (iBT) in TOEFL and a minimum overall score of C1 or C2 level respectively are totally required.</h1>
                <div className="flex items-center justify-between group-hover:flex-col group-hover:items-center ">
                    <h1 className="text-white text-[80px] group-hover:hidden group-hover:justify-center">< IoIosArrowDown/> </h1>
                    <img className="w-[280px] group-hover:absolute group-hover:bottom-0" src={doctorateImg} alt="Diploma" />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Requirements