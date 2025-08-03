import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE_NAME, WEBSITE_URL } from "@/data/contants";
import {
  AlertCircle,
  Car,
  CheckCircle,
  FileText,
  Gavel,
  Shield,
  Users,
} from "lucide-react";
import { Metadata } from "next";

const seoTitle = "Terms of Service - EggyCar";
const seoDescription =
  "Read the Terms and Conditions for Eggy Car Unblocked. Learn about your rights, responsibilities, and the rules for using our website and game.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "eggy car terms of service",
    "terms of service",
    "game rules",
    "user agreement",
    "legal terms",
    "gameplay guidelines",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    siteName: SITE_NAME,
    title: seoTitle,
    description: seoDescription,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            Last updated: January 1, 2025
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Welcome to Eggy Car! These terms govern your use of our game and
            services. By playing Eggy Car, you agree to these terms.
          </p>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-blue-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Acceptance of Terms
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                By accessing, downloading, or playing Eggy Car, you acknowledge
                that you have read, understood, and agree to be bound by these
                Terms of Service and our Privacy Policy.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-blue-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Game Usage and License
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  License Grant
                </h4>
                <p className="text-gray-600 mb-3">
                  We grant you a limited, non-exclusive, non-transferable
                  license to play Eggy Car for your personal, non-commercial
                  entertainment purposes.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• You may play the game on any compatible device</li>
                  <li>• You may share screenshots and gameplay videos</li>
                  <li>• You may discuss the game on social media and forums</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Restrictions
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>
                    • Do not modify, reverse engineer, or create derivative
                    works
                  </li>
                  <li>• Do not use automated tools, bots, or cheats</li>
                  <li>• Do not attempt to hack or exploit the game</li>
                  <li>
                    • Do not use the game for commercial purposes without
                    permission
                  </li>
                  <li>• Do not redistribute or resell the game</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-blue-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  User Conduct
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                We want Eggy Car to be a fun and safe experience for everyone.
                Please follow these guidelines when playing and interacting with
                our community.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold  mb-3 text-green-600">
                    ✓ Encouraged Behavior
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Play fairly and enjoy the game</li>
                    <li>• Share positive feedback and suggestions</li>
                    <li>• Help other players with tips and tricks</li>
                    <li>• Report bugs or issues you encounter</li>
                    <li>• Respect other players and our community</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-red-600">
                    ✗ Prohibited Behavior
                  </h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Cheating, hacking, or exploiting bugs</li>
                    <li>• Harassment or abusive behavior</li>
                    <li>• Sharing inappropriate content</li>
                    <li>• Attempting to disrupt game services</li>
                    <li>• Violating any applicable laws</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-blue-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Intellectual Property Rights
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                All content in Eggy Car, including but not limited to graphics,
                sounds, music, code, and gameplay mechanics, is owned by Beedo
                Games or our licensors.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Our Rights
                  </h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>
                      • All game assets and intellectual property remain our
                      property
                    </li>
                    <li>• We retain all rights not expressly granted to you</li>
                    <li>• Trademarks and logos are protected by law</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Your Content
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Any feedback, suggestions, or content you provide may be
                    used by us to improve the game without compensation or
                    attribution.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Service Availability
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                We strive to keep Eggy Car available 24/7, but we cannot
                guarantee uninterrupted service.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Maintenance and Updates
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We may temporarily suspend the game for maintenance,
                    updates, or improvements. We&apos;ll try to minimize
                    disruptions and notify players when possible.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Service Modifications
                  </h4>
                  <p className="text-gray-600 text-sm">
                    We reserve the right to modify, suspend, or discontinue any
                    part of the game at any time with or without notice.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-blue-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Disclaimers and Limitations
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Disclaimer of Warranties
                </h4>
                <p className="text-gray-600 text-sm">
                  Eggy Car is provided &apos;as is&apos; without warranties of
                  any kind. We do not guarantee that the game will be
                  error-free, secure, or continuously available.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Limitation of Liability
                </h4>
                <p className="text-gray-600 text-sm">
                  To the maximum extent permitted by law, Beedo Games shall not
                  be liable for any indirect, incidental, consequential, or
                  punitive damages arising from your use of the game.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Indemnification
                </h4>
                <p className="text-gray-600 text-sm">
                  You agree to indemnify and hold harmless Beedo Games from any
                  claims, damages, or expenses arising from your violation of
                  these terms or misuse of the game.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-blue-100">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                  <Gavel className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-800">
                  Governing Law and Disputes
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Governing Law
                </h4>
                <p className="text-gray-600 text-sm">
                  These terms are governed by the laws of [Your Jurisdiction],
                  without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Dispute Resolution
                </h4>
                <p className="text-gray-600 text-sm">
                  We encourage resolving disputes through direct communication.
                  For formal disputes, both parties agree to binding arbitration
                  where permitted by law.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Severability
                </h4>
                <p className="text-gray-600 text-sm">
                  If any provision of these terms is found unenforceable, the
                  remaining provisions will continue in full force and effect.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <Card className="bg-white/60 backdrop-blur-sm border border-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">
                Changes to These Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                We may update these Terms of Service from time to time to
                reflect changes in our practices, legal requirements, or other
                factors.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Notification
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Significant changes will be communicated through the game
                    interface or by updating the &apos;Last updated&apos; date.
                    Minor changes may be made without notice.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Continued Use
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Your continued use of Eggy Car after changes take effect
                    constitutes acceptance of the updated terms.
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
