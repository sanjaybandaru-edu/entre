import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    bio: 'Former Product Lead at Google with 15+ years of experience in AI and ML.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Jane Smith',
    role: 'CTO & Co-founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'AI researcher and tech entrepreneur with multiple successful exits.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Product',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    bio: 'Product strategist specializing in AI-driven business solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry experts and innovators working together to transform the future of business.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={item}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}