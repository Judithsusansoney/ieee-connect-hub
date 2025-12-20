import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const heroSlides = [
  {
    id: 1,
    title: 'IEEE Kerala Tech Summit 2024',
    subtitle: 'Join 500+ professionals',
    date: 'Jan 15-17, 2024',
    location: 'Kochi',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    color: 'from-ieee-blue to-ieee-blue-light',
  },
  {
    id: 2,
    title: 'Women in Engineering Summit',
    subtitle: 'Empowering future leaders',
    date: 'Feb 8, 2024',
    location: 'Trivandrum',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop',
    color: 'from-accent to-accent/70',
  },
  {
    id: 3,
    title: 'Student Congress Kerala',
    subtitle: 'Connect • Learn • Grow',
    date: 'Mar 1-3, 2024',
    location: 'Calicut',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop',
    color: 'from-success to-success/70',
  },
];

export const HeroCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="px-5 py-4">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0">
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className={cn("absolute inset-0 bg-gradient-to-r opacity-85", slide.color)} />
                <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                  <div>
                    <p className="text-xs font-medium text-white/80 mb-1">{slide.subtitle}</p>
                    <h3 className="text-xl font-bold font-display leading-tight">{slide.title}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-white/90">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {slide.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {slide.location}
                      </span>
                    </div>
                    <button className="flex items-center gap-1 text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      Register <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === selectedIndex 
                ? "bg-primary w-6" 
                : "bg-muted-foreground/30"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};
