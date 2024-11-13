import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Target, Heart, Trophy, Building2 } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'Empowering entrepreneurs with cutting-edge AI tools and expert mentorship to transform their vision into successful businesses.'
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'Innovation, integrity, and collaboration drive everything we do, ensuring the highest quality service for our clients.'
  },
  {
    icon: Trophy,
    title: 'Goals',
    description: 'To become the leading AI-powered platform for business growth, helping 100,000+ entrepreneurs by 2025.'
  },
  {
    icon: Building2,
    title: 'Community',
    description: 'A thriving ecosystem of founders, mentors, and industry experts working together to drive innovation.'
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

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            About EntreConnect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to revolutionize how entrepreneurs build and scale their businesses
            through AI-powered insights and expert guidance.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div key={value.title} variants={item}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-accent/20">
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5"
        >
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-6">Trusted by Industry Leaders</h3>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {['Microsoft', 'Google', 'Amazon', 'Meta'].map((company) => (
                <span key={company} className="text-lg font-semibold">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}