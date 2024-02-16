import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import Footer from "./Footer";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { SlArrowUp } from "react-icons/sl";
import { Nav } from "./Nav";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimpleThin, PiCertificateFill } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import Hamburger from "hamburger-react";
const Layout = () => {
    const [pos, setPos] = useState("right-[-61px]")
    const HamburgerComponent = () => {
      const [isOpen, setOpen] = useState(false)
      let status
      isOpen ? status = "" : status = "hidden"
      return (
        <>
          <div className="z-[200] relative md:hidden"><Hamburger toggled={isOpen} toggle={setOpen} size={25}/></div>
          <div className={'fixed top-0 bottom-0 left-[33%] right-0 bg-white z-[100] ' + status}>
            <div className='mt-20'>
                {[{text: "Trang chủ", link: "/"}, 
                  {text: "Giới thiệu", link: "/gioi-thieu"},
                  {text: "Sản phẩm", link: "/danh-muc-san-pham"},
                  {text: "Tin tức", link: "/tin-tuc"},
                  {text: "Liên hệ", link: "/lien-he"}].map(i => 
                    <Link reloadDocument to={i.link} key={i.text}>
                        <div className='cursor-pointer text-blue-950 border-b border-gray-300 pl-6 py-3 text-[#093489] font-medium ' onClick={() => {setOpen(false)}}>{i.text}</div>
                    </Link>
                )}
            </div>
          </div>
        </>
      )
    }
    const onScroll = () => {
      setPos("right-[24px]")
    };
    useEffect(() => {
      window.history.scrollRestoration = 'manual'
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll);
    }, [])
    return (
        <div className="App w-full overflow-hidden relative bg-blue-50">
            <header className={'bg-gradient-to-r from-white to-blue-50 header md:py-6 pt-6 pb-2 top-0 right-0 left-0 z-30'}>
              <div className='flex items-center justify-between'>
                <Link reloadDocument to="/" className='flex h-8 cursor-pointer ml-4 md:ml-12'>
                  <img src="LOGOKENKO-01.png" alt="KENKO" className='object-contain'></img>
                </Link>
                <Nav/>
                <div className='flex w-1/4 justify-end mr-4 md:mr-12'>
                  <HSearchBar/>
                  <div className={'flex items-center justify-center ml-4 '}>
                    <PiShoppingCartSimpleThin  className='text-3xl md:text-2xl w-[48px] md:w-auto'/>
                    <HamburgerComponent/>
                  </div>
                </div>
              </div>
              <VSearchBar/>    
            </header>
            <button className={pos + ' fixed bottom-[20px] text-[44px] z-[100] transition-[right] text-gray-500 border border-gray-500 rounded-full p-2 hover:text-white bg-white hover:bg-blue-800 hover:border-blue-800'}  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><SlArrowUp className="text-xl"/></button>
            <Link to="tel:0965091155" className={pos + ' fixed bottom-[65px] text-[44px] z-[100] transition-[right] text-gray-500 border border-gray-500 rounded-full p-2 hover:text-white bg-white hover:bg-lime-400 hover:border-lime-400 md:hidden'}><FiPhone className="text-xl"/></Link>
            <Outlet />
            <section className='flex justify-center items-start bg-blue-950'>
                <div className='flex flex-col items-center py-2 text-white w-1/4 text-center'>
                  <div className="h-10"><BsBoxSeamFill className='text-4xl'/></div>
                  <p className="text-xs md:text-sm mt-2">Hàng chính hãng 100%</p>
                </div>
                <div className='flex flex-col items-center py-2 text-white w-1/4 text-center mx-8'>
                  <div className="h-10"><FaShippingFast className='text-4xl'/></div>
                  <p className="text-xs md:text-sm mt-2">Miễn phí giao hàng <br className="md:hidden"></br>toàn quốc</p>
                </div>
                <div className='flex flex-col items-center py-2 text-white w-1/4 text-center'>
                  <div className="h-10"><PiCertificateFill className='text-4xl'/></div>
                  <p className="text-xs md:text-sm mt-2">Đảm bảo nguồn gốc, chất lượng sản phẩm <br className="hidden md:block"></br> và nguyên liệu đầu vào</p>
                </div>
            </section>
            <Footer/>
        </div>
)};

