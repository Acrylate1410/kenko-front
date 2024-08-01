import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Product } from "./Product";
export default function Search() {
    const [results, setResults] = useState([])
    const isFetch = useRef(false)
    const [params] = useSearchParams()
    useEffect(() => {
        fetch("https://okyibhzr7o.genhosting.net/kenko/products/get_products").then(res => res.json()).then(data => {
            setResults(data.filter(el => el.name.toLowerCase().includes(params.get("query").replaceAll("-", " "))) || [])
        }).then(isFetch.current = true).catch(error => {})
    }, []);
    return (
        <div className="mb-8">
            <h1 className="mt-4 text-lg font-semibold text-center mb-6">{"Tìm thấy " + results.length + " kết quả"}</h1>
            <div className="flex flex-wrap">
                {!isFetch.current && 
                    <div className='mx-auto flex items-center justify-center'>
                        <div className='h-8 w-8 border border-y-black border-l-black rounded-full animate-spin'></div>
                        <div className='mx-2'></div>
                        <div>Đang tải sản phẩm</div>
                    </div>
                }
                {results.map(i =>
                    <>
                        <div className="md:ml-8 ml-4"></div>
                        <Product src={i.thumbnail} name={i.name} link={i.link} key={i.name}/>
                    </>
                )}
            </div>
        </div>
    )
}