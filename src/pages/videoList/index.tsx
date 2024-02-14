import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";

import {Provider, useSelector, useDispatch } from "react-redux";
import store from "@/store/index";
import { urlActions } from "@/store/index";
import { authActions } from "@/store/index";
import Link from "next/link";


interface IitemsProps {
    id : {
        kind : string;
        videoId?: string;
        playlistId?: string;
    };
    snippet : {
        channelId: string;
        title: string;
        thumbnails: {
            default: {
                url: string;
                width: number;
                height: number;
            };
            medium: {
                url: string;
                width: number;
                height: number;
            };
            high: {
                url: string;
                width: number;
                height: number;
            }
        }
    }
}

interface IProps {
    rendData: {
        items : IitemsProps[]
    }
    
}

const utubeVideoList = ( props : IProps ) => {

    // console.log('csr 콘솔', props)

    const router = useRouter();
    const [list, setList] = useState<IitemsProps[]>([]);
    const [link, setLink] = useState<null | string>(null);
    const elRef = useRef<HTMLButtonElement | undefined>();

    const {
        rendData
    } = props;

    //리덕스 관련
    const rdxUrl = useSelector((state: {storeUrl : { url: string } }) => state.storeUrl.url); // url 변경
    const rdxShow = useSelector((state : {storeUrl : {showType : boolean}}) => state.storeUrl.showType); // show 불리언 값
    const rdxDispatch = useDispatch(); //store에 action을 보냄

    //비디오 url 변경
    const changeUrl = (changeUrl : string) => {
        rdxDispatch(urlActions.change(changeUrl));
    }
    //비디오 url 리셋
    const resetUrl = () => {
        rdxDispatch(urlActions.reset());
    }


    //버튼 테스트하기
    const auth = useSelector((state : {storeAuth : {checked : boolean}}) => state.storeAuth.checked);
    const checkedBtn = () => {
        rdxDispatch(authActions.testToggle());
    }



    useEffect(()=>{
        setList(rendData.items); // ssr에서 가져온 data
        // getVideoInfo(); // csr에서 가져온 data

        if(typeof window !== 'undefined')
        {
        }
    }, []);


    //csr 에서 api호출
    // const getVideoInfo = async ()=>{
    //     try
    //     {
    //         let res = await axios.get('https://www.googleapis.com/youtube/v3/search?&key=AIzaSyBYoWjfZ_VidFBs3XAxMALZWn34kd3LZPA',{
    //             params : {
    //                 part: 'snippet',
    //                 q : 'kpop+music',
    //                 chart: 'mostPopular',
    //                 maxResults: 5,
    //                 // type : 'video',
    //                 regionCode : 'KR',
    //                 fields : "items(id, snippet(title, channelId, thumbnails))",
    //             }
    //         });
    //         setList(res.data.items)
    //     }
    //     catch(err)
    //     {
    //         console.log('err')
    //     }
    // }

    return (
        <>
            <button ref={elRef} onClick={()=>{ router.back() }} style={{display : 'block', width: '100px', height: '50px', margin: '0 0 20px', cursor: 'pointer'}}>뒤로가기</button>
            <button onClick={checkedBtn} style={{width: 'fit-content', height: '50px', backgroundColor: '#444', color :'#fff', border: '0', padding: '10px', cursor: 'pointer'}}>redux버튼 : {`${auth}`}</button>
            <LinkInfoBox>
                비디오 상세 링크 : <GoLink href={`${rdxUrl === '초기'? '' : rdxUrl}`} target="_blank">{rdxUrl}</GoLink>
            </LinkInfoBox>
            <ContainBox>
                <ThumList>
                    {
                        list.map((el, idx) =>{
                            return(
                                <Item
                                    key={idx}
                                    onClick={()=>{
                                        changeUrl(`https://www.youtube.com/watch?v=${el.id?.videoId || el.id?.playlistId}`);
                                    }}
                                >
                                    <Image
                                        src={el.snippet.thumbnails.high.url || ''}
                                        fill={true}
                                        alt="image" 
                                        sizes="(min-width: 768px) 100%, 100%" //이거안하면 오류?
                                        priority
                                    />
                                </Item>
                            )
                        })
                    }
                </ThumList>
            </ContainBox>
            {
                rdxShow && <VideoPlay className="boxbox">
                    <ReactPlayer
                        url={rdxUrl}
                        style={{position: 'absolute', top: '50%', left : '50%', transform: 'translate(-50%, -50%)', zIndex: '10'}}
                        // wrapper={VideoWrap}
                    />
                    <BackgroundBox
                        onClick={resetUrl}
                    />
                </VideoPlay>
            }
        </>
    )
}

const LinkInfoBox = styled.div`
    padding: 10px 0;
    font-size: 20px;
    font-weight : 600;
`
const GoLink = styled(Link)`
    color: #25bcc7;
`

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
    opacity: 0;
    transform: translate(0px, 0px) scale(0);
    background-color: rgba(0, 0, 0, 0.7);
    animation-name: gIYIae;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    cursor: pointer;
    @keyframes gIYIae {
        0% {
            opacity: 0;
            transform: translate(100%, 100%) scale(0);
        }
        100%{
            opacity: 1;
            transform: translate(0px, 0px) scale(1);
        }
    }
`




//ssr에서 api 통신
export const getServerSideProps = (async () =>{

    axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
    let rendData ;
    try {
        const res = await axios.get('/search', {
            params : {
                part: 'snippet',
                q : 'kpop+official',
                chart: 'mostPopular',
                maxResults: 7,
                type : 'video',
                regionCode : 'KR',
                fields : "items(id(videoId), snippet(thumbnails(high)))",
                key : 'AIzaSyBYoWjfZ_VidFBs3XAxMALZWn34kd3LZPA'
            }
        })
        rendData = res.data;
    }
    catch (err)
    {
        console.log('err')
    }


    return {
        props : {
            rendData
        }
    }
})




export default utubeVideoList;