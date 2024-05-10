import Helmet from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const AllAssignment = () => {
    const data = useLoaderData();
    return (
        <div className=" p-2 sm:p-24 sm:pt-8">
            <Helmet>
                <title>Assignments</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-12 mx-[2%] sm:mx-[4%] mb-[500px]">
                {
                    data.map(item => <Card
                        key={item._id}
                        item={item}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;