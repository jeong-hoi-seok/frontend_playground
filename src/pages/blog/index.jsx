import React from "react";
import {useRouter} from 'next/router'

const Blog = ()=>{
    const router = useRouter();
    return (
        <>
        블로그 페이지입니다
        <button onClick={()=>{router.push("/page")}}>페이지로 이동클릭</button>
        <button onClick={()=>{router.push("/")}}>메인으로 이동</button>
        </>
    );
}

export default Blog;