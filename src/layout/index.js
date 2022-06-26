import React from 'react';
import Navbar from './Navbar';
import LayoutContainer, { Main, Wrapper } from './styled';

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <Navbar />
            <Wrapper>
                <Main>{children}</Main>
            </Wrapper>
        </LayoutContainer>
    );
};

export default Layout;
