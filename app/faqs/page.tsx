import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SITE_NAME, WEBSITE_URL, XHANDLE } from "@/data/contants";
import { HelpCircle, Shield, Zap } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

// SEO Metadata
export const metadata: Metadata = {
  title: "Eggy Car FAQs - Frequently Asked Questions & Game Help",
  description:
    "Find answers to common questions about Eggy Car. Learn about gameplay, controls, car unlocks, troubleshooting, and more in our comprehensive FAQ section.",
  keywords: [
    "eggy car faqs",
    "eggy car help",
    "eggy car questions",
    "how to play eggy car",
    "eggy car controls",
    "eggy car cars unlock",
    "eggy car troubleshooting",
    "eggy car tips",
    "eggy car guide",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    siteName: SITE_NAME,
    title: "Eggy Car FAQs - Frequently Asked Questions & Game Help",
    description:
      "Find answers to common questions about Eggy Car gameplay, controls, features, and troubleshooting.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eggy Car FAQs - Game Help and Questions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: XHANDLE,
    title: "Eggy Car FAQs - Frequently Asked Questions & Game Help",
    description:
      "Find answers to common questions about Eggy Car gameplay and features.",
    images: ["/twitter-image.jpg"],
  },
};

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-orange-600">FAQs</span>
        </div>

        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
            FAQs
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about Eggy Car gameplay,
            features, and troubleshooting. Can&apos;t find what you&apos;re
            looking for? Let us know!
          </p>
        </section>

        {/* General Gameplay FAQs */}
        <section className="mb-16">
          <div className="space-y-6">
            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>How do I play Eggy Car?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Use the arrow keys or WASD to control your car. Your goal is
                  to drive as far as possible without letting the egg fall off
                  your car. Balance speed with caution - going too fast on bumpy
                  terrain will cause the egg to bounce off!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>What happens when I drop the egg?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  When the egg falls off your car or breaks, the game ends and
                  you&apos;ll see your final distance. Don&apos;t worry - you
                  can immediately start a new run and try to beat your previous
                  record!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>Can I play on mobile devices?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! Eggy Car works great on mobile devices, tablets, and
                  computers. On mobile, use the on-screen controls or tilt your
                  device if tilt controls are enabled. For the best experience,
                  try playing in landscape mode.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>What&apos;s the Freeze Power-Up?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The Freeze Power-Up temporarily freezes your egg in place,
                  making it immune to physics for a few seconds. This is perfect
                  for navigating particularly tricky terrain or when you need to
                  make a risky maneuver. Look for the blue freeze icon on the
                  road!
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>How do I unlock new cars?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Collect coins during your runs by driving over them. Each car
                  has a different coin cost, and you can see how many coins you
                  need in the car selection menu. Some cars are unlocked by
                  reaching certain distance milestones as well!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>Do different cars have different abilities?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! Each car has unique characteristics. Some are faster but
                  less stable, others are slower but provide better egg
                  stability. Heavy cars handle bumps better, while lighter cars
                  can achieve higher speeds. Experiment to find your favorite!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>Can I lose my unlocked cars?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No, once you unlock a car, it&apos;s yours permanently! Your
                  progress is saved locally in your browser. However, clearing
                  your browser data will reset your progress, so be careful when
                  clearing cookies and local storage.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>The game won&apos;t load. What should I do?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Try refreshing the page first. If that doesn&apos;t work,
                  clear your browser cache and cookies, then reload the page.
                  Make sure you have a stable internet connection and that
                  JavaScript is enabled in your browser. The game works best on
                  modern browsers like Chrome, Firefox, Safari, and Edge.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>The game is running slowly or lagging</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Close other browser tabs and applications to free up system
                  resources. Try playing in a different browser or restart your
                  browser completely. On mobile devices, make sure you have
                  enough available storage space and close background apps.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>Can I play offline?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Once the game has loaded completely, you can play offline for
                  that session. However, you&apos;ll need an internet connection
                  to load the game initially and to save your progress. We
                  recommend staying connected for the best experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>Which browsers support Eggy Car?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Eggy Car works on all modern web browsers including Chrome,
                  Firefox, Safari, Edge, and mobile browsers. We recommend using
                  the latest version of your browser for optimal performance and
                  compatibility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>What&apos;s the current world record?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The current world record is 2,662 meters! This incredible
                  distance was achieved through perfect balance, strategic speed
                  control, and a bit of luck with the terrain generation. Think
                  you can beat it?
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>How is distance measured?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Distance is measured in meters from your starting point. The
                  counter increases as you move forward, and your final distance
                  is recorded when the egg falls off or breaks. Moving backward
                  doesn&apos;t decrease your maximum distance reached.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>Do coins affect my score?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Coins don&apos;t directly affect your distance score, but
                  they&apos;re essential for unlocking new cars. Some cars might
                  help you achieve better distances, so collecting coins is
                  still important for improving your overall performance!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  <span>How can I improve my distance?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Practice smooth acceleration and braking, learn to read the
                  terrain ahead, and find the right balance between speed and
                  caution. Experiment with different cars to find one that
                  matches your driving style. Remember: consistency beats speed!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Additional Help */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Still Need Help?
              </CardTitle>
              <CardDescription className="text-gray-600">
                Can&apos;t find the answer you&apos;re looking for? We&apos;re
                here to help!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/how-to-use"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg font-medium transition-colors"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  View Game Guide
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 border-2 border-orange-200 hover:bg-orange-50 rounded-lg font-medium transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
