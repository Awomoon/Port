import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../assets";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { FaLinkedin, FaGithub, FaTwitter, FaFileDownload, FaCode, FaServer, FaPalette } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";

const About = () => {
  const ref = useRef();
  const visibleKey = useScrollAnimation(ref);
  const [activeTab, setActiveTab] = useState("about");

  const skills = {
    frontend: [
      { name: "HTML/CSS", level: 90, icon: <FaCode className="text-blue-400" /> },
      { name: "JavaScript", level: 85, icon: <FaCode className="text-yellow-400" /> },
      { name: "React", level: 80, icon: <FaCode className="text-cyan-400" /> },
      { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-cyan-400" /> }
    ],
    learning: [
      { name: "TypeScript", level: 70, icon: <SiTypescript className="text-blue-600" /> },
      { name: "Next.js", level: 65, icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: "Node.js", level: 60, icon: <FaServer className="text-green-500" /> }
    ],
    design: [
      { name: "UI/UX Principles", level: 75, icon: <FaPalette className="text-purple-500" /> }
    ]
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 lg:py-32 px-4 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="container mx-auto relative z-10" key={visibleKey}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            className="lg:w-1/2 order-2 lg:order-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative group">
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-70 blur-md group-hover:-inset-3 transition-all duration-500"
                animate={{
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <img
                src={profile}
                alt="Awoyemi Raphael"
                className="relative rounded-lg shadow-2xl mx-auto lg:mx-0 w-full max-w-md border-4 border-white/10 transition-all duration-500 group-hover:border-purple-500/30 z-10"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Tab Navigation */}
            <div className="flex mb-6 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-4 py-2 font-medium transition-colors ${activeTab === "about" ? "text-blue-400 border-b-2 border-blue-400" : "text-gray-400 hover:text-white"}`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-4 py-2 font-medium transition-colors ${activeTab === "skills" ? "text-purple-400 border-b-2 border-purple-400" : "text-gray-400 hover:text-white"}`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-4 py-2 font-medium transition-colors ${activeTab === "projects" ? "text-pink-400 border-b-2 border-pink-400" : "text-gray-400 hover:text-white"}`}
              >
                Projects
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === "about" && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p
                    className="text-lg mb-6 leading-relaxed text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    I'm <strong className="text-white">Awoyemi Raphael</strong>, an enthusiastic junior developer with a passion for creating beautiful, functional web applications. I'm currently expanding my skills in modern web development while building personal projects to showcase my abilities.
                  </motion.p>
                  <motion.p
                    className="text-lg mb-8 leading-relaxed text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Though new to the professional field, I've completed <strong className="text-white">numerous courses</strong> and built several projects that demonstrate my growing expertise in frontend development. I'm eager to contribute to real-world projects and continue learning from experienced developers.
                  </motion.p>
                </motion.div>
              )}

              {activeTab === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-6">
                    {Object.entries(skills).map(([category, skills]) => (
                      <div key={category}>
                        <h4 className="text-lg font-semibold mb-3 capitalize text-gray-300">
                          {category === "learning" ? "Currently Learning" : `${category} Skills`}
                        </h4>
                        <div className="space-y-3">
                          {skills.map((skill, index) => (
                            <div key={skill.name}>
                              <div className="flex items-center gap-3 mb-1">
                                <div className="w-6 h-6 flex items-center justify-center">
                                  {skill.icon}
                                </div>
                                <span className="flex-1">{skill.name}</span>
                                <span className="text-sm text-gray-400">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-gray-800 rounded-full h-2">
                                <motion.div
                                  className={`h-2 rounded-full ${
                                    category === "learning" 
                                      ? "bg-gradient-to-r from-purple-500 to-pink-500" 
                                      : "bg-gradient-to-r from-blue-500 to-purple-500"
                                  }`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ delay: index * 0.1, duration: 1 }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <div className="border-l-2 border-blue-400 pl-4 py-1">
                      <h4 className="font-bold text-lg">Portfolio Website</h4>
                      <p className="text-gray-400">Personal Project • 2024</p>
                      <p className="text-gray-300 mt-1">Built with React and Tailwind CSS to showcase my work</p>
                    </div>
                    <div className="border-l-2 border-purple-400 pl-4 py-1">
                      <h4 className="font-bold text-lg">E-commerce Demo</h4>
                      <p className="text-gray-400">Learning Project • 2024</p>
                      <p className="text-gray-300 mt-1">Created a responsive online store frontend</p>
                    </div>
                    <div className="border-l-2 border-pink-400 pl-4 py-1">
                      <h4 className="font-bold text-lg">Weather App</h4>
                      <p className="text-gray-400">API Project • 2024</p>
                      <p className="text-gray-300 mt-1">Integrated with a weather API to display forecasts</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.a
                href="public/Awoyemi-Raphael-CV.pdf"
                download="Awoyemi-Raphael-CV.pdf"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFileDownload /> Download CV
              </motion.a>
              <div className="flex gap-4">
                {[
                  { icon: <FaLinkedin />, color: "bg-blue-600 hover:bg-blue-700", label: "LinkedIn" },
                  { icon: <FaGithub />, color: "bg-gray-800 hover:bg-gray-700", label: "GitHub" },
                  { icon: <FaTwitter />, color: "bg-sky-500 hover:bg-sky-600", label: "Twitter" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-colors duration-300 ${social.color}`}
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;