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

## 🚀 Features

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

- Node.js (v18 or higher)
- npm or yarn

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

- **Vercel**: Recommended for easy deployment with GitHub integration
- **Netlify**: Great for automatic deployments from Git
- **GitHub Pages**: Simple hosting for static sites
- **AWS S3/CloudFront**: For scalable, production deployments

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

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

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