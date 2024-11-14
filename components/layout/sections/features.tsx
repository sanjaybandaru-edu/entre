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
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Access Entreconnect from any device, allowing you to learn and connect on the go.",
  },
  {
    icon: "BadgeCheck",
    title: "Social Proof",
    description:
      "Join a network of trusted clients and successful startups that have benefited from Entreconnect’s support.",
  },
  {
    icon: "Goal",
    title: "Targeted Content",
    description:
      "Get relevant, actionable insights and resources tailored specifically for young entrepreneurs.",
  },
  {
    icon: "PictureInPicture",
    title: "Engaging Visuals",
    description:
      "Entreconnect’s interface is designed for clarity and ease, with visual elements that enhance your learning experience.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear Call to Action",
    description:
      "Straightforward pathways to resources, consultations, and community interactions ensure you get the support you need quickly.",
  },
  {
    icon: "Newspaper",
    title: "Informative Headline",
    description:
      "A concise overview of Entreconnect’s offerings helps you understand how we can support your startup journey from the outset.",
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
      Entreconnect combines technology, community, and expertise to empower early-stage student founders and give them the resources they need for success.
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
