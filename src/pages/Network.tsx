import React, { useState } from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { MapPin, Users, Navigation, Search, Filter, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const locations = ['All Kerala', 'Kochi', 'Trivandrum', 'Calicut', 'Kannur'];

const communities = [
  {
    id: 1,
    name: 'IEEE Computer Society Kerala',
    shortName: 'CS',
    members: 2500,
    location: 'Kochi Hub',
    distance: '2.3 km',
    description: 'Advancing computing as a science and profession',
    color: 'bg-primary',
    active: true,
  },
  {
    id: 2,
    name: 'Women in Engineering Kerala',
    shortName: 'WIE',
    members: 1200,
    location: 'Trivandrum',
    distance: '5.1 km',
    description: 'Inspiring women engineers and scientists worldwide',
    color: 'bg-accent',
    active: true,
  },
  {
    id: 3,
    name: 'IEEE Robotics & Automation',
    shortName: 'RAS',
    members: 800,
    location: 'Kochi',
    distance: '3.7 km',
    description: 'Pioneering robotics and automation technologies',
    color: 'bg-success',
    active: false,
  },
  {
    id: 4,
    name: 'IEEE Power & Energy Society',
    shortName: 'PES',
    members: 650,
    location: 'Trivandrum',
    distance: '6.2 km',
    description: 'Leading sustainable energy solutions',
    color: 'bg-warm',
    active: true,
  },
  {
    id: 5,
    name: 'Young Professionals Kerala',
    shortName: 'YP',
    members: 1800,
    location: 'Statewide',
    distance: 'Multiple',
    description: 'Empowering the next generation of IEEE leaders',
    color: 'bg-ieee-blue-light',
    active: true,
  },
];

const upcomingMeetups = [
  {
    id: 1,
    title: 'CS Kerala Monthly Meetup',
    date: 'Tomorrow, 6:00 PM',
    location: 'TechPark, Kochi',
    attendees: 45,
  },
  {
    id: 2,
    title: 'WIE Networking Event',
    date: 'Jan 20, 4:00 PM',
    location: 'UST Campus, TVM',
    attendees: 32,
  },
];

const Network: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState('All Kerala');

  return (
    <MobileLayout>
      {/* Header */}
      <header className="bg-card px-5 pt-12 pb-4 border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold font-display text-foreground">Network</h1>
          <Button variant="ieee" size="sm" className="gap-2">
            <Navigation className="w-4 h-4" />
            Near Me
          </Button>
        </div>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search communities, chapters..."
            className="w-full h-12 pl-11 pr-4 bg-muted rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Location Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setActiveLocation(location)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-2",
                activeLocation === location
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              <MapPin className="w-3 h-3" />
              {location}
            </button>
          ))}
        </div>
      </header>

      <div className="px-5 py-4 space-y-6">
        {/* Upcoming Meetups */}
        <section>
          <h2 className="text-lg font-bold font-display text-foreground mb-3 flex items-center gap-2">
            <Zap className="w-5 h-5 text-accent" />
            Happening Soon
          </h2>
          <div className="space-y-3">
            {upcomingMeetups.map((meetup, index) => (
              <MeetupCard key={meetup.id} meetup={meetup} index={index} />
            ))}
          </div>
        </section>

        {/* Communities */}
        <section>
          <h2 className="text-lg font-bold font-display text-foreground mb-3">
            Communities Near You
          </h2>
          <div className="space-y-3">
            {communities.map((community, index) => (
              <CommunityCard key={community.id} community={community} index={index} />
            ))}
          </div>
        </section>
      </div>
    </MobileLayout>
  );
};

const MeetupCard: React.FC<{ meetup: typeof upcomingMeetups[0]; index: number }> = ({ meetup, index }) => (
  <article
    className={cn(
      "bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-4 transition-all duration-300 hover:shadow-card animate-fade-up opacity-0",
      `stagger-${index + 1}`
    )}
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold text-foreground font-display mb-1">{meetup.title}</h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>{meetup.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {meetup.location}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-sm font-medium text-primary">
        <Users className="w-4 h-4" />
        <span>{meetup.attendees}</span>
      </div>
    </div>
  </article>
);

const CommunityCard: React.FC<{ community: typeof communities[0]; index: number }> = ({ community, index }) => (
  <article
    className={cn(
      "bg-card rounded-xl p-4 shadow-card transition-all duration-300 hover:shadow-card-hover cursor-pointer animate-fade-up opacity-0",
      `stagger-${Math.min(index + 1, 4)}`
    )}
  >
    <div className="flex items-start gap-4">
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold font-display text-lg shrink-0",
        community.color
      )}>
        {community.shortName}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-foreground font-display text-sm line-clamp-1">
            {community.name}
          </h3>
          {community.active && (
            <span className="w-2 h-2 rounded-full bg-success animate-pulse-soft" />
          )}
        </div>
        
        <p className="text-xs text-muted-foreground line-clamp-1 mb-2">
          {community.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {community.members.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {community.location}
            </span>
          </div>
          <span className="text-primary font-medium">{community.distance}</span>
        </div>
      </div>
    </div>
    
    <div className="mt-3 flex gap-2">
      <Button variant="ieee" size="sm" className="flex-1">
        Join
      </Button>
      <Button variant="outline-ieee" size="sm" className="flex-1">
        View Details
      </Button>
    </div>
  </article>
);

export default Network;
