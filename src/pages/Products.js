import { Product } from './Product';
import { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
export default function Products() {
  const [products, setProducts] = useState([])
  const [sort, setSort] = useState("Tên sản phẩm từ A-Z")
    useEffect(() => {
      fetch("https://okyibhzr7o.genhosting.net/kenko/products/get_products").then(res => res.json()).then(data => {
        setProducts(data || [])
      }).catch(error => {})
    }, []);
    return (
        <>
          <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className='font-semibold'>Danh mục sản phẩm</span></div>
          <div className='mt-4 md:mt-0'>
            <div className="md:ml-auto">
              <div className='flex items-center justify-end mr-7'>
                <label for="orders" className='text-sm font-semibold text-blue-950'>Sắp xếp theo</label>
                <div className='mx-1'></div>
                <select onChange={(e) => {setSort(e.target.value)}} name="orders" id="orders" className='border py-1 border-gray-500 text-xs flex justify-between items-center outline-0 px-1'>
                  <option>Tên sản phẩm từ A-Z</option>
                  <option>Tên sản phẩm từ Z-A</option>
                </select>
              </div>
            </div>
            <div className='flex flex-wrap w-full mt-4 mb-6 md:ml-3'>                
              {products.length === 0 ?
                <div className='mx-auto flex items-center'>
                  <div className='h-8 w-8 border border-y-black border-l-black rounded-full animate-spin'></div>
                  <div className='mx-2'></div>
                  <div>Đang tải sản phẩm</div>
                </div>
              :
              products.sort((a, b) => {
                if (sort === "Tên sản phẩm từ A-Z") {
                  if (a.name > b.name) {
                    return 1
                  } else {
                    return -1
                  }
                } else {
                  if (a.name > b.name) {
                    return -1
                  } else {
                    return 1
                  }
                }
              }).map(i => <Product src={i.thumbnail} name={i.name} link={i.link} key={i.name} extracss="mx-2.5 md:mx-4"/>)}
            </div>
          </div>
        </>
    )
}