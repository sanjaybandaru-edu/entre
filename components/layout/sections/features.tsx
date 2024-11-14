import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "UserCheck",
    title: "Industry-Specific Mentorship",
    description:
      "Connect with mentors who are experienced founders in your field, providing relevant, field-specific guidance to avoid common pitfalls and accelerate growth.",
  },
  {
    icon: "Briefcase",
    title: "Comprehensive Support",
    description:
      "Access a complete suite of business services, from market research to web development and financial planning, all on one platform to streamline your startup journey.",
  },
  {
    icon: "Users",
    title: "Community Networking",
    description:
      "Join a vibrant community of student founders, early-stage entrepreneurs, and industry experts to collaborate, share insights, and foster valuable partnerships.",
  },
  {
    icon: "BarChart2",
    title: "Data-Driven Insights",
    description:
      "Utilize data-driven market research, competitor analysis, and customer insights to make informed decisions and gain a strategic advantage in your industry.",
  },
  {
    icon: "DollarSign",
    title: "Scalable Pricing",
    description:
      "Choose from pricing plans tailored to your growth stage, with affordable options that allow you to scale support as your business grows.",
  },
  {
    icon: "GraduationCap",
    title: "Student-Focused Resources",
    description:
      "Benefit from resources and tools specifically tailored to student entrepreneurs, addressing unique challenges in balancing academics with business growth.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Entreconnect combines technology, community, and expertise to empower early-stage student founders and provide the tailored resources they need for success.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
