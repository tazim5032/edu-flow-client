import Helmet from "react-helmet";
import Faq from "../Components/Faq";
import HomeCard from "../Components/HomeCard";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Slider></Slider>
            <HomeCard></HomeCard>
            <Faq></Faq>
        </div>
    );
};

export default Home;