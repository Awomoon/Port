import { moonTech } from "../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-24 lg:pt-32 px-4 lg:px-16"
    >
      <div className="text-white">
        <img
          src={moonTech}
          alt="MoonTech Logo"
          className="w-32 h-32 lg:w-48 lg:h-48 rounded-full mb-4 mx-auto animate-spin-slow duration-30s transform transition-transform duration-500 hover:rotate-360"
        />
        <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-4">
          Hi, I'm Awoyemi Raphael (MooonTech)
        </h1>
        <p className="text-lg lg:text-2xl mb-8 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block text-transparent bg-clip-text">
          A passionate web developer.
        </p>
      </div>
    </section>
  );
};

export default Hero;
