import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import useAuth from "../Hook/useAuth";

const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date())

    const { user } = useAuth();


    const handleAddProduct = async e => {

        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const difficulty = form.difficulty.value;
        const description = form.description.value;
        const marks = form.marks.value;
        const photo = form.photo.value;
        const deadline = startDate;
        const username = user.displayName;
        const email = user.email;

        //console.log(title, difficulty, description, marks, deadline, photo, username, email);

        const info = {
            title, difficulty, description, marks, deadline, photo, username, email
        };

        console.log(info);

        fetch('http://localhost:5000/add-assignment', {
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
                        text: 'Assignment Created Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }


    return (
        <div className="">

            <h1 className="text-3xl font-bold text-center mt-8">Add an Assignment
            </h1>


            <div className="flex flex-col-reverse sm:flex-row-reverse">


                <form onSubmit={handleAddProduct} className="rounded-xl w-1/2 bg-base-100 flex flex-col justify-center  py-8 mx-auto" >

                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700">Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Title"
                                className="input input-bordered w-full" required />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="text-gray-700">Difficulty Level</span>
                        </label>


                        <div className="input-group">
                            <select name="difficulty"
                                className="select select-bordered w-full"
                                required >
                                <option value="">Select Difficulty Level</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>

                            </select>
                        </div>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="text-gray-700">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description"
                                className="input input-bordered w-full py-12" required />
                        </label>
                    </div>


                    {/* </div> */}

                    {/* <div className="md:flex mb-4"> */}


                    <div className="md:flex mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="text-gray-700">Marks</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="marks" placeholder="Marks"
                                    className="input input-bordered w-full" step="any"
                                    min="1" max="100" required />
                            </label>
                        </div>

                        <div className="form_control md:w-1/2 md:ml-4">

                            <label className="label">
                                <span className="text-gray-700">Deadline</span>
                            </label>

                            <DatePicker
                                className='border p-3 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                    </div>


                    {/* </div> */}

                    <div className="mb-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-gray-700">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL"
                                    className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>



                    <input className="btn btn-block bg-black text-white w-full"
                        type="submit" value="Add" />
                </form>

                <div className="flex justify-center items-center">
                    <img className="rounded-xl w-2/3" src="https://i.ibb.co/Tc4VfXh/assignment.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;
