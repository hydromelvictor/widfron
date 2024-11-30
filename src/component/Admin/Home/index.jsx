import React, { useContext } from 'react';

import { Container } from './home';
import Header from '../../../common/Header'
import Footer from '../../../common/Footer'
import Admin from '..';

import { AppContext } from '../../../context/Theme';
import { Colors } from '../../../common/Colors';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCompactDisc, faBell, faMessage, faGears, faScrewdriverWrench, faSignOut, faSliders, faTerminal, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../common/logo';

export default function AdminHome() {
    const { theme } = useContext(AppContext)
    return (
        <Admin theme={Colors[theme]}>
            <Container theme={Colors[theme]}>
                <section>
                    <span>
                        <Logo dim="2rem" color={Colors[theme].bg} />
                        Wilder
                    </span>
                    <nav>
                        <small>Menu</small>
                        <Link to="/config" className='active'>
                            <FontAwesomeIcon icon={faSliders} />
                            {/* recapitulatif, graphs, ... */}
                            <small>Dashboard</small>
                        </Link>
                        <Link to="/config">
                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                            {/* pour la configuration des autorisations, creation des group, des admin, ... */}
                            <small>Config</small>
                        </Link>
                        <Link to="/audit">
                            <FontAwesomeIcon icon={faCompactDisc} />
                            {/* pour les historiques de navigations des admin */}
                            <small>Log Audit</small>
                        </Link>
                        <Link to="/terminal">
                            <FontAwesomeIcon icon={faTerminal} />
                            {/* pour les actions la manipulation des data */}
                            <small>Terminal</small>
                        </Link>
                        <Link to="/diagnostics">
                            <FontAwesomeIcon icon={faGears} />
                            {/* pour les demandes d'aide, les signalement, et autres problemesdevant de la part des users */}
                            <small>Diagnostics</small>
                        </Link>
                        <Link to="/logout" id='logout'>
                            <FontAwesomeIcon icon={faSignOut} />
                            <small>Log Out</small>
                        </Link>
                    </nav>
                </section>
                <div>
                    <div id='navigation'>
                        <span>
                            <Link to="" id='toggleNav'><FontAwesomeIcon icon={faBars} /></Link>
                            <small>
                                <Link to="">Dashboard/</Link>
                                <Link to="" className='active'>Graph/</Link>
                            </small>
                        </span>
                        <span>
                            <small>
                                <FontAwesomeIcon icon={faBell} />
                                <sub className='new'></sub>
                            </small>
                            <small>
                                <FontAwesomeIcon icon={faMessage} />
                                <sub></sub>
                            </small>
                            <small id='profile'>
                                <small id='profileImg'></small>
                                Hydromel <FontAwesomeIcon icon={faChevronUp} />
                            </small>
                        </span>
                    </div>
                    <div className='corp'></div>
                </div>
            </Container>
        </Admin>
    )
}
