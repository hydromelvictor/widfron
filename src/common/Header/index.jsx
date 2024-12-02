import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Logo from '../logo';
import { Link } from 'react-router-dom';
import { Container  } from './header';
import Notify from '../Notify';

import { AppContext } from '../../context/Theme';
import { Colors } from '../Colors';
import { faBell, faMessage, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Profile from '../Profile';

export default function Header({ smsToggle }) {
    const { theme, user } = useContext(AppContext)

    return (
        <Container theme={Colors[theme]}>
            <Link to="/">
                <Logo dim="2.5rem" />
                <h5 id='appname'>Website Name</h5>
            </Link>
            <div>
                { 
                user.isAuthenticated ? 
                    <span>
                        <span onClick={() => {
                            const notify = document.getElementById('notify');
                            notify.style.display = notify.style.display === 'none' ? 'flex' : 'none'
                        }}>
                            <FontAwesomeIcon icon={faBell} />
                            <sub className='new'></sub>
                        </span>
                        <span onClick={smsToggle}>
                            <FontAwesomeIcon icon={faMessage} />
                            <sub></sub>
                        </span>
                    </span>
                : <Link to="/signin">Sign In</Link>
                }
                <span id="notify" style={{ display: 'none' }} ><Notify /></span>
                <span id="profileBoard" style={{ display: 'none' }} ><Profile /></span>
                <small id='profile' onClick={() => {
                    const profile = document.getElementById('profileBoard');
                    profile.style.display = profile.style.display === 'none' ? 'flex' : 'none';
                }}>
                    <small id='profileImg'></small>
                    Hydromel <FontAwesomeIcon icon={faChevronDown} />
                </small>
            </div>
        </Container>
    )
}
