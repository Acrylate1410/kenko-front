import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6";
import { BiLogoMessenger } from "react-icons/bi";
import { useRef } from "react";
export function Contact() {
    const name = useRef(null)
    const phone = useRef(null)
    const email = useRef(null)
    const message = useRef(null)
    return (
        <>
            <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Liên hệ</span></div>
            <div className="mb-12 justify-between md:mx-48 items-center text-justify mt-8">
                <div className="mb-8 md:ml-0 mx-8 md:mr-0 text-blue-950 text-center">
                    <p className="font-semibold text-lg">THÔNG TIN LIÊN HỆ</p>
                    <p>Khách hàng có nhu cầu liên lạc, trao đổi, đóng góp ý kiến, <br className="hidden"></br>vui lòng liên hệ theo:</p>
                    <p><span className="font-semibold">Điện thoại: </span><span>096 509 1155</span></p>
                    <p><span className="font-semibold">Email: </span><span>akiko.vn3568@gmail.com</span></p>
                    <div className="flex justify-center w-full">       
                        <Link to="tel:0965091155" className='h-9 aspect-square flex justify-center items-center my-2  rounded-full border border-blue-950 hover:scale-125 transition hover:bg-blue-950 hover:text-white hover:border-white'>
                            <FaPhoneVolume className="text-xl"/>
                        </Link> 
                        <Link to="" className="mx-2 h-9 aspect-square flex justify-center items-center my-2  rounded-full border border-blue-950 hover:scale-125 hover:bg-[#0866ff] hover:text-white hover:border-white transition ">
                            <FaFacebookF className="text-xl"/>
                        </Link>
                        <Link to="" className="h-9 aspect-square flex justify-center items-center my-2  rounded-full border border-blue-950 hover:scale-125 hover:bg-[#0a7cff] hover:text-white hover:border-white transition ">
                            <BiLogoMessenger className="text-2xl"/>
                        </Link>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 py-12 text-blue-950">
                    <p className="font-semibold text-center text-lg">GỬI TIN NHẮN CHO CHÚNG TÔI</p>
                    <div className="my-4"></div>
                    <div className="md:flex justify-between">
                        <input ref={name}  className="border border-gray-300 py-1 px-3 w-full md:flex-1 placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Họ và tên"/>
                        <div className="md:mx-2 md:my-0 my-4"></div>
                        <input ref={phone} className="border border-gray-300 py-1 px-3 w-full md:w-1/4 placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Số điện thoại"/>
                    </div>
                    <div className="my-4"></div>
                    <input ref={email} className="border border-gray-300 py-1 px-3 w-full placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Email"/>
                    <div className="my-4"></div>
                    <textarea ref={message} rows={4} className="resize-none border border-gray-300 py-1 px-3 w-full placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Lời nhắn"/>
                    <div className="w-full justify-center flex items-center"><button onClick={() => {}} className="border border-gray-500 py-1 px-3 font-semibold mx-auto mt-4 uppercase bg-blue-950 text-white hover:scale-105 transition text-sm">Gửi tin nhắn</button></div>
                </div>
            </div>
        </>
    )
}