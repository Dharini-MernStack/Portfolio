import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Dharini, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a passionate full-stack developer with a deep love for
              creating dynamic applications. I have dedicated myself to honing
              my craft and continually expanding my knowledge in order to
              deliver exceptional results.
              
              In addition to my technical expertise, I pride myself on being a
              great communicator and a team player. I thrive in collaborative
              environments where ideas are shared freely and synergy is
              fostered. I believe that the power of collective intelligence can
              unlock endless possibilities.
              
              Beyond my professional pursuits, I am an avid learner, always
              seeking new challenges and opportunities to expand my horizons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
