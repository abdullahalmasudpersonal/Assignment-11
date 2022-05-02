import React from 'react';
import google from '../../../image/SocialLogin/google-logo3.png';
import facebook from '../../../image/SocialLogin/facebook.png';
import github from '../../../image/SocialLogin/github-icon.png';
import './SocialLogin.css';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    let errorElement;

    if (loading || loading1){
        return <Loading/>
    }


        if (error || error1) {
            errorElement =
                <p className='text-danger'>{error?.message} {error1?.message}</p>

        }

    if (user || user1) {
        navigate(from, { replace: true });
    }



    return (

        <div>
            {errorElement}
            <div className='sociallogin'>
                <img src={facebook} height='40px' width='40px' alt='' />
                <img onClick={() => signInWithGoogle()} src={google} height='40px' width='40px' alt='' />
                <img onClick={() => signInWithGithub()} src={github} height='40px' width='40px' alt='' />
            </div>
        </div>
    );
};

export default SocialLogin;