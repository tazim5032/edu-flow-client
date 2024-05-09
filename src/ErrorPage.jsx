import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="sans flex flex-col gap-4 justify-center items-center h-[600px]">
            <h1 className="text-3xl font-bold text-red-500">Page Not Found!!</h1>
            <Link className="bg-cyan-300 p-4 rounded-xl font-bold" to="/">Go to Home</Link>
        </div>
    );
};

export default ErrorPage;