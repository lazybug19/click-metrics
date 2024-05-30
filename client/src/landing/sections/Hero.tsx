import React from 'react';
import HeroImg from "../../assets/n4.png";

const Hero = () => {
  return (
    <main className="w-full flex flex-col items-center mt-[10%] sm:mt-0">
      <section className="flex flex-col md:flex-row justify-between w-[95%] items-center mx-auto mt-[5%]">
        <div className="w-full md:w-[45%] flex flex-col items-start md:items-start sm:text-center md:text-left mb-4 md:mb-0">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl sm:mb-2 mb-0">
            Building stronger digital
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 text-purple-500">
            connections
          </h1>
          <h3 className="scroll-m-20 text-xl tracking-tight shadow-xs mb-4 sm:mb-0">
            Use our URL shortener, QR Codes, and Link-in-bio pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the 'Click-Mate' Platform.
          </h3>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img src={HeroImg} className="w-full h-auto max-h-[30rem] mx-auto shadow-lg shadow-slate-500" />
        </div>
      </section>
    </main>
  );
};

export default Hero;

