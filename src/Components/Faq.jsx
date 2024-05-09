const Faq = () => {
    return (
        // <section className="mx-[1%] sm:mx-[3%] pt-8">
        // <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        //     <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
        //     <p className="mt-4 mb-8 dark:text-gray-600">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p>
        //     <div className="space-y-4">
        //         <details className="w-full border rounded-lg">
        //             <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Ex orci laoreet egestas sapien magna egestas scelerisque?</summary>
        //             <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
        //         </details>
        //         <details className="w-full border rounded-lg">
        //             <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Lorem at arcu rutrum viverra metus sapien venenatis lobortis odio?</summary>
        //             <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
        //         </details>
        //         <details className="w-full border rounded-lg">
        //             <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Eleifend feugiat sollicitudin laoreet adipiscing bibendum suscipit erat?</summary>
        //             <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
        //         </details>
        //     </div>
        // </div>
        // </section>
        <div className="hero mt-24">
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
    );
};

export default Faq;
