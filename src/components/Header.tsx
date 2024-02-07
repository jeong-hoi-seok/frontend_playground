import React from 'react';
import { useRouter } from "next/router";
import styled from 'styled-components';

const navList = [
    {
        pageName : '비디오 리스트',
        link : '/videoList'
    }
]

const Header = (props) => {
    const {
        children
    } = props;


    const router = useRouter();
    return (
        <>
         <HeaderList>
            {
                navList.map((item, idx)=>{
                    return(
                        <Link key={idx} onClick={()=>{router.push(`${item.link}`)}}>{item.pageName} →</Link>
                    )
                })
            }
        </HeaderList>
        {children}
        </>
    );
};

const HeaderList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Link = styled.li`
    list-style: none;
    width: 300px;
    height: 50px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export default Header;