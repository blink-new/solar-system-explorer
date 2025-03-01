# 🪐 Solar System Explorer

An interactive 3D visualization of our solar system built with React, Three.js, and TypeScript.

![Solar System Explorer](https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)

## ✨ Features

- **Interactive 3D Model**: Navigate through a visually stunning solar system with realistic planet movements and orbits
- **Planet Information**: View detailed facts about each celestial body including diameter, mass, gravity, and more
- **Customizable View**: Toggle between night/light mode, show/hide orbital paths, adjust simulation speed, and pause/resume the simulation
- **Realistic Scale Option**: Switch between artistic and realistic scale representations of the solar system
- **Responsive Design**: Fully optimized for both desktop and mobile devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/solar-system-explorer.git
cd solar-system-explorer

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check for code quality issues
- `npm run preview` - Preview the production build locally

## 🧩 Project Structure

```
solar-system-explorer/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # React components
│   ├── lib/            # Utility functions and helpers
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── .eslintrc.js        # ESLint configuration
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🛠️ Tech Stack

- **React 19** with TypeScript for building the UI
- **Three.js** with React Three Fiber & Drei for 3D rendering
- **Tailwind CSS** for responsive styling
- **Framer Motion** for smooth animations and transitions
- **Vite** for fast development and optimized builds

## 🧪 Data Model

The application uses a structured data model for celestial bodies:

```typescript
interface CelestialBodyData {
  id: string;
  name: string;
  type: 'star' | 'planet' | 'dwarf-planet' | 'moon' | 'asteroid' | 'comet';
  diameter: number; // in km
  mass?: number; // in kg
  gravity?: number; // in m/s²
  distanceFromSun?: number; // in million km
  orbitalPeriod?: number; // in Earth days
  rotationPeriod?: number; // in Earth hours
  temperature?: number; // in °C
  atmosphere?: string[];
  moons?: number;
  rings?: boolean;
  color: string;
  texture?: string;
  description: string;
  funFacts?: string[];
  position: number; // position in the solar system
}
```

## 🎮 User Guide

### Navigation
- **Orbit Camera**: Click and drag to rotate the view
- **Zoom**: Use the mouse wheel or pinch gesture to zoom in/out
- **Select Planet**: Click on any planet to view detailed information
- **Return to Overview**: Click the "Back" button to return to the solar system view

### Controls
- **Night/Light Mode**: Toggle between dark and light backgrounds
- **Show/Hide Orbits**: Toggle the visibility of planetary orbits
- **Simulation Speed**: Adjust how fast the planets orbit around the sun
- **Pause/Resume**: Temporarily pause the simulation
- **Scale Toggle**: Switch between artistic and realistic scale representations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Planet textures courtesy of NASA
- 3D models and astronomical data from [Solar System Scope](https://www.solarsystemscope.com/)
- Astronomical calculations based on formulas from [NASA JPL](https://ssd.jpl.nasa.gov/)
- Icons from [Lucide React](https://lucide.dev/)