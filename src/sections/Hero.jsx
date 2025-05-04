import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
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
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const skill = `Skilled in ${skills[index]}`;

  // Enhanced typing effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseSpeed = isDeleting ? 500 : 1500;
    let timeoutId;

    if (isDeleting) {
      if (text.length > 0) {
        timeoutId = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % skills.length);
        setCursorVisible(true);
      }
    } else {
      if (text !== skill) {
        timeoutId = setTimeout(() => {
          setText((prev) => skill.slice(0, prev.length + 1));
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
          setCursorVisible(false);
        }, pauseSpeed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, skill]);

  // Animate background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      controls.start({
        backgroundPositionY: `${scrollPosition * 0.5}px`,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center text-center pt-24 lg:pt-32 px-4 lg:px-16 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={controls}
        initial={{
          background: "radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f172a 100%)",
        }}
      />

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#818cf8", "#a78bfa", "#f472b6"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
              },
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Content */}
      <div className="text-white z-10 relative max-w-4xl" key={visibleKey}>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={moonTech}
            alt="MoonTech Logo"
            className="w-32 h-32 lg:w-48 lg:h-48 rounded-full mb-6 mx-auto border-4 border-indigo-500/30 shadow-lg"
            width="192"
            height="192"
            loading="eager"
          />
        </motion.div>

        <motion.h1
          className="text-4xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Hi, I'm <span className="text-gradient">Awoyemi Raphael</span>
        </motion.h1>

        <motion.h2
          className="text-2xl lg:text-4xl font-semibold mb-8 text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block text-transparent bg-clip-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {text}
          {cursorVisible && (
            <span className="inline-block w-[2px] h-[1.2em] bg-white ml-1 animate-blink align-middle"></span>
          )}
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-indigo-500/30"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, -15, 0],
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