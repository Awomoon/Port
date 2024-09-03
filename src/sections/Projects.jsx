const Projects = () => {
  return (
    <section id="projects" class="py-16 lg:py-32 px-4 lg:px-16 bg-black">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-bold text-white mb-8 reveal">
          My Projects
        </h2>

        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden project-card">
                <img
                  src="project1.jpg"
                  alt="Project 1"
                  class="w-full transform transition-transform duration-500 hover:scale-110"
                />
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-800 mb-2">
                    Project Title 1
                  </h3>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ullamcorper nulla non metus auctor fringilla.
                  </p>
                  <a href="#" class="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden project-card">
                <img
                  src="project2.jpg"
                  alt="Project 2"
                  class="w-full transform transition-transform duration-500 hover:scale-110"
                />
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-800 mb-2">
                    Project Title 2
                  </h3>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ullamcorper nulla non metus auctor fringilla.
                  </p>
                  <a href="#" class="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="bg-white rounded-lg shadow-lg overflow-hidden project-card">
                <img
                  src="project3.jpg"
                  alt="Project 3"
                  class="w-full transform transition-transform duration-500 hover:scale-110"
                />
                <div class="p-6">
                  <h3 class="text-xl font-semibold text-gray-800 mb-2">
                    Project Title 3
                  </h3>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ullamcorper nulla non metus auctor fringilla.
                  </p>
                  <a href="#" class="btn btn-primary">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
