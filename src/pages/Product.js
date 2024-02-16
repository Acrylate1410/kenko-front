import { Link } from "react-router-dom";
import { PiShoppingCartSimpleThin } from "react-icons/pi"
import { useState } from "react";
export function Product(props) {   
    return (
        <Link reloadDocument to={"/san-pham?id=" + props.link} className='w-[45%] md:w-[23%] text-center relative bg-white mb-8'>
            <Thumbnail src={props.src} name={props.name}/>
            <div className='font-semibold mt-2 h-9 md:h-6 text-sm md:text-base text-blue-950'>{props.name}<span></span></div>
            <div className="mb-2 md:mt-1 text-xs md:text-sm"></div>
            <Link to="" className='w-fit py-2 px-4 bg-blue-950 hover:bg-white hover:text-blue-950 border border-blue-950 text-white transition font-semibold mb-4 rounded-lg flex items-center justify-center mx-auto'>
                <PiShoppingCartSimpleThin className="text-lg"/>
                <div className="mx-1"></div>
                <div className="text-xs md:text-sm">Liên hệ</div>
            </Link>
        </Link>
    )
}

function Thumbnail(props) {
    const [glare, setGlare] = useState("left-[-90%]") 
    return (
        <div className='w-full h-56 flex justify-center items-center overflow-hidden relative' onMouseEnter={() => setGlare("left-[100%] transition-[left] duration-[2500ms]")} onMouseLeave={() => setGlare("left-[-90%]")}>
            <div className={"md:block hidden opacity-50 bg-gradient-to-t from-white to-transparent h-8 w-[250%] absolute top-0 -rotate-45 " + glare}></div>
            <img src={props.src} className="h-[75%]" alt={props.name}></img>
        </div>
    )
}