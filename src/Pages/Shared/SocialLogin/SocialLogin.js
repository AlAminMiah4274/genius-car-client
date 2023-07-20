import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
// import { useLocation, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../../../api/Auth';

const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || 5000;

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                setAuthToken(user);
            })
            .catch(err => console.error(err))
    };

    return (
        <div>
            <p className='text-center'>Social Login</p>
            <p className='text-center'>
                <button onClick={handleGoogleLogin} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;