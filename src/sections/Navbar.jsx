import { moonTech } from "../assets";

const Navbar = () => {
  return (
    <header className="py-4 lg:py-8 px-4 lg:px-16 fixed w-full z-50 bg-opacity-60 backdrop-blur-md bg-white/10 ">
      <div className="container mx-auto flex justify-between items-center">
        <img
          src={moonTech}
          alt="MoonTech Logo"
          className="w-16 h-16 rounded-full transform transition-transform duration-300 hover:scale-110"
        />
        <a
          href="#hero"
          className="text-2xl font-bold text-white hover:text-black transition duration-300 ease-in-out"
        >
          MoonTech
        </a>
        <nav>
          <div className="lg:flex space-x-6 nav-links">
            <a
              href="#about"
              className="text-gray-200 hover:text-black transition duration-300 ease-in-out block lg:inline-block py-2 lg:py-0"
            >
              AboutMoon
            </a>
            <a
              href="#skills"
              className="text-gray-200 hover:text-black transition duration-300 ease-in-out block lg:inline-block py-2 lg:py-0"
            >
              MoonSkills
            </a>
            <a
              href="#projects"
              className="text-gray-200 hover:text-black transition duration-300 ease-in-out block lg:inline-block py-2 lg:py-0"
            >
              MoonProjects
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-black transition duration-300 ease-in-out block lg:inline-block py-2 lg:py-0"
            >
              MoonContact
            </a>
          </div>
          <div></div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
