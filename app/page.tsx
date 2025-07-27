// page.tsx
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Car,
  Trophy,
  Coins,
  Zap,
  Star,
  Play,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// SEO Metadata
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
  authors: [{ name: "Beedo Games" }],
  creator: "Beedo Games",
  publisher: "Beedo Games",
  category: "Games",
  classification: "Games",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Eggy Car ",
    title: "Eggy Car  - Play Free Online Physics Driving Game",
    description:
      "Drive as far as possible without dropping your egg! Fun physics-based driving game with coin collection, car unlocks, and challenging terrain. Play free now!",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Eggy Car  - Physics Driving Game",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your-twitter-handle", // Replace with your Twitter handle
    creator: "@your-twitter-handle",
    title: "Eggy Car  - Play Free Online Physics Driving Game",
    description:
      "Drive as far as possible without dropping your egg! Fun physics-based driving game. Play free now!",
    images: ["/twitter-image.jpg"], // You'll need to add this image
  },
  alternates: {
    canonical: "https://your-domain.com", // Replace with your actual domain
  },
  other: {
    "theme-color": "#ea580c", // Orange theme color
    "color-scheme": "light",
    "format-detection": "telephone=no",
  },
};

export default function GamePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            name: "Eggy Car ",
            description:
              "A fun physics-based driving game where players drive as far as possible without dropping their egg. Features coin collection, car unlocks, and challenging terrain.",
            url: "https://your-domain.com",
            image: "https://your-domain.com/og-image.jpg",
            genre: ["Driving", "Physics", "Arcade"],
            gamePlatform: ["Web Browser", "HTML5"],
            operatingSystem: "Any",
            applicationCategory: "Game",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            publisher: {
              "@type": "Organization",
              name: "Beedo Games",
              url: "https://beedogames.com",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              ratingCount: "1250",
              bestRating: "5",
              worstRating: "1",
            },
            gameItem: [
              {
                "@type": "Thing",
                name: "Cars",
                description:
                  "Unlockable vehicles with different handling characteristics",
              },
              {
                "@type": "Thing",
                name: "Coins",
                description: "Collectible currency to unlock new cars",
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200"
            >
              Play Free Online
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6  text-orange-600">
              Play Eggy Car
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Drive as far as possible without dropping your egg! Balance
              carefully while navigating hills, ramps, and tricky terrain in
              this fun physics-based driving game.
            </p>

            {/* Device Compatibility */}
            <div className="flex items-center justify-center space-x-6 mb-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Monitor className="h-4 w-4" />
                <span>Desktop</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tablet className="h-4 w-4" />
                <span>Tablet</span>
              </div>
              <div className="flex items-center space-x-2">
                <Smartphone className="h-4 w-4" />
                <span>Mobile</span>
              </div>
            </div>
          </section>

          {/* Game Container */}
          <section id="game" className="mb-16">
            <Card className="bg-white/60 backdrop-blur-sm border-2 border-orange-200 shadow-2xl">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Play className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-2xl text-gray-800">
                    Ready to Play?
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  Rotate your device to play like a pro
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Game Embed Container - Replace with your HTML embed */}
                <div className="aspect-video  rounded-lg">
                  <iframe
                    className="w-full h-full rounded-sm overflow-hidden"
                    title="Eggy Car Unblocked - Game Iframe"
                    id="game-iframe"
                    src="https://eggycarofficial.com/game/d18030e3-35a6-4846-a4a5-ca65e5e0aa1e/index.html?game_id=9f1b16bc-cacf-4309-8d46-2ff2d6671e12&amp;game_version_id=d18030e3-35a6-4846-a4a5-ca65e5e0aa1e&amp;referrer="
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features Section */}
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
                    Drive as far as you can without cracking your egg. Start
                    with 200 meters, then aim for 500+ meters!
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

          {/* Cars Section */}
          <section id="cars" className="mb-16">
            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                  <h2>Unlock Amazing Cars</h2>
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Each vehicle offers different handling and stability. Find
                  your perfect match!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">
                      Fast & Sleek Cars
                    </h4>
                    <p className="text-gray-600">
                      Cover ground quickly but require expert balancing to keep
                      your egg safe. Perfect for skilled drivers!
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Car className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">
                      Heavy & Stable Cars
                    </h4>
                    <p className="text-gray-600">
                      Slower but provide superior stability. Ideal for cautious
                      drivers who prioritize egg safety.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* World Record Section */}
          <section className="mb-16">
            <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">
                  World Record Challenge
                </h3>
                <p className="text-6xl font-bold text-orange-600 mb-4">
                  2,662m
                </p>
                <p className="text-xl text-gray-600 mb-6">
                  Think you can beat the current world record? Master the
                  slopes, balance your egg, and push your skills to the limit!
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Challenge the Record
                </Button>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* About Section */}
          <section id="about" className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              About the Game
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-600 leading-relaxed mb-6">
                Eggy Car can stay free thanks to the ads that support ongoing
                development. Ads are minimal, unobtrusive, and ensure the game
                remains accessible to everyone. Enjoy unlimited playtime without
                interruptions or hidden fees!
              </p>
              <p className="text-gray-600 leading-relaxed">
                This innovative game is dedicated to creating fun, accessible,
                and addictively playable web games. Driven by creativity and
                player enjoyment, the game is continuously updated to deliver
                the best gaming experience.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
