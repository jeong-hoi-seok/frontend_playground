import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import {useRouter} from 'next/router'
import styled from "styled-components";

const SubPage = ()=>{
    const router = useRouter();



    return (
        <>
            <TestBlock>
                서브 페이지입니다<br/>
            </TestBlock>
        </>
    );
}

const TestBlock = styled.div`
    display: block;
`
export default SubPage;