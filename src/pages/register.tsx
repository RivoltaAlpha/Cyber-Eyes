import { NavLink } from 'react-router-dom';
// import RegPic from '../assets/reg.png';
import RegPic from '../assets/Learning-cuate.png';

export default function Register() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-2 sm:px-6 lg:px-4">
            <div className="flex flex-col lg:flex-row items-center max-w-8xl p-10 space-y-8 lg:space-y-0 lg:space-x-2">
                <div className="lg:w-full lg:ml-20 ">
                    <img src={RegPic} alt="Register" className=" h-[600px] object-cover" />
                </div>
                <div className="lg:w-[900px] lg:ml-11 w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                            Create your account
                        </h2>
                    </div>
                    <form className="mt-8 lg:mr-20 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <input
                                    name="firstName"
                                    type="text"
                                    required
                                    className="appearance-none rounded relative w-[600px] px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <input
                                    name="lastName"
                                    type="text"
                                    required
                                    className="appearance-none rounded relative w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Last Name"
                                />
                            </div>
                            <div>
                                <input
                                    name="phone"
                                    type="tel"
                                    required
                                    className="appearance-none rounded relative w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Phone"
                                />
                            </div>
                            <div>
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded relative w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <input
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded relative w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account?{' '}
                            <NavLink to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Log in
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
