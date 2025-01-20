import React, { useState } from 'react';
import { Instagram, Linkedin, Share2, Download  , Heart ,Box,Package} from 'lucide-react';
import { motion } from 'framer-motion';

const ARModelViewer = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [rotationY, setRotationY] = useState(0);

  // Placeholder data for demonstration
  const modelStats = {
    collectors: 1234,
    likes: 567,
    shares: 89
  };

  const Box3D = ({ size = 256, className = "" }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>
  );

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto bg-gradient-to-b from-purple-100/50 to-blue-100/50 rounded-3xl p-8">
      {/* Placeholder for Three.js AR Model - You'll need to implement actual Three.js integration */}
      <div className="w-full h-full relative rounded-2xl overflow-hidden bg-white/50 backdrop-blur-sm flex items-center justify-center">
        <div 
          className="w-64 h-64 relative"
          style={{ transform: `rotateY(${rotationY}deg)` }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setRotationY((x / rect.width) * 360);
          }}
        >
        <Box size={256} className="text-purple-600 animate-float" />
{/* <Cube3d size={256} className="text-purple-600 animate-float" /> */}
        </div>
        
        {/* Interactive controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
            >
              <Heart 
                className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
              />
            </button>
            <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all">
              <Share2 className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full flex items-center gap-2 hover:bg-purple-700 transition-all">
            <Download className="w-4 h-4" />
            Collect Krum
          </button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-2 flex items-center gap-6 shadow-lg">
        <div className="text-center">
          <p className="text-sm text-gray-600">Collectors</p>
          <p className="font-semibold text-purple-600">{modelStats.collectors}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Likes</p>
          <p className="font-semibold text-purple-600">{modelStats.likes}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Shares</p>
          <p className="font-semibold text-purple-600">{modelStats.shares}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Animated mesh gradient background */}
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
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 py-1 rounded-full bg-purple-100 text-purple-600 font-medium"
          >
            Beta Access Available
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Content Container */}
          <div className="space-y-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
                Drop & Collect
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  AR Krums
                </span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Experience a new dimension of social interaction. Create and collect unique AR models called "krums" in the real world, share your creativity, and build your digital collection.
              </p>
            </motion.div>
            
            <div className="flex items-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300"
              >
                Start Collecting
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-purple-600 font-medium rounded-full shadow-lg hover:shadow-xl transition duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>

          {/* AR Model Viewer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <ARModelViewer />
          </motion.div>
        </div>
      </section>

      {/* Rest of the sections remain the same... */}
    </div>
  );
};

export default App; 