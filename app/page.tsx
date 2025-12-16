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
    
    // Simulate AI processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      // Generate smart template-based announcement
      const generatedOutput = generateFallbackAnnouncement(input, mode);
      setOutput(generatedOutput);
    } catch (error) {
      console.error('Error:', error);
      setOutput('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const generateFallbackAnnouncement = (text, type) => {
    const lowerText = text.toLowerCase();
    
    if (type === 'generate') {
      // Extract key concepts from the prompt
      const isSales = lowerText.includes('sales') || lowerText.includes('pitch') || lowerText.includes('offer');
      const isTransparent = lowerText.includes('transparent') || lowerText.includes('honest') || lowerText.includes('open');
      const isDeveloper = lowerText.includes('developer') || lowerText.includes('dev') || lowerText.includes('coder');
      const isLaunch = lowerText.includes('launch') || lowerText.includes('release') || lowerText.includes('new');
      const isEvent = lowerText.includes('event') || lowerText.includes('meeting') || lowerText.includes('call');
      const isUpdate = lowerText.includes('update') || lowerText.includes('feature') || lowerText.includes('change');
      
      if (isSales && isTransparent && isDeveloper) {
        return `🚀 Hey Developers! Let's Talk Real Business 💼

I'm not here to waste your time with fluffy sales talk. Here's the deal, straight up:

🎯 **What I'm Offering:**
A genuine opportunity that respects your intelligence and time. No gimmicks, no false promises - just real value.

💡 **Why Should You Care?**
Because I believe in complete transparency. You're developers - you spot BS from a mile away, and I respect that. This isn't about tricking you into something; it's about building a partnership where everyone wins.

✨ **What Makes This Different:**
• Full disclosure on what you're getting
• No hidden fees or surprises
• Built by developers, for developers
• Your success = my success

🔥 **The Reality:**
This isn't a magic solution. It takes work. But if you're willing to put in the effort, the results speak for themselves.

💬 **Questions? Doubts? Good.**
That means you're thinking critically. Drop them below. I'll answer everything honestly - even the tough questions.

**Ready to see what this is really about?** 👇
React with 💯 if you want the full details.

No pressure. No BS. Just real talk.`;
      }
      
      if (isLaunch) {
        return `🎉 **MAJOR LAUNCH ALERT** 🎉

Something BIG is dropping and you're getting first access! 

�� **What's Coming:**
${text.replace(/launch|release|new/gi, '').trim() || 'An incredible new opportunity'}

⚡ **Why This Matters:**
This is going to change the game for our community. We've been working behind the scenes, and it's finally ready.

🎯 **What You Get:**
✅ Early access before anyone else
✅ Special launch pricing
✅ Direct support from the team
✅ Exclusive bonuses for early adopters

⏰ **Limited Time:**
First 100 members get VIP perks. Don't sleep on this!

👉 **Ready to jump in?**
Comment "I'M IN" below and I'll send you the details!

Let's goooo! 🚀`;
      }
      
      if (isEvent) {
        return `📅 **COMMUNITY EVENT ANNOUNCEMENT** 📅

Mark your calendars! We're bringing the community together! 🎊

🎯 **What's Happening:**
${text}

💡 **Why You Should Attend:**
• Network with fellow members
• Learn new strategies and tips
• Get your questions answered live
• Exclusive announcements you won't want to miss

🔥 **Who's This For?**
Everyone! Whether you're new or been here since day one, this is YOUR event.

⏰ **Save the Date:**
Details dropping soon - make sure notifications are ON! 🔔

💬 **Drop a ✋ if you're coming!**

Can't wait to see you there! 🙌`;
      }
      
      // Default high-converting announcement
      return `🔥 **ATTENTION COMMUNITY** 🔥

Big news dropping right now! 

💎 **Here's What's Up:**
${text}

🎯 **Why This is Huge:**
This is exactly what you've been asking for. We listened, we built it, and now it's here.

⚡ **What This Means For You:**
✅ More value
✅ Better results  
✅ Easier wins
✅ Stronger community

🚀 **Next Steps:**
Don't just read this and scroll past. Take action NOW while you have the chance.

💬 **Questions?** Drop them below 👇
🔥 **Excited?** React with a ⚡

This is your moment. Let's GO! 🚀`;
    } else {
      // IMPROVE MODE - Significantly lengthen and enhance
      const words = text.split(' ').length;
      const needsExpansion = words < 50;
      
      return `✨ **${text.slice(0, 100)}${text.length > 100 ? '...' : ''}** ✨

${text}

🎯 **Let Me Break This Down For You:**

This isn't just another update - this is a pivotal moment for our community. Here's why this matters more than you might think:

**🔥 The Bigger Picture:**
We're not just making changes for the sake of change. Every decision we make is driven by YOUR feedback, YOUR needs, and YOUR success. This announcement represents hours of planning, testing, and refining to bring you something truly valuable.

**💡 What This Really Means:**

• **For New Members:** You're joining at the perfect time. This is exactly the kind of innovation that sets us apart from other communities.

• **For Veterans:** You've been here through the journey. This is us doubling down on our commitment to keeping you at the cutting edge.

• **For Everyone:** More resources, better support, and stronger results. Period.

**🚀 The Impact:**
When we say this is significant, we mean it. This update positions us to serve you better, faster, and more effectively than ever before. We're committed to being the best in the space, and this is proof of that commitment.

**✅ What Happens Next:**

1. We'll be rolling this out over the coming days
2. You'll see immediate improvements in your experience  
3. Our team is standing by to support you through any questions
4. More exciting updates are already in the pipeline

**💬 We Want to Hear From You:**
Your feedback is what drives us forward. What are your thoughts? What questions do you have? What would you like to see next? Drop your comments below - we read EVERY single one.

**🙏 Thank You:**
Seriously. Thank you for being part of this community. Thank you for your trust, your engagement, and your support. We don't take it lightly, and we're committed to proving every day that you made the right choice being here.

**🔔 Stay Connected:**
Make sure you have notifications turned on. We've got more announcements coming soon that you won't want to miss.

**👉 Take Action Now:**
Don't just read this and move on. Engage with it. Share your thoughts. Get involved. This is YOUR community, and we want to hear your voice.

Drop a 🔥 if you're excited about what's coming!
Drop a 💯 if you're ready to take full advantage!  
Drop a ❤️ if you appreciate the transparency!

Let's keep building something amazing together! 🚀

---
*Your feedback matters. Your success matters. You matter.* ✨`;
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
            AI-powered announcement templates
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
          <p>AI-Powered Templates • Built for Whop Communities</p>
        </div>
      </div>
    </div>
  );
}
