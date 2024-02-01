import React from 'react';
import { useRouter } from 'next/router';

const index = () => {

    const router = useRouter(); 

    return (
        <>
            <div>
                푸드 인덱스입니다.
            </div>
            <button onClick={()=>{router.push('/blog/food/foodB')}}>형제 파일 이동</button>
        </>
    );
};

export default index;