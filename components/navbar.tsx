import { Car } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
            <Car className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Eggy Car
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#game"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            Play
          </a>
          <a
            href="#features"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#cars"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            Cars
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-orange-600 transition-colors"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
