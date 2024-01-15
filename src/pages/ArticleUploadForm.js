import { useRef, useState, useEffect } from "react"
import { useLocation, useSearchParams } from "react-router-dom"

export function ArticleUploadForm() {
    const title = useRef(null)
    const src = useRef(null)
    const [thumbnail, setThumbnail] = useState(null)
    const [content, setContent] = useState(null)
    const description = useRef(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [articleToEdit, setArticleToEdit] = useState({})
    const [params] = useSearchParams()
    const location = useLocation()
    useEffect(() => {
    /*
        if (location.pathname.endsWith("edit_article")) {
            fetch("https://growplus-api.onrender.com/articles/get_one_article/" + params.get("id")).then(res => res.json()).then(data => {
                setArticleToEdit(data || {})
            }).catch(error => {})
        }
    */
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const isThumbnailLegal = thumbnail.name.endsWith(".png")  ||
                                thumbnail.name.endsWith(".jpeg")  ||
                                thumbnail.name.endsWith(".jpg")   ||
                                thumbnail.name.endsWith(".jfif")  ||
                                thumbnail.name.endsWith(".bmp")   ||
                                thumbnail.name.endsWith(".gif")   ||
                                thumbnail.name.endsWith(".svg")   ||
                                thumbnail.name.endsWith(".tiff")  ||
                                thumbnail.name.endsWith(".svgz")  ||
                                thumbnail.name.endsWith(".webp")  ||
                                thumbnail.name.endsWith(".ico")   ||
                                thumbnail.name.endsWith(".xbm")   ||
                                thumbnail.name.endsWith(".dib")   ||
                                thumbnail.name.endsWith(".pjp")   ||
                                thumbnail.name.endsWith(".apng")  ||
                                thumbnail.name.endsWith(".tif")   ||
                                thumbnail.name.endsWith(".pjpeg") ||
                                thumbnail.name.endsWith(".avif")
        const isContentLegal = content.name.endsWith("docx") || content.name.endsWith("doc") 
        if (isThumbnailLegal && isContentLegal) {
            setErrorMsg(null)
            const formData = new FormData();
            formData.append('title', title.current.value);
            formData.append('description', description.current.value)
            formData.append('src', src.current.value)
            formData.append('thumbnail', thumbnail);
            formData.append('content', content);
            if (location.pathname.endsWith("add_article")) {
                fetch("https://kenko-api.onrender.com/articles/upload", {
                    method: "POST",
                    body: formData
                }).then(alert("Đã đăng bài thành công")).catch(error => {})
            } else {
                formData.append("oldThumbnail", articleToEdit.thumbnail)
                formData.append("oldContent", articleToEdit.content)
                fetch("https://kenko-api.onrender.com/articles/update/" + params.get("id"), {
                    method: "PATCH",
                    body: formData
                }).then(alert("Đã đăng bài thành công")).catch(error => {})
            }
        } else {
            setErrorMsg("Wrong file type")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="h-[100vh] w-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl md:text-4xl">
                {location.pathname.endsWith("edit_article") ? "Sửa bài viết" : "Đăng bài viết"}
            </h1>
            <div className="my-4"></div>
            <input required ref={title} className="outline-0 border border-black w-4/5 md:w-3/5 p-2" placeholder="Tiêu đề bài viết" defaultValue={articleToEdit.title}></input>
            <div className="my-4"></div>
            <input required ref={src} className="outline-0 border border-black w-4/5 md:w-3/5 p-2" placeholder="Nguồn" defaultValue={articleToEdit.title}></input>
            <div className="my-4"></div>
            <textarea required ref={description} rows="4" className="outline-0 border border-black w-4/5 md:w-3/5 p-2"  placeholder="Mô tả bài viết" defaultValue={articleToEdit.description}></textarea>
            <div className="my-4"></div>
            <div className="flex items-center">
                <h2>Ảnh thumbnail:</h2>
                <div className="mx-2"></div>
                <input required type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])}></input>
            </div>
            <div className="my-4"></div>
            <div className="flex items-center">
                <h2>File bài viết:</h2>
                <div className="mx-2"></div>
                <input required type="file" accept=".doc,.docx" onChange={(e) => setContent(e.target.files[0])}></input>
            </div>
            <div className="my-4"></div>
            <div className="text-2xl text-red-600">{errorMsg}</div>
            <div className="my-2"></div>
            <button type="submit" className='bg-[#3b8b59] text-white w-36 h-12 rounded-full flex items-center justify-center border border-[#3b8b59] hover:bg-white hover:text-[#3b8b59] transition '>
                Đăng     
            </button>
        </form>
    )
}