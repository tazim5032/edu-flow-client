import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import SocialLogIn from "../Components/SocialLogIn";
import Swal from "sweetalert2";
import Helmet from "react-helmet";
import { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import useAuth from "../Hook/useAuth";
import SocialLogIn from "../Components/SocialLogIn";
// import UseAuth from "../Hook/UseAuth";
//import UseAuth from "../Components/Hook/UseAuth";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {

                if (result.user) {
                    navigate(from);
                    Swal.fire({
                        icon: 'success',
                        title: 'Congrats',
                        text: 'Login Successful!',
                    });
                    
                    
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Invalid email or password!',
                    });
                }

               

            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid email or password!',
                });
            })
    }

   
    
    return (

        <div className=" mx-[1%] md:mx[10%] lg:mx-[20%] rounded-xl border-2 mt-12">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h1 className="text-2xl text-center my-10 pt-6">Please Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto"
            data-aos="zoom-in"
            data-aos-duration="1000">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email"
                        className="input input-bordered"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span className="text-red-600">Email is Required</span>}
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="input input-bordered"
                        {...register("password", { required: true })}
                    />

                    <span className="absolute top-12 right-1" onClick={ () => setShowPassword(!showPassword)}>
                    {
                        showPassword ? <IoEyeOffSharp></IoEyeOffSharp> : <FiEye></FiEye>
                    }
                    </span>

                    {errors.password && <span className="text-red-600">
                        Password is Required</span>}

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-black text-white font-bold text-xl">Login</button>
                </div>
            </form>
            <p className="text-center mt-4"
            data-aos="zoom-in"
            data-aos-duration="1000">Do not have an account?
                <Link className="text-blue-600 font-bold" to="/register"> Register</Link> </p>
            <div className="md:w-3/4 lg:w-1/2 mx-auto pb-6"
            data-aos="zoom-in"
            data-aos-duration="1000">
                <SocialLogIn ></SocialLogIn>
            </div>

        </div>

    );
};

export default Login;