import { profile } from "../assets";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-32 px-4 lg:px-16 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center reveal">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
            <img
              src={profile}
              alt="Profile Picture"
              className="rounded-lg shadow-lg mx-auto lg:mx-0 transform transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-16 order-1 lg:order-2">
            <p className="text-white leading-relaxed mb-6 reveal">
              As a driven and dedicated web developer, I am passionate about
              building dynamic and user-friendly web applications. My portfolio
              showcases my growing proficiency in HTML, CSS, and JavaScript,
              including utilizing APIs (Node.js) and integrating databases
              (Firebase). I am eager to contribute my skills to innovative
              projects that challenge and expand my expertise.
            </p>
            <a href="#contact" className="btn btn-primary reveal">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
