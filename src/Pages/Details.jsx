import axios from "axios";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Link, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();

    const [assignment, setAssignment] = useState({});

    useEffect(() => {
        getData()
    }, [id])

    const getData = async () => {
        const { data } = await axios(
            `${import.meta.env.VITE_API_URL}/details/${id}`
        )
        setAssignment(data)
    }

    if (!assignment || !Object.keys(assignment).length) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="loading loading-bars loading-lg"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 pt-8">
            <Helmet>
                <title>Details</title>
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Image */}
                <div>
                    <img src={assignment.photo} alt={assignment.title} className="w-full h-auto rounded-lg shadow-md" />
                </div>

                {/* Right Column: Details */}
                <div>
                    <h2 className="text-2xl font-bold mb-4"> <span className="text-blue-600">Title:</span> {assignment.title}</h2>

                    <p className="text-lg mb-4"><span className="text-blue-600 ">Author:</span> {assignment.username}</p>
                    <p className="text-lg mb-4"><span className="text-blue-600 ">Author Email:</span> {assignment.email}</p>
                    <p className="text-lg mb-4"><span className="text-blue-600 font-bold ">
                        Difficulty:</span> <span className="uppercase">{assignment.difficulty}</span></p>
                    <p className="text-lg mb-4 text-justify">
                        <span className="text-blue-600 font-bold">Description:</span> {assignment.description}
                    </p>

                    <p className="text-lg mb-4"><span className="text-blue-600 font-bold">
                        Marks:</span> {assignment.marks}</p>

                    <p className="text-lg mb-4"><span className="text-blue-600 font-bold">
                        Deadline:</span> {new Date(assignment.deadline).toLocaleDateString()}</p>

                    <Link to={`/submit-form/${assignment._id}`} >
                        <button className="btn x-8 py-2.5 leading-5 
                        text-white transition-colors duration-300 transform bg-gray-700 rounded-md 
                        hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Take Assignment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Details;