import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../logo';
import { Link } from 'react-router-dom';
import { Container  } from './header';

import { AppContext } from '../../context/Theme';
import { Colors } from '../Colors';
import { faBell, faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const { theme } = useContext(AppContext)
    return (
        <Container theme={Colors[theme]}>
            <div>
                <Link to="/"><Logo dim="2.5rem" /></Link>
                <h5 id='appname'>Wilder</h5>
            </div>
            <div>
                <span>
                    <FontAwesomeIcon icon={faBell} />
                    <sub className='new'></sub>
                </span>
                <span>
                    <FontAwesomeIcon icon={faMessage} />
                    <sub></sub>
                </span>
                <Link to="/signin">Sign In</Link>
                <small></small>
            </div>
        </Container>
    )
}
