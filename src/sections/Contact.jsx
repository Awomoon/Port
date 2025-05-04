import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane, FaTwitter } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleFormspreeSubmit] = useForm("mwpoljng");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitError, setSubmitError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset success message after 5 seconds
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors when user starts typing
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    
    try {
      const result = await handleFormspreeSubmit(e);
      
      if (result instanceof Error) {
        throw result;
      }
      
      if (state.succeeded) {
        setFormData({ name: "", email: "", message: "" });
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("Failed to send message. Please try again or contact me directly via email.");
    }
  };

  const contactLinks = [
    {
      href: "mailto:raphaelasiwaju1@gmail.com",
      icon: <FaEnvelope />,
      label: "Email",
      color: "hover:bg-red-500",
    },
    {
      href: "https://wa.me/+2349150822069",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      color: "hover:bg-green-500",
    },
    {
      href: "https://www.linkedin.com/in/raphael-asiwaju-awoyemi-03958429a",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      href: "https://github.com/Awomoon",
      icon: <FaGithub />,
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      href: "https://x.com/Awomoon_Sentake",
      icon: <FaTwitter />,
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
  ];

  return (
    <section id="contact" className="relative py-16 lg:py-32 px-4 lg:px-16 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-600 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Get In Touch
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p
            className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Have a project in mind or want to discuss opportunities? I'm currently available for freelance work and full-time positions.
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="lg:w-1/2 space-y-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition"
                placeholder="John Doe"
                required
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition"
                placeholder="john@example.com"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 transition"
                placeholder="Hello Raphael, I'd like to talk about..."
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-400 text-sm mt-1"
              />
            </div>

            <div className="pt-2">
              <motion.button
                type="submit"
                disabled={state.submitting}
                className={`flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg w-full transition-all ${
                  state.submitting 
                    ? "opacity-80 cursor-not-allowed" 
                    : "hover:shadow-lg hover:shadow-blue-500/30"
                }`}
                whileHover={!state.submitting ? { scale: 1.02 } : {}}
                whileTap={!state.submitting ? { scale: 0.98 } : {}}
              >
                {state.submitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </div>

            {/* Success message */}
            {isSuccess && (
              <motion.div
                className="p-3 bg-green-900/50 text-green-300 rounded-lg border border-green-700 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {/* Error message */}
            {submitError && (
              <motion.div
                className="p-3 bg-red-900/50 text-red-300 rounded-lg border border-red-700 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitError}
              </motion.div>
            )}

            {/* Formspree validation errors */}
            {state.errors && (
              <motion.div
                className="p-3 bg-yellow-900/50 text-yellow-300 rounded-lg border border-yellow-700 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Please check all fields and try again.
              </motion.div>
            )}
          </motion.form>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8">
                Feel free to reach out through any of these channels. I typically respond within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <FaEnvelope className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:raphaelasiwaju1@gmail.com" 
                      className="text-white hover:text-blue-400 transition"
                    >
                      raphaelasiwaju1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500 rounded-lg">
                    <FaWhatsapp className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <a 
                      href="https://wa.me/+2349150822069" 
                      className="text-white hover:text-green-400 transition"
                    >
                      +234 915 082 2069
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-400 rounded-lg">
                    <FaTwitter className="text-xl text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Twitter</p>
                    <a 
                      href="https://x.com/Awomoon_Sentake" 
                      className="text-white hover:text-blue-300 transition"
                    >
                      @Awomoon_Sentake
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
                <div className="flex gap-4 flex-wrap">
                  {contactLinks.map(({ href, icon, label, color }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className={`p-4 bg-gray-700 ${color} rounded-lg transition-all duration-300 flex items-center justify-center`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl text-white">{icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;