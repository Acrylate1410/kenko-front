import { useState } from "react"
import { Link } from "react-router-dom"
export function Nav() {
    let textColor = "text-blue-950"
    return (
      <nav className={'hidden md:flex justify-center mx-auto ' + textColor}>
          {[{text: "Giới thiệu", link: "/gioi-thieu"},
            {text: "Sản phẩm", link: "/danh-muc-san-pham"},
            {text: "Tin tức", link: "/tin-tuc"},
            {text: "Liên hệ", link: "/lien-he"}].map(i => 
              <div key={i.text} className='relative text-center'>
                <Link reloadDocument to={i.link}><div className='cursor-pointer font-semibold hover:scale-105 transition mx-4 py-2'>{i.text}</div></Link>
              </div>
          )}
      </nav>
    )
  }