function HSearchBar() {
  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])
  const outerRef = useRef()
  const input = useRef()
  const navigate = useNavigate();
  const showSuggestion = (e) => {
    setQuery(e)
    fetch("https://kenko-api.onrender.com/products/get_products").then(res => res.json()).then(data => {
        setProducts(data || [])
    }).catch(error => {})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    input.current.value = ''
    query !== "" ? window.location.href = "/search?query=" + query.toLowerCase().replaceAll(" ", "-") : navigate("#")
  }
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (outerRef.current && !outerRef.current.contains(e.target)) {
        setQuery("")
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <form className='w-full relative hidden md:block' ref={outerRef} onSubmit={handleSubmit}>
      <Link reloadDocument to={"/search?query=" + query.toLowerCase().replaceAll(" ", "-")} className='absolute right-3 top-0 bottom-0 flex items-center'><CiSearch/></Link>
      <input ref={input} className='border py-1 px-3 w-full placeholder:text-sm outline-0 bg-transparent border-gray-500' placeholder='Nhập từ khóa tìm kiếm' onInput={(e) => showSuggestion(e.target.value)}></input>
      <div className={query === "" ? "hidden" : "absolute left-0 right-0 bg-white top-9 border border-gray-300 z-[10000]"}>
          {products.filter(el => {
              if (query === '') {
                  return false
              }
              return el.name.toLowerCase().startsWith(query.toLowerCase())}).map(i => 
                <Link reloadDocument to={"/san-pham?id=" + i.name.toLowerCase().replaceAll(" ", "-")} className="flex items-center h-16 border-b border-b-gray-300 pl-2 py-1" onClick={() => setQuery("")}>
                  <div className="h-full aspect-square flex justify-center items-center"><img src={i.thumbnail} alt={i.name} className="h-4/5 mx-auto"></img></div>
                  <div className="font-semibold text-blue-950 text-sm">{i.name}</div>
                </Link>
              )
          }
      </div>
    </form>
  )
}
function VSearchBar() {
  const outerRef = useRef()
  const [query, setQuery] = useState("")
  const [products, setProducts] = useState([])
  const input = useRef()
  const showSuggestion = (e) => {
    setQuery(e)
    fetch("https://kenko-api.onrender.com/products/get_products").then(res => res.json()).then(data => {
        setProducts(data || [])
    }).catch(error => {})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (outerRef.current && !outerRef.current.contains(e.target)) {
        setQuery("")
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <form className='w-full relative md:hidden mt-4' ref={outerRef} onSubmit={handleSubmit}>
        <Link reloadDocument to={"/search?query=" + query.toLowerCase().replaceAll(" ", "-")} className='absolute right-3 top-0 bottom-0 flex items-center'><CiSearch/></Link>
        <input ref={input} className='border border-gray-300 bg-transparent py-1 px-3 w-full placeholder:text-sm outline-0' placeholder='Nhập từ khóa tìm kiếm' onInput={(e) => showSuggestion(e.target.value)}></input>
        <div className={query === "" ? "hidden" : "absolute left-0 right-0 bg-white top-9 border-l border-r border-t border-gray-300 z-[10000]"}>
            {products.filter(el => {
                if (query === '') {
                    return false
                }
                return el.name.toLowerCase().startsWith(query.toLowerCase())}).map(i => 
                  <Link reloadDocument to={"/san-pham?id=" + i.name.toLowerCase().replaceAll(" ", "-")} className="flex items-center h-16 border-b border-b-gray-300 pl-2 py-1" onClick={() => {setQuery("")}}>
                    <div className="h-full aspect-square flex justify-center items-center"><img alt={i.name} src={"/thumbnails/" + i.thumbnail} className="h-4/5 mx-auto"></img></div>
                    <div className="font-semibold text-blue-950">{i.name}</div>
                  </Link>
                )
            }
        </div>
    </form>
  )
}
export default Layout;