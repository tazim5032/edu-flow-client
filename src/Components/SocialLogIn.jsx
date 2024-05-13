import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../Hook/useAuth";
// import { async } from "@firebase/util";
import axios from "axios";
import toast from "react-hot-toast";


const SocialLogIn = () => {
    const { googleLogIn, githubLogIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const handleSocialLogin = async (socialProvider) => {
        // socialProvider()
        // .then(result =>{
        //    if(result.user){
        //        navigate(from);
        //    }
        // })

        try {
            const result = await socialProvider();

            console.log(result.user);
           // result.user.linkWithCredential(error.credential)

            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
                email: result?.user?.email
            },
                {
                    withCredentials: true
                }
            )

            console.log(data);
            navigate(from);
        }
        catch (err) {
            console.log(err)
            toast.error(err?.message)
        }
    }
    return (
        <div>
            <div className="divider">Continue With</div>
            <div className="flex justify-around">
                <button onClick={() => handleSocialLogin(googleLogIn)}
                    className="w-[30px] h-[30px]"><FcGoogle className="w-[30px] h-[30px]" /></button>
                <button onClick={() => handleSocialLogin(githubLogIn)}
                    className="w-[30px] h-[30px]"><FaGithub className="w-[30px] h-[30px]" /></button>
            </div>
        </div>
    );
};

export default SocialLogIn;