import { Link } from "react-router-dom";

const Card = ({ item }) => {

    const { _id, title, difficulty, description, marks, deadline, photo, username, email } = item;

    return (
        <div className="w-full max-w-xs mx-auto" >
            <div className="shadow-lg rounded-lg overflow-hidden h-full border-2">
                <img className="w-full h-48 object-cover object-center" src={photo} alt={title} />

                <div className="py-4 px-6">
                    <h2 className="text-xl font-semibold ">{title}</h2>
                    


                
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                            <span className="text-sm  mr-2">
                                Marks: {marks}
                            </span>
                            {/* <span className="text-sm ">
                                Rating: rating
                            </span> */}
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 uppercase rounded bg-red-200`}>
                            {difficulty}
                        </span>
                    </div>
                </div>
                <div className="px-6 pb-4 pt-2">
                    <div className="flex justify-between">
                        <Link to={`/update/${_id}`} className="text-sm text-gray-600 hover:text-gray-900 mr-2">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Update
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none">
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                        </button>
                    </div>
                </div>
                <div className="px-6 flex justify-end pb-2">
                    <Link to={`/details/${_id}`} className="text-sm text-gray-600 hover:text-gray-900">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;