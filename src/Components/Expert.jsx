import "./expert.css"
import bg from "../../public/Expert Canada BG Seperated.svg"
import man from "../../public/man.png"

function Expert() {
  return (
    <div className="expertMain flex items-center justify-around p-[20px] h-[400px]">
        <div>
            <h1 className="text-[56px] text-white font-[600]">Talk to Our Expert <br />  Canada Counselor</h1>
            <button className="text-[16px] bg-white p-[10px] font-[600]  rounded-3xl w-[200px]">Contact Now </button>
        </div>
        <div className="group cursor-pointer h-[500px] relative mt-[-100px]">
    <div className="relative">
        <img className="z-10 relative " src={man} alt="" />
        <div className="bg-white w-[400px] h-[400px] rounded-full absolute bottom-[-50px] left-10"></div>
    </div>
    <img className="opacity-0 z-0 group-hover:opacity-100 ease-in-out duration-300 absolute mb-[-100px]  top-0 bottom-28" src={bg} alt="" />
</div>

    </div>
  )
}

export default Expert