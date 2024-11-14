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
    question: "What types of services does EntreConnect offer?",
    answer: "EntreConnect offers a range of services tailored for early-stage founders, including personalized mentorship, strategic consulting, in-depth market research, business reporting, and website development.",
    value: "item-1",
  },
  {
    question: "How can EntreConnect help me grow my startup?",
    answer: "We provide resources to guide you from ideation to launch, with expert mentorship, strategic planning, and insights into market trends, all designed to accelerate your startup's growth.",
    value: "item-2",
  },
  {
    question: "What makes EntreConnect’s mentorship program unique?",
    answer: "Our mentorship program connects you with experienced founders in your specific field, ensuring relevant, industry-specific advice and guidance that can be applied directly to your business.",
    value: "item-3",
  },
  {
    question: "What does the market research service include?",
    answer: "Our market research includes competitor benchmarking, industry trend analysis, and customer behavior insights, helping you make informed business decisions based on data-driven insights.",
    value: "item-4",
  },
  {
    question: "Can EntreConnect help with creating a website for my startup?",
    answer: "Yes, we offer web development services that focus on creating mobile-friendly, SEO-optimized websites with e-commerce capabilities, helping you establish a strong digital presence.",
    value: "item-5",
  },
  {
    question: "What is included in a business report?",
    answer: "Business reports cover key performance analysis, growth opportunities, and strategic recommendations, providing you with actionable insights to support sustainable growth.",
    value: "item-6",
  },
  {
    question: "How do I know which membership plan is right for me?",
    answer: "Our Gold plan is ideal for early-stage guidance, while the Platinum plan provides advanced mentorship, customized research, and in-depth strategic support. Contact us for a consultation if you need further help choosing.",
    value: "item-7",
  },
  {
    question: "Do I need to be a student to join EntreConnect?",
    answer: "No, while we primarily support student entrepreneurs, EntreConnect welcomes early-stage founders from diverse backgrounds who are seeking mentorship and guidance.",
    value: "item-8",
  },
  {
    question: "Are mentorship sessions one-on-one or group-based?",
    answer: "We offer both options. Individual mentorship sessions are available for tailored advice, while group workshops allow founders to learn collectively from mentors and peers.",
    value: "item-9",
  },
  {
    question: "How does EntreConnect support ongoing progress and development?",
    answer: "We provide regular check-ins and progress reviews as part of our mentorship and consulting services, ensuring that your startup continues to grow and overcome challenges effectively.",
    value: "item-10",
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
