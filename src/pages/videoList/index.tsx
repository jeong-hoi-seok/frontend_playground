import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

import ReactPlayer from "react-player/youtube";

import { Provider } from "react";


const utubeVideoList = ( props ) => {

    const router = useRouter();
    const [list, setList] = useState([]);
    const [link, setLink] = useState('');
    const ref = useRef('');
    const {
        rendData
    } = props;


    // console.log('체크', rendData)

    useEffect(()=>{
        
        if(typeof window !== 'undefined')
        {
            setList(rendData.items); // 얘는 ssr에서 가져온 data
            // getVideoInfo(); // csr에서 가져온 data
        }
    }, []);


    const getVideoInfo = async ()=>{
        try
        {
            let res = await axios.get('https://www.googleapis.com/youtube/v3/search?&key=AIzaSyBYoWjfZ_VidFBs3XAxMALZWn34kd3LZPA',{
                params : {
                    part: 'snippet',
                    q : 'kpop+music',
                    chart: 'mostPopular',
                    maxResults: 5,
                    // type : 'video',
                    regionCode : 'KR',
                    fields : "items(id, snippet(title, channelId, thumbnails))",
                }
            });
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
                <ThumList>
                    {
                        list.map((item, idx) =>{
                            return(
                                <Item
                                    key={idx}
                                    onClick={()=>{
                                        // console.log(ref)
                                        // console.log(ref.current)
                                        setLink(`https://www.youtube.com/watch?v=${item?.id?.videoId || item.id.playlistId}`);
                                        document.querySelector('.boxbox').style.display = 'block';
                                    }}
                                >
                                    <Image
                                        src={item?.snippet?.thumbnails.high?.url || ''}
                                        fill={true}
                                        alt="image" 
                                        sizes="(min-width: 768px) 100%, 100%"
                                        priority
                                    />
                                </Item>
                            )
                        })
                    }
                </ThumList>
            </ContainBox>
            <VideoPlay className="boxbox" style={{display : 'none'}}>
                {/* {
                    // console.log('밖', ref);
                    <div>{link}</div>
                } */}
                <ReactPlayer
                    url={link}
                    style={{position: 'absolute', top: '50%', left : '50%', transform: 'translate(-50%, -50%)', zIndex: '10'}}
                    // wrapper={VideoWrap}
                />
                <BackgroundBox
                    onClick={()=>{
                        document.querySelector('.boxbox').style.display = 'none';
                        setLink('');
                    }}
                />
            </VideoPlay>
        </>
    )
}


const ContainBox = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #444;
`
const ThumList = styled.ul`
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
    cursor: pointer;
`

const VideoPlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
`
const BackgroundBox = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    cursor: pointer;
`
const VideoWrap = styled.div`
`

export const getServerSideProps = (async () =>{

    let rendData ;
    try{
        const res = await axios.get('https://www.googleapis.com/youtube/v3/search?&key=AIzaSyBYoWjfZ_VidFBs3XAxMALZWn34kd3LZPA', {
            params : {
                part: 'snippet',
                q : 'kpop+music',
                chart: 'mostPopular',
                maxResults: 5,
                // type : 'video',
                regionCode : 'KR',
                fields : "items(id, snippet(title, channelId, thumbnails))",
            }
        })
        rendData = res.data;
    }
    catch(err)
    {
        console.log('err')
    }


    return{
        props : {
            rendData
        }
    }
})




export default utubeVideoList;