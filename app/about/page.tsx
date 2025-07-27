// about/page.tsx
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Gamepad2,
  Heart,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

// SEO Metadata
export const metadata: Metadata = {
  title: "About Eggy Car - Learn About Our Physics Driving Game",
  description:
    "Discover the story behind Eggy Car, a fun physics-based driving game. Learn about our mission to create engaging, accessible browser games for players worldwide.",
  keywords: [
    "about eggy car",
    "eggy car story",
    "physics driving game",
    "game development",
    "browser games",
    "free online games",
    "game mission",
    "beedo games",
  ],
  authors: [{ name: "Beedo Games" }],
  creator: "Beedo Games",
  publisher: "Beedo Games",
  category: "Games",
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
    url: "https://your-domain.com/about",
    siteName: "Eggy Car",
    title: "About Eggy Car - Learn About Our Physics Driving Game",
    description:
      "Discover the story behind Eggy Car, a fun physics-based driving game created to bring joy and challenge to players worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Eggy Car - Physics Driving Game",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@your-twitter-handle",
    creator: "@your-twitter-handle",
    title: "About Eggy Car - Learn About Our Physics Driving Game",
    description:
      "Discover the story behind Eggy Car, a fun physics-based driving game.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://your-domain.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-orange-600">About</span>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200"
          >
            Our Story
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
            About Eggy Car
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for physics-based gameplay and accessible
            gaming, Eggy Car combines simple controls with challenging mechanics
            to create an addictive driving experience.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We believe that great games should be accessible to everyone,
                everywhere. Eggy Car was created with the vision of delivering
                premium gaming experiences directly through your web browser,
                without downloads, installations, or barriers.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Accessibility
                  </h4>
                  <p className="text-sm text-gray-600">
                    Free to play for everyone, anywhere
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Fun First
                  </h4>
                  <p className="text-sm text-gray-600">
                    Gameplay that brings joy and challenge
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Innovation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Creative mechanics and fresh ideas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Game Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              The Game That Started It All
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Eggy Car represents everything we love about physics-based gaming
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow border border-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-3">
                  <Gamepad2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">
                  Simple Yet Challenging
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Easy to learn controls hide a deeply challenging physics
                  puzzle. Balance speed with precision as you navigate
                  increasingly difficult terrain while protecting your precious
                  cargo.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow border border-orange-100">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-3">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Endless Replayability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every run is unique with procedurally varied terrain and coin
                  placements. Unlock new cars, chase distance records, and
                  discover new strategies with every attempt.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Development Philosophy */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                Development Philosophy
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                The principles that guide every decision we make
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Player-First Design
                    </h4>
                    <p className="text-gray-600">
                      Every feature is evaluated through the lens of player
                      enjoyment. If it doesn&apos;t make the game more fun, it
                      doesn&apos;t make it into the game.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Quality Over Quantity
                    </h4>
                    <p className="text-gray-600">
                      We&apos;d rather perfect one amazing game than create
                      dozens of mediocre ones. Every element is carefully
                      crafted and thoroughly tested.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Community Feedback
                    </h4>
                    <p className="text-gray-600">
                      Our players are our most valuable asset. We listen to
                      feedback, implement suggestions, and continuously improve
                      based on real player experiences.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="py-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  By the Numbers
                </h3>
                <p className="text-gray-600">
                  The impact of Eggy Car in the gaming community
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    1M+
                  </div>
                  <div className="text-gray-600">Players Worldwide</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    50M+
                  </div>
                  <div className="text-gray-600">Games Played</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    2,662m
                  </div>
                  <div className="text-gray-600">Current World Record</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    4.7★
                  </div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Future Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              The Road Ahead
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Eggy Car is just the beginning. We&apos;re constantly working on
              updates, improvements, and new features based on your feedback.
              Our commitment is to keep the game fresh, challenging, and fun for
              years to come.
            </p>
          </div>

          <div className="text-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Play Eggy Car Now
              </Button>
            </Link>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Have feedback, suggestions, or just want to share your high score?
            We&apos;d love to hear from you! Your input helps us make Eggy Car
            even better.
          </p>
          <p className="text-gray-600">
            Follow our development journey and connect with the community on
            social media.
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
