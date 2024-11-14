import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Handshake",
    title: "Build Valuable Connections",
    description:
      "Connect with experienced mentors, industry experts, and fellow entrepreneurs to grow your network and gain invaluable insights.",
  },
  {
    icon: "GraduationCap",
    title: "Learn Essential Skills",
    description:
      "Access tailored guidance and resources on business fundamentals, market research, and development to accelerate your startup journey.",
  },
  {
    icon: "Rocket",
    title: "Accelerate Your Startup",
    description:
      "Receive personalized consulting to refine your ideas, improve strategies, and take your startup from concept to execution faster.",
  },
  {
    icon: "Lightbulb",
    title: "Innovate with Confidence",
    description:
      "Test your ideas in a supportive environment and get constructive feedback to ensure your business concepts are strong and viable.",
  },
];


export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
          Entreconnect is designed to be your all-in-one platform for startup success, offering student founders the tools, guidance, and community needed to thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
