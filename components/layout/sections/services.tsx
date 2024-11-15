import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro?: ProService;
  description: string;
}

const services: ServiceProps[] = [
  {
    title: 'Expert Mentorship',
    description: 'Receive personalized guidance from seasoned industry mentors to overcome challenges and accelerate growth.',
  },
  {
    title: 'Strategic Business Consulting',
    description: 'Leverage strategic insights to enhance operational efficiency and drive sustainable profitability.',
  },
  {
    title: 'Comprehensive Market Research',
    description: 'Utilize data-driven market insights for well-informed business decisions.',
  },
  {
    title: 'In-Depth Business Reports',
    description: 'Receive detailed reports that provide actionable insights for scalable growth.',
  },
  {
    title: 'Professional Web Development',
    description: 'Develop custom, responsive websites to enhance your digital footprint and customer reach.',
  },
  {
    title: 'Business Model Canvas & Reports',
    description: 'Access tools to build a comprehensive Business Model Canvas and receive detailed, compiled reports for strategic planning.',
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Grow Your Business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <div className="flex items-center mb-4">
                <div>
                  <CardTitle>{title}</CardTitle>
                  {pro === ProService.YES && (
                    <Badge
                      variant="secondary"
                      className="ml-2"
                    >
                      PRO
                    </Badge>
                  )}
                </div>
              </div>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
