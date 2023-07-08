import React from "react";
import WorkImg1 from "../assets/WorkImg2.jpg";
import WorkImg2 from "../assets/WorkImg1.jpg";
import WorkImg3 from "../assets/workImg3.jpg";
import WorkImg4 from "../assets/WorkImg4.jpg";
import WorkImg5 from "../assets/WorkImg5.jpg";
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${WorkImg1})` }}
            className="shadow-lg shadow-[#040c16]  group conatiner rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traccking-wider">
                Ecommerce Platform -MERN-Stack Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Dharini-MernStack/Proshop---final">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-black font-bold text-lg"
                  >
                    Code
                  </button>
                </a>

                <a href="https://dharini.onrender.com/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-black text-white font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg2})` }}
            className="shadow-lg shadow-[#040c16]  group conatiner rounded-md flex justify-center items-center mx-auto content-div"
          >
          
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traccking-wider">
                Resume Builder Application -MERN-Stack
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Dharini-MernStack/Resume-Crafterr">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-black font-bold text-lg"
                  >
                    Code
                  </button>
                </a>

                <a href="https://dharini-resumecrafter.onrender.com/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-black text-white font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg4})` }}
            className="shadow-lg shadow-[#040c16]  group conatiner rounded-md flex justify-center items-center mx-auto content-div"
          >
           
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traccking-wider">
                WebPage Development - HTML,CSS,JS
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Dharini-MernStack/Omnifoods1">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-black font-bold text-lg"
                  >
                    Code
                  </button>
                </a>

                <a href="https://omnifoods1.vercel.app/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-black text-white font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg5})` }}
            className="shadow-lg shadow-[#040c16]  group conatiner rounded-md flex justify-center items-center mx-auto content-div"
          >
     
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traccking-wider">
                Quiz-Pop App - Fundamentals
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Dharini-MernStack/Quiz-Pop-TechTitans">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-black font-bold text-lg"
                  >
                    Code
                  </button>
                </a>

                <a href="https://dharini-mernstack.github.io/Quiz-Pop-TechTitans/">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-black text-white font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg3})` }}
            className="shadow-lg shadow-[#040c16]  group conatiner rounded-md flex justify-center items-center mx-auto content-div"
          >
          
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white traccking-wider">
                Personal Portfolio Application- ReactJs,TailwindCSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Dharini-MernStack/Portfolio">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-black font-bold text-lg"
                  >
                    Code
                  </button>
                </a>

                <a href="https://dharini-portfolio.onrender.com">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-black text-white font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
