import Image from 'next/image';

import Noimg from "/public/images/noImg.png";
import React, { useState, useEffect, useLayoutEffect, useRef, useCallback, useMemo } from "react";
import styled from "styled-components";

import axios from 'axios';
import { useRouter } from 'next/router';

const movieList = () => {

    const router = useRouter();
    const [list, setList] = useState([]);
    
    let testList = [];


    useLayoutEffect(() => {
        axios.get("https://api.tvmaze.com/search/shows?q=space")
        .then((res) => {
            setList(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);


    return (
        <ContainBox>
            <ListBox>
            {
                list.map((item, idx) =>{
                    return(
                        <ListItem key={idx}>
                            <ImgBox>
                                <ImgCont
                                    src={item?.show?.image?.original || Noimg }
                                    alt='iamge'
                                    fill={true}
                                />
                            </ImgBox>
                            <p>
                                제목: {item.show?.name || '-'}
                            </p>
                            <DetailMoveBtn onClick={()=>{router.push(`/movieList/movieDetail/${item.show.id}`)}}>
                                상세보기
                            </DetailMoveBtn>
                        </ListItem>
                    )
                })
            }
            </ListBox>
        </ContainBox>
    );
};

export default movieList;


const ContainBox = styled.section`
    min-height: 100vh;
`

const ListBox = styled.ul`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
const ListItem = styled.li`
    width: calc((100% - 60px) / 4);
    word-break: break-all;
    list-style: none;
`
const ImgBox = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
`


const DetailMoveBtn = styled.button`
    border: 1px solid #000;
    width: fit-content;
    padding: 10px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
`

const ImgCont = styled(Image)`
    object-fit: cover;
`;