import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function News() {
    const [articleList, setArticleList] = useState([])
    useEffect(() => {
      fetch("https://okyibhzr7o.genhosting.net/kenko/articles/get_articles").then(res => res.json()).then(data => {
          setArticleList(data || [])
      }).catch(error => {})
    }, []);
    return (
      <>
        <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Tin tức</span></div>
        <div className="mt-8 flex flex-wrap mb-6">
            {articleList.length === 0 ?
              <div className='mx-auto flex items-center'>
                <div className='h-8 w-8 border border-y-black border-l-black rounded-full animate-spin'></div>
                <div className='mx-2'></div>
                <div>Đang tải bài viết</div>
              </div>
            : articleList.map(i =>
              <Link className="md:w-[30%] w-full h-60 relative mb-8 md:ml-8 mx-8 md:mr-0" to={i.link ? i.link : "/bai-viet?id=" + i._id}>
                <img className='h-full object-cover w-full' alt={i.title} src={i.thumbnail}></img>
                <div className='absolute bottom-0 h-20 left-0 right-0 flex items-center text-white font-semibold text-lg px-4'>
                  <div className='absolute bottom-0 top-0 right-0 left-0 bg-blue-950 opacity-70 z-[100]'></div>
                  <div className='z-[200] text-justify'>{i.title}</div>
                </div>
              </Link>
            )}
        </div>
      </>
    )
}