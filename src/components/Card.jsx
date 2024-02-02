import React from 'react';

import styled from 'styled-components';

const Card = () => {
    let dataArray = [];
    for(let i = 0; i < 10; i++)
    {
        let test = {
            cardNum : `${i}time`
        }
        dataArray.push(test);
    }
    return (
        <Area>
        {
            dataArray.map((ele, index)=>{
                return(
                    //키 값은 index뿐만 아니라 각각의 const성 텍스트도 포함하면 좋음
                    <Button key={ele.cardNum}>
                        <div>{ele.cardNum}</div>
                        <p>{index}번째</p>
                    </Button>
                )
            })
        }
        </Area>
    );
};

const Area = styled.ul`
    width: 100%;
    color: #000;
    border: 0;
    display : flex;
    gap : 50px;
    background-color : unset;
    flex-wrap : wrap;
`;

const Button = styled.li`
    width: calc((100% - 150px) / 4);
    height : 100px;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    border : 1px solid #000;
    padding : 30px;
    background-color : #222;
    color : #fff;
    font-size : 14px;
    font-weight:400;
`



export default Card;