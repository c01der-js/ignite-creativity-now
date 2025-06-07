
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PopularCategories from '@/components/PopularCategories';
import TopCreators from '@/components/TopCreators';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PopularCategories />
      <TopCreators />
      <Footer />
    </div>
  );
};

export default Index;
