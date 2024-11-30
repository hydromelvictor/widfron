import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


import Logo from '../../../common/logo';
import { AppContext } from '../../../context/Theme';
import { Colors } from '../../../common/Colors';
import { Container } from './sign';
import Admin from '..';


export default function AdminSign() {
    const { theme } = useContext(AppContext)
    return (
        <Admin>
            <Container theme={Colors[theme]}>
                <Logo dim="8rem" />
                <h1>Administration system</h1>
                <form>
                    <span>
                        <small>
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' id='username' />
                        </small>
                        <small>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' id='password'/>
                        </small>
                        <button className='primary'>Sign In</button>
                    </span>
                    <span>
                        <Link to="/forgot">forgot password ?</Link>
                        <Link to="/register">Sign Up</Link>
                    </span>
                </form>
            </Container>
        </Admin>
    )
}
