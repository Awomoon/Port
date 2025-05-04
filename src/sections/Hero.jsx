import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { moonTech } from "../assets";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skills = [
  "Web Development",
  "React.js & Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Flutter",
  "Firebase",
  "API Integration",
  "Responsive Design",
  "Database Management",
];

const Hero = () => {
  const ref = useRef();
  const visibleKey = useScrollAnimation(ref);
  const controls = useAnimation();
  
  // More efficient particles initialization
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  // Optimized scroll handler with debounce
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY;
        controls.start({
          backgroundPositionY: `${scrollPosition * 0.5}px`,
        });
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [controls]);

  // Simplified particles config
  const particlesConfig = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
        },
      },
      modes: {
        bubble: {
          distance: 100,
          size: 6,
          duration: 2,
          opacity: 0.8,
        },
      },
    },
    particles: {
      number: {
        value: 50,
        density: { enable: true, value_area: 800 },
      },
      color: { value: ["#818cf8", "#a78bfa", "#f472b6"] },
      shape: { type: "circle" },
      opacity: { value: 0.7, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    detectRetina: true,
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center text-center pt-24 lg:pt-32 px-4 lg:px-16 overflow-hidden"
    >
      {/* Enhanced Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-gray-900"
        animate={{ ...controls, opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Optimized Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 -z-10"
      />

      {/* Hero Content */}
      <div className="text-white z-10 relative max-w-4xl" key={visibleKey}>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            delay: 0.2
          }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={moonTech}
            alt="MoonTech Logo"
            className="w-32 h-32 lg:w-48 lg:h-48 rounded-full mb-6 mx-auto border-4 border-indigo-500/30 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
            width="192"
            height="192"
            loading="eager"
          />
        </motion.div>

        <motion.h1
          className="text-4xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Hi, I'm <span className="text-gradient animate-gradient">Awoyemi Raphael</span>
        </motion.h1>

        <motion.h2
          className="text-2xl lg:text-3xl font-semibold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Welcome To My World Of Creativity
        </motion.h2>

        {/* Enhanced Skills Display */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, staggerChildren: 0.1 }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              className="inline-block bg-indigo-900/50 text-indigo-100 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm hover:bg-indigo-700/50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a
            href="#contact"
            className="relative overflow-hidden inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.a>
          
          <motion.a
            href="#projects"
            className="relative overflow-hidden inline-block border-2 border-indigo-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:bg-indigo-500/10 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Work</span>
            <span className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </motion.a>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, -15, 0],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hover:scale-110 transition-transform"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;