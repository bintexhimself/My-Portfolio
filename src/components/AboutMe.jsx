import React from "react";

export default function AboutMe() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "GIT",
    "Github",
    "Responsive Design",
  ];

  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
      id="about"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          ABOUT ME
        </h2>
        <div className="w-12 h-1 bg-blue-900 mx-auto mb-4 rounded"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* Left Side - About Text */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Get to know me!
          </h3>
          <p className="text-gray-700 mb-4">
            I'm a{" "}
            <span className="font-semibold">
              Frontend Focused Web Developer
            </span>{" "}
            building and managing the Front-end of Websites and Web Applications
            that leads to the success of the overall product. Check out some of
            my work in the <span className="font-semibold">Projects</span>{" "}
            section.
          </p>
          <p className="text-gray-700">
            I also like sharing content related to the stuff that I have learned
            over the years in{" "}
            <span className="font-semibold">Web Development</span> so it can
            help other people of the Dev Community. Feel free to Connect or
            Follow me on my{" "}
            <a
              href="https://www.linkedin.com/in/binutiri-habib-53115491/"
              className="text-blue-700"
            >
              Linkedin
            </a>
            . I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
        </div>

        {/* Right Side - Skills */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg shadow-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <button className="w-[150px] h-[50px] bg-blue-900 hover:bg-blue-500 text-lg text-white border rounded-lg font-semibold shadow">
          CONTACT ME
        </button>
      </div>
    </section>
  );
}
