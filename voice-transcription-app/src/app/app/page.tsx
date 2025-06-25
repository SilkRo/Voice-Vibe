'use client';

import { useState } from 'react';
import VoiceRecorder from '@/components/VoiceRecorder';
import TranscriptionDisplay from '@/components/TranscriptionDisplay';
import Link from 'next/link';
import { ArrowLeft, Mic, Brain, Sparkles, Play, FileText } from 'lucide-react';
import { SparklesCore } from '@/components/ui/sparkles';
import { motion } from 'framer-motion';

export default function AppPage() {
  const [transcriptions, setTranscriptions] = useState<string[]>([]);

  const handleTranscriptionComplete = (transcription: string) => {
    setTranscriptions(prev => [transcription, ...prev]);
  };

  const handleClearHistory = () => {
    setTranscriptions([]);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="app-background-particles"
          background="transparent"
          minSize={0.2}
          maxSize={0.8}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#4F46E5"
          speed={0.3}
        />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-purple-200">
              VoiceVibe
            </h1>
          </div>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Transform your voice into text with cutting-edge AI technology. 
            <span className="text-blue-400">Real-time transcription</span> powered by OpenAI Whisper.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{transcriptions.length}</div>
              <div className="text-sm text-neutral-400">Transcriptions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">99.9%</div>
              <div className="text-sm text-neutral-400">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">Real-time</div>
              <div className="text-sm text-neutral-400">Processing</div>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {/* Recording Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-start"
          >
            <VoiceRecorder onTranscriptionComplete={handleTranscriptionComplete} />
          </motion.div>

          {/* Transcription Display Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col"
          >
            <TranscriptionDisplay 
              transcriptions={transcriptions} 
              onClearHistory={handleClearHistory}
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 hover:bg-neutral-900/70 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">AI-Powered</h3>
            <p className="text-neutral-400 text-sm">Advanced neural networks ensure the highest accuracy in speech recognition.</p>
          </div>
          
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 hover:bg-neutral-900/70 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Real-time</h3>
            <p className="text-neutral-400 text-sm">Instant transcription as you speak with minimal latency.</p>
          </div>
          
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-6 hover:bg-neutral-900/70 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">Export Ready</h3>
            <p className="text-neutral-400 text-sm">Copy to clipboard or export in multiple formats instantly.</p>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Play className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-semibold text-white">Quick Start Guide</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-white mb-4">How to use:</h3>
              <ol className="space-y-3 text-neutral-300">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">1</span>
                  <span>Click &ldquo;Start Recording&rdquo; and allow microphone access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">2</span>
                  <span>Speak clearly into your microphone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">3</span>
                  <span>Click &ldquo;Stop Recording&rdquo; when finished</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">4</span>
                  <span>Click &ldquo;Transcribe Audio&rdquo; for AI processing</span>
                </li>
              </ol>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-700/50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h4 className="font-semibold text-yellow-400">Pro Tips</h4>
              </div>
              <ul className="text-sm text-yellow-200 space-y-2">
                <li>• Speak in a quiet environment for best results</li>
                <li>• Keep your microphone 6-12 inches away</li>
                <li>• Speak at a normal, steady pace</li>
                <li>• Add punctuation by saying &ldquo;period&rdquo;, &ldquo;comma&rdquo;, etc.</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-900/30 border border-blue-700/50 rounded-lg">
            <p className="text-sm text-blue-200">
              <strong className="text-blue-400">Setup Required:</strong> Make sure you have added your OpenAI API key to the .env.local file 
              for the transcription feature to work properly.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
