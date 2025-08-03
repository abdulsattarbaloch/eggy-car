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
const seoTitle = "Contact us - EggyCar";
const seoDescription =
  "Get in touch with the Eggy Car team. Use our Contact Us page for support, feedback, or inquiries about Eggy Car Unblocked and online gameplay.";
export const metadata: Metadata = {
  title: seoTitle,
  description: "",
  keywords: [
    "contact us eggy car",
    "eggy car story",
    "game development",
    "free online games",
    "game mission",
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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eggycar contact us",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: XHANDLE,
    title: seoTitle,
    description: seoDescription,
    images: ["/twitter-image.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent leading-[140%]">
              Contact Us
            </h1>
            <p className=" text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about EggyCar? Need help with the game or want to
              share feedback? We&apos;d love to hear from you!
            </p>
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
