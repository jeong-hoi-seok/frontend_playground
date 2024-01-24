import React from 'react';
import { Link } from 'react-router-dom';

const Header = ()=>{

    return(
        <header>
            <ul>
                <li>
                    <Link to="/">current</Link>
                </li>
                <li>
                    <Link to="/mypage/ResetPasswd">ResetPasswd</Link>
                </li>
                <li>
                    <Link to="/About">about</Link>
                </li>
                <li>
                    <Link to="/Detail">Detail</Link>
                </li>
                <li>
                    <Link to="/Home">메인처럼 보이는 about</Link>
                </li>
            </ul>
        </header>
    )

}
export default Header;