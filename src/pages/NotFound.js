import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export function NotFound() {
  return (
    <>
      <img src="404.png" alt="404 not found" className="mx-auto mt-12"></img>
      <h1 className="font-bold text-4xl text-center mx-2 mt-4 mb-8 text-blue-950">Không tìm thấy trang bạn yêu cầu</h1>
      <Link to="/" className='mx-auto bg-blue-950 text-white w-40 h-12 rounded-full flex items-center justify-center border border-blue-950 hover:bg-white hover:text-[#093489] transition '>
          Quay về trang chủ   
      </Link>
      <div className="w-full mt-8"><Footer/></div>
    </>
  )
};
