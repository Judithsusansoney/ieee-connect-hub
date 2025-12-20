import React, { useState } from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Search, Calendar, MapPin, Users, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const categories = ['All', 'Conferences', 'Workshops', 'Webinars', 'Meetups'];

const events = [
  {
    id: 1,
    title: 'IEEE Kerala Tech Summit 2024',
    date: 'Jan 15-17, 2024',
    time: '9:00 AM - 6:00 PM',
    location: 'Grand Hyatt, Kochi',
    attendees: 500,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
    category: 'Conferences',
    featured: true,
  },
  {
    id: 2,
    title: 'AI & Machine Learning Workshop',
    date: 'Jan 22, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'TCS Campus, Trivandrum',
    attendees: 120,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop',
    category: 'Workshops',
    featured: false,
  },
  {
    id: 3,
    title: 'Student Branch Leadership Camp',
    date: 'Feb 3-5, 2024',
    time: 'Full Day',
    location: 'NIT Calicut',
    attendees: 200,
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=200&fit=crop',
    category: 'Meetups',
    featured: false,
  },
  {
    id: 4,
    title: 'Quantum Computing Webinar',
    date: 'Feb 10, 2024',
    time: '7:00 PM - 9:00 PM',
    location: 'Online Event',
    attendees: 350,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop',
    category: 'Webinars',
    featured: false,
  },
];

const Events: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(e => e.category === activeCategory);

  return (
    <MobileLayout>
      {/* Header */}
      <header className="bg-card px-5 pt-12 pb-4 border-b border-border/50">
        <h1 className="text-2xl font-bold font-display text-foreground mb-4">Discover Events</h1>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events, topics, locations..."
            className="w-full h-12 pl-11 pr-4 bg-muted rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* Events List */}
      <div className="px-5 py-4 space-y-4">
        {filteredEvents.map((event, index) => (
          <EventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </MobileLayout>
  );
};

const EventCard: React.FC<{ event: typeof events[0]; index: number }> = ({ event, index }) => (
  <article
    className={cn(
      "bg-card rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover animate-fade-up opacity-0",
      `stagger-${Math.min(index + 1, 4)}`
    )}
  >
    <div className="relative h-36">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="ieee-badge bg-white/20 text-white backdrop-blur-sm">
          {event.category}
        </span>
        {event.featured && (
          <span className="ieee-badge bg-accent text-white">
            Featured
          </span>
        )}
      </div>
      
      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="text-white font-bold font-display text-lg line-clamp-2">
          {event.title}
        </h3>
      </div>
    </div>
    
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{event.date}</span>
        </div>
        <span className="text-xs">{event.time}</span>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-accent" />
          <span className="line-clamp-1">{event.location}</span>
        </div>
        
        <div className="flex items-center gap-1 text-sm font-medium text-primary">
          <Users className="w-4 h-4" />
          <span>{event.attendees}+</span>
        </div>
      </div>
      
      <Button variant="ieee" className="w-full">
        Register Now
      </Button>
    </div>
  </article>
);

export default Events;
