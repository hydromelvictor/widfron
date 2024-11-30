import React, { useContext }  from 'react';
import styled from 'styled-components';


import { AppContext } from '../../context/Theme';
import { Colors } from '../../common/Colors';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default function Admin({ children }) {
    const { theme } = useContext(AppContext)
    return (
        <Container theme={Colors[theme]}>
            {children}
        </Container>
    )
}
