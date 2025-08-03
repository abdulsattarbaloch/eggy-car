import EggyCarArticle from "@/components/article";
import Footer from "@/components/footer";
import GameIframe from "@/components/game-iframe";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_NAME, WEBSITE_URL, XHANDLE } from "@/data/contants";
import { Play } from "lucide-react";
import { Metadata } from "next";

const seoTitle = "Eggy Car Unblocked - Play Car Game Online Free";
const seoDescription =
  "Eggy Car Unblocked is your go-to game for fun and skill! Play instantly online without ads, installs, or restrictions.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "Eggy car game",
    "Free online games",
    "Physics driving game",
    "Car games",
    "EggyCar",
    "Eggy car",
    "Eggy Car Unblocked",
    "EggyCar Unblocked",
    "EggyCar play",
    "Eggy Car play",
    "Eggy Car play online",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    siteName: SITE_NAME,
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eggy Car",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: XHANDLE,
    title: seoTitle,
    description: seoDescription,
    images: ["/twitter-image.png"],
  },
};

export default function GamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold mb-4  text-orange-600">
            Eggy Car Unblocked
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Play Car Game Online Free
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
            <CardContent className="p-2 md:p-4">
              <div className="aspect-video  rounded-lg">
                <GameIframe />
              </div>
            </CardContent>
          </Card>
        </section>

        <EggyCarArticle />
      </main>
      <Footer />
    </div>
  );
}
