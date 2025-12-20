import React from 'react';
import { MobileLayout } from '@/components/layout/MobileLayout';
import { 
  User, Settings, Bell, Shield, HelpCircle, LogOut, 
  ChevronRight, Award, Calendar, Users, Star, Edit2 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Events', value: '12', icon: Calendar },
  { label: 'Communities', value: '5', icon: Users },
  { label: 'Points', value: '850', icon: Star },
];

const menuItems = [
  { icon: User, label: 'Edit Profile', description: 'Update your personal information' },
  { icon: Bell, label: 'Notifications', description: 'Manage your alerts and updates' },
  { icon: Shield, label: 'Privacy & Security', description: 'Control your data and access' },
  { icon: HelpCircle, label: 'Help & Support', description: 'Get assistance and FAQs' },
];

const Profile: React.FC = () => {
  return (
    <MobileLayout>
      {/* Header */}
      <header className="gradient-hero text-primary-foreground px-5 pt-12 pb-8 rounded-b-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold font-display">Profile</h1>
            <Button variant="glass" size="icon" className="bg-white/10 hover:bg-white/20 border-0">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Profile Card */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                <User className="w-10 h-10 text-white/80" />
              </div>
              <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-accent flex items-center justify-center shadow-lg">
                <Edit2 className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl font-bold font-display mb-1">IEEE Member</h2>
              <p className="text-sm text-white/70 mb-2">Kerala Section</p>
              <div className="flex items-center gap-2">
                <span className="ieee-badge bg-white/20 text-white">
                  <Award className="w-3 h-3" /> Active Member
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-5 py-4 space-y-6">
        {/* Stats */}
        <section className="bg-card rounded-2xl p-4 shadow-card -mt-6 relative z-20 animate-fade-up">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xl font-bold font-display text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Membership Card */}
        <section className="animate-fade-up stagger-1 opacity-0">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
            Membership
          </h3>
          <div className="gradient-primary rounded-2xl p-5 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center font-bold font-display">
                  IEEE
                </div>
                <div>
                  <p className="font-bold font-display">IEEE Kerala Section</p>
                  <p className="text-xs text-white/70">Member since 2022</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">Member ID</span>
                <span className="font-mono font-semibold">98765432</span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="animate-fade-up stagger-2 opacity-0">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
            Settings
          </h3>
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            {menuItems.map((item, index) => (
              <button
                key={item.label}
                className={cn(
                  "w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors",
                  index !== menuItems.length - 1 && "border-b border-border/50"
                )}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </section>

        {/* Sign Out */}
        <section className="pb-4 animate-fade-up stagger-3 opacity-0">
          <Button variant="outline" className="w-full gap-2 text-destructive border-destructive/30 hover:bg-destructive/10">
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </section>
      </div>
    </MobileLayout>
  );
};

export default Profile;
