import React, { useRef } from 'react';
import './Login.css';
import logoimg from '../../../image/img.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {

    const emailRef = useRef('');
    const passwrodRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = 
            <p className='text-danger'>{error?.message} </p>
       
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwrodRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('send email');
    }


    return (
        <div className='login'>
            <div className='registerdiv'>

                <div className='register'>
                    <div>
                        <img src={logoimg} height='160px' width='348px' alt='' />
                    </div>

                    <h2 className='m-2 mb-3 fwbold '>Login</h2>

                    <form onSubmit={handleSubmit}>
                        <input className='register-input' ref={emailRef} type='email' placeholder='Enter email' required />

                        <input className='register-input mb-2' type='password' ref={passwrodRef} placeholder='Enter password' required />

                        <input className='register-input mt-2' type='submit' value='Login' />
                    </form>
                    {errorElement}

                    <p onClick={resetPassword} className='forgot-pass btn p-0 mb-1'>Forgot Password</p>

                    <div className=' mx d-flex m-0 justify-content-center'>
                        <hr className='w-25' />
                        <p className='mx-1'>or</p>
                        <hr className='w-25' />
                    </div>
                    
                    <SocialLogin />

                    <div className='new-user'>
                        <p style={{ textAlign: 'center' }}>New to Computer Warehouse? <span>
                            <Link style={{ textDecoration: 'none' }} to='/register' >Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;