'use client';

import { useState } from 'react';
import { useAudioRecorder } from '@/hooks/useAudioRecorder';

interface VoiceRecorderProps {
  onTranscriptionComplete: (transcription: string) => void;
}

export default function VoiceRecorder({ onTranscriptionComplete }: VoiceRecorderProps) {
  const { isRecording, audioBlob, startRecording, stopRecording, clearRecording } = useAudioRecorder();
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleStartRecording = async () => {
    setError(null);
    clearRecording();
    await startRecording();
  };

  const handleStopRecording = () => {
    stopRecording();
  };

  const handleTranscribe = async () => {
    if (!audioBlob) return;

    setIsTranscribing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');

      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        onTranscriptionComplete(data.text);
        clearRecording();
      } else {
        setError(data.error || 'Transcription failed');
      }
    } catch (error) {
      console.error('Transcription error:', error);
      setError('Failed to transcribe audio. Please try again.');
    } finally {
      setIsTranscribing(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Voice Recorder</h2>
        <p className="text-gray-600">Press record to start capturing your voice</p>
      </div>

      {/* Recording Status */}
      <div className="text-center">
        {isRecording && (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-500 font-medium">Recording...</span>
          </div>
        )}
        {audioBlob && !isRecording && (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-500 font-medium">Recording Complete</span>
          </div>
        )}
      </div>

      {/* Recording Controls */}
      <div className="flex space-x-4">
        {!isRecording ? (
          <button
            onClick={handleStartRecording}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
            <span>Start Recording</span>
          </button>
        ) : (
          <button
            onClick={handleStopRecording}
            className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
            </svg>
            <span>Stop Recording</span>
          </button>
        )}
      </div>

      {/* Transcribe Button */}
      {audioBlob && !isRecording && (
        <button
          onClick={handleTranscribe}
          disabled={isTranscribing}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-full font-medium transition-colors duration-200 flex items-center space-x-2"
        >
          {isTranscribing ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Transcribing...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Transcribe Audio</span>
            </>
          )}
        </button>
      )}

      {/* Clear Recording Button */}
      {audioBlob && !isRecording && !isTranscribing && (
        <button
          onClick={clearRecording}
          className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200"
        >
          Clear Recording
        </button>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
}
