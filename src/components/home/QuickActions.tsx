import React from 'react';
import { Calendar, MapPin, Users, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const actions = [
  { 
    icon: Calendar, 
    label: 'Events', 
    description: 'Find events',
    path: '/events',
    color: 'bg-primary/10 text-primary'
  },
  { 
    icon: MapPin, 
    label: 'Nearby', 
    description: 'Explore local',
    path: '/network',
    color: 'bg-accent/10 text-accent'
  },
  { 
    icon: Users, 
    label: 'Network', 
    description: 'Connect now',
    path: '/network',
    color: 'bg-success/10 text-success'
  },
  { 
    icon: BookOpen, 
    label: 'Resources', 
    description: 'Learn more',
    path: '/news',
    color: 'bg-warm/10 text-warm'
  },
];

export const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="px-5 py-4">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
        Quick Actions
      </h3>
      <div className="grid grid-cols-4 gap-3">
        {actions.map((action, index) => (
          <button
            key={action.label}
            onClick={() => navigate(action.path)}
            className={cn(
              "flex flex-col items-center gap-2 p-3 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 animate-fade-up opacity-0",
              `stagger-${index + 1}`
            )}
          >
            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", action.color)}>
              <action.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium text-foreground">{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
