import { Link } from "react-router-dom";

export function About() {
    return (
        <>
            <div className='mt-8 text-xs ml-8 md:ml-32 text-gray-500'><Link to="/">Trang chủ</Link><span className='mx-1'>|</span><span className="font-semibold">Giới thiệu</span></div>
            <div className="text-justify m-8 md:w-1/2 md:mx-auto">
                KENKO là một từ tiếng Nhật mang ý nghĩa "sức khỏe" và "hạnh phúc". 
                Sức khỏe là nền tảng cơ bản của một cuộc sống vui vẻ, hạnh phúc, là chiếc chìa khóa quan trọng nhất mở ra cánh cửa hạnh phúc cho mỗi người. 
                Hạnh phúc là nhân tố quan trọng quyết định đến sự trọn vẹn trong cuộc sống. 
                Hướng tới 2 thứ quan trọng nhất đời người, KENKO là một thương hiệu uy tín gắn liền với sức khoẻ và niềm hạnh phúc của mỗi gia đình.
            </div>
        </>
    )
}