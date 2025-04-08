import {useState} from 'react';
import Button from 'react-bootstrap/Button';

const Header = () => {

    return (
        <header id ='header' align = "center">
            <br/>
            <h1>Tjoeun</h1><br/>
            <Button variant="success">로그인</Button> &emsp;
            <Button variant="primary">회원가입</Button>
            <br/><br/>
        </header>

        

    )
}

export default Header;