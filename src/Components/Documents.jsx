import DocImg from "../../public/Documents-bro 1.svg"
import faq from "../../public/FaQ.png"
import statementImage from "../../public/Documents-amico 1.svg"
import dockReq from "../../public/Documents-rafiki 1.svg"

function Documents() {
  return (
    <div>
        <div className='bg-[#EFF6FF] text-white p-[20px]'>
            <h1 className='text-[56px] font-[600] text-black text-center pt-[100px]'>Documents Required to Study in <br /> Canada for International Students</h1>
            <div className="flex items-center justify-between p-[20px] mt-[50px]">
                <div className="w-[50%]">
                <h1 className='text-black text-[18px]'>
                The Canadian Government provides an opportunity to Bangladeshi students to study in the country but as a prerequisite, you’ll have to obtain a Study Permit and a Temporary Resident Visa (TRV).
                </h1>
                <br />
                <h1 className='text-black text-[18px]'>
                <span className="font-[600]">What is a study permit?</span>
                <br />
                This is not a visa, it’s a permit or a document issued by the Citizen and Immigration (CIC) which allows you to Study in Canada. If you hold a study permit, you must remain enrolled and make reasonable and timely progress towards completing your course.
                <br />
                <br />
                Your study permit is always accompanied along by a visitor visa or Electronic Travel Authorization (ETA). Please note that a study permit is a document that allows you to study in Canada while a visitor visa or ETA allows you to enter Canada. Your counsellor will help you access the latest information and connect you with authorized migration experts.
                </h1>
                <br />
                <h1 className='text-black text-[18px]'>
                <span className="font-[600]">Documents required for your study permit To apply for your study permit, you will need:</span>

                <br />
                <br />
                    <li className='ml-[20px]'>An acceptance letter from your education institution, and</li>
                    <li className='ml-[20px]'>A valid passport or travel document</li>
                    <li className='ml-[20px]'>Proof that you can support yourself or any family members who might accompany you, while you’re in Canada</li>
                    <li className='ml-[20px]'>Letter of acceptance: From a Designated Learning Institution (DLI)</li>
                    <li className='ml-[20px]'>Check the minimum funds that need to be reflected in your bank account as an international student</li>
                </h1>
                </div>
                <img src={dockReq} alt="" />
            </div>
        </div>
        {/* Statement */}
        <div className="p-[20px]">
            <h1 className="text-[56px] font-[600] text-center mt-[100px]">Statement of Purpose for Canada</h1>
            <div className="flex items-center justify-between">
                <img src={statementImage} alt="" />
                <div className="w-[45%]">
                    <h1 className="text-[18px]">The Statement of Purpose (SOP) is a crucial document for students who want to study abroad. It is typically 1000–1200 words long and serves as an essay that showcases your identity and outlines the value you will bring to the university. It is important to follow a specific format and stick to the word limit to create an impressive SOP. If you need detailed guidance on how to structure a compelling Statement of Purpose, you can seek assistance from Shabuj Global Educations's counselors.</h1>
                    <h1 className="text-[18px]">
                    A typical SOP generally follows the following structure:
                    <br />
                    <br />
                      <li className='ml-[20px]'>  Introduction </li>
                      <li className='ml-[20px]'>  Academic Background </li>
                      <li className='ml-[20px]'>  Research or Professional Experience </li>
                      <li className='ml-[20px]'>  Motivation and Objectives </li>
                      <li className='ml-[20px]'>  Future Plans and Contributions </li>
                      <li className='ml-[20px]'>  Conclusion </li>
                    </h1>
                </div>
            </div>
        </div>
        {/* document require */}
        
        <div className='bg-[#EFF6FF] text-white p-[20px]'>
            <h1 className='text-[56px] font-[600] text-black text-center pt-[100px]'>Documents Required to apply <br />  for Canada Study Visa</h1>
            <div className="flex items-center justify-between p-[20px] mt-[50px]">
                <h1 className='text-black text-[18px] w-[45%]'>
                To apply for a Canadian study visa, you'll need to provide the following documents:

                <br />
                <br />
                    <li className='ml-[20px]'> Passport: A valid passport that covers the length of your intended stay in Canada</li>
                    <li className='ml-[20px]'>Statement of Purpose (SOP): A written statement that explains your academic background, career goals, and reasons for choosing Canada</li>
                    <li className='ml-[20px]'>Passport-sized photographs: Two photographs that meet the required criteria if you're applying by mail, or a digital copy if you're applying online</li>
                    <li className='ml-[20px]'>Letter of acceptance: From a Designated Learning Institution (DLI)</li>
                    <li className='ml-[20px]'> Proof of financial support: Also known as proof of funds, this document shows that you have enough money to cover your first year of tuition and live in Canada</li>
                </h1>
                <img src={DocImg} alt="" />
            </div>
        </div>

        {/* Faq */}
        <div className="p-[20px] Faq">
            <h1 className="text-[56px] font-[600] text-center text-black mt-[100px]">Frequently Asked Questions</h1>
            <div className="flex items-center justify-between mt-[100px] " >
                <img src={faq} alt="" />
                <div className="bg-[#191F2C] p-[20px] w-[45%] rounded-3xl">
                    <div className="collapse border-b-[2px] border-gray-400  rounded-none">
                    <input type="radio" name="my-accordion-1"  />
                    <div className="collapse-title  text-[20px]  text-white">How much does it cost to study in Canada?</div>
                    <div className="collapse-content">
                        <p className="text-white text-[14px]">Studying in Canada: Universities costs range from an average of CA$25,000 - CA$35,000 per year for international students.</p>
                    </div>
                    </div>
                    <div className="collapse border-b-[2px] border-gray-400  rounded-none">
                    <input type="radio" name="my-accordion-1"  />
                    <div className="collapse-title  text-[20px]  text-white">What qualification is required to study in Canada?</div>
                    <div className="collapse-content">
                        <p className="text-white text-[14px]">Qualifications: A high school diploma for undergraduate; a bachelor's degree for postgraduate and proficiency in English or French.</p>
                    </div>
                    </div>
                    <div className="collapse border-b-[2px] border-gray-400  rounded-none">
                    <input type="radio" name="my-accordion-1"  />
                    <div className="collapse-title  text-[20px]  text-white">What is the fastest way to get PR in Canada?</div>
                    <div className="collapse-content">
                        <p className="text-white text-[14px]">Fastest PR path: Express Entry, especially if one qualifies for Canadian Experience Class after studying/working in Canada.</p>
                    </div>
                    </div>
                    <div className="collapse border-b-[2px] border-gray-400  rounded-none">
                    <input type="radio" name="my-accordion-1"  />
                    <div className="collapse-title  text-[20px]  text-white">Can I study in Canada and get a job?</div>
                    <div className="collapse-content">
                        <p className="text-white text-[14px]">Yes, many international students find jobs in Canada post-graduation.</p>
                    </div>
                    </div>
                    <div className="collapse border-b-[2px] border-gray-400  rounded-none">
                    <input type="radio" name="my-accordion-1"  />
                    <div className="collapse-title  text-[20px]  text-white">Can I get PR after 1 year of study in Canada?</div>
                    <div className="collapse-content">
                        <p className="text-white text-[14px]">No, but studying in Canada can make it easier to qualify for PR through pathways like the Canadian Experience Class.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Documents