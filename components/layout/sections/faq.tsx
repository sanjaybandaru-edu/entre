import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const faqs: FAQProps[] = [
  {
    question: "What makes EntreConnect different from other platforms?",
    answer: "EntreConnect combines AI-powered analytics with human expertise, providing personalized insights and mentorship that evolve with your business needs.",
    value: "item-1",
  },
  {
    question: "How does the AI mentorship system work?",
    answer: "Our AI analyzes your business data and market trends to provide tailored recommendations, while matching you with mentors who have relevant expertise in your industry.",
    value: "item-2",
  },
  {
    question: "What kind of businesses do you support?",
    answer: "We support startups and SMEs across various industries, from tech and e-commerce to manufacturing and services, at any stage of their growth journey.",
    value: "item-3",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: 'Yes, you can change your plan at any time. Changes take effect at the start of the next billing cycle, and we\'ll prorate any payments accordingly.',
    value: "item-4",
  },
  {
    question: "What kind of support do you offer?",
    answer: "24/7 technical support, dedicated account managers for premium plans, and regular check-ins with our expert mentors to ensure you're on track to meet your goals.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {faqs.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
