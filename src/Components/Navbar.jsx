import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";
// import { Typewriter } from "react-simple-typewriter";
// import { Tooltip } from "react-tooltip";
// import UseAuth from "../Hook/UseAuth";

const Navbar = () => {

    const { logout, user } = useAuth();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Get theme from local storage
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
        document.querySelector('html').setAttribute('data-theme', storedTheme);

        // Event listener to update theme in local storage
        const handleThemeChange = () => {
            const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            document.querySelector('html').setAttribute('data-theme', newTheme);
        };

        // Add event listener
        window.addEventListener('themeChange', handleThemeChange);

        // Clean up event listener
        return () => {
            window.removeEventListener('themeChange', handleThemeChange);
        };
    }, [theme]);

    // Function to toggle theme
    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.querySelector('html').setAttribute('data-theme', newTheme);
    };



    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" style={{ zIndex: 10 }}>

                        <li>

                            <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2' : 'font-bold p-2 sm:mr-2'} to="/"><a>Home</a></NavLink>
                            <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2' : 'font-bold p-2 sm:mr-2'} to="/"><a>Assignment</a></NavLink>

                        </li>
                        {
                            user ?

                                <li>
                                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-yellow-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/"><a>Create Assignment</a></NavLink>
                                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-yellow-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/"><a>Pending Assignment</a></NavLink>
                                </li>


                                : <a></a>
                        }
                    </ul>
                </div>
                <div className='flex-1'>
                    <Link to='/' className='flex gap-2 items-center'>
                        <img className='w-auto h-7 rounded-2xl' src='https://i.ibb.co/1JLyW2S/logo1.png' alt='' />
                        <span className='font-bold'>EduFlow</span>
                    </Link>
                </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1" style={{ zIndex: 10 }}>

                    <div>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-yellow-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/"><a>Home</a></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-yellow-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/"><a>Assignment</a></NavLink>

                    </div>
                    {
                        user ?

                            <div>
                                <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-yellow-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/"><a>Create Assignment</a></NavLink>
                            
                                <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-yellow-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/"><a>Pending Assignment</a></NavLink>
                            </div>


                            : <a></a>
                    }

                </ul>
            </div>
            <div className="navbar-end gap-1 text-center" style={{ zIndex: 10 }}>
                {/* Conditionally render the toggle button based on the current theme */}
                {theme === 'light' && (
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                )}
                {theme === 'dark' && (
                    <label className="cursor-pointer grid place-items-center">
                        <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" checked />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                )}

                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >

                            <div className="tool w-10 rounded-full" >
                                <img className="idd"
                                    src={user?.photoURL ||
                                        "https://i.ibb.co/sjymvr8/Capture4.png"} />
                            </div>

                            {/* <Tooltip anchorSelect=".idd" place="bottom"  className="h-[80px]">
                                {user?.displayName}
                            </Tooltip> */}

                        </label>


                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3
                        z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* <li>
                                <button className="btn btn-sm btn-ghost bg-cyan-200">
                                    {user ? user.displayName : 'User name not found'}
                                </button>
                            </li> */}
                            <li className="">
                                <button className="btn btn-medium btn-ghost bg-cyan-200">
                                    My Attempted Assignments
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={logout}
                                    className="btn btn-sm btn-ghost bg-cyan-200 mt-2">Logout</button>
                            </li>
                        </ul>
                    </div>
                        :

                        <div>
                            <Link to="/login">
                                <button className="btn text-white bg-black">Login</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn text-white bg-black">Register</button>
                            </Link>
                        </div>
                }
                {
                    user ? <button
                        onClick={logout}
                        className="btn btn-medium btn-ghost bg-black text-white mt-2">Logout</button>
                        : <a></a>
                }



            </div>

        </div>
    );
};

export default Navbar;