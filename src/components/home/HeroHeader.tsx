import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroHeader: React.FC = () => {
  return (
    <header className="gradient-hero text-primary-foreground px-5 pt-12 pb-8 rounded-b-3xl relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
      
      <div className="relative z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <span className="text-lg font-bold font-display">IEEE</span>
            </div>
            <div>
              <h1 className="text-lg font-bold font-display">LINK Connect</h1>
              <p className="text-xs text-white/70">Kerala Section</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="glass" size="icon" className="bg-white/10 hover:bg-white/20 border-0">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="icon" className="bg-white/10 hover:bg-white/20 border-0 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full border-2 border-ieee-blue" />
            </Button>
          </div>
        </div>

        {/* Welcome message */}
        <div className="mb-6">
          <p className="text-white/70 text-sm mb-1">Welcome back,</p>
          <h2 className="text-2xl font-bold font-display">Discover IEEE Kerala</h2>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-3">
          <StatCard number="150+" label="Events" />
          <StatCard number="45" label="Communities" />
          <StatCard number="12K+" label="Members" />
        </div>
      </div>
    </header>
  );
};

const StatCard: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
    <p className="text-xl font-bold font-display">{number}</p>
    <p className="text-[10px] text-white/70 uppercase tracking-wider">{label}</p>
  </div>
);
