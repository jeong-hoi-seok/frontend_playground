import React from 'react';
import { useNavigate } from 'react-router-dom';
const SubPage = ()=>{
  const navi = useNavigate();
  return(
    <div>
      <h1>서브입니다.</h1>
      <button onClick={()=>{
        navi('/home');
      }}>
        홈으로
      </button>
    </div>
  )
}

export default SubPage;