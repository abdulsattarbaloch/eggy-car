import { Car } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <Car className="h-5 w-5 text-white" />
              </div>
              <h4 className="text-xl font-bold">Eggy Car</h4>
            </div>
            <p className="text-gray-400 text-sm max-w-[250px]">
              Drive far, collect coins, and don&apos;t drop the egg!
            </p>
          </div>

          {/* Website Menu Column */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Menu</h5>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/faqs"
                className="text-gray-400 hover:text-white transition-colors"
              >
                FAQs
              </Link>
              <Link
                href="/how-to-play"
                className="text-gray-400 hover:text-white transition-colors"
              >
                How to Play
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal Pages Column */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Legal</h5>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <Separator className="max-w-6xl mx-auto w-full opacity-10 mt-10" />
      <div className="pt-6">
        <p className="text-sm text-gray-500 text-center">
          Remember to share your high-score and challenge your friends!
        </p>
      </div>
    </footer>
  );
}
