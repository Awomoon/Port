const Skills = () => {
  return (
    <section id="skills" className="py-16 lg:py-32 px-4 lg:px-16 bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 reveal">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <a href="#" className="reveal">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <span className="material-icons text-5xl lg:text-6xl text-blue-500 skill-icon">
                code
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">HTML</h3>
            </div>
          </a>
          <a href="#" className="reveal">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <span className="material-icons text-5xl lg:text-6xl text-blue-400 skill-icon">
                css
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">CSS</h3>
            </div>
          </a>
          <a href="#" className="reveal">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <span className="material-icons text-5xl lg:text-6xl text-yellow-400 skill-icon">
                javascript
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                JavaScript
              </h3>
            </div>
          </a>
          <a href="#" className="reveal">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <span className="material-icons text-5xl lg:text-6xl text-gray-700 skill-icon">
                storage
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Firebase
              </h3>
            </div>
          </a>
          <a href="#" className="reveal">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <span className="material-icons text-5xl lg:text-6xl text-indigo-600 skill-icon">
                api
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">APIs</h3>
            </div>
          </a>
          <a href="#" className="reveal">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
              <span className="material-icons text-5xl lg:text-6xl text-red-500 skill-icon">
                devices
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Responsive Design
              </h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
