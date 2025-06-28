import React, { useState } from 'react';
import { MessageSquare, Send, Bot, User, Sparkles, Brain, Zap } from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import Features from './components/Features';

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Header />
      
      {!showChat ? (
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Sparkles className="w-3 h-3 text-yellow-800" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Meet <span className="text-primary-600">KarimAI</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your intelligent AI assistant powered by advanced language models. 
              Get instant answers, creative solutions, and thoughtful conversations.
            </p>
            
            <button
              onClick={() => setShowChat(true)}
              className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3 mx-auto"
            >
              <MessageSquare className="w-6 h-6" />
              Start Chatting
              <Zap className="w-5 h-5" />
            </button>
          </div>

          <Features />
        </main>
      ) : (
        <ChatInterface onBack={() => setShowChat(false)} />
      )}
    </div>
  );
}

export default App;