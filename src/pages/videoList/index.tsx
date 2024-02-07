import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const videoList = () => {
    const router = useRouter();
    return (
        <>
            <button onClick={()=>{router.back()}}>뒤로가기</button>
        </>
    )
};

export default videoList;