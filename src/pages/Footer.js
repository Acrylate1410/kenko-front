import { FaFacebookF } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlinePhone, MdMailOutline, MdOutlineFeed} from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPhoneVolume } from "react-icons/fa6";
import { BiLogoMessenger } from "react-icons/bi";
export default function Footer() {
    return (
        <footer className='md:flex pt-6 pb-6 md:pb-12 md:text-start w-full px-6 md:px-12 text-blue-950'>
            <div className="w-full md:ml-8 ">
                <div className='flex cursor-pointer w-36'>
                    <img src="LOGOKENKO-01.png" alt="KENKO" className='object-contain'></img>
                </div>
                <div className="leading-7 md:flex md:justify-between">
                    <div className="mt-4 md:w-2/5 text-justify">
                        <div className="font-semibold border-b border-b-blue-950 pb-2 w-full">Công ty TNHH xuất nhập khẩu và thương mại Akiko</div>
                        <div className="mt-2 flex">
                            <MdOutlineLocationOn className="w-[6%] mt-0.5 text-lg"/>
                            <div className="w-[94%] text-sm ml-1"><span className="font-medium">Địa chỉ:</span> Căn 1B-nhà B, Tập thể Quân đội Học viện Chính trị, Kim Mã, phường Kim Mã, quận Ba Đình, thành phố Hà Nội, Việt Nam</div>
                        </div>
                        <div className="mt-2 flex">
                            <MdOutlineFeed className="w-[6%] mt-0.5 text-lg"/>
                            <div className="w-[94%] text-sm ml-1"><span className="font-medium">Số ĐKKD:</span> 0110333040</div>
                        </div>
                        <div className="mt-2 flex">
                            <MdMailOutline className="w-[6%] mt-0.5 text-lg"/>
                            <div className="w-[94%] text-sm ml-1"><span className="font-medium">Email:</span> akiko.vn3568@gmail.com</div>
                        </div>
                        <div className="mt-2 flex">
                            <MdOutlinePhone className="w-[6%] mt-0.5 text-lg"/>
                            <div className="w-[94%] text-sm ml-1"><span className="font-medium">Hotline:</span> 096 509 1155</div>
                        </div>
                    </div>
                    <div className="mt-4 md:w-[15%] flex flex-col">
                        <div className="font-semibold border-b border-b-blue-950 pb-2 w-full">Đường dẫn</div>
                        {[{text: "Trang chủ", link: "/"}, 
                        {text: "Giới thiệu", link: "/gioi-thieu"},
                        {text: "Sản phẩm", link: "/danh-muc-san-pham"},
                        {text: "Tin tức", link: "/tin-tuc"},
                        {text: "Liên hệ", link: "/lien-he"}].map(i => 
                            <Link reloadDocument to={i.link} className="mt-2 w-fit text-sm" key={i.text}><div className='cursor-pointer hover:scale-105 transition'>{i.text}</div></Link>
                        )}
                    </div>
                    <div className="flex flex-col items-center md:w-[15%] md:mr-12 mt-4">
                        <div className="font-semibold border-b border-b-blue-950 pb-2 w-full">Thông tin liên hệ</div>
                        <div className="flex w-full mt-1">       
                            <Link to="tel:0965091155" className='h-9 aspect-square flex justify-center items-center my-2  rounded-full border border-blue-950 hover:scale-125 transition hover:bg-blue-950 hover:text-white hover:border-white'>
                                <FaPhoneVolume className="text-xl"/>
                            </Link> 
                            <Link to="https://www.facebook.com/profile.php?id=61554886507619&sk=friends_likes" className="mx-2 h-9 aspect-square flex justify-center items-center my-2  rounded-full border border-blue-950 hover:scale-125 hover:bg-[#0866ff] hover:text-white hover:border-white transition ">
                                <FaFacebookF className="text-xl"/>
                            </Link>
                            <Link to="" className="h-9 aspect-square flex justify-center items-center my-2  rounded-full border border-blue-950 hover:scale-125 hover:bg-[#0a7cff] hover:text-white hover:border-white transition ">
                                <BiLogoMessenger className="text-2xl"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>    
        </footer>
    )
}