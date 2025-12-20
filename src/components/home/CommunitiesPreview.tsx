import React from 'react';
import { ArrowRight, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const communities = [
  {
    id: 1,
    name: 'IEEE CS Kerala',
    members: 2500,
    location: 'Statewide',
    color: 'bg-primary',
  },
  {
    id: 2,
    name: 'WIE Kerala',
    members: 1200,
    location: 'Statewide',
    color: 'bg-accent',
  },
  {
    id: 3,
    name: 'IEEE RAS',
    members: 800,
    location: 'Kochi Hub',
    color: 'bg-success',
  },
  {
    id: 4,
    name: 'IEEE PES',
    members: 650,
    location: 'TVM Hub',
    color: 'bg-warm',
  },
];

export const CommunitiesPreview: React.FC = () => {
  return (
    <section className="px-5 py-4 mb-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold font-display text-foreground">Active Communities</h3>
        <Button variant="ghost" size="sm" className="text-primary gap-1">
          Explore <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {communities.map((community, index) => (
          <CommunityCard key={community.id} community={community} index={index} />
        ))}
      </div>
    </section>
  );
};

const CommunityCard: React.FC<{ community: typeof communities[0]; index: number }> = ({ community, index }) => (
  <article
    className={cn(
      "bg-card rounded-xl p-4 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer animate-fade-up opacity-0",
      `stagger-${index + 1}`
    )}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold font-display text-sm", community.color)}>
        {community.name.split(' ').pop()?.charAt(0) || 'C'}
      </div>
      <h4 className="font-semibold text-foreground text-sm flex-1 font-display line-clamp-1">
        {community.name}
      </h4>
    </div>
    
    <div className="flex items-center justify-between text-xs text-muted-foreground">
      <div className="flex items-center gap-1">
        <Users className="w-3.5 h-3.5" />
        <span>{community.members.toLocaleString()}</span>
      </div>
      <div className="flex items-center gap-1">
        <MapPin className="w-3.5 h-3.5" />
        <span>{community.location}</span>
      </div>
    </div>
  </article>
);
