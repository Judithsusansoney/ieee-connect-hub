import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroHeader: React.FC = () => {
  return (
    <header className="gradient-hero text-primary-foreground px-5 pt-12 pb-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
      
      <div className="relative z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <span className="text-sm font-bold font-display">IEEE</span>
            </div>
            <div>
              <h1 className="text-lg font-bold font-display">LINK Connect</h1>
              <p className="text-[10px] text-white/70">Kerala Section</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="glass" size="icon" className="w-9 h-9 bg-white/10 hover:bg-white/20 border-0">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="icon" className="w-9 h-9 bg-white/10 hover:bg-white/20 border-0 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
