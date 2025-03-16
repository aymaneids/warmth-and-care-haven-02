
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  name, 
  title, 
  image = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288",
  delay = 0
}) => {
  const animationClass = delay ? `opacity-0 animate-fade-in-up` : '';
  const animationStyle = delay ? { animationFillMode: 'forwards', animationDelay: `${delay}s` } : {};
  
  return (
    <div 
      className={`testimonial-card flex flex-col h-full ${animationClass}`}
      style={animationStyle}
    >
      <Quote className="h-8 w-8 text-hope-blue opacity-60 mb-4" />
      <p className="text-hope-text mb-6 italic">{quote}</p>
      <div className="flex items-center mt-auto">
        <img 
          src={image} 
          alt={name} 
          className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-white"
        />
        <div>
          <h4 className="font-medium text-hope-text">{name}</h4>
          <p className="text-sm text-hope-text-light">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
