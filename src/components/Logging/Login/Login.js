import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const Login = () => {
    const [error, setError] = useState('');
    const { logIn } = useContext(AuthContext);

    const handleSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(r => {
                const user = r.user;
                console.log(user);
                form.reset();
                setError('');
            })
            .catch(e => {
                console.log(e);
                setError(e.message);
            })

    }
    return (
        <div>
            <h2 className='bg-sky-600 p-2 text-white text-center text-2xl font-semibold'>Log in...</h2>

            <form onSubmit={handleSubmit} className='container mx-auto bg-white px-10 py-10 rounded-lg text-gray-900 w-1/2'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-lg font-medium">Your email</label>
                    <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter Your Email" required="" />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-lg font-medium">Your password</label>
                    <input type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l block w-full p-2.5" placeholder='Enter Your Password' required="" />
                </div>

                <p className='text-red-600 mb-2'>{error}</p>
                <p className='pb-2'>New to the site? Please <Link className='text-blue-700 font-semibold' to='/register'>Register</Link> Now!</p>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Login</button>
            </form>
        </div>
    );
};

export default Login;