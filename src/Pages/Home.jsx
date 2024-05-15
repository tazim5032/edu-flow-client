import Helmet from "react-helmet";
import Faq from "../Components/Faq";
import Form from "../Components/Form";
import HomeCard from "../Components/HomeCard";
import Slider from "../Components/Slider";

const Home = () => {
    return (
        <div className="pt-[56px]">
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Slider></Slider>

            <HomeCard></HomeCard>

            <Faq></Faq>
            <Form></Form>
        </div>
    );
};

export default Home;