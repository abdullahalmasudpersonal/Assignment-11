import React from 'react';
import './Login.css';
import logoimg from '../../../image/img.png';
import SocialLogin from './SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <div className='registerdiv'>

                <div className='register'>
                    <div>
                        <img src={logoimg} height='160px' width='348px' alt='' />
                    </div>
                    <h3>Login</h3>
                    <input className='register-input' placeholder='Enter nmae' />
                    <input className='register-input' placeholder='Enter email' />
                    <input className='register-input mb-2' placeholder='Enter password' />
                    <div className='mb-2 mt-0'>
                        <input
                            type='checkbox' name='terms' id='terms'></input>
                        <label className='text-danger'>
                            Accept terms and conditions
                        </label>
                    </div>
                    <input className='register-input' type='submit' value='Submit' />
                    <p className='forgot-pass btn p-0 mb-1'>Forgot Password</p>

                    <SocialLogin />

                    <div className='new-user'>
                        <p style={{ textAlign: 'center' }}>New to Computer Warehouse? <span>
                            <Link style={{ textDecoration: 'none' }} to='/register'>Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;