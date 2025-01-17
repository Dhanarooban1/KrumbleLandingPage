import { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import './App.css';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full backdrop-blur-lg bg-white/70 border-b border-gray-100 z-50">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/Krumble.png" 
                alt="Krumble Logo" 
                className="h-10 w-auto object-contain hover:scale-105 transition-transform"
              />
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                Krumble
              </span>
            </div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-medium relative group">
              Launching soon...
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </p>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
            {/* Image Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/Krumble.png" 
                  alt="Krumble App Preview" 
                  className="w-full h-auto rounded-xl shadow-2xl transform group-hover:scale-[1.01] transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>

            {/* Content Container */}
            <div className="space-y-8 relative">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-gray-900 tracking-tight animate-fade-in">
                  Krumble
                </h1>
                <h2 className="text-3xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text animate-fade-in animation-delay-300">
                  Introducing Krumble!
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed animate-fade-in animation-delay-600">
                  An augmented reality based social media application where users can express themselves through interacting with "krums", let's drop the krums.
                </p>
              </div>
              
              <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300">
                <span className="relative z-10">Try our app</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white/80 backdrop-blur-sm mt-12 relative">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              About
            </h1>
            
            {/* Video Container */}
            <div className="relative aspect-video w-full max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <video 
                className="relative w-full h-full rounded-xl object-cover transform group-hover:scale-[1.01] transition duration-300"
                controls
                poster="Krumbleintropost.mp4"
              >
               <source src="/Krumbleintropost.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-2xl text-gray-800 leading-relaxed font-medium">
                Krumble is a upcoming social mobile application that allows users to create, collect, and comment on "krums" - digital images with personalized messages superimposed onto the real world
              </h2>
              <p className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                New Culture
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-white/80 backdrop-blur-sm relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Brand Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img 
                    src="/Krumble.png" 
                    alt="Krumble Logo" 
                    className="h-12 w-auto object-contain hover:scale-105 transition-transform"
                  />
                  <h3 className="text-2xl font-bold text-purple-600">Krumble</h3>
                </div>
                <p className="text-gray-600">
                  create, collect, and comment on "krums"
                </p>
              </div>

              {/* Community Column */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Community</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors relative group">
                      About us
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#security" className="text-gray-600 hover:text-purple-600 transition-colors relative group">
                      Security
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#careers" className="text-gray-600 hover:text-purple-600 transition-colors relative group">
                      Careers
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Links Column */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Links</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#terms" className="text-gray-600 hover:text-purple-600 transition-colors relative group">
                      Terms of use
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="text-gray-600 hover:text-purple-600 transition-colors relative group">
                      Privacy Policy
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Media Column */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Social Media</h4>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="#instagram" 
                      className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#linkedin" 
                      className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600">
                @2024 Krumble. All right Reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;