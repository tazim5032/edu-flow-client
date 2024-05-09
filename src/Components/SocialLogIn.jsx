import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../Hook/useAuth";


const SocialLogIn = () => {
    const { googleLogIn, githubLogIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';
    const handleSocialLogin = (socialProvider) =>{
        socialProvider()
        .then(result =>{
           if(result.user){
               navigate(from);
           }
        })
    }
    return (
        <div>
            <div className="divider">Continue With</div>
            <div className="flex justify-around">
                <button onClick={() => handleSocialLogin(googleLogIn)}
                className="w-[30px] h-[30px]"><FcGoogle  className="w-[30px] h-[30px]"/></button>
                <button onClick={() => handleSocialLogin(githubLogIn)}
                className="w-[30px] h-[30px]"><FaGithub className="w-[30px] h-[30px]" /></button>
            </div>
        </div>
    );
};

export default SocialLogIn;