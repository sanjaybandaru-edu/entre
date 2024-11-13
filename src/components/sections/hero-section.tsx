import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

const benefits = [
  'AI-Powered Business Analytics',
  'Expert Mentorship Network',
  'Real-time Market Insights',
];

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 overflow-hidden gradient-bg">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6"
            >
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Revolutionary AI Platform</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Transform Your Business Vision Into Reality
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Join thousands of entrepreneurs who've accelerated their growth with our
              AI-powered platform and expert mentorship network.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="Business Meeting"
                className="rounded-3xl shadow-2xl relative z-10 glass-card p-1"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl shadow-lg z-20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">500+ Active Users</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}