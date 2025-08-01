import EggyCarArticle from "@/components/article";
import Footer from "@/components/footer";
import GameIframe from "@/components/game-iframe";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_NAME, WEBSITE_URL, XHANDLE } from "@/data/contants";
import { Coins, Play, Trophy, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eggy Car  - Play Free Online Physics Driving Game",
  description:
    "Play Eggy Car  for free! Drive as far as possible without dropping your egg in this fun physics-based driving game. Collect coins, unlock cars, and beat the world record of 2,662 meters.",
  keywords: [
    "eggy car",
    "eggy car ",
    "free online games",
    "physics driving game",
    " games",
    "car games",
    "balance games",
    "browser games",
    "html5 games",
    "school games",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    siteName: SITE_NAME,
    title: "Eggy Car  - Play Free Online Physics Driving Game",
    description:
      "Drive as far as possible without dropping your egg! Fun physics-based driving game with coin collection, car unlocks, and challenging terrain. Play free now!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eggy Car  - Physics Driving Game",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: XHANDLE,
    title: "Eggy Car  - Play Free Online Physics Driving Game",
    description:
      "Drive as far as possible without dropping your egg! Fun physics-based driving game. Play free now!",
    images: ["/twitter-image.jpg"],
  },
};

export default function GamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6  text-orange-600">
            Play Eggy Car
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Drive as far as possible without dropping your egg! Balance
            carefully while navigating hills, ramps, and tricky terrain in this
            fun physics-based driving game.
          </p>
        </section>

        <section id="game" className="mb-16">
          <Card className="bg-white/60 backdrop-blur-sm border-2 border-orange-200 shadow-2xl">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-2">
                <Play className="h-5 w-5 text-orange-600" />
                <CardTitle className="text-2xl text-gray-800">
                  Ready to Play?
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video  rounded-lg">
                <GameIframe />
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="features" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Game Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Master the art of smooth driving with these exciting features
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow border border-orange-100">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Distance Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Drive as far as you can without cracking your egg. Start with
                  200 meters, then aim for 500+ meters!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow border border-orange-100">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Coins className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Collect Coins</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Gather coins during your drive to unlock shiny new cars with
                  unique strengths and handling.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow border border-orange-100">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Freeze Power-Up</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Grab the Freeze Power-Up to safely freeze your egg in place
                  for a few seconds!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <EggyCarArticle />
      </main>
      <Footer />
    </div>
  );
}
