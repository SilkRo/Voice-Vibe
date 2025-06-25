"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Mic, FileText, Zap, Shield, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Sparkles */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Sparkles */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="hero-particles"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={0.8}
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            VoiceVibe
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 text-neutral-300">
            AI That Hits Different ✨
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your voice into accurate, professional text instantly. 
            Our advanced AI transcription technology delivers precision and speed 
            for all your audio-to-text needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/app">
              <button className="group bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-200 transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Start Recording
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Experience the future of voice transcription with cutting-edge AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:bg-neutral-900/70 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Transcription</h3>
              <p className="text-neutral-400">
                Get instant, accurate transcriptions as you speak with our advanced AI processing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:bg-neutral-900/70 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multiple Formats</h3>
              <p className="text-neutral-400">
                Export your transcriptions in various formats including TXT, PDF, and DOCX.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:bg-neutral-900/70 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-neutral-400">
                Process hours of audio in minutes with our optimized AI algorithms.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:bg-neutral-900/70 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
              <p className="text-neutral-400">
                Your audio data is encrypted and processed securely with full privacy protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="cta-particles"
            background="transparent"
            minSize={0.3}
            maxSize={0.8}
            particleDensity={30}
            className="w-full h-full"
            particleColor="#4F46E5"
            speed={0.5}
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust our AI-powered transcription service
          </p>
          
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Free
          </button>
          
          <p className="text-sm text-neutral-500 mt-4">
            No credit card required • Start transcribing in seconds
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-neutral-400">
            © 2024 Voice Transcription App. Powered by advanced AI technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
