import React from 'react';
import google from '../../../image/SocialLogin/google-logo3.png';
import facebook from '../../../image/SocialLogin/facebook.png';
import github from '../../../image/SocialLogin/github-icon.png';
import './SocialLogin.css';



const SocialLogin = () => {
    return (
        <div className='sociallogin'>
            <img src={facebook} height='40px' width='40px' alt='' />
            <img src={google} height='40px' width='40px' alt='' />
            <img src={github} height='40px' width='40px' alt='' />
        </div>
    );
};

export default SocialLogin;