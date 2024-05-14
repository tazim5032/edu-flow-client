import axios from "axios";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Iframe from "react-iframe";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMarks = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [assignment, setAssignment] = useState({});

    useEffect(() => {
        getData()
    }, [id])

    const getData = async () => {
        const { data } = await axios(
            `${import.meta.env.VITE_API_URL}/submitted/${id}`
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

    const handleSubmit = async e => {

        e.preventDefault();

        const form = e.target;


        const obtained_marks = form.obtainedmarks.value;
        const feedback = form.feedback.value;


        const status = 'Completed'
        const info = {
            status, obtained_marks, feedback
        };

        fetch(`${import.meta.env.VITE_API_URL}/status-update/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Marks Given Successfully!',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })

                    navigate('/pending-assignment')

                }
            })

    }

    return (
        <div className="">
            <Helmet>
                <title>Give Marks</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-center mt-8">Give Marks
            </h1>

            <div className="flex flex-col-reverse sm:flex-row-reverse">


                <form onSubmit={handleSubmit}
                    className="rounded-xl w-1/2 bg-base-100 flex flex-col justify-center  py-8 mx-auto" >
                    <h1 className="mb-6">Assignment Title: {assignment.title}</h1>

                    <div className="form-control">
                        
                        <label className="label">

                            <span className="">Assignment Link(PDF/Doc)</span>
                        </label>
                        <label className="input-group">


                            <input type="text" name="url"
                                defaultValue={assignment.url}
                                className="input input-bordered w-full" disabled />
                                
                        </label>
                        
                    </div>

                    <Iframe url={assignment.url}
                            // width="640px"
                            height="320px"
                            id=""
                            className="mt-4"
                            display="block"
                            position="relative" 
                            />


                    <div className="form-control mb-4 ">
                        <label className="label">
                            <span className="0">Quick Note</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description"
                                defaultValue={assignment.quickNote}
                                className="input input-bordered w-full py-12" disabled />
                        </label>
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="">Marks</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="marks"
                                defaultValue={assignment.marks}
                                className="input input-bordered w-full" step="any"
                                min="1" max="100" disabled />
                        </label>
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="">Obtained Marks</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="obtainedmarks" placeholder="Obtained Marks"
                                className="input input-bordered w-full" step="any"
                                min="0" max={assignment.marks} required />
                        </label>
                    </div>

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="">Feedback</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="feedback" placeholder="Give Feedback"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>

                    <input className="btn btn-block bg-black text-white w-full"
                        type="submit" value="Submit" />
                </form>

                <div className="flex justify-center items-center">
                    <img className="rounded-xl w-2/3" src="https://i.ibb.co/Tc4VfXh/assignment.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default GiveMarks;