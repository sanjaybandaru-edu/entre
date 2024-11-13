import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';

const faqs = [
  {
    question: 'What makes EntreConnect different from other platforms?',
    answer: 'EntreConnect combines AI-powered analytics with human expertise, providing personalized insights and mentorship that evolve with your business needs.'
  },
  {
    question: 'How does the AI mentorship system work?',
    answer: 'Our AI analyzes your business data and market trends to provide tailored recommendations, while matching you with mentors who have relevant expertise in your industry.'
  },
  {
    question: 'What kind of businesses do you support?',
    answer: 'We support startups and SMEs across various industries, from tech and e-commerce to manufacturing and services, at any stage of their growth journey.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. Changes take effect at the start of the next billing cycle, and we"ll prorate any payments accordingly.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: '24/7 technical support, dedicated account managers for premium plans, and regular check-ins with our expert mentors to ensure you"re on track to meet your goals.'
  }
];

export function FAQSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="faq" className="py-24 bg-accent/20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our platform and services.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="p-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}