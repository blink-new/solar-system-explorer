<<<<<<< Updated upstream
# Solar System Explorer 🪐

An interactive 3D visualization of our solar system built with React, Three.js, and TypeScript.

![Solar System Explorer](https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)

<div align="center">

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-Latest-black?logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-purple?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Demo](#-demo)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Development](#-development)
- [Project Structure](#-project-structure)
- [Key Components](#-key-components)
- [Deployment](#-deployment)
- [Performance Optimization](#-performance-optimization)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)

## 🌌 Overview

Solar System Explorer is an educational and interactive web application that allows users to explore our solar system in a visually stunning 3D environment. The application provides detailed information about each planet, their moons, and other celestial bodies, making astronomy accessible and engaging for users of all ages.
=======
# 🪐 Solar System Explorer

An interactive web application that allows users to explore and learn about our solar system in a visually engaging way.
>>>>>>> Stashed changes

![Solar System Explorer](https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)

<<<<<<< Updated upstream
- **Interactive 3D Model**: Navigate through a visually stunning solar system
- **Planet Information**: View key facts about each celestial body
- **Customizable View Options**:
  - Toggle between night and light mode
  - Show/hide orbital paths
  - Adjust simulation speed
  - Pause/play the simulation
  - Switch between realistic and simplified scale
- **Responsive Design**: Works on desktop and mobile devices
- **Educational Content**: Accurate astronomical data and educational information

## 🎮 Demo

[Live Demo](https://solar-system-explorer.example.com)

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 with TypeScript
- **3D Rendering**: Three.js with React Three Fiber & Drei
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## 🚦 Getting Started

### 📋 Prerequisites
=======
## ✨ Features

- **Interactive 3D Solar System** - Explore planets and celestial bodies in a realistic 3D environment
- **Detailed Information** - Learn about each planet's characteristics, atmosphere, and interesting facts
- **Visual Customization** - Toggle between night/light modes for different viewing experiences
- **Simulation Controls** - Adjust simulation speed and pause/play functionality
- **Responsive Design** - Works seamlessly across desktop and mobile devices

## 🚀 Getting Started

### Prerequisites
>>>>>>> Stashed changes

- Node.js (v18 or higher)
- npm or yarn

<<<<<<< Updated upstream
### 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/solar-system-explorer.git
   cd solar-system-explorer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### 💻 Development

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

3. Build for production:
   ```bash
   npm run build
   # or
   yarn build
   ```

4. Preview the production build:
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 🏗️ Project Structure

```
solar-system-explorer/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images and other assets
│   ├── components/       # Reusable UI components
│   │   ├── celestial/    # Planet and space-related components
│   │   ├── controls/     # User interface controls
│   │   ├── layout/       # Layout components
│   │   └── ui/           # Generic UI components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
└── package.json          # Project dependencies and scripts
```

## 🧩 Key Components

- **CelestialBody**: Renders planets, moons, and other celestial objects
- **SolarSystem**: Main 3D scene containing all celestial bodies
- **PlanetDetail**: Detailed view of selected planets with information
- **ControlPanel**: UI for adjusting simulation parameters
- **OrbitControls**: Camera controls for navigating the 3D space
- **InfoPanel**: Displays educational content about selected objects

## 🚀 Deployment

Build the application for production:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to any static hosting service.

### Deployment Options
=======
### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/solar-system-explorer.git

# Navigate to the project directory
cd solar-system-explorer

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🛠️ Built With

- **React 19** - Latest React version with improved rendering and hooks
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Lightning-fast build tool with HMR (Hot Module Replacement)
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Advanced animations and transitions
- **React Three Fiber** - 3D graphics capabilities with Three.js
- **Drei** - Useful helpers for React Three Fiber
>>>>>>> Stashed changes

- **Vercel**: Recommended for easy deployment with GitHub integration
- **Netlify**: Great for automatic deployments from Git
- **GitHub Pages**: Simple hosting for static sites
- **AWS S3/CloudFront**: For scalable, production deployments

<<<<<<< Updated upstream
## ⚡ Performance Optimization

The application implements several performance optimizations:

- **Code Splitting**: Lazy loading of components to reduce initial bundle size
- **Asset Optimization**: Compressed textures and optimized 3D models
- **Memoization**: Strategic use of React.memo and useMemo to prevent unnecessary re-renders
- **WebGL Optimizations**: Level of detail adjustments based on camera distance

## 🗺️ Roadmap

- [ ] Add more celestial bodies (asteroids, comets)
- [ ] Implement VR support
- [ ] Add time-travel feature to view planetary positions at different dates
- [ ] Create guided tours of interesting astronomical phenomena
- [ ] Support for multiple languages

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

=======
```
/
├── public/             # Static assets
├── src/                # Source code
│   ├── assets/         # Images, fonts, etc.
│   ├── lib/            # Utility functions and helpers
│   ├── types/          # TypeScript type definitions
│   │   └── solarSystem.ts  # Solar system data types
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML entry point
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── tailwind.config.cjs # Tailwind CSS configuration
```

## 🌟 Key Features Explained

### Interactive Solar System Visualization

The application provides a realistic 3D representation of our solar system, allowing users to:
- View planets in their orbits around the sun
- Toggle orbit visibility
- Switch between realistic and simplified scale modes

### Detailed Celestial Body Information

Each celestial body in the solar system comes with:
- Physical characteristics (diameter, mass, gravity)
- Orbital information (distance from sun, orbital period)
- Atmospheric composition
- Temperature data
- Interesting facts and descriptions

### Customization Options

Users can personalize their experience with:
- Night/Light mode toggle
- Simulation speed controls
- Realistic/Simplified scale toggle

## 🧩 Data Model

The application uses a comprehensive data model for celestial bodies:

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

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🌐 Browser Support

This project supports all modern browsers, including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

>>>>>>> Stashed changes
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

<<<<<<< Updated upstream
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Three.js](https://threejs.org/) for 3D rendering capabilities
- [NASA](https://www.nasa.gov/) for planetary data and inspiration
- [Unsplash](https://unsplash.com/) for space imagery
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for React integration with Three.js
- All the open-source libraries that made this project possible

---

<div align="center">
  <sub>Built with ❤️ by space enthusiasts</sub>
</div>
=======
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- NASA for planetary data and inspiration
- [Unsplash](https://unsplash.com) for space imagery
- Three.js community for 3D rendering capabilities
- React and Vite teams for the excellent development experience
>>>>>>> Stashed changes
