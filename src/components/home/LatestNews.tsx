import React from 'react';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
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
  },
  {
    id: 2,
    title: 'New Student Branch Established in Kannur',
    excerpt: 'Expanding IEEE presence across Northern Kerala',
    time: '5 hours ago',
    trending: false,
    category: 'Announcement',
  },
  {
    id: 3,
    title: 'LINK Program Launches Mentorship Initiative',
    excerpt: 'Connect with industry experts and grow your career',
    time: '1 day ago',
    trending: true,
    category: 'Program',
  },
];

export const LatestNews: React.FC = () => {
  return (
    <section className="px-5 py-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold font-display text-foreground">Latest Updates</h3>
        <Button variant="ghost" size="sm" className="text-primary gap-1">
          More <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {newsItems.map((item, index) => (
          <NewsCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

const NewsCard: React.FC<{ item: typeof newsItems[0]; index: number }> = ({ item, index }) => (
  <article
    className={cn(
      "bg-card rounded-xl p-4 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5 cursor-pointer animate-fade-up opacity-0",
      `stagger-${index + 1}`
    )}
  >
    <div className="flex items-start gap-3">
      <div className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center shrink-0",
        item.trending ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
      )}>
        {item.trending ? <TrendingUp className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="ieee-badge text-[10px]">{item.category}</span>
          {item.trending && (
            <span className="text-[10px] text-accent font-medium">Trending</span>
          )}
        </div>
        
        <h4 className="font-semibold text-foreground text-sm mb-1 line-clamp-2 font-display">
          {item.title}
        </h4>
        
        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
          {item.excerpt}
        </p>
        
        <span className="text-[10px] text-muted-foreground">{item.time}</span>
      </div>
    </div>
  </article>
);
