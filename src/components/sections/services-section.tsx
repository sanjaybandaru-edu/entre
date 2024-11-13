import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Users, LineChart, Search, FileText, Globe } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Expert Mentoring',
    description: 'One-on-one guidance from industry experts to help you navigate challenges and accelerate growth.',
    features: ['Personalized Sessions', 'Goal Setting', 'Progress Tracking']
  },
  {
    icon: LineChart,
    title: 'Business Consulting',
    description: 'Strategic consulting services to optimize your operations and maximize profitability.',
    features: ['Strategy Development', 'Process Optimization', 'Growth Planning']
  },
  {
    icon: Search,
    title: 'Market Research',
    description: 'Data-driven insights to understand your market and make informed decisions.',
    features: ['Competitor Analysis', 'Market Trends', 'Consumer Insights']
  },
  {
    icon: FileText,
    title: 'Business Reports',
    description: 'Comprehensive reports with actionable insights for your business growth.',
    features: ['Performance Analytics', 'Growth Metrics', 'Action Plans']
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom website solutions to establish your digital presence and reach more customers.',
    features: ['Responsive Design', 'SEO Optimization', 'E-commerce Solutions']
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-24 bg-accent/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in today's competitive landscape.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}