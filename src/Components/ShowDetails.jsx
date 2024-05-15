import axios from "axios";
import { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { useParams } from "react-router-dom";

const ShowDetails = () => {
    const { id } = useParams();

    const [assignment, setAssignment] = useState({});

    useEffect(() => {
        getData()
    }, [id])

    const getData = async () => {
        const { data } = await axios(
            `${import.meta.env.VITE_API_URL}/details-submission/${id}`
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
        <div className="flex flex-col sm:flex-row p-4  min-h-screen">
            <div className="mt-4 sm:mt-0 sm:w-1/2  rounded-xl shadow-lg
             p-6 sm:h-screen  flex justify-center items-center">
                
                <div className="">
                <h2 className="text-2xl font-semibold mb-4 ">Title: {assignment.title}</h2>
                    <p className="mb-2"><strong>Marks:</strong> {assignment.marks}</p>
                    <p className="mb-2"><strong>Obtained Marks:</strong> {assignment.obtained_marks}</p>
                    <p className="mb-2"><strong>Status:</strong> {assignment.status}</p>
                    <p className="mb-2"><strong>Feedback:</strong> {assignment.feedback}</p>
                </div>
            </div>
            <Iframe
                url={assignment.url}
                className="mt-4 sm:w-4/5 h-screen sm:mr-4 rounded-xl shadow-lg"
                display="block"
                position="relative"
            />
            
        </div>
    );
};

export default ShowDetails;
