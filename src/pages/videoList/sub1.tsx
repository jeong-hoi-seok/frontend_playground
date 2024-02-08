import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

import ReactPlayer from "react-player/youtube";

import { Provider } from "react";


const sub1 = () => {

    const router = useRouter();
    const [list, setList] = useState([]);
    // const {
    //     test
    // } = props;

    console.log('체크')

    useEffect(()=>{
        // getVideoInfo()
    }, []);


    const getVideoInfo = async ()=>{
        try
        {
            let res = await axios.get('https://www.googleapis.com/youtube/v3/search?&key=AIzaSyBYoWjfZ_VidFBs3XAxMALZWn34kd3LZPA',{
                params : {
                    part: 'snippet',
                    q : 'kpop',
                    chart: 'mostPopular',
                    maxResults: 1,
                    fields : "items(id, snippet(title, channelId, thumbnails))",
                }
            });
            console.log(res.data.items)
            setList(res.data.items)
        }
        catch(err)
        {
            console.log('err')
        }
    }


    return (
        <>
            {/* <button onClick={()=>{ router.back() }}>뒤로가기</button> */}
            <ContainBox>
                <VideoList>
                    {
                        list.map((item, idx) =>{
                            return(
                                
                                <Item key={idx}>
                                    <Image src={item?.snippet?.thumbnails.high?.url || ''} fill={true} alt="image"></Image>
                                    <ReactPlayer
                                        url={`https://www.youtube.com/watch?v=${item.id.videoId}`}
                                        // style={}
                                        // wrapper={div} 컨테이너 요소
                                        //
                                    />
                                </Item>
                            )
                        })
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
const Item = styled.li`
    width: calc((100% - 90px) / 4);
    position: relative;
    list-style: none;
    height: 300px;
`

export const getServerSideProps = (async ({}) =>{
    const test = 1;
    return{
        props : {
            test
        }
    }
})




export default sub1;