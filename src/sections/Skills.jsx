import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFire,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaServer,
  FaApple,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, color: "from-orange-500 to-orange-600", level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, color: "from-blue-500 to-blue-600", level: 90 },
      { name: "JavaScript", icon: <FaJs />, color: "from-yellow-400 to-yellow-500", level: 85 },
      { name: "React", icon: <SiReact />, color: "from-cyan-400 to-blue-500", level: 88 },
      { name: "Next.js", icon: <SiNextdotjs />, color: "from-gray-800 to-black", level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-teal-400 to-cyan-500", level: 90 },
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "from-green-500 to-green-600", level: 75 },
      { name: "Firebase", icon: <FaFire />, color: "from-orange-500 to-yellow-500", level: 80 },
      { name: "REST APIs", icon: <FaCloud />, color: "from-indigo-500 to-purple-600", level: 85 },
      { name: "Hive DB", icon: <FaDatabase />, color: "from-gray-600 to-gray-800", level: 75 },
    ]
  },
  {
    title: "Mobile & Others",
    skills: [
      { name: "Flutter", icon: <FaApple />, color: "from-blue-400 to-blue-600", level: 70 },
      { name: "Dio", icon: <FaServer />, color: "from-purple-500 to-pink-600", level: 75 },
      { name: "TypeScript", icon: <SiTypescript />, color: "from-blue-600 to-blue-800", level: 85 },
      { name: "Responsive Design", icon: <FaMobileAlt />, color: "from-emerald-400 to-green-500", level: 90 },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0, transition: { when: "afterChildren" } },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const categoryVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="relative py-20 lg:py-32 px-4 lg:px-16 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My Skills
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Category Tabs - Fixed visibility with higher z-index */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12 z-20 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.title}
              variants={categoryVariants}
              onClick={() => setActiveCategory(category.title)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 z-20 ${
                activeCategory === category.title
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            {skillCategories
              .find(cat => cat.title === activeCategory)
              .skills.map((skill, index) => (
                <motion.div
                  key={`${activeCategory}-${skill.name}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className={`bg-gradient-to-br ${skill.color} rounded-xl shadow-xl p-6 h-full flex flex-col items-center justify-between transition-all duration-300 ${
                      hoveredSkill === skill.name ? "shadow-lg scale-[1.03]" : ""
                    }`}
                  >
                    <motion.div
                      animate={{
                        scale: hoveredSkill === skill.name ? 1.2 : 1,
                        rotate: hoveredSkill === skill.name ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className="text-5xl text-white mb-4"
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-3 text-center">
                      {skill.name}
                    </h3>
                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 1.2, type: "spring" }}
                      />
                    </div>
                    <span className="text-xs text-white/70 mt-1 self-end">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated Tooltip */}
                  {hoveredSkill === skill.name && (
                    <motion.div
                      className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-full whitespace-nowrap z-30"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {skill.name} - {skill.level}% proficiency
                    </motion.div>
                  )}
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>

        {/* Proficiency Legend */}
        <motion.div
          className="mt-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-6 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Basic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Advanced</span>
            </div>
          </div>
          <p className="text-gray-400 text-sm max-w-md text-center">
            Skills are categorized by my self-assessed proficiency level based on real-world experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;