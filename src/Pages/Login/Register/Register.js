import React from 'react';
import './Register.css';
import logoimg from '../../../image/img.png';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';


const Register = () => {

    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    //   ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log( name, email, password)

    }


    return (
        <div className='registerdiv'>

            <div className='register'>
                <div>
                    <img src={logoimg} height='160px' width='348px' alt='' />
                </div>

                <h2 className='m-2 mb-3 fwbold '>Register</h2>

                <form onSubmit={handleRegister}>
                    <input className='register-input' type='text' name='name' placeholder='Enter name' />
                    <input className='register-input' type='email' placeholder='Enter email' name='email' id='' required />
                    <input className='register-input mb-2 ' type='password' placeholder='Enter password' name='password' id='' required />

                   {/*  <div className='mb-2 mt-0'>
                        <input
                            type='checkbox' name='terms' id='terms'></input>
                        <label className='text-danger'>
                            Accept terms and conditions
                        </label>
                    </div> */}

                    <input className='register-input' type='submit' value='Register' />
                </form>


                <div className=' mx d-flex m-0 justify-content-center'>
                    <hr className='w-25' />
                    <p className='mx-1'>or</p>
                    <hr className='w-25' />
                </div>

                <SocialLogin />

                <div className='new-user'>
                    <p style={{ textAlign: 'center' }}>Alrady have an account?<span>
                        <Link style={{ textDecoration: 'none' }} to='/login'> Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;