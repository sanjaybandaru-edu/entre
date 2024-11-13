import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Users } from 'lucide-react';

const plans = [
  {
    name: 'Gold',
    icon: Star,
    price: 3000,
    description: 'Perfect for growing businesses',
    features: [
      'AI-powered business analytics',
      'Monthly mentor sessions',
      'Market trend reports',
      'Email support',
      'Basic API access'
    ]
  },
  {
    name: 'Platinum',
    icon: Zap,
    price: 4800,
    description: 'For scaling companies',
    features: [
      'Advanced AI insights',
      'Weekly mentor sessions',
      'Custom market reports',
      'Priority support',
      'Full API access',
      'Dedicated account manager'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    icon: Users,
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Custom AI solutions',
      'Unlimited mentorship',
      'Custom integrations',
      '24/7 premium support',
      'White-label options',
      'Custom feature development'
    ]
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

export function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include core AI features.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={item}>
              <Card className={`p-8 h-full hover:shadow-lg transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-lg scale-105' : ''
              }`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <plan.icon className={`w-8 h-8 ${
                    plan.popular ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                  </span>
                  {typeof plan.price === 'number' && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-secondary hover:bg-secondary/90'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}