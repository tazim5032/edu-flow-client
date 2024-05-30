import { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth';
import useAxiosSecure from '../Hook/useAxiosSecure';

const Profile = () => {

    const { user } = useAuth();
    const [items, setItems] = useState([]);
   // const [percentage, setPercentage] = useState(0);
    const [assignment, setAssignment] = useState([]);
   // const [completionPercentage, setCompletionPercentage] = useState(null);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        getData()
    }, [user])

    const getData = async () => {
        const { data } = await axiosSecure(
            `/submission/${user?.email}`)
        setAssignment(data)
       // calculatePercentage(assignment)
    }

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/all-assignment-feature`)
            .then(res => res.json())
            .then(data => {

                setItems(data);

            });
    }, []);

    const calculateCompletionPercentage =  (done, total) =>{

        let p = done/total;

        p = p*100;

        return p.toFixed(2);
    }

    //setCompletionPercentage

    const calculatePercentage =  (assignments) => {

        let totalMarksObtained = 0;
        let totalMarksPossible = 0;

        assignments.forEach(assignment => {
            if (assignment.status !== 'pending') {
                totalMarksObtained += parseFloat(assignment.obtained_marks) || 0;
                totalMarksPossible += parseFloat(assignment.marks) || 0;
            }
        });

        const calculatedPercentage = totalMarksPossible > 0
            ? (totalMarksObtained / totalMarksPossible) * 100
            : 0;
        return (calculatedPercentage.toFixed(2));
    };
    

    const getPerformanceStatus = (percentage) => {
        if (percentage < 50) {
            return 'Poor';
        } else if (percentage < 70) {
            return 'Average';
        } else if (percentage < 90) {
            return 'Good';
        } else {
            return 'Excellent';
        }
    };

    const getPerformanceColor = (percentage) => {
        if (percentage < 50) {
            return 'text-red-600'; // Poor
        } else if (percentage < 70) {
            return 'text-yellow-600'; // Average
        } else if (percentage < 90) {
            return 'text-blue-600'; // Good
        } else {
            return 'text-green-600'; // Excellent
        }
    };

    
    const percentage = calculatePercentage(assignment)
    const performanceStatus = getPerformanceStatus(percentage);
    const performanceColor = getPerformanceColor(percentage);
    const completionPercentage = calculateCompletionPercentage(assignment.length, items.length)

    if (!user) {
        return <div>Loading...</div>;
    }

    return (

        <div className='flex flex-col justify-center items-center mt-48'>

            <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                <a href='#' className='relative block'>
                    <img
                        alt='profile'
                        src={user?.photoURL}
                        className='mx-auto object-cover rounded-full h-24 w-24 border-2 border-white '
                    />
                </a>

                <p className='mt-2 text-xl font-medium '>
                    {user.displayName}
                </p>
                <p className='mt-2 text-xl font-medium '>
                    {user.email}
                </p>

                <div className='hidden w-full p-2 mt-4 rounded-lg'>

                    <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>

                        <div>

                            <button className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                Update Profile
                            </button>
                            <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats shadow flex flex-col md:flex-row">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        {/* <FaBook className="text-3xl"></FaBook> */}
                    </div>
                    <div className="stat-title">Total Assignments</div>
                    <div className="stat-value">{items.length}</div>

                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        {/* <FaPenAlt className="text-3xl"></FaPenAlt> */}
                    </div>
                    <div className="stat-title">Completed Assignment</div>
                    <div className="stat-value">{assignment.length}</div>

                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        {/* <FaBook className="text-3xl"></FaBook> */}
                    </div>
                    <div className="stat-title">Percentage of copletion</div>
                    <div className="stat-value">{completionPercentage}%</div>

                </div>
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        {/* <FaBook className="text-3xl"></FaBook> */}
                    </div>
                    <div className="stat-title">Obtained Marks</div>
                    <div className="stat-value">{percentage}%</div>

                </div>
            </div>
            <div className="stat flex flex-col justify-center items-center mt-4 ">
                
                <div className="stat-title">Performance</div>
                <div className={`stat-value ${performanceColor} uppercase`}>{performanceStatus}</div>

            </div>
        </div>
    );
}

export default Profile;
