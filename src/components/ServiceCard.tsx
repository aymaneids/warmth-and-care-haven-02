
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, link, delay = 0 }) => {
  const animationClass = delay ? `opacity-0 animate-fade-in-up` : '';
  const animationStyle = delay ? { animationFillMode: 'forwards', animationDelay: `${delay}s` } : {};
  
  return (
    <div 
      className={`service-card flex flex-col h-full ${animationClass}`}
      style={animationStyle}
    >
      <div className="p-3 bg-hope-beige rounded-full w-fit mb-4">
        <Icon className="h-6 w-6 text-hope-blue" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-hope-text-light mb-4 flex-grow">{description}</p>
      <Link to={link} className="group inline-flex items-center text-hope-blue font-medium mt-2">
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
