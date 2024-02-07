import React, { Component } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

class Header extends Component {

    render() {
        console.log('11')
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