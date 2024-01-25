import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6";
import { BiLogoMessenger } from "react-icons/bi";
import { useRef } from "react";
import { MdMailOutline, MdOutlineFeed, MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
export function Contact() {
    const name = useRef(null)
    const phone = useRef(null)
    const email = useRef(null)
    const message = useRef(null)
    return (
        <>
            <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Liên hệ</span></div>
            <div className="mb-12 justify-between md:mx-32 text-justify mt-8 md:flex mx-8">
                <div className="mt-4 text-justify md:w-[45%] mb-8 md:mb-0">
                        <div className="font-semibold pb-2 w-full text-lg">Công ty TNHH xuất nhập khẩu và thương mại Akiko</div>
                        <div className="mt-2 flex">
                            <MdOutlineLocationOn className="w-[6%] mt-1 text-lg"/>
                            <div className="w-[94%] ml-1"><span className="font-medium">Địa chỉ:</span> Căn 1B-nhà B, Tập thể Quân đội Học viện Chính trị, Kim Mã, phường Kim Mã, quận Ba Đình, thành phố Hà Nội, Việt Nam</div>
                        </div>
                        <div className="mt-2 flex">
                            <MdMailOutline className="w-[6%] mt-1 text-lg"/>
                            <div className="w-[94%] ml-1"><span className="font-medium">Email:</span> akiko.vn3568@gmail.com</div>
                        </div>
                        <div className="mt-2 flex">
                            <MdOutlinePhone className="w-[6%] mt-1 text-lg"/>
                            <div className="w-[94%] ml-1"><span className="font-medium">Hotline:</span> 096 509 1155</div>
                        </div>
                    </div>
                <div className="bg-gray-100 px-4 py-8 text-blue-950 md:w-[45%]">
                    <p className="font-semibold text-center text-lg">Gửi tin nhắn cho chúng tôi</p>
                    <div className="my-4"></div>
                    <input ref={name}  className="border border-gray-300 py-1 px-3 w-full md:flex-1 placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Họ và tên"/>
                    <div className="my-4"></div>
                    <input ref={phone} className="border border-gray-300 py-1 px-3 w-full placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Số điện thoại"/>
                    <div className="my-4"></div>
                    <input ref={email} className="border border-gray-300 py-1 px-3 w-full placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Email"/>
                    <div className="my-4"></div>
                    <textarea ref={message} rows={4} className="resize-none border border-gray-300 py-1 px-3 w-full placeholder:text-sm outline-0 focus:border-gray-500" placeholder="Lời nhắn"/>
                    <div className="w-full justify-center flex items-center"><button onClick={() => {}} className="rounded-lg border border-gray-500 py-1 px-3 font-semibold mx-auto mt-4 bg-blue-950 text-white hover:scale-105 transition text-sm">Gửi tin nhắn</button></div>
                </div>
            </div>
        </>
    )
}