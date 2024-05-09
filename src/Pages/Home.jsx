import Helmet from "react-helmet";
import Faq from "../Components/Faq";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div className="">
            <Helmet>
                <title>Home</title>
            </Helmet>
            {/* <Fade cascade damping={0.1}> */}

            <Slider></Slider>
            <Faq></Faq>
        </div>
    );
};

export default Home;