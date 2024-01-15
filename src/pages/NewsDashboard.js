import { useState, useEffect } from "react"
import { AiOutlineDownload, AiOutlineEdit, AiOutlineEye, AiOutlineFileAdd, AiOutlineCheckCircle, AiOutlineCloseCircle} from "react-icons/ai"
import { BsTrash } from "react-icons/bs"
import { Link } from "react-router-dom"
export function NewsDashboard() {
    const [selected, setSelected] = useState([])
    const [isModalOn, setModalOn] = useState("hidden")
    const [articleList, setArticleList] = useState([])
    const [filter, setFilter] = useState("");
    useEffect(() => {
        /*
            fetch("https://growplus-api.onrender.com/articles/get_articles").then(res => res.json()).then(data => {
                setArticleList(data || [])
            }).catch(error => {})
        */
    }, []);
           
    const handleSelect = (e, article) => {
        /*
            let selectedCopy = [...selected]
            if (e.target.checked) {
                selectedCopy.push(article)
            } else {
                const index = selectedCopy.indexOf(article)
                selectedCopy.splice(index, 1)
            }
            setSelected(selectedCopy)
        */
    }
    const handleDelete = () => {
        /*
            fetch("https://growplus-api.onrender.com/articles/delete", {
                method: "DELETE",
                body: JSON.stringify({articlesToDelete: selected}),
                headers: {'Content-Type': 'application/json'},
            }).then(
                alert("Đã xoá bài thành công")
            ).catch(error => {})
        */
    }
    return (
        <>
            <div className={isModalOn}>
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-black opacity-60"  onClick={() => setModalOn("hidden")}></div>  
                <div className="fixed left-[10%] right-[10%] top-[30%] bottom-[30%] md:left-[30%] md:right-[30%] bg-white p-8 flex flex-col justify-between rounded-xl">
                    <div>
                        <h2 className="font-bold text-2xl">Xóa bài viết</h2>
                        <div className="border-2 border-black my-4"></div>
                        {selected.length === 0 ? 
                            <p>Hãy chọn bài viết bạn muốn xóa!</p>
                            : 
                            <p>Bạn có chắc chắn muốn xóa bài viết này không?</p>
                        }
                    </div>
                    <div className="flex justify-center md:justify-end">
                        {selected.length === 0 ? 
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center" onClick={() => setModalOn("hidden")}>Thoát</button>
                        : <>
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center" onClick={() => setModalOn("hidden")}><span className="mr-2 text-xl"><AiOutlineCloseCircle/></span><span>Không</span></button>
                        <div className="mx-1"></div>
                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center" onClick={() => handleDelete()}><span className="mr-2 text-xl"><AiOutlineCheckCircle/></span><span>Có</span></button>
                        </>}
                    </div>
                </div>   
            </div>
            <div className="flex items-center justify-end mt-8">
                <input className="p-2 mr-8 w-96 rounded-lg outline-0 border border-blue-950" placeholder="Tìm bài viết theo tiêu đề" onInput={(e) => setFilter(e.target.value)}></input>
                <Link to="/add_article">
                    <div className="bg-[#3b8b59] text-white w-40 h-10 text-sm rounded-full flex items-center justify-center border border-[#3b8b59] hover:bg-[#9ec7a5] hover:text-[#3b8b59] transition">
                        <AiOutlineFileAdd/>
                        <p className="ml-2">Đăng bài viết mới</p>
                    </div>
                </Link>
                <div className="bg-[#3b8b59] text-white w-36 h-10 text-sm rounded-full flex items-center justify-center border border-[#3b8b59] hover:bg-[#9ec7a5] hover:text-[#3b8b59] transition ml-4 cursor-pointer" onClick={() => setModalOn("fixed top-0 bottom-0 right-0 left-0 z-30")} >
                    <BsTrash/>
                    <p className="ml-2">Xóa {selected.length !== 0 && selected.length} bài viết</p>
                </div>
            </div>
            <table className="table my-4 px-4 w-max md:w-full">
                <tbody>
                    <tr>
                        <th className="px-4 md:px-0 py-2  w-[8%] overflow-hidden whitespace-nowrap text-ellipsis"></th>
                        <th className="px-4 md:px-0 py-2 w-[12%] overflow-hidden whitespace-nowrap text-ellipsis">Thumbnail</th>
                        <th className="px-4 md:px-0 py-2 w-[30%] overflow-hidden whitespace-nowrap text-ellipsis">Tiêu đề</th>
                        <th className="px-4 md:px-0 py-2 w-[20%] overflow-hidden whitespace-nowrap text-ellipsis">File nội dung</th>
                        <th className="px-4 md:px-0 py-2 w-[17%] overflow-hidden whitespace-nowrap text-ellipsis">Ngày đăng tải</th>
                        <th className="px-4 md:px-0 w-[13%]"></th>
                    </tr>
                    {articleList.filter(el => {
                        if (filter === '') {
                            return true
                        }
                        return el.title.includes(filter) || el.date.includes(filter)
                    }).map(i =>
                        <tr>
                            <td className="px-4 py-2 text-center"><input type="checkbox" className="w-5 h-5" onChange={(e) => handleSelect(e, i)}></input></td>
                            <td className="px-4 py-2"><img className="w-full h-16" alt={i.title} src={i.thumbnail}></img></td>
                            <td className="px-4 py-2">{i.title}</td>
                            <td className="px-4 py-2">{i.content}</td>
                            <td className="px-4 py-2 text-center">{i.date}</td>
                            <td className="px-4 py-2">
                                <div className="flex justify-around text-2xl">
                                    <Link to={"/article?id=" + i._id}><AiOutlineEye/></Link>
                                    <a href={"./" + i.content} download><AiOutlineDownload/></a>
                                    <Link to={"/edit_article?id=" + i._id}><AiOutlineEdit/></Link>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
  };