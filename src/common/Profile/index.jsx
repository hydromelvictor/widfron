import React, { useContext } from 'react';
import { AppContext } from "../../context/Theme";

import { Container } from "./profile";
import { UIColors } from "../../style/UIColors";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang, faCircleUser, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';


export default function Profile({ width }) {
    const { theme, toggleTheme, user } = useContext(AppContext)
    return (
        <Container theme={UIColors[theme]} width={ width ? width : 15 }>
            <span>
                <small>{ user.username }</small>
                <small id='boardImg'></small>
            </span>
            <span>
                <small>{ user.firstname } {user.lastname }</small>
                <small>{ user.phone }</small>
                <span className='styleBars'>
                    {/* website theme use */}
                    <FontAwesomeIcon icon={faYinYang} onClick={() => toggleTheme()} />

                </span>
                <span className='menuBars'>
                    <Link to="">
                        <FontAwesomeIcon icon={faCircleUser} />
                        Profile
                    </Link>
                    <Link to="settings">
                        <FontAwesomeIcon icon={faGear} />
                        Settings
                    </Link>
                </span>
                <Link to="/logout">
                    <FontAwesomeIcon icon={faSignOut} />
                    <small>Log Out</small>
                </Link>
            </span>
        </Container>
    )
}
