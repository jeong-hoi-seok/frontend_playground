import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Noimg from "/public/images/noImg.png";
import styled from 'styled-components';

const movieDetail = (props) => {
    const {
        id
    } = props;
    console.log(id);
    const router = useRouter();
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get(`https://api.tvmaze.com/shows/${id}`).then(res =>{
            console.log(res.data)
            setList(res.data);
            // console.log(list)
        })
    }, []);

    //id 값 비교
    if(`${list.id}` === id)
    {
        return (
            <DetailBox>
                {
                    <div key={list.id}>
                        <BackBtn onClick={()=> router.back()}>
                            뒤로가기
                        </BackBtn>
                        <ImgBox>
                            <Image
                                src={list?.image?.original || Noimg} fill={true} alt='image'
                            />
                        </ImgBox>
                        <Title>상세 페이지 : {list.name}</Title>
                        <Explain dangerouslySetInnerHTML={{__html : list.summary}} />
                        <p>
                            평점 {list?.rating?.average || '0.00'}
                        </p>
                    </div>

                }
            </DetailBox>
        );
    }
};

const DetailBox = styled.div`
    min-height : 100vh;

`
const BackBtn = styled.button`
    width: 150px;
    height: 50px;
`

const ImgBox = styled.div`
    position: relative;
    width: 300px;
    height: 400px;
    border: 1px solid #000;
    margin: 0 auto;
`

const Title = styled.h1`
    padding: 0 0 20px;
`
const Explain = styled.p`
    
`

export const getServerSideProps = (async ({query})=>{
    return {
        props: {
            ...query,
        }
    }
})

export default movieDetail;