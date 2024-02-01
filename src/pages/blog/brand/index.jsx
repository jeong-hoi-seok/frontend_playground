import React, { useState } from "react";
import {useRouter} from 'next/router'

const Brand = ()=>{
    const router = useRouter();
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>Hello {counter}</h1>
            <button onClick={()=>{setCounter((prev) => prev + 1)}}>올려</button>
            블로그 내부 브랜드 페이지입니다
        </>
    );
}

export default Brand;