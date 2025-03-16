
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Briefcase, Heart, Users, Clock, Award, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import CallToAction from '../components/CallToAction';

const Careers = () => {
  const currentOpenings = [
    {
      title: "Registered Nurse (RN)",
      department: "Nursing",
      type: "Full-time",
      location: "Hopeville, NY",
      description: "We are seeking compassionate Registered Nurses to provide skilled nursing care to our residents. The ideal candidate will have experience in geriatric care and a passion for working with seniors."
    },
    {
      title: "Physical Therapist",
      department: "Rehabilitation",
      type: "Full-time",
      location: "Hopeville, NY",
      description: "Join our rehabilitation team to help residents recover from injuries, surgeries, and medical conditions. You'll develop and implement treatment plans to improve mobility and quality of life."
    },
    {
      title: "Certified Nursing Assistant (CNA)",
      department: "Nursing",
      type: "Full-time / Part-time",
      location: "Hopeville, NY",
      description: "As a CNA, you'll provide direct care to residents, assisting with activities of daily living and ensuring their comfort and dignity."
    },
    {
      title: "Activities Coordinator",
      department: "Community Life",
      type: "Full-time",
      location: "Hopeville, NY",
      description: "Plan and implement engaging activities and programs for our residents that promote social interaction, physical activity, and cognitive stimulation."
    },
    {
      title: "Dietary Aide",
      department: "Dining Services",
      type: "Part-time",
      location: "Hopeville, NY",
      description: "Assist in food preparation and service to ensure our residents enjoy nutritious, appealing meals in a pleasant dining environment."
    }
  ];
  
  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-hope-blue" />,
      title: "Health & Wellness",
      items: ["Medical, dental, and vision insurance", "Wellness programs", "Employee assistance program"]
    },
    {
      icon: <Clock className="h-6 w-6 text-hope-blue" />,
      title: "Work-Life Balance",
      items: ["Paid time off", "Paid holidays", "Flexible scheduling options"]
    },
    {
      icon: <Award className="h-6 w-6 text-hope-blue" />,
      title: "Professional Growth",
      items: ["Tuition assistance", "Continuing education", "Career advancement opportunities"]
    },
    {
      icon: <Sparkles className="h-6 w-6 text-hope-blue" />,
      title: "Additional Benefits",
      items: ["401(k) retirement plan", "Life insurance", "Employee recognition programs"]
    }
  ];
  
  return (
    <>
      <Navbar />
      <main>
        <PageHeader 
          title="Careers at Hope Health" 
          subtitle="Join our team of compassionate professionals dedicated to improving lives"
          backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070"
        />
        
        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm staggered-animation-1">
                  Join Our Team
                </div>
                <h2 className="text-hope-text font-semibold staggered-animation-2">Make a <span className="text-hope-blue">Difference</span> Every Day</h2>
                <p className="text-hope-text-light staggered-animation-3">
                  At Hope Health & Rehabilitation Center, we believe that our team members are our greatest asset. We're looking for compassionate, dedicated individuals who share our commitment to providing exceptional care and enhancing the lives of our residents.
                </p>
                <p className="text-hope-text-light staggered-animation-3">
                  Working with us means being part of a supportive community where your contributions are valued and your career growth is encouraged. If you're passionate about making a positive impact in the lives of seniors, we invite you to explore career opportunities with us.
                </p>
                
                <div className="pt-2 staggered-animation-4">
                  <a href="#openings" className="btn-primary">
                    View Current Openings
                  </a>
                </div>
              </div>
              
              <div className="relative staggered-animation-1">
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-hope-blue/10 z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-hope-lavender/10 z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=1504" 
                  alt="Healthcare professionals working together" 
                  className="w-full h-auto object-cover rounded-2xl shadow-md relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Work With Us */}
        <section className="py-16 bg-hope-gray">
          <div className="page-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm mb-4">
                Why Work With Us
              </div>
              <h2 className="text-hope-text font-semibold mb-4">
                The Hope Health Difference
              </h2>
              <p className="text-hope-text-light">
                Discover what makes Hope Health & Rehabilitation Center a rewarding place to build your career.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-hope-beige rounded-full w-fit mb-4">
                  <Users className="h-6 w-6 text-hope-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Supportive Team Environment</h3>
                <p className="text-hope-text-light">
                  Work alongside dedicated professionals who share your commitment to compassionate care. Our collaborative culture emphasizes mutual support and respect.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-hope-beige rounded-full w-fit mb-4">
                  <Award className="h-6 w-6 text-hope-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Development</h3>
                <p className="text-hope-text-light">
                  We invest in our team members through ongoing training, education assistance, and opportunities for advancement. Your growth is important to us.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-hope-beige rounded-full w-fit mb-4">
                  <Heart className="h-6 w-6 text-hope-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Meaningful Work</h3>
                <p className="text-hope-text-light">
                  Make a tangible difference in the lives of our residents every day. The relationships you'll build and the impact of your care creates a deeply fulfilling career.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="page-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-hope-beige text-hope-text font-medium text-sm mb-4">
                Employee Benefits
              </div>
              <h2 className="text-hope-text font-semibold mb-4">
                We Take Care of Our Team
              </h2>
              <p className="text-hope-text-light">
                We offer a comprehensive benefits package designed to support your health, well-being, and professional growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-hope-gray p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-full w-fit">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                      <ul className="space-y-2">
                        {benefit.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-hope-blue flex-shrink-0 mt-0.5" />
                            <span className="text-hope-text-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Current Openings */}
        <section id="openings" className="py-16 bg-hope-beige/50">
          <div className="page-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-hope-blue/10 text-hope-blue font-medium text-sm mb-4">
                Current Openings
              </div>
              <h2 className="text-hope-text font-semibold mb-4">
                Join Our Team
              </h2>
              <p className="text-hope-text-light">
                Explore our current job opportunities and find a role where you can make a difference.
              </p>
            </div>
            
            <div className="space-y-6">
              {currentOpenings.map((job, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="h-5 w-5 text-hope-blue" />
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-hope-text-light mb-4">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                      <p className="text-hope-text-light">{job.description}</p>
                    </div>
                    <div className="md:flex-shrink-0">
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center bg-hope-blue hover:bg-hope-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-hope-text-light mb-4">
                Don't see a position that matches your skills? We're always looking for talented individuals.
              </p>
              <Link to="/contact" className="btn-secondary">
                Submit General Application
              </Link>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Careers;
