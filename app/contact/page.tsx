import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  CONTACT_EMAIL,
  SITE_NAME,
  WEBSITE_URL,
  XHANDLE,
} from "@/data/contants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact us - Contact us if you got any suggestions",
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

  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    siteName: SITE_NAME,
    title: "Contact us Eggy Car - Learn About Our Physics Driving Game",
    description:
      "Discover the story behind Eggy Car, a fun physics-based driving game created to bring joy and challenge to players worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact us - Physics Driving Game",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: XHANDLE,
    title: "About Eggy Car - Learn About Our Physics Driving Game",
    description:
      "Discover the story behind Eggy Car, a fun physics-based driving game.",
    images: ["/twitter-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-orange-600">Contact</span>
        </div>
        <section>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent leading-[140%]">
              Contact Us
            </h1>
            <p className=" text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about Eggy Car? Need help with the game or want to
              share feedback? We&apos;d love to hear from you! Fill out the form
              below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-center"></div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              You can also reach us at{" "}
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {CONTACT_EMAIL}
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
