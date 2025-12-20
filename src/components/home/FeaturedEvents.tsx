import React from 'react';
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
];

export const FeaturedEvents: React.FC = () => {
  return (
    <section className="px-5 py-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold font-display text-foreground">Featured Events</h3>
        <Button variant="ghost" size="sm" className="text-primary gap-1">
          View all <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-5 px-5 snap-x snap-mandatory scrollbar-hide">
        {events.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
};

const EventCard: React.FC<{ event: typeof events[0]; index: number }> = ({ event, index }) => (
  <article
    className={cn(
      "min-w-[280px] bg-card rounded-2xl shadow-card overflow-hidden snap-start transition-all duration-300 hover:shadow-card-hover animate-fade-up opacity-0",
      `stagger-${index + 1}`
    )}
  >
    <div className="relative h-32">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <span className="absolute top-3 left-3 ieee-badge">
        {event.category}
      </span>
    </div>
    
    <div className="p-4">
      <h4 className="font-semibold text-foreground mb-2 line-clamp-2 font-display">
        {event.title}
      </h4>
      
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
        <Calendar className="w-3.5 h-3.5" />
        <span>{event.date}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <span>{event.location}</span>
        </div>
        
        <div className="flex items-center gap-1 text-xs text-primary">
          <Users className="w-3.5 h-3.5" />
          <span>{event.attendees}+</span>
        </div>
      </div>
    </div>
  </article>
);
