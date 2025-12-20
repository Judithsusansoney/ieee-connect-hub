import React, { useState } from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { Clock, TrendingUp, Bookmark, Share2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const tabs = ['All', 'Trending', 'Announcements', 'Achievements'];

const newsArticles = [
  {
    id: 1,
    title: 'IEEE Kerala Section Wins Outstanding Section Award for 2023',
    excerpt: 'The IEEE Kerala Section has been recognized with the prestigious Outstanding Section Award for exceptional growth, innovative programs, and significant community impact throughout 2023.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop',
    time: '2 hours ago',
    readTime: '4 min read',
    trending: true,
    category: 'Achievement',
    featured: true,
  },
  {
    id: 2,
    title: 'New Student Branch Established in Kannur Engineering College',
    excerpt: 'Expanding IEEE presence across Northern Kerala with the inauguration of a new student branch, bringing technical opportunities to over 3000 students.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=200&fit=crop',
    time: '5 hours ago',
    readTime: '3 min read',
    trending: false,
    category: 'Announcement',
    featured: false,
  },
  {
    id: 3,
    title: 'LINK Program Launches Revolutionary Mentorship Initiative',
    excerpt: 'Connect with industry experts, IEEE fellows, and experienced professionals through our new structured mentorship program designed for career growth.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop',
    time: '1 day ago',
    readTime: '5 min read',
    trending: true,
    category: 'Program',
    featured: false,
  },
  {
    id: 4,
    title: 'IEEE Kerala Hosts International Conference on Sustainable Technologies',
    excerpt: 'Over 500 researchers and industry leaders gathered for a three-day conference focusing on renewable energy and sustainable computing solutions.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
    time: '2 days ago',
    readTime: '6 min read',
    trending: false,
    category: 'Event',
    featured: false,
  },
];

const News: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const featuredArticle = newsArticles.find(a => a.featured);
  const regularArticles = newsArticles.filter(a => !a.featured);

  return (
    <MobileLayout>
      {/* Header */}
      <header className="bg-card px-5 pt-12 pb-4 border-b border-border/50">
        <h1 className="text-2xl font-bold font-display text-foreground mb-4">News & Updates</h1>
        
        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <div className="px-5 py-4 space-y-4">
        {/* Featured Article */}
        {featuredArticle && (
          <FeaturedNewsCard article={featuredArticle} />
        )}

        {/* Section Header */}
        <div className="flex items-center justify-between pt-2">
          <h2 className="text-lg font-bold font-display text-foreground">Latest Stories</h2>
          <Button variant="ghost" size="sm" className="text-primary gap-1">
            See all <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Regular Articles */}
        <div className="space-y-3">
          {regularArticles.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

const FeaturedNewsCard: React.FC<{ article: typeof newsArticles[0] }> = ({ article }) => (
  <article className="bg-card rounded-2xl shadow-card overflow-hidden animate-fade-up">
    <div className="relative h-48">
      <img 
        src={article.image} 
        alt={article.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      
      <div className="absolute top-4 left-4 flex gap-2">
        {article.trending && (
          <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-accent text-white">
            <TrendingUp className="w-3 h-3" /> Trending
          </span>
        )}
      </div>
      
      <div className="absolute bottom-4 left-4 right-4">
        <span className="ieee-badge bg-white/20 text-white backdrop-blur-sm mb-2 inline-block">
          {article.category}
        </span>
        <h3 className="text-white font-bold font-display text-xl line-clamp-2 mb-2">
          {article.title}
        </h3>
        <div className="flex items-center gap-3 text-white/80 text-xs">
          <span>{article.time}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </div>
    
    <div className="p-4">
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {article.excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <Button variant="ieee" size="sm">
          Read More
        </Button>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </article>
);

const NewsCard: React.FC<{ article: typeof newsArticles[0]; index: number }> = ({ article, index }) => (
  <article
    className={cn(
      "bg-card rounded-xl p-4 shadow-card flex gap-4 transition-all duration-300 hover:shadow-card-hover cursor-pointer animate-fade-up opacity-0",
      `stagger-${Math.min(index + 1, 4)}`
    )}
  >
    <img 
      src={article.image} 
      alt={article.title}
      className="w-24 h-24 rounded-lg object-cover shrink-0"
    />
    
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <span className="ieee-badge text-[10px]">{article.category}</span>
        {article.trending && (
          <TrendingUp className="w-3 h-3 text-accent" />
        )}
      </div>
      
      <h4 className="font-semibold text-foreground text-sm mb-2 line-clamp-2 font-display">
        {article.title}
      </h4>
      
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Clock className="w-3 h-3" />
        <span>{article.time}</span>
        <span>•</span>
        <span>{article.readTime}</span>
      </div>
    </div>
  </article>
);

export default News;
