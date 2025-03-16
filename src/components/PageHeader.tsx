
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1516800446-2059cdf84724?q=80&w=2070"
}) => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-hope-text/60 to-hope-text/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      
      <div className="page-container relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-white font-bold mb-4 header-animation">{title}</h1>
          {subtitle && (
            <p className="text-white/90 text-xl header-animation" style={{animationDelay: "0.4s"}}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
