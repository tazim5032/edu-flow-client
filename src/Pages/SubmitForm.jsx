import axios from "axios";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";

const SubmitForm = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();


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

    const handleSubmit = async e => {

        e.preventDefault();

        const form = e.target;

        const title = assignment.title;
        const marks = assignment.marks;
        const email = assignment.email;
        const obtained_marks = 'Pending'
        const feedback = 'Pending'

        const url = form.url.value;
        const quickNote = form.description.value;
        const student_name = user.displayName;
        const student_email = user.email;

        //console.log(title, difficulty, description, marks, deadline, photo, username, email);
        const status = 'Pending'
        const info = {
            email, url, quickNote, student_name, student_email, status, title, marks, obtained_marks, feedback
        };

        console.log(info);

        fetch(`${import.meta.env.VITE_API_URL}/submission`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info) //data gula k stringfy kore server e pathaitece
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Submitted Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })

                    navigate('/my-submission')
                }
            })

    }
    return (
        <div className="pt-24">
            <Helmet>
                <title>Submit Assignment</title>
            </Helmet>

            <h1 className="text-3xl font-bold text-center mt-8">Submit Assignment
            </h1>

            <div className="flex flex-col-reverse sm:flex-row-reverse">


                <form onSubmit={handleSubmit}
                    className="rounded-xl w-1/2 bg-base-100 flex flex-col justify-center  py-8 mx-auto" >
                    <h1 className="mb-6">Assignment Title: {assignment.title}</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700">Assignment Link(PDF/Doc)</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="url" placeholder="Assignment URL"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>


                    <div className="form-control mb-4 ">
                        <label className="label">
                            <span className="text-gray-700">Quick Note</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Quick Note"
                                className="input input-bordered w-full py-12" required />
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

export default SubmitForm;