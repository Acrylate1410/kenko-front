import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { FreeMode, Thumbs, Pagination } from 'swiper/modules';
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
export function ProductDetails() {
  const [params] = useSearchParams()
  const [product, setProduct] = useState({})
  useEffect(() => {
      fetch("https://kenko-api.onrender.com/products/get_one_product/" + params.get("id")).then(res => res.json()).then(data => {
        setProduct(data[0] || {})
      }).catch(error => {})
  }, []);
    return (
      <>
          <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span><Link to="/danh-muc-san-pham">Danh mục sản phẩm</Link></span><span className='mx-1'>|</span><span className="font-semibold">{product.name}</span></div>
          <div className="flex flex-col md:flex-row md:mt-8 justify-center">
            <div className="md:w-1/3 order-3 md:order-1">
              <SwiperComponent slide1={product.thumbnail} slide2={product.thumbnail}/>
            </div>
            <div className="mx-8 order-2"></div>
            <div className="md:w-1/3 mt-4 md:mt-0 md:order-3 order-1">
              <p className="text-2xl font-semibold w-4/5 md:w-full pb-2 text-center md:text-start mx-auto md:mx-0">{product.name}</p>
              <div className="mt-4 hidden md:block text-justify">
                <p className="mb-2"><span className="font-semibold">Trọng lượng: </span><span>{product.mass}</span></p>
                <p className="mb-2"><span className="font-semibold">Thành phần chính: </span><span>{product.ingredients && product.ingredients.replace("Thành phần chính: ", "")}</span></p>
                {product.expirationDate && 
                  <>
                    <p className="mb-2"><span className="font-semibold">Ngày sản xuất: </span><span>Xem trên bao bì sản phẩm</span></p>
                    <p className="mb-2"><span className="font-semibold">Hạn sử dụng: </span><span>{product.expirationDate + " tháng kể từ ngày sản xuất"}</span></p>
                  </>
                }
                <p className="mb-2"><span className="font-semibold">Nhà sản xuất: </span><span>{product.factory}</span></p>
                <p className="mb-2"><span className="font-semibold">Địa chỉ: </span><span>{product.address}</span></p>
                <Link to="#" className='w-fit mt-6 py-2 px-2 md:px-4 bg-blue-950 text-white font-semibold transition mb-4 rounded-lg flex items-center justify-center'>
                  <PiShoppingCartSimpleThin className="text-lg"/>
                  <div className="mx-1"></div>
                  <div className="text-xs md:text-sm">Liên hệ để mua hàng</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-8">
            <Link to="#" className='md:hidden w-full mt-6 py-2 px-2 md:px-4 bg-blue-950 transition text-white mb-4 flex items-center justify-center'>
              <PiShoppingCartSimpleThin className="text-lg"/>
              <div className="mx-1"></div>
              <div className="text-xs md:text-sm">Liên hệ để mua hàng</div>
            </Link>
          </div>
          <div className="w-4/5 mx-auto mt-4  md:hidden ">
              <div className="mt-2">
                <p className="mb-2"><span className="font-semibold">Trọng lượng: </span><span>{product.mass}</span></p>
                <p className="mb-2"><span className="font-semibold">Thành phần chính: </span><span>{product.ingredients && product.ingredients.replace("Thành phần chính: ", "")}</span></p>
                {product.expirationDate && 
                  <>
                    <p className="mb-2"><span className="font-semibold">Ngày sản xuất: </span><span>Xem trên bao bì sản phẩm</span></p>
                    <p className="mb-2"><span className="font-semibold">Hạn sử dụng: </span><span>{product.expirationDate + " tháng kể từ ngày sản xuất"}</span></p>
                  </>
                }
                <p className="mb-2"><span className="font-semibold">Nhà sản xuất: </span><span>{product.factory}</span></p>
                <p className="mb-2"><span className="font-semibold">Địa chỉ: </span><span>{product.address}</span></p>
              </div>
          </div>
          <Details product={product}/>
      </>
    )
  };

  function Details(props) {
    const [tab, setTab] = useState(1)
    const [hover, setHover] = useState(0)
    return (
        <div className="w-4/5 mx-auto my-8 text-justify">
        <div className="flex font-semibold my-4 border-y border-y-blue-950 py-1 md:pl-4">
          <div onClick={() => setTab(1)} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} className={tab === 1 || hover === 1 ? "border-b-2 border-b-blue-950 text-blue-950 pb-1 cursor-pointer" : "pb-1 cursor-pointer"}>Mô tả sản phẩm</div>
          <div className="mx-8">|</div>
          <div onClick={() => setTab(2)} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} className={tab === 2 || hover === 2 ? "border-b-2 border-b-blue-950 text-blue-950 pb-1 cursor-pointer" : "pb-1 cursor-pointer"}>Công dụng</div>
          <div className="mx-8">|</div>
          <div onClick={() => setTab(3)} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)} className={tab === 3 || hover === 3 ? "border-b-2 border-b-blue-950 text-blue-950 pb-1 cursor-pointer" : "pb-1 cursor-pointer"}>Hướng dẫn sử dụng</div>
        </div>
          {tab === 1 ? 
              <div className="text-[15px] mt-2">
                  {props.product.description && props.product.description.map(i =>
                    <div key={i}>{i}</div>  
                  )}
              </div> : 
          tab === 2 ?
              <div className="text-[15px] mt-2">
                  {props.product.function && props.product.function.map(i =>
                      <div className="flex items-start" key={i}>{"- " + i}</div>
                  )}
              </div> :
              <div className="text-[15px] mt-2">
                  <span className="font-semibold">Hướng dẫn sử dụng: </span>
                  {props.product.instruction && props.product.instruction.map(i =>
                    <p key={i}>{i}</p> 
                  )}
                  <span className="font-semibold">Đối tượng: </span>
                  {props.product.subject && props.product.subject.map(i =>
                    <p key={i}>{"- " + i}</p> 
                  )}  
              </div>
        }
      </div>
    )
  }

  function SwiperComponent(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
      <>
        <Swiper style={{'--swiper-pagination-color': '#fff',}}
          spaceBetween={10} thumbs={{ swiper: thumbsSwiper }} modules={[FreeMode, Thumbs]}
          className="mySwiper2 w-full aspect-square  shadow-[0_15px_15px_-15px_rgba(0,0,0,0.3)] border border-gray-300 !hidden md:!block">
          <SwiperSlide className="w-full !flex items-center justify-center h-full">
            <img src={props.slide1} className="h-[75%]"/>
          </SwiperSlide>
          <SwiperSlide className="w-full !flex items-center justify-center h-full">
            <img src={props.slide2} className="h-[75%]"/>
          </SwiperSlide>
        </Swiper>
        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className="thumb shadow-[0_15px_15px_-15px_rgba(0,0,0,0.3)] w-full aspect-[4/1] !hidden md:!block">
          <SwiperSlide className="w-full !flex items-center justify-center h-full">
            <img src={props.slide1} className="h-[75%]"/>
          </SwiperSlide>
          <SwiperSlide className="w-full !flex items-center justify-center h-full">
            <img src={props.slide2} className="h-[75%]"/>
          </SwiperSlide>
        </Swiper>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper  w-full aspect-square  shadow-[0_10px_10px_-10px_rgba(0,0,0,0.3)] md:!hidden">
          <SwiperSlide className="w-full !flex items-center justify-center h-full">
            <img src={props.slide1} className="h-[75%]"/>
          </SwiperSlide>
          <SwiperSlide className="w-full !flex items-center justify-center h-full">
            <img src={props.slide2} className="h-[75%]"/>
          </SwiperSlide>
        </Swiper>
      </>
    )
}