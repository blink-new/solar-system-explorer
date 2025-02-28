export interface CelestialBodyData {
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
  position: number; // position in the solar system (1 = Mercury, 2 = Venus, etc.)
}