import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { LucideGithub } from 'lucide-react';
import './App.css';

// Import types
import { CelestialBodyData } from './types/solarSystem';

function App() {
  // App state
  const [view, setView] = useState<'system' | 'detail' | 'quiz'>('system');
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const [showOrbits, setShowOrbits] = useState(true);
  const [isNightMode, setIsNightMode] = useState(true); // Default to night mode for better visuals
  const [isRealisticScale, setIsRealisticScale] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBody, setSelectedBody] = useState<CelestialBodyData | null>(null);
  const [simulationSpeed, setSimulationSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  
  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle selecting a celestial body
  const handleSelectBody = (body: CelestialBodyData) => {
    setSelectedBody(body);
    setSelectedPlanet(body.id || body.name);
    console.log('Selected body:', body.name);
  };
  
  // Handle simulation speed change
  const handleSpeedChange = (speed: number) => {
    setSimulationSpeed(speed);
    console.log('Simulation speed changed to:', speed);
  };

  // Handle pause/play simulation
  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className={`app-container min-h-screen ${isNightMode ? 'bg-black' : 'bg-indigo-950'}`}>
      <Toaster position="top-center" />
      
      {isLoading ? (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
          <div className="w-24 h-24 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-6"></div>
          <h1 className="text-2xl font-bold text-white mb-2">Loading Solar System</h1>
          <p className="text-gray-300">Preparing for your cosmic journey...</p>
        </div>
      ) : (
        <>
          <nav className={`w-full h-16 ${isNightMode ? 'bg-gray-800 text-white' : 'bg-indigo-900 text-white'} px-4 flex items-center justify-between shadow-lg z-10`}>
            <div className="flex items-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mr-2 text-yellow-400"
              >
                <span className="text-2xl">☀️</span>
              </motion.div>
              <h1 className="text-xl font-bold">Solar System Explorer</h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsNightMode(!isNightMode)}
                className="p-2 rounded-full hover:bg-indigo-800 transition-colors"
              >
                {isNightMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </nav>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key="system"
              className="w-full h-[calc(100vh-64px)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-4xl font-bold text-white mb-4">Solar System Explorer</h1>
                <p className="text-xl text-gray-300 mb-8">Explore our cosmic neighborhood</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'].map((planet) => (
                    <motion.div
                      key={planet}
                      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="h-40 bg-indigo-900 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-full bg-${planet.toLowerCase()}`}></div>
                      </div>
                      <div className="p-4">
                        <h2 className="text-xl font-bold text-white">{planet}</h2>
                        <p className="text-gray-400 mt-2">Click to explore {planet}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-4 left-4 z-10 text-gray-400 flex items-center gap-2"
              >
                <LucideGithub size={16} />
                <span className="text-sm">
                  Solar System Explorer v1.0
                </span>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;