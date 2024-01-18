import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Product } from "./Product";
export function Search() {
    const [results, setResults] = useState([])
    const [params] = useSearchParams()
    useEffect(() => {
      fetch("https://kenko-api.onrender.com/products/get_products").then(res => res.json()).then(data => {
          setResults(data.filter(el => el.name.toLowerCase().includes(params.get("query").replaceAll("-", " "))) || [])
      }).catch(error => {})
    }, []);
    return (
        <div className="mb-8">
            <h1 className="mt-4 text-lg font-semibold text-center">{"Tìm thấy " + results.length + " kết quả"}</h1>
            <div className="flex flex-wrap">
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