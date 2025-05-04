import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projectData = [
  {
    title: "TaskMaster Pro",
    description: "A modern task management app with drag-and-drop functionality and real-time updates.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Task management application interface",
    demoLink: "#",
    codeLink: "#",
    tags: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    title: "E-Commerce Hub",
    description: "Full-featured online store with product filtering, cart system, and checkout flow.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "E-commerce website screenshot",
    demoLink: "#",
    codeLink: "#",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "DevBlog Platform",
    description: "Markdown-powered blog with syntax highlighting and dark mode support.",
    image: "https://images.unsplash.com/photo-1546074177-ffdda98d214f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Blog platform interface",
    demoLink: "#",
    codeLink: "#",
    tags: ["React", "Markdown", "Node.js"],
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with 5-day forecasts and location search.",
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    alt: "Weather application dashboard",
    demoLink: "#",
    codeLink: "#",
    tags: ["TypeScript", "API Integration", "Chart.js"],
  },
];

const ProjectCard = ({ project, isActive }) => (
  <motion.div
    className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-700 ${
      isActive ? "scale-100" : "scale-95"
    }`}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="relative overflow-hidden h-56">
      <img
        src={project.image}
        alt={project.alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2 py-1 bg-black/70 text-white rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="p-6 flex flex-col justify-between flex-grow">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
      </div>
      <div className="flex gap-3">
        <a
          href={project.demoLink}
          className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          aria-label={`View demo of ${project.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo <FaExternalLinkAlt size={12} />
        </a>
        <a
          href={project.codeLink}
          className="inline-flex items-center gap-2 bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          aria-label={`View code for ${project.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code <FaGithub size={14} />
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => swiperRef.current.swiper.slideNext();
  const prevSlide = () => swiperRef.current.swiper.slidePrev();

  return (
    <section id="projects" className="relative py-16 lg:py-28 bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600 blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My Projects
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Swiper with Enhanced Effects */}
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Autoplay, EffectCoverflow]}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            640: { slidesPerView: 1, coverflowEffect: { modifier: 1 } },
            768: { slidesPerView: 1.5, coverflowEffect: { modifier: 1.5 } },
            1024: { slidesPerView: 2.5, coverflowEffect: { modifier: 2 } },
            1280: { slidesPerView: 3, coverflowEffect: { modifier: 2.5 } },
          }}
          className="pb-16"
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index} className="px-2 h-auto">
              {({ isActive }) => (
                <ProjectCard project={project} isActive={isActive} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center gap-2 mt-8"></div>

        {/* Navigation Arrows with Hover Effects */}
        <div className="absolute top-1/2 transform -translate-y-1/2 -left-2 md:-left-6 z-10">
          <motion.button
            onClick={prevSlide}
            className="bg-white text-black p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Previous Project"
            whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft className="text-lg" />
          </motion.button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 -right-2 md:-right-6 z-10">
          <motion.button
            onClick={nextSlide}
            className="bg-white text-black p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Next Project"
            whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight className="text-lg" />
          </motion.button>
        </div>

        {/* Project Details Panel */}
        <AnimatePresence>
          <motion.div
            className="mt-12 bg-gray-900/50 backdrop-blur-md rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {projectData[activeIndex].title}
            </h3>
            <p className="text-gray-300 mb-4">
              {projectData[activeIndex].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {projectData[activeIndex].tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-medium px-3 py-1 bg-gray-800 text-blue-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={projectData[activeIndex].demoLink}
                className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Demo <FaExternalLinkAlt size={12} />
              </a>
              <a
                href={projectData[activeIndex].codeLink}
                className="inline-flex items-center gap-2 bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code <FaGithub size={14} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;