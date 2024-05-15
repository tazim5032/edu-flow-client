const Faq = () => {
    return (

        <div className="mt-12">

            <h1 className="text-center mt-12 text-4xl font-semibold">Statistics</h1>
            <p className="text-center mt-2 ">Assignment Statistics Overview</p>

            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                
                <div className="flex flex-col justify-start m-2 lg:m-6 py-6 px-4 bg-gradient-to-r from-green-700 via-blue-500 to-purple-600 shadow-lg rounded-xl">
                    <p className="text-4xl font-bold leading-none lg:text-6xl text-white">1k+</p>
                    <p className="text-sm sm:text-base text-white">Assignments</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6 py-6 px-4 bg-gradient-to-r from-green-700 via-blue-500 to-purple-600 shadow-lg rounded-xl">
                    <p className="text-4xl font-bold leading-none lg:text-6xl text-white">50+</p>
                    <p className="text-sm sm:text-base text-white ">Subjects</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6 py-6 px-4 bg-gradient-to-r from-green-700 via-blue-500 to-purple-600 shadow-lg rounded-xl">
                    <p className="text-4xl font-bold leading-none lg:text-6xl text-white">10k+</p>
                    <p className="text-sm sm:text-base text-white">Users</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6 py-6 px-4 bg-gradient-to-r from-green-700 via-blue-500 to-purple-600 shadow-lg rounded-xl">
                    <p className="text-4xl font-bold leading-none lg:text-6xl text-white">500+</p>
                    <p className="text-sm sm:text-base text-white">Premium Members</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6 py-6 px-4 bg-gradient-to-r from-green-700 via-blue-500 to-purple-600 shadow-lg rounded-xl">
                    <p className="text-4xl font-bold leading-none lg:text-6xl text-white">8k+</p>
                    <p className="text-sm sm:text-base text-white">Submissions</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6 py-6 px-4 bg-gradient-to-r from-green-700 via-blue-500 to-purple-600 shadow-lg rounded-xl">
                    <p className="text-4xl font-bold leading-none lg:text-6xl text-white">50+</p>
                    <p className="text-sm sm:text-base text-white">Team Members</p>
                </div>
            </div>

            <div className="hero mt-12">

                <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                        <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                        <p className="mt-4 mb-8 dark:text-gray-600">
                            Here are some Frequently Asked Questions. You can check whether your question is here or not!
                        </p>
                        <div className="space-y-4">
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                                    How do I create a new assignment?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                    At first you have to login and then to create a new assignment, navigate to the 'Create Assignment' section and fill out the required details such as title, description, due date, and assignees.</p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                                    How do I track the progress of an assignment?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                    You can track the progress of an assignment by navigating to the 'Pending Assignments' section. Here, you'll find detailed information about each assignment's status and completion.</p>
                            </details>
                            <details className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                                    What should I do if I encounter an issue?</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                                    If you encounter any issues or have questions, feel free to reach out to our support team. You can contact us via email at support@eduflow.com or through our live chat feature. </p>
                            </details>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <img src="https://i.ibb.co/8PT8cdL/faq.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
