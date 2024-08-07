import image from "../../public/image.avif"
import "./guidance.css"

function Guidance() {
  return (
    <div className='p-[20px] mx-auto '>
        <div className='bg-black w-[75%] mx-auto p-[40px] mt-[100px] mb-[100px] flex items-center justify-between rounded-3xl main'>
            <h1 className='text-white text-[28px] font-[600]'>Need guidance? Let us help you.</h1>
            <button className='text-black bg-white p-[10px] rounded-3xl hover:text-blue-800'>Talk to a Counsellor</button>
        </div>
    </div>
  )
}

export default Guidance