const Form = () => {
    return (
        <section className="py-6">

            <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                <h1 className="text-4xl font-semibold leading-none text-center">What students are saying about us</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                <div className="flex flex-col items-center mx-12 lg:mx-0">
                    <div className="relative text-center bg-gradient-to-r from-green-700 via-blue-500 to-purple-600 p-6 rounded-xl shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-6 py-1 text-lg italic">This assignment management website has been a game changer for our study group. Its user-friendly interface makes creating, submitting, and reviewing assignments a breeze. The ability to filter assignments by difficulty is very useful, and the peer review system adds valuable feedback. The secure authentication ensures our data is safe. Highly recommend it for group studies!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                    <p>Kamrul Islam</p>
                </div>
                <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
                    <div className="relative text-center bg-gradient-to-r from-green-700 via-blue-500 to-purple-600 p-6 rounded-xl shadow-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
                            <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                            <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        <p className="px-6 py-1 text-lg italic">A fantastic tool for managing group assignments! The clear interface and seamless registration process make it easy to use. The detailed assignment cards and the ability to delete or update assignments are great features. The theme toggle and document preview add to the overall user experience. This website has improved our study sessions significantly.</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
                            <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                            <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                    </div>
                    <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                    <p>Wakil Mahmud</p>
                </div>
            </div>


            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6
                flex flex-col justify-center items-center rounded-xl
                bg-gradient-to-r from-green-700 via-blue-500 to-purple-600">
                    <h1 className="text-4xl font-bold italic">Get in touch</h1>

                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="italic">991 SSK Road, Feni</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span className="italic">+1 234-567-8901</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span className="italic">edu@flow.com</span>
                        </p>
                    </div>
                </div>
                <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="Full Name" className="p-2 border-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="Email" className="p-2 border-2 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 " />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" className=" p-2 border-2 block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 "></textarea>
                    </label>
                    <button type="button" className="w-full self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Form;