import { useRouter } from "next/router";
import styled from "styled-components";



const Header = (props) => {

    // const {
    //     children
    // } = props;
    const router = useRouter();
    return (
        <>
            <HeaderBlock>
                <HeaderBtn onClick={()=>{router.push("/subPage")}}>페이지 이동하기</HeaderBtn>
                <HeaderBtn onClick={()=>{router.push('/blog')}}>블로그 이동하기</HeaderBtn>
                <HeaderBtn onClick={()=>{router.push("/blog/brand")}}>브랜드 이동하기</HeaderBtn>
                <HeaderBtn onClick={()=>{router.push("/blog/food")}}>푸드 이동하기</HeaderBtn>
                <HeaderBtn onClick={()=>{router.push("/")}}>메인 이동하기</HeaderBtn>
            </HeaderBlock>
            {props.children}
        </>
        
    );
};

const HeaderBlock = styled.div`
  padding : 30px 0;
  display : flex;
  gap: 10px;
`
const HeaderBtn = styled.button`
    width: 100%;
    padding: 30px 0;
    border: 0;
    background-color: #;
    color: #000;
    cursor: pointer;    

`



export default Header;