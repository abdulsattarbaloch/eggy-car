import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_NAME, WEBSITE_URL } from "@/data/contants";
import { Database, Eye, Lock, Shield } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

// SEO Metadata
export const metadata: Metadata = {
  title: "Eggy Car Privacy Policy - How We Protect Your Data",
  description:
    "Read Eggy Car's privacy policy to understand how we collect, use, and protect your personal information while you play our physics driving game.",
  keywords: [
    "eggy car privacy policy",
    "privacy policy",
    "data protection",
    "user privacy",
    "game privacy",
    "data collection",
    "cookies policy",
    "beedo games privacy",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    siteName: SITE_NAME,
    title: "Eggy Car Privacy Policy - How We Protect Your Data",
    description:
      "Learn about Eggy Car's commitment to protecting your privacy and data while playing our game.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-orange-600">Privacy Policy</span>
        </div>

        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Last updated: January 1, 2025
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            At Eggy Car, we are committed to protecting your privacy and
            ensuring transparency about how we collect, use, and safeguard your
            information.
          </p>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Information We Collect
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Automatically Collected Information
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Game performance data (scores, distances achieved, coins
                    collected)
                  </li>
                  <li>
                    • Device information (browser type, operating system, device
                    type)
                  </li>
                  <li>
                    • Usage analytics (gameplay duration, features used, crash
                    reports)
                  </li>
                  <li>• IP address and general location data</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Local Storage Data
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Game progress and achievements</li>
                  <li>• Unlocked cars and customization preferences</li>
                  <li>• Game settings and preferences</li>
                  <li>• High scores and personal records</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Information We Do NOT Collect
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Personal identifying information (name, email, phone
                    number)
                  </li>
                  <li>• Financial or payment information</li>
                  <li>• Social media accounts or contacts</li>
                  <li>• Camera, microphone, or location access</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  How We Use Your Information
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Game Functionality
                    </h4>
                    <p className="text-gray-600">
                      To provide core game features, save your progress, and
                      maintain your unlocked content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Performance Optimization
                    </h4>
                    <p className="text-gray-600">
                      To identify and fix bugs, improve game performance, and
                      optimize the user experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Analytics and Insights
                    </h4>
                    <p className="text-gray-600">
                      To understand how players interact with the game and make
                      data-driven improvements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Content Personalization
                    </h4>
                    <p className="text-gray-600">
                      To provide relevant advertisements and customize the
                      gaming experience.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Data Protection & Security
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures
                to protect your information against unauthorized access,
                alteration, disclosure, or destruction.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Technical Safeguards
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure servers and regular security updates</li>
                    <li>• Limited access to data on a need-to-know basis</li>
                    <li>• Regular security audits and monitoring</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Third-Party Services
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Analytics providers for game performance</li>
                    <li>• Advertising partners for relevant ads</li>
                    <li>• Content delivery networks for fast loading</li>
                    <li>• All partners follow strict privacy standards</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Your Rights and Choices
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                You have several rights regarding your personal information and
                how it&apos;s used:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Data Control
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>
                      • Clear your browser data to remove stored information
                    </li>
                    <li>• Disable cookies in your browser settings</li>
                    <li>• Opt out of personalized advertising</li>
                    <li>• Request information about data we collect</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Privacy Settings
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Use incognito/private browsing mode</li>
                    <li>• Enable &apos;Do Not Track&apos; in your browser</li>
                    <li>• Use ad blockers (may affect game functionality)</li>
                    <li>• Contact us for specific privacy concerns</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  Children&apos;s Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Eggy Car is designed to be family-friendly and safe for
                  players of all ages.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>
                    • We do not knowingly collect personal information from
                    children under 13
                  </li>
                  <li>• COPPA compliant data practices</li>
                  <li>• Parents can contact us with any concerns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">
                  International Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  We respect international privacy laws and regulations.
                </p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  <li>• GDPR compliant for EU users</li>
                  <li>
                    • Appropriate safeguards for international data transfers
                  </li>
                  <li>• Contact us to exercise your regional privacy rights</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-orange-100">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">
                Updates to This Policy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We may update this privacy policy from time to time to reflect
                changes in our practices, technology, legal requirements, or
                other factors.
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Notification of Changes
                  </h4>
                  <p className="text-gray-600 text-sm">
                    When we make significant changes, we will notify users
                    through the game interface or by updating the &apos;Last
                    updated&apos; date at the top of this policy.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">
                    Your Continued Use
                  </h4>
                  <p className="text-gray-600 text-sm">
                    By continuing to play Eggy Car after policy updates, you
                    agree to the revised terms. We encourage you to review this
                    policy periodically.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
}
