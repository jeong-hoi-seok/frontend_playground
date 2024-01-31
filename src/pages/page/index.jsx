import React from "react";
import {useRouter} from 'next/router'

const TestPage = ()=>{
    const router = useRouter();
    return (
        <>
        페이지입니다
        <button onClick={()=>{router.push("/blog")}}>블로그로 이동</button>
        <button onClick={()=>{router.push("/")}}>메인으로 이동</button>
        </>
    );
}

export default TestPage;