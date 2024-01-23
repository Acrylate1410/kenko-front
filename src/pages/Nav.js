import { Link } from "react-router-dom"
export function Nav() {
    return (
      <nav className='hidden md:flex justify-center mx-auto text-blue-950'>
          {[{text: "Giới thiệu", link: "/gioi-thieu"},
            {text: "Sản phẩm", link: "/danh-muc-san-pham"},
            {text: "Tin tức", link: "/tin-tuc"},
            {text: "Liên hệ", link: "/lien-he"}].map(i => 
              <div key={i.text} className='relative text-center mx-4'>
                <Link reloadDocument to={i.link}><div className='cursor-pointer font-semibold hover:scale-105 transition'>{i.text}</div></Link>
              </div>
          )}
      </nav>
    )
  }