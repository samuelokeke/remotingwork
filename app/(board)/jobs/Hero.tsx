import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-800 via-purple-800 to-pink-800 mb-14">
      <div className="h-full max-w-7xl mx-auto md:px-2 px-6 py-14">
        <div className="h-full md:w-2/3 w-full mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="md:text-7xl text-4xl font-black text-white dark:text-white mb-2">
            Working remotely is Remoting job.
          </h1>

          <p className="text-lg text-white text-wrap mb-12">
            For over a decade, WWR has been the #1 site for remote jobs, with 6M monthly visitors and the world&apos;s
            largest remote work community
          </p>

          <div className="flex items-center gap-2">
            <button className="hover:bg-white text-white hover:text-gray-700 border-2 px-10 py-3 rounded-full text-lg font-bold">
              Post a job
            </button>

            <p className="text-lg font-medium text-white">
              for <span className="font-black underline">₦5000</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
