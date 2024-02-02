import React from "react";
import {useRouter} from 'next/router'
import styled from "styled-components";

const TestPage = ()=>{
    const router = useRouter();
    return (
        <>
            <TestBlock>
                서브 페이지입니다
            </TestBlock>
        </>
    );
}

const TestBlock = styled.div`
`
export default TestPage;