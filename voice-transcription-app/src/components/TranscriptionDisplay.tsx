'use client';

import { useState } from 'react';

interface TranscriptionDisplayProps {
  transcriptions: string[];
  onClearHistory: () => void;
}

export default function TranscriptionDisplay({ transcriptions, onClearHistory }: TranscriptionDisplayProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  if (transcriptions.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No transcriptions yet</h3>
        <p className="text-gray-500">Start recording to see your transcriptions here</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Transcriptions</h2>
        <button
          onClick={onClearHistory}
          className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
        >
          Clear History
        </button>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {transcriptions.map((transcription, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors duration-200"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs text-gray-500 font-medium">
                Transcription #{transcriptions.length - index}
              </span>
              <button
                onClick={() => copyToClipboard(transcription, index)}
                className="flex items-center space-x-1 text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                {copiedIndex === index ? (
                  <>
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                      <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-gray-800 leading-relaxed">{transcription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
