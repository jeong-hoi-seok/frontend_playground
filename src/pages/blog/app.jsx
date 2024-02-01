import BlogSide from "@/components/BlogSide";
import styled from "styled-components";
import React from 'react';

const layout = (props) => {
    return (
        <>    
            <BlogSide>
                22
            </BlogSide>
            { props.children }
        </>
    );
};

export default layout;