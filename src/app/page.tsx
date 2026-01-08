"use client";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/custom/navbar";
import { Footer } from "@/components/custom/footer";
import {
  Sparkles,
  Video,
  Wand2,
  Zap,
  Target,
  TrendingUp,
  Upload,
  Scissors,
  Download,
  Check,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">
                AI-Powered Video Editing
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Turn Long Videos Into{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">
                Viral Clips
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Transform your YouTube videos, podcasts, and long-form content
              into engaging short clips optimized for TikTok, Instagram Reels,
              and YouTube Shorts—automatically.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white shadow-2xl shadow-purple-500/30 text-lg px-8 h-14"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 hover:bg-white/5 text-white text-lg px-8 h-14"
              >
                <Video className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              No credit card required • 3 free clips to start
            </p>
          </div>

          {/* Hero Image/Video Placeholder */}
          <div className="mt-20 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20">
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <Video className="w-20 h-20 text-purple-400 mx-auto mb-4" />
                  <p className="text-gray-400">Video Demo Preview</p>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-2xl blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-2xl blur-xl animate-pulse delay-75" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D12]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Content Creators
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to create viral short-form content from your
              long videos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Clip Detection</h3>
              <p className="text-gray-400">
                Our AI automatically identifies the most engaging moments in
                your videos and creates viral-worthy clips.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto Captions</h3>
              <p className="text-gray-400">
                Generate accurate captions with highlighted keywords
                automatically. Customize colors, fonts, and styles.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/5 to-transparent border border-white/5 hover:border-pink-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Framing</h3>
              <p className="text-gray-400">
                Automatic face detection and zoom to keep your subject centered
                and engaging in every clip.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent border border-white/5 hover:border-cyan-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Multiple Upload Options
              </h3>
              <p className="text-gray-400">
                Upload videos directly or import from YouTube. Supports MP4,
                MOV, and more.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent border border-white/5 hover:border-orange-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Batch Processing</h3>
              <p className="text-gray-400">
                Generate multiple clips from a single video. Save hours of
                manual editing work.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-transparent border border-white/5 hover:border-green-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Viral Score</h3>
              <p className="text-gray-400">
                Each clip gets a virality score based on engagement patterns and
                AI analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Create Viral Clips in{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                3 Simple Steps
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From upload to download in minutes—no editing experience required
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/30">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent hidden md:block" />
                <h3 className="text-2xl font-semibold mb-3">1. Upload Video</h3>
                <p className="text-gray-400">
                  Upload your long-form video or paste a YouTube link. Our AI
                  starts analyzing immediately.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                  <Wand2 className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent hidden md:block" />
                <h3 className="text-2xl font-semibold mb-3">2. AI Processing</h3>
                <p className="text-gray-400">
                  Our AI identifies viral moments, adds captions, and creates
                  multiple optimized clips.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/30">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">
                  3. Download & Share
                </h3>
                <p className="text-gray-400">
                  Preview, customize, and download your clips. Ready to post on
                  all platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D12]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Content Creators
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of creators saving time and growing their audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                10M+
              </div>
              <p className="text-gray-400">Clips Generated</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-gray-400">Active Creators</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <p className="text-gray-400">Average Rating</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent border border-white/5">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "This tool saved me hours of editing. The AI knows exactly
                which moments will go viral!"
              </p>
              <p className="text-sm text-gray-500">
                — Sarah K., YouTube Creator
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-white/5">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "My engagement on TikTok increased 300% after using ClipForge.
                Game changer!"
              </p>
              <p className="text-sm text-gray-500">
                — Mike R., Podcast Host
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-500/5 to-transparent border border-white/5">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">
                "The auto captions are incredibly accurate. I can create 10
                clips in the time it used to take for 1."
              </p>
              <p className="text-sm text-gray-500">
                — Alex T., Social Media Manager
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Create{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Viral Content?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Start your free trial today. No credit card required.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white shadow-2xl shadow-purple-500/30 text-lg px-12 h-16"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Get Started Free
          </Button>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>3 free clips</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
