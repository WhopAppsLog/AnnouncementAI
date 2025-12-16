'use client';

import React, { useState } from 'react';
import { Sparkles, Wand2, Copy, Check, Loader2 } from 'lucide-react';

export default function AnnouncementAI() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('generate');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setOutput('');
    
    try {
      const prompt = mode === 'generate'
        ? `Create a professional, engaging announcement for a Whop community based on this prompt: "${input}". Make it concise, exciting, and action-oriented. Include emojis where appropriate. Format it ready to post.`
        : `Improve this announcement for a Whop community: "${input}". Make it more engaging, professional, and impactful. Keep the core message but enhance the delivery. Include emojis where appropriate.`;

      // Using Hugging Face's free inference API (no API key required)
      const response = await fetch(
        "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: prompt,
            parameters: {
              max_new_tokens: 500,
              temperature: 0.7,
              top_p: 0.95,
              return_full_text: false,
            },
          }),
        }
      );

      const data = await response.json();
      
      if (data.error) {
        // Model might be loading, try again after a delay
        if (data.error.includes('loading')) {
          setOutput('Model is loading, please try again in a few seconds...');
          setTimeout(() => setOutput(''), 3000);
        } else {
          setOutput('Error generating announcement. Please try again.');
        }
      } else {
        const generatedText = data[0]?.generated_text || 'Unable to generate announcement.';
        setOutput(generatedText);
      }
    } catch (error) {
      setOutput('Error generating announcement. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-purple-300" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              AnnouncementAI
            </h1>
          </div>
          <p className="text-purple-200 text-lg">
            Generate or improve announcements for your Whop community
          </p>
          <p className="text-purple-300 text-sm mt-2">
            Powered by free AI - No API key required!
          </p>
        </div>

        {/* Main Card */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 shadow-2xl p-6 md:p-8">
          {/* Mode Selector */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setMode('generate')}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                mode === 'generate'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              Generate New
            </button>
            <button
              onClick={() => setMode('improve')}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                mode === 'improve'
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              <Wand2 className="w-5 h-5" />
              Improve Existing
            </button>
          </div>

          {/* Input Section */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-3">
              {mode === 'generate' ? 'What do you want to announce?' : 'Paste your announcement:'}
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                mode === 'generate'
                  ? 'e.g., New course launch, community event, feature update...'
                  : 'Paste your existing announcement here...'
              }
              className="w-full h-32 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none backdrop-blur-sm"
            />
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-xl hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                {mode === 'generate' ? 'Generate Announcement' : 'Improve Announcement'}
              </>
            )}
          </button>

          {/* Output Section */}
          {output && (
            <div className="mt-8 animate-in fade-in duration-500">
              <div className="flex items-center justify-between mb-3">
                <label className="text-white font-semibold">Your Announcement:</label>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <div className="p-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
                <p className="text-white whitespace-pre-wrap">{output}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/60 text-sm">
          <p>Powered by Mistral AI • Built for Whop Communities</p>
        </div>
      </div>
    </div>
  );
}


