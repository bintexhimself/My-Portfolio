import React from "react";
import { Linkedin, Github, Twitter, Mail, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Section */}
          <div>
            <h3 className="font-bold text-lg">Contact Us</h3>
            <p className="text-gray-400 mt-2 max-w-md">Phone: +2348035683067</p>
            <p className="text-gray-400 mt-2 max-w-md">
              E-mail: binutirihabib@gmail.com
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="font-bold text-lg">SOCIAL</h3>
            <div className="flex space-x-4 mt-3 text-xl">
              <a
                href="https://www.linkedin.com/in/binutiri-habib-53115491/"
                className="hover:text-purple-500"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/bintexhimself"
                className="hover:text-purple-500"
              >
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:binutirihabibe@email.com"
                className="hover:text-purple-500"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-500">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm">
          © Copyright 2025. Made by{" "}
          <span className="font-semibold text-white">Binutiri Habib</span>
        </div>
      </div>
    </footer>
  );
}
