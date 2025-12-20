import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

const stories = [
  {
    id: 1,
    name: 'IEEE Kerala',
    avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop',
    hasNew: true,
    isLive: false,
  },
  {
    id: 2,
    name: 'WIE Kerala',
    avatar: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=100&h=100&fit=crop',
    hasNew: true,
    isLive: true,
  },
  {
    id: 3,
    name: 'CS Chapter',
    avatar: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=100&h=100&fit=crop',
    hasNew: true,
    isLive: false,
  },
  {
    id: 4,
    name: 'RAS Kochi',
    avatar: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=100&h=100&fit=crop',
    hasNew: false,
    isLive: false,
  },
  {
    id: 5,
    name: 'PES TVM',
    avatar: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=100&h=100&fit=crop',
    hasNew: true,
    isLive: false,
  },
  {
    id: 6,
    name: 'SIGHT Kerala',
    avatar: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=100&h=100&fit=crop',
    hasNew: true,
    isLive: false,
  },
];

export const StoriesCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  return (
    <section className="py-3">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 pl-5">
          {/* Add story button */}
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-16 h-16 rounded-full bg-muted/50 border-2 border-dashed border-muted-foreground/30 flex items-center justify-center">
              <span className="text-2xl text-muted-foreground">+</span>
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">Add Story</span>
          </div>
          
          {stories.map((story) => (
            <StoryItem key={story.id} story={story} />
          ))}
          <div className="min-w-[20px]" />
        </div>
      </div>
    </section>
  );
};

const StoryItem: React.FC<{ story: typeof stories[0] }> = ({ story }) => (
  <div className="flex flex-col items-center gap-1.5">
    <div className={cn(
      "relative w-16 h-16 rounded-full p-0.5",
      story.hasNew 
        ? "bg-gradient-to-tr from-primary via-accent to-warm" 
        : "bg-muted-foreground/30"
    )}>
      <div className="w-full h-full rounded-full bg-background p-0.5">
        <img 
          src={story.avatar} 
          alt={story.name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      {story.isLive && (
        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white bg-accent px-1.5 py-0.5 rounded-sm uppercase">
          Live
        </span>
      )}
    </div>
    <span className="text-[10px] text-foreground font-medium text-center w-16 truncate">
      {story.name}
    </span>
  </div>
);
