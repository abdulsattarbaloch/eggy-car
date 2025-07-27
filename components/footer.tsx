import { Car } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
            <Car className="h-5 w-5 text-white" />
          </div>
          <h4 className="text-xl font-bold">Eggy Car </h4>
        </div>
        <p className="text-gray-400 mb-4">
          Drive far, collect coins, and don&apos;t drop the egg!
        </p>
        <p className="text-sm text-gray-500">
          Remember to share your high-score and challenge your friends!
        </p>
      </div>
    </footer>
  );
}
