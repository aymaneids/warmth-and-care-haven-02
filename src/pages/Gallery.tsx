
import React, { useState, useEffect } from 'react';
import NavbarWithFooter from '../components/NavbarWithFooter';
import PageHeader from '../components/PageHeader';
import CallToAction from '../components/CallToAction';
import { Link } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { Card, CardContent } from "../components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1458",
      alt: "Private resident room",
      category: "accommodations"
    },
    {
      url: "https://images.unsplash.com/photo-1454418747937-bd95bb945625?q=80&w=1470",
      alt: "Art therapy session",
      category: "activities"
    },
    {
      url: "https://images.unsplash.com/photo-1558642891-54be180ea339?q=80&w=1470",
      alt: "Garden activities",
      category: "grounds"
    },
    {
      url: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?q=80&w=1470",
      alt: "Music therapy",
      category: "activities"
    },
    {
      url: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?q=80&w=1470",
      alt: "Residents playing cards",
      category: "activities"
    },
    {
      url: "https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1528",
      alt: "Resident lounge area",
      category: "accommodations"
    },
    {
      url: "https://images.unsplash.com/photo-1516800446-2059cdf84724?q=80&w=2070",
      alt: "Rehabilitation session",
      category: "rehabilitation"
    },
    {
      url: "https://images.unsplash.com/photo-1516571126636-52c74122dfab?q=80&w=1942",
      alt: "Community gathering",
      category: "activities"
    },
    {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
      alt: "Facility exterior",
      category: "grounds"
    },
    {
      url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070",
      alt: "Dining area",
      category: "dining"
    },
    {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1469",
      alt: "Conference room",
      category: "facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470",
      alt: "Nurse with resident",
      category: "care"
    }
  ];
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;
  
  const filterCategories = [
    { label: 'All', value: 'all' },
    { label: 'Activities', value: 'activities' },
    { label: 'Accommodations', value: 'accommodations' },
    { label: 'Grounds', value: 'grounds' },
    { label: 'Care', value: 'care' },
    { label: 'Dining', value: 'dining' },
    { label: 'Rehabilitation', value: 'rehabilitation' }
  ];
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === activeFilter));
    }
    setCurrentPage(1); // Reset to first page when filter changes
  }, [activeFilter]);
  
  // Get current images for pagination
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  return (
    <NavbarWithFooter>
      <main>
        <PageHeader 
          title="Gallery" 
          subtitle="Take a visual tour of our facility, activities, and community life"
          backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470"
        />
        
        <section className="py-16 bg-white">
          <div className="page-container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-hope-text-light">
                Browse through our photo gallery to get a glimpse of life at Hope Health & Rehabilitation Center. 
                From our comfortable accommodations to engaging activities and beautiful grounds, these images 
                showcase the warm, supportive environment we've created for our residents.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {filterCategories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setActiveFilter(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === category.value 
                        ? 'bg-hope-blue text-white' 
                        : 'bg-hope-gray text-hope-text hover:bg-hope-beige'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentImages.map((image, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden rounded-xl border-0 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden group">
                      <img 
                        src={image.url} 
                        alt={image.alt} 
                        className="w-full h-64 object-cover transition-transform hover:scale-105 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-4 font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {totalPages > 1 && (
              <Pagination className="my-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink 
                        onClick={() => setCurrentPage(index + 1)}
                        isActive={currentPage === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
            
            <div className="text-center mt-12">
              <p className="text-hope-text-light mb-4">
                Want to see our facility in person? We'd love to show you around.
              </p>
              <Link to="/contact" className="btn-primary">
                Schedule a Tour
              </Link>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
    </NavbarWithFooter>
  );
};

export default Gallery;
