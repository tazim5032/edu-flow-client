import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PendingAssignment = () => {
    const {user} = useAuth();
     const [assignment, setAssignment] = useState([]);

     //const status = 'Pending';

     useEffect(() =>{
        fetch(`${import.meta.env.VITE_API_URL}/status/${user.email}/Pending`)
        .then(res => res.json())
        .then(data => setAssignment(data))
    },[])

    return (
        <section className='container px-4 mx-auto pt-12'>
            <div className='flex items-center gap-x-3'>
                <h2 className='text-lg font-medium  '>Total Pending</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {assignment.length} assignment
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
                                                <span>Examinee Name</span>
                                            </button>
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Marks
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Status
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Give Marks
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
                                                    {item.student_name}
                                                </td><td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                    {item.marks}
                                                </td><td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                    {item.status}
                                                </td><td className='px-4 py-4 text-sm   whitespace-nowrap'>
                                                    <Link to={`/give-marks/${item._id}`}>
                                                        <button className="btn p-2 bg-green-500 text-white">Give Mark</button>
                                                    </Link>
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

export default PendingAssignment;