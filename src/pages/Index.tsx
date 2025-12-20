import React from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { HeroHeader } from '@/components/home/HeroHeader';
import { QuickActions } from '@/components/home/QuickActions';
import { FeaturedEvents } from '@/components/home/FeaturedEvents';
import { LatestNews } from '@/components/home/LatestNews';
import { CommunitiesPreview } from '@/components/home/CommunitiesPreview';

const Index: React.FC = () => {
  return (
    <MobileLayout>
      <HeroHeader />
      <QuickActions />
      <FeaturedEvents />
      <LatestNews />
      <CommunitiesPreview />
    </MobileLayout>
  );
};

export default Index;
