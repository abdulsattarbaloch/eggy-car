// how-to-use/page.tsx
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Car,
  Play,
  Gamepad2,
  Target,
  Trophy,
  Settings,
  Zap,
  Star,
  ArrowRight,
  Coins,
  RotateCcw,
  Volume2,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// SEO Metadata
export const metadata: Metadata = {
  title: "How to Play Eggy Car - Complete Guide and Tips",
  description:
    "Learn how to play Eggy Car with our comprehensive guide. Master the controls, discover tips and tricks, and become a pro at this physics driving game.",
  keywords: [
    "how to play eggy car",
    "eggy car guide",
    "eggy car controls",
    "eggy car tips",
    "physics driving game guide",
    "eggy car tutorial",
    "game instructions",
    "beedo games guide",
  ],
  authors: [{ name: "Beedo Games" }],
  creator: "Beedo Games",
  publisher: "Beedo Games",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com/how-to-use",
    siteName: "Eggy Car",
    title: "How to Play Eggy Car - Complete Guide and Tips",
    description:
      "Master Eggy Car with our complete gameplay guide, tips, and tricks.",
  },
  alternates: {
    canonical: "https://your-domain.com/how-to-use",
  },
};

export default function HowToUsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-orange-600">How to Play</span>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-green-100 text-green-800 hover:bg-green-200"
          >
            Game Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            How to Play Eggy Car
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Master the art of driving with an egg! Learn the controls, discover
            strategies, and become a pro at this challenging physics-based
            driving game.
          </p>
        </section>

        {/* Quick Start */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Quick Start Guide
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Get started in just a few simple steps and begin your
                egg-carrying adventure!
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Click to Start
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Press the play button to begin your journey. The game loads
                    instantly in your browser!
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-lg font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Learn Controls
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Use arrow keys or WASD to drive. Keep your egg safe while
                    navigating challenging terrain!
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-lg font-bold">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Drive Carefully
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Balance speed with caution. Go too fast and your egg breaks
                    - too slow and you won&apos;t make it!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Game Controls */}
        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-green-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Game Controls
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                Master these simple but essential controls to become an Eggy Car
                champion:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Keyboard Controls
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded flex items-center justify-center text-sm font-bold">
                        ↑
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          Up Arrow / W
                        </p>
                        <p className="text-gray-600 text-sm">
                          Accelerate forward
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-red-500 text-white rounded flex items-center justify-center text-sm font-bold">
                        ↓
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          Down Arrow / S
                        </p>
                        <p className="text-gray-600 text-sm">Brake / Reverse</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 text-white rounded flex items-center justify-center text-sm font-bold">
                        ←
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          Left Arrow / A
                        </p>
                        <p className="text-gray-600 text-sm">Lean backward</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded flex items-center justify-center text-sm font-bold">
                        →
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          Right Arrow / D
                        </p>
                        <p className="text-gray-600 text-sm">Lean forward</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Additional Controls
                  </h4>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded flex items-center justify-center">
                        <RotateCcw className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">R Key</p>
                        <p className="text-gray-600 text-sm">Restart level</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-indigo-500 text-white rounded flex items-center justify-center">
                        <Volume2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">M Key</p>
                        <p className="text-gray-600 text-sm">
                          Mute/Unmute sound
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-gray-500 text-white rounded flex items-center justify-center text-sm font-bold">
                        ⎵
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Spacebar</p>
                        <p className="text-gray-600 text-sm">Pause game</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Game Objective */}
        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-green-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Game Objective
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                Your mission is simple but challenging: transport a fragile egg
                safely across treacherous terrain!
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Primary Goals
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Keep the egg from breaking during the journey</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>
                        Navigate through challenging hills and obstacles
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Reach the finish line in one piece</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                      <span>Achieve the highest distance possible</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Bonus Objectives
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start space-x-2">
                      <Coins className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Collect coins scattered throughout levels</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Complete levels without breaking the egg</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Zap className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Finish levels quickly for time bonuses</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Trophy className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-1" />
                      <span>Unlock new cars and achievements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tips and Tricks */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Pro Tips & Tricks
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Master these advanced techniques to become an Eggy Car champion:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    🚗 Driving Techniques
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>
                      • Use gentle acceleration on steep hills to maintain
                      control
                    </li>
                    <li>
                      • Lean backward when going uphill to prevent flipping
                    </li>
                    <li>• Lean forward when going downhill for stability</li>
                    <li>• Brake before sharp turns or sudden drops</li>
                    <li>• Practice smooth steering movements</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    🥚 Egg Protection
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Avoid sudden stops and rapid acceleration</li>
                    <li>
                      • Land softly after jumps by controlling your descent
                    </li>
                    <li>• Don&apos;t hit obstacles at high speeds</li>
                    <li>• Keep the car level when possible</li>
                    <li>• Watch for fragile areas in your path</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    ⭐ Advanced Strategies
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Learn the physics - momentum is your friend</li>
                    <li>• Use hills to gain speed naturally</li>
                    <li>• Time your movements for maximum efficiency</li>
                    <li>• Practice levels to find the optimal path</li>
                    <li>• Don&apos;t rush - patience often wins</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    🏆 Achievement Hunting
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Replay levels to improve your best times</li>
                    <li>• Collect all coins in each level</li>
                    <li>• Try different cars for varied gameplay</li>
                    <li>• Complete daily challenges</li>
                    <li>• Share your best scores with friends</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Game Features */}
        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-green-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Game Features
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Discover all the exciting features that make Eggy Car an
                addictive physics puzzle game:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Car className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Multiple Vehicles
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Unlock different cars, each with unique handling
                    characteristics
                  </p>
                </div>

                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <Trophy className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Achievements
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Earn rewards and unlock new content by completing challenges
                  </p>
                </div>

                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <Star className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Physics Engine
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Realistic physics make every drive unique and challenging
                  </p>
                </div>

                <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <Coins className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Collectibles
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Gather coins and power-ups scattered throughout each level
                  </p>
                </div>

                <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                  <Volume2 className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Sound Effects
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Immersive audio that enhances the driving experience
                  </p>
                </div>

                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                  <Settings className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Customization
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Adjust settings and controls to match your playing style
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-green-100">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">
                Common Mistakes to Avoid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Learn from these common pitfalls that trip up new players:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Going Too Fast
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Speed is exciting, but it&apos;s the #1 cause of
                      egg-breaking. Take your time on tricky sections.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Ignoring Car Balance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Not using the lean controls leads to flips and crashes.
                      Balance is key to success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">!</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Panic Steering
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Jerky, panicked movements make things worse. Stay calm and
                      make smooth adjustments.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Getting Help */}
        <section className="text-center mb-12">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Need More Help?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Still having trouble mastering Eggy Car? Check out these
                additional resources or reach out to our community for tips and
                support.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/faqs"
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span>View FAQs</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <span>About the Game</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Happy driving, and remember - practice makes perfect! 🥚🚗
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Related Links */}
        <section className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            More Information
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-green-600 hover:text-green-700 underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-green-600 hover:text-green-700 underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/faqs"
              className="text-green-600 hover:text-green-700 underline"
            >
              Frequently Asked Questions
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
