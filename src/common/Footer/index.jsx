import React, { useContext }  from 'react';

import { AppContext } from '../../context/Theme';
import { Colors } from '../Colors';

import { Container } from './footer';

export default function Footer() {
    const { theme } = useContext(AppContext)
    return (
        <Container theme={Colors[theme]}>
            wilder corporation &reg;
        </Container>
    );
}
