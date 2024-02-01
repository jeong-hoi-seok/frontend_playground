import React from "react";
import {useRouter} from 'next/router'
import styled from "styled-components";
import BlogSide from "@/components/BlogSide";

const BlogBlock = (props)=>{
    const router = useRouter();
    return (
        <>
            <BlogSide>
                블로그 페이지입니다
            </BlogSide>
        </>
    );
}

// const BlogBlock = styled.div`
//     width : 100px;
// `

export default BlogBlock;