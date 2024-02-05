import { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {  Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Product } from './Product';

export function Home() {
    return (
        <div className="relative">
          <Swiper slidesPerView={1} autoplay={{delay: 5000, disableOnInteraction: false}}
            spaceBetween={30} pagination={{clickable: true}} modules={[Autoplay, Pagination]} className='!w-full h-[250px] md:h-[650px]'>
                  <SwiperSlide className='!flex items-center !h-full'>     
                    <div className='w-full h-full bg-[url(/public/288226102_102207869202114_7592646097454851360_n.jpg)] bg-cover bg-center'></div>
                  </SwiperSlide>
          </Swiper>
          <section className='w-full scroll-m-20 mt-8'>
              <div className='flex justify-between items-center mx-4 md:mx-8'>
                <h2 className='font-semibold text-xl md:text-3xl text-center my-4 mr-4 text-blue-950'>Sản phẩm</h2>
                <Link to="/danh-muc-san-pham" className='font-semibold text-lg text-center ml-4 text-blue-950 hover:bg-blue-950 hover:text-white py-1 px-2'>Xem tất cả sản phẩm &rarr;</Link>
              </div>
              <hr className='mx-8 border border-t-blue-950 mb-8'/>
              <div className='md:flex md:justify-between md:items-center flex-wrap'>
                <ProductSwiper/>
              </div>
          </section>
          <section className='w-full scroll-m-20 mt-8 mb-12'>
              <div className='flex justify-between items-center mx-4 md:mx-8'>
                <h2 className='font-semibold text-xl md:text-3xl text-center my-4 mr-4 text-blue-950'>Tin tức</h2>
                <Link to="/tin-tuc" className='font-semibold text-lg text-center ml-4 text-blue-950 hover:bg-blue-950 hover:text-white py-1 px-2'>Xem tất cả tin tức &rarr;</Link>
              </div>
              <hr className='mx-8 border border-t-blue-950 mb-8'/>
              <ArticleSwiper/>
          </section>
        </div>
    )
  };

function ProductSwiper() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      fetch("https://kenko-api.onrender.com/products/get_products").then(res => res.json()).then(data => {
        setProducts(data || [])
      }).catch(error => {})
    }, []);
    return (
      <Swiper breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20
          }, 
          768: {
            slidesPerView: 4,
            spaceBetween: 30
          },
        }} navigation={true} modules={[Navigation]} className='products md:!mx-8 !w-[92%] md:!w-full'>
            {products.map(i => 
                <SwiperSlide key={i.name} className='!bg-white'>
                  <Product src={i.thumbnail} name={i.name} link={i.link}/>
                </SwiperSlide>
            )}
      </Swiper>
    )
}

function ArticleSwiper() {
  const [articleList, setArticleList] = useState([])
  useEffect(() => {
    fetch("https://kenko-api.onrender.com/articles/get_articles").then(res => res.json()).then(data => {
        setArticleList(data || [])
    }).catch(error => {})
  }, []);
  return (
    <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          }, 
          768: {
            slidesPerView: 3,
          },
        }} spaceBetween={30} navigation={true} modules={[Navigation]} className='!mx-4 md:!mx-8'>
      {articleList.map(i =>
        <SwiperSlide key={i.title}>
            <Link to={i.link ? i.link : "/bai-viet?id=" + i._id}>
              <img className='h-60 w-full object-cover' alt={i.title} src={i.thumbnail}></img>
              <div className='absolute bottom-0 h-20 left-0 right-0 flex items-center text-white font-semibold text-lg px-4'>
                <div className='absolute bottom-0 top-0 right-0 left-0 bg-blue-950 opacity-70 z-[100]'></div>
                <div className='z-[200] text-justify'>{i.title}</div>
              </div>
            </Link>
        </SwiperSlide>
      )}
    </Swiper>
  )
}