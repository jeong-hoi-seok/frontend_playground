import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";

import { Provider } from "react";


const videoList = (props) => {

    const router = useRouter();
    const [vList, vSetList] = useState([]);
    // const {
    //     test
    // } = props;


    useLayoutEffect(()=>{
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=movie&key=AIzaSyAYCYyS2VblCN4wUyrWsaVtLaYVODhY5CI`).then(res =>{
            // console.log(res.data)
            vSetList(res.data)
            // console.log(list)
        })
    }, []);


    return (
        <>
            <button onClick={()=>{ router.back() }}>뒤로가기</button>
            <ContainBox>
                <VideoList>
                    {
                        console.log(typeof vList)
                    }
                </VideoList>
            </ContainBox>
        </>
    )
}


    // <iframe
    //     id="ytplayer"
    //     type="text/html"
    //     width="720"
    //     height="405"
    //     src={item.snippet.thumbnails.high.url}
    //     frameborder="0"
    //     allowfullscreen="allowfullscreen"
    // />



const ContainBox = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #444;
`
const VideoList = styled.ul`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`
// const Item = styled.ul`
//     width: calc((100% - 90px) / 4);
// `

export const getServerSideProps = (async ({}) =>{
    const test = 1;
    return{
        props : {
            test
        }
    }
})




export default videoList;