import React from "react";

export default function Projects() {
  // Array of projects (you can add/edit/remove as needed)
  const projectList = [
    {
      imageSrc: "../src/assets/project1.jpg",
      title: "Community Safety Alert App (3MTT-Nigeria)",
      description:
        "Safety shield app is a successful real-time emergency alert platform created by a group of developers which I was involved in. This app provides real-time alerts, emergency response features, and safety resources.",
      buttonText: "VIEW PROJECT",
      buttonLink: "https://safety-app2.vercel.app/",
    },
    {
      imageSrc: "../src/assets/project2.jpg",
      title: "YumEat Quick Delivery App",
      description:
        "An online learning platform designed to make education accessible. It includes interactive lessons, progress tracking, and exam prep features for students worldwide.",
      buttonText: "VIEW PROJECT",
      buttonLink: "https://yum-eat-react-and-tailwind-css-proj.vercel.app/",
    },
    {
      imageSrc: "../src/assets/project3.jpg",
      title: "Personal Portfolio Website",
      description:
        "A fully responsive portfolio website showcasing my skills, projects, and contact information. Built with React and Tailwind CSS to provide a clean and modern look.",
      buttonText: "VIEW PROJECT",
      buttonLink: "https://my-portfolio.com",
    },
  ];

  return (
    <section id="projects" className="w-full py-16 bg-gray-50">
      {/* Section Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide">
          PROJECTS
        </h2>
        <div className="w-16 h-1 bg-blue-900 mx-auto mt-2 rounded"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study.
        </p>
      </div>

      {/* Project List */}
      <div className="space-y-16">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="container mx-auto flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 gap-10"
          >
            {/* Alternate image position for variety */}
            <div
              className={`flex-1 flex justify-center ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full max-w-lg object-contain drop-shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div
              className={`flex-1 text-center md:text-left ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>
              <a
                href={project.buttonLink}
                target="_blank"
                className="inline-block bg-blue-900 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md shadow transition"
              >
                {project.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
