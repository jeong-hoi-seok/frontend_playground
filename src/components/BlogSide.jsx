import React from 'react';
import styled from "styled-components";

const BlogSide = (props) => {
    return (
        <>
            <BlogSideAA></BlogSideAA>
            {props.children}
        </>
    );
};

const BlogSideAA = styled.div`
    width : 100px;
    height: 100px;
    background-color : red;
`

export default BlogSide;