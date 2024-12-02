import React, { useContext } from 'react';

import { Container } from './home';
import Admin from '..';

import { AppContext } from '../../../context/Theme';
import { Colors } from '../../../common/Colors';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars, 
    faCompactDisc, 
    faBell, 
    faMessage, 
    faGears, 
    faScrewdriverWrench,
    faSignOut,
    faSliders, 
    faTerminal,
    faStarOfLife, 
    faBookAtlas, 
    faBug, 
    faAnchor, 
    faArrowTrendUp, 
    faArrowTrendDown, 
    faTrafficLight, 
    faHourglass, 
    faUsers, 
    faNewspaper, 
    faClockRotateLeft,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../common/logo';
import Notify from '../../../common/Notify';
import Profile from '../../../common/Profile';

export default function AdminHome() {
    const { theme } = useContext(AppContext)

    return (
        <Admin theme={Colors[theme]}>
            <Container theme={Colors[theme]}>
                <section>
                    <Link to="/">
                        <Logo dim="2rem" color={Colors[theme].bg} />
                        Wilder
                    </Link>
                    <nav>
                        <small>Menu</small>
                        <Link to="/config" className='active'>
                            <FontAwesomeIcon icon={faSliders} />
                            {/* recapitulatif, graphs, ... */}
                            <small>Dashboard</small>
                        </Link>
                        <Link to="/config">
                            <FontAwesomeIcon icon={faAnchor} />
                            {/* redaction d'article, ... */}
                            <small>Redaction</small>
                        </Link>
                        <Link to="/audit">
                            <FontAwesomeIcon icon={faCompactDisc} />
                            {/* pour les historiques de navigations des admin */}
                            <small>Log Audit</small>
                        </Link>
                        <Link to="/diagnostics">
                            <FontAwesomeIcon icon={faGears} />
                            {/* pour les demandes d'aide, les signalement, et autres problemesdevant de la part des users */}
                            <small>Diagnostics</small>
                        </Link>
                        <small>Configuration</small>
                        <Link to="/config">
                            <FontAwesomeIcon icon={faScrewdriverWrench} />
                            {/* pour la configuration des autorisations, creation des group, des admin, ... */}
                            <small>General</small>
                        </Link>
                        <Link to="/config">
                            <FontAwesomeIcon icon={faStarOfLife} />
                            {/* creation et gestion des admin, ... */}
                            <small>Staff</small>
                        </Link>
                        <small>Engineer Space</small>
                        <Link to="/terminal">
                            <FontAwesomeIcon icon={faBookAtlas} />
                            {/* lien vers la documentation de api */}
                            <small>Documentation</small>
                        </Link>
                        <Link to="/terminal">
                            <FontAwesomeIcon icon={faBug} />
                            {/* journals des erreurs */}
                            <small>Bug</small>
                        </Link>
                        <Link to="/terminal">
                            <FontAwesomeIcon icon={faTerminal} />
                            {/* pour les actions la manipulation des data */}
                            <small>Terminal</small>
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
                                <Link to="">Menu/</Link>
                                <Link to="" className='active'>Dashboard</Link>
                            </small>
                        </span>
                        <span>
                            <small>
                                <FontAwesomeIcon icon={faBell} onClick={() => {
                                    const notify = document.getElementById('notify');
                                    notify.style.display = notify.style.display === 'none' ? 'flex' : 'none'
                                }} />
                                <sub className='new'></sub>
                            </small>
                            <span id='notify' style={{ display: 'none'}}><Notify /></span>
                            <small>
                                <FontAwesomeIcon icon={faMessage} />
                                <sub></sub>
                            </small>
                            <small id='profile' onClick={() => {
                                const profile = document.getElementById('profileBoard');
                                profile.style.display = profile.style.display === 'none' ? 'flex' : 'none';
                            }}>
                                <small id='profileImg'></small>
                                Hydromel <FontAwesomeIcon icon={faChevronDown} />
                            </small>
                            <span id='profileBoard' style={{ display: 'none'}}><Profile /></span>
                        </span>
                    </div>
                    <div className='corp'>
                        <span className='recap'>
                            <span>
                                <FontAwesomeIcon icon={faTrafficLight} />
                                <small>Trafic du site</small>
                                <span>
                                    91.6k
                                    <sub>15% <FontAwesomeIcon icon={faArrowTrendUp} /></sub>
                                </span>
                                <small className='graph'><FontAwesomeIcon icon={faClockRotateLeft} /> Last month</small>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faHourglass} />
                                <small>Durée de session</small>
                                <span>
                                    120 Sec 
                                    <sub>15% <FontAwesomeIcon icon={faArrowTrendUp} /></sub>
                                </span>
                                <small className='graph'><FontAwesomeIcon icon={faClockRotateLeft} /> Last month</small>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faUsers} />
                                <small>Utilisateur actif</small>
                                <span>
                                    2,634
                                    <sub>15% <FontAwesomeIcon icon={faArrowTrendDown} /></sub>
                                </span>
                                <small className='graph'><FontAwesomeIcon icon={faClockRotateLeft} /> Last month</small>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faNewspaper} />
                                <small>Annonces </small>
                                <span>
                                    17,634
                                    <sub>65% <FontAwesomeIcon icon={faArrowTrendUp} /></sub>
                                </span>
                                <small className='graph'><FontAwesomeIcon icon={faClockRotateLeft} /> Last month</small>
                            </span>
                        </span>
                    </div>
                </div>
            </Container>
        </Admin>
    )
}

// associer chaque groupe utilisateurs a une couleur