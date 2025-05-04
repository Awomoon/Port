import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

// Get last updated date (works in both dev and production)
const lastUpdated = import.meta.env.VITE_LAST_UPDATED || 
  new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/Awomoon",
      icon: <FaGithub />,
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      href: "https://www.linkedin.com/in/raphael-asiwaju-awoyemi-03958429a",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      href: "https://twitter.com/yourusername",
      icon: <FaTwitter />,
      label: "Twitter",
      color: "hover:text-blue-300",
    },
  ];

  return (
    <footer className="relative py-8 px-4 lg:px-16 bg-gradient-to-t from-gray-900 to-black border-t border-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400"
          >
            &copy; {new Date().getFullYear()} MoonTech. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map(({ href, icon, label, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-gray-500 ${color} transition-colors duration-300 text-xl`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-sm text-gray-400"
          >
            Made with <FaHeart className="text-red-500 mx-1" /> by Awoyemi Raphael
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-gray-800 text-xs text-gray-500"
        >
          <p>Built with React, Tailwind CSS, and Framer Motion</p>
          <p className="mt-1">Last updated: {lastUpdated}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;