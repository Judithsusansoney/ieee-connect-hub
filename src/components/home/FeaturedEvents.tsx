import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Calendar, MapPin, ArrowRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const events = [
  {
    id: 1,
    title: 'IEEE Kerala Tech Summit 2024',
    date: 'Jan 15-17, 2024',
    location: 'Kochi, Kerala',
    attendees: 500,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
    category: 'Conference',
  },
  {
    id: 2,
    title: 'AI & Machine Learning Workshop',
    date: 'Jan 22, 2024',
    location: 'Trivandrum',
    attendees: 120,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop',
    category: 'Workshop',
  },
  {
    id: 3,
    title: 'Student Branch Leadership Camp',
    date: 'Feb 3-5, 2024',
    location: 'Calicut',
    attendees: 200,
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=200&fit=crop',
    category: 'Camp',
  },
  {
    id: 4,
    title: 'Robotics Hackathon',
    date: 'Feb 10, 2024',
    location: 'Thrissur',
    attendees: 80,
    image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=400&h=200&fit=crop',
    category: 'Hackathon',
  },
];

export const FeaturedEvents: React.FC = () => {
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
    <section className="py-4">
      <div className="flex items-center justify-between mb-4 px-5">
        <h3 className="text-lg font-bold font-display text-foreground">Featured Events</h3>
        <Button variant="ghost" size="sm" className="text-primary gap-1">
          View all <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 pl-5">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
          <div className="min-w-[20px]" /> {/* Right padding */}
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

const EventCard: React.FC<{ event: typeof events[0] }> = ({ event }) => (
  <article className="min-w-[260px] max-w-[260px] bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover active:scale-[0.98]">
    <div className="relative h-28">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute top-2.5 left-2.5 ieee-badge text-[10px] px-2 py-0.5">
        {event.category}
      </span>
    </div>
    
    <div className="p-3.5">
      <h4 className="font-semibold text-foreground text-sm mb-2 line-clamp-2 font-display">
        {event.title}
      </h4>
      
      <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-1.5">
        <Calendar className="w-3 h-3" />
        <span>{event.date}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span>{event.location}</span>
        </div>
        
        <div className="flex items-center gap-1 text-[11px] text-primary font-medium">
          <Users className="w-3 h-3" />
          <span>{event.attendees}+</span>
        </div>
      </div>
    </div>
  </article>
);
