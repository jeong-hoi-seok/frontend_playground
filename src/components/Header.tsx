import React, { Component } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
class Header extends Component {

    // const router = Router;
    render() {
        return (
            <HeaderList>
                <List>1221</List>
                <List>1221</List>
                <List>1221</List>
                <List>1221</List>
            </HeaderList>
        );
    }
}

const HeaderList = styled.ul`
    
`
const List = styled.li`
    
`

export default Header;