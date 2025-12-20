import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight, Users, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const communities = [
  {
    id: 1,
    name: 'IEEE Computer Society Kerala',
    shortName: 'CS',
    members: 2500,
    location: 'Statewide',
    color: 'bg-primary',
    description: 'Advancing technology for humanity',
  },
  {
    id: 2,
    name: 'Women in Engineering Kerala',
    shortName: 'WIE',
    members: 1200,
    location: 'Statewide',
    color: 'bg-accent',
    description: 'Inspiring women in STEM',
  },
  {
    id: 3,
    name: 'IEEE Robotics & Automation',
    shortName: 'RAS',
    members: 800,
    location: 'Kochi Hub',
    color: 'bg-success',
    description: 'Building the future of robotics',
  },
  {
    id: 4,
    name: 'IEEE Power & Energy Society',
    shortName: 'PES',
    members: 650,
    location: 'TVM Hub',
    color: 'bg-warm',
    description: 'Powering a sustainable world',
  },
  {
    id: 5,
    name: 'IEEE Signal Processing Society',
    shortName: 'SPS',
    members: 450,
    location: 'Calicut Hub',
    color: 'bg-ieee-blue',
    description: 'Advancing signal processing',
  },
];

export const CommunitiesPreview: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-4 mb-4">
      <div className="flex items-center justify-between mb-4 px-5">
        <h3 className="text-lg font-bold font-display text-foreground">Active Communities</h3>
        <Button variant="ghost" size="sm" className="text-primary gap-1">
          Explore <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 pl-5">
          {communities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
          <div className="min-w-[20px]" />
        </div>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all duration-300",
              index === selectedIndex 
                ? "bg-primary w-4" 
                : "bg-muted-foreground/30"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};

const CommunityCard: React.FC<{ community: typeof communities[0] }> = ({ community }) => (
  <article className="min-w-[200px] max-w-[200px] bg-card rounded-xl p-4 shadow-card transition-all duration-300 hover:shadow-card-hover active:scale-[0.98]">
    <div className="flex items-center gap-3 mb-3">
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold font-display text-sm",
        community.color
      )}>
        {community.shortName}
      </div>
    </div>
    
    <h4 className="font-semibold text-foreground text-sm font-display line-clamp-2 mb-1.5 min-h-[2.5rem]">
      {community.name}
    </h4>
    
    <p className="text-[10px] text-muted-foreground mb-3 line-clamp-1">
      {community.description}
    </p>
    
    <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-3">
      <span className="flex items-center gap-1">
        <Users className="w-3 h-3" />
        {community.members.toLocaleString()}
      </span>
      <span className="flex items-center gap-1">
        <MapPin className="w-3 h-3" />
        {community.location}
      </span>
    </div>
    
    <button className="w-full flex items-center justify-center gap-1 text-[11px] text-primary font-medium bg-primary/5 hover:bg-primary/10 py-2 rounded-lg transition-colors">
      View <ChevronRight className="w-3 h-3" />
    </button>
  </article>
);
