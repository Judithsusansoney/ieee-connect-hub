import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight, Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const newsItems = [
  {
    id: 1,
    title: 'IEEE Kerala Section Wins Outstanding Section Award',
    excerpt: 'Recognized for exceptional growth and community impact in 2023',
    time: '2 hours ago',
    trending: true,
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=300&h=200&fit=crop',
  },
  {
    id: 2,
    title: 'New Student Branch Established in Kannur',
    excerpt: 'Expanding IEEE presence across Northern Kerala',
    time: '5 hours ago',
    trending: false,
    category: 'Announcement',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=300&h=200&fit=crop',
  },
  {
    id: 3,
    title: 'LINK Program Launches Mentorship Initiative',
    excerpt: 'Connect with industry experts and grow your career',
    time: '1 day ago',
    trending: true,
    category: 'Program',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop',
  },
  {
    id: 4,
    title: 'Upcoming Elections for Student Activities Committee',
    excerpt: 'Nominations open for leadership positions',
    time: '2 days ago',
    trending: false,
    category: 'News',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop',
  },
];

export const LatestNews: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps',
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
        <h3 className="text-lg font-bold font-display text-foreground">Latest Updates</h3>
        <Button variant="ghost" size="sm" className="text-primary gap-1">
          More <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 pl-5">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
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

const NewsCard: React.FC<{ item: typeof newsItems[0] }> = ({ item }) => (
  <article className="min-w-[280px] max-w-[280px] bg-card rounded-xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover active:scale-[0.98]">
    <div className="relative h-24">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-2 left-2.5 flex items-center gap-2">
        <span className="ieee-badge text-[9px] px-1.5 py-0.5">{item.category}</span>
        {item.trending && (
          <span className="flex items-center gap-0.5 text-[9px] text-accent font-medium bg-accent/20 px-1.5 py-0.5 rounded-full">
            <TrendingUp className="w-2.5 h-2.5" />
            Trending
          </span>
        )}
      </div>
    </div>
    
    <div className="p-3.5">
      <h4 className="font-semibold text-foreground text-sm mb-1.5 line-clamp-2 font-display">
        {item.title}
      </h4>
      
      <p className="text-[11px] text-muted-foreground line-clamp-2 mb-2">
        {item.excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <Clock className="w-3 h-3" />
          {item.time}
        </span>
        <button className="flex items-center gap-0.5 text-[11px] text-primary font-medium">
          Read more <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  </article>
);
