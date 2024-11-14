import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

const aboutInfo = [
  {
    icon: "Target",
    title: "Our Mission",
    description:
      "To empower student founders by providing an accessible and robust platform that fosters innovation, builds connections, and accelerates business growth.",
  },
  {
    icon: "HeartHandshake",
    title: "Our Values",
    description:
      "Entrepreneurial spirit, inclusivity, integrity, and a commitment to sustainable, long-term success. We believe in nurturing potential and celebrating growth at every step.",
  },
  {
    icon: "Flag",
    title: "Our Goals",
    description:
      "To become the go-to community for aspiring entrepreneurs, offering resources, mentorship, and insights tailored to early-stage founders.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about-us" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        About Us
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Our Purpose and Vision
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        At Entreconnect, we’re committed to building a supportive ecosystem that
        brings together knowledge, resources, and community for aspiring
        entrepreneurs.
      </h3>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
        {aboutInfo.map(({ icon, title, description }) => (
          <Card key={title} className="bg-muted/60 dark:bg-card h-full">
            <CardHeader className="flex flex-col items-center">
              <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                <Icon
                  name={icon as keyof typeof icons}
                  size={32}
                  color="hsl(var(--primary))"
                  className="text-primary"
                />
              </div>
              <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-center">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
