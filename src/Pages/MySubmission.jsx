import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";

const MySubmission = () => {
    const { user } = useAuth();

    const [assignment, setAssignment] = useState([]);

    useEffect(() => {
        getData()
    }, [user])



     const getData = async () => {
        const { data } = await axios(
            `${import.meta.env.VITE_API_URL}/submission/${user?.email}`
        )
        setAssignment(data)
    }


    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}/submission/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAssignment(data);
    //         });
    // }, [user]);

    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium  '>My Submissions</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {assignment.length} Submission
                </span>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className=''>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Title</span>
                                            </div>
                                        </th>



                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <button className='flex items-center gap-x-2'>
                                                <span>Marks</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Obtained Marks
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Status
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Feedback
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className=' divide-y divide-gray-200 '>

                                    {
                                        assignment.map(item =>
                                            <tr key={item._id}>
                                                <td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                    {item.title}
                                                </td><td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                    {item.marks}
                                                </td><td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                    {item.obtained_marks}
                                                </td><td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                    {item.status}
                                                </td><td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                    {item.feedback}
                                                </td>
                                            </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySubmission;