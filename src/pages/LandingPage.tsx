import React from 'react'
import banImage from '../assets/ban-1.png';

const LandingPage: React.FC = () => {

    return(
        <div className="font-sans ">
      {/* Header */}
      <header className="bg-gray-100 fixed top-0 w-full z-10 pt-4 ">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between py-4">
            <a href="/" className="text-3xl font-bold text-gray-900">
              Task<span className="text-blue-500">I</span>T
            </a>
            <button className="md:hidden text-2xl">
              <i className="ti-align-justify"></i>
            </button>
            <ul className="hidden md:flex space-x-6">
               <li>
                <a
                  href="./auth/login.html"
                  className=" font-bold text-gray-700 hover:text-blue-500"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    
      {/* Banner Section */}
      <section className="banner bg-gray-100 pt-16 pb-12">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center pt-20 mt-8">
          {/* Content */}
          <div className="md:w-1/2 mt-8 md:mt-0 mb-8">
            <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full uppercase text-sm">
              Streamline Your Workflow
            </span>
            <h2 className="text-6xl font-bold mt-4 leading-tight">
              Effortless Task Management
            </h2>
            <p className="text-gray-600 mt-4">
              Stay organized, prioritize your tasks,<br/> and boost your
              productivity with our <br/>powerful task management app.
            </p>
            <a
              href="/auth/Register.html"
              className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              Get Started
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
               src={banImage}
               alt="Task Management"
               className="w-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
    );
};

export default LandingPage;