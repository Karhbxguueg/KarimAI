import React from 'react';
import { MessageSquare, Lightbulb, Code, BookOpen, Zap, Shield } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Conversations',
      description: 'Engage in fluid, context-aware conversations that feel natural and intuitive.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Get innovative ideas and creative approaches to solve complex problems.'
    },
    {
      icon: Code,
      title: 'Code Assistance',
      description: 'Receive help with programming, debugging, and technical explanations.'
    },
    {
      icon: BookOpen,
      title: 'Learning Support',
      description: 'Get explanations, summaries, and educational content on any topic.'
    },
    {
      icon: Zap,
      title: 'Instant Responses',
      description: 'Experience lightning-fast responses powered by advanced AI technology.'
    },
    {
      icon: Shield,
      title: 'Privacy Focused',
      description: 'Your conversations are secure and private, with no data stored permanently.'
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Powerful AI Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover what makes KarimAI your perfect digital companion for work, learning, and creativity.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;