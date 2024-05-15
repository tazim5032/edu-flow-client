
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Us
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">


          <div className="space-y-6 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold ">Our History</h3>
            <p className="text-justify">
              Our journey began in 2010 with a small team of passionate individuals who shared a vision of revolutionizing online learning. Initially, we started as a local study group platform aimed at connecting students within the same city. Our primary focus was to facilitate collaborative learning and provide a space where students could share resources, discuss assignments, and help each other succeed.
            </p>

            <p className="text-justify">
              Today, we are proud to serve a global audience, providing a comprehensive suite of tools designed to enhance online education. Our platform has become a trusted resource for students and educators alike, supporting collaborative learning and fostering academic success across diverse educational environments.
            </p>
          </div>




          <div className="space-y-6 flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold ">Our Mission</h3>
            <p className="text-justify">
              Our mission is to empower students and educators by providing an innovative, collaborative, and user-friendly online platform that enhances the learning experience. We aim to bridge the gap between traditional and digital education, offering tools and resources that facilitate seamless assignment management, effective communication, and meaningful feedback.
            </p>
            <p className="text-justify">
              We strive to create a supportive community where every user can thrive academically, leveraging the power of technology to break down barriers to education. Our commitment is to continuously improve our platform, ensuring it meets the evolving needs of learners and educators around the world, fostering a culture of lifelong learning and academic excellence.
            </p>
          </div>

        </div>
        <div className="space-y-6 flex flex-col justify-center items-center mb-12">
          <h3 className="text-2xl font-semibold ">Our Vision</h3>
          <p className="text-justify">
            Our vision is to revolutionize the educational landscape by creating a dynamic, inclusive, and engaging online environment where students and educators can thrive. We envision a future where technology seamlessly integrates with education, enhancing the learning experience and making high-quality education accessible to all, regardless of location or background.
          </p>
          <p className="text-justify">
            We aspire to be the leading platform for online group study and assignment management, recognized for our innovation, reliability, and commitment to academic success. By continuously evolving our platform and incorporating the latest technological advancements, we aim to foster a global community of lifelong learners and educators who are equipped to meet the challenges of the future.
          </p>
        </div>





        <div className="shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Our Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co/Twk7pxJ/agent3.png"
                alt="John Doe"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold ">John Doe</h4>
              <p className="">CEO</p>
              <div className="flex space-x-4 mt-2">
                <a href="#">
                  <FaLinkedin className="" />
                </a>
                <a href="#">
                  <FaTwitter className="" />
                </a>
                <a href="#">
                  <FaGithub className="" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co/mDVdJbx/agent2.png"
                alt="Jane Smith"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold ">Jane Smith</h4>
              <p className="">CTO</p>
              <div className="flex space-x-4 mt-2">
                <a href="#">
                  <FaLinkedin className="" />
                </a>
                <a href="#">
                  <FaTwitter className="" />
                </a>
                <a href="#">
                  <FaGithub className="" />
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://i.ibb.co/93RbmGJ/agent1.png"
                alt="Alice Johnson"
                className="w-32 h-32 rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold ">Alice Johnson</h4>
              <p className="">COO</p>
              <div className="flex space-x-4 mt-2">
                <a href="#">
                  <FaLinkedin className="" />
                </a>
                <a href="#">
                  <FaTwitter className="" />
                </a>
                <a href="#">
                  <FaGithub className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
