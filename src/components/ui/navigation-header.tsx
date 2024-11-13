import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Zap } from 'lucide-react';

export function NavigationHeader() {
  const menuItems = [
    { href: '#features', label: 'Features' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-card"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              EntreConnect
            </span>
          </motion.div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex hover:bg-primary/10 hover:text-primary"
            >
              Log in
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}