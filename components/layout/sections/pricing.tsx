import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Star, Zap, Users } from "lucide-react"; // Icons used in the plan definitions

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string | number;
  description: string;
  buttonText: string;
  buttonUrl: string;
  benefitList: string[];
  IconComponent: React.ElementType;
}

const plans: PlanProps[] = [
  {
    title: "Gold",
    popular: PopularPlan.NO,
    price: 3000,
    description: "Perfect for growing businesses",
    buttonText: "Get Started",
    buttonUrl: "https://forms.gle/743wg3GfPnZHV2bC6",
    benefitList: [
      "AI-powered business analytics",
      "Monthly mentor sessions",
      "Market trend reports",
      "Email support",
      "Basic API access",
    ],
    IconComponent: Star,
  },
  {
    title: "Platinum",
    popular: PopularPlan.YES,
    price: 4800,
    description: "For scaling companies",
    buttonText: "Get Started",
    buttonUrl: "https://forms.gle/9FD81pDuWRy8kmb99",
    benefitList: [
      "Advanced AI insights",
      "Weekly mentor sessions",
      "Custom market reports",
      "Priority support",
      "Full API access",
      "Dedicated account manager",
    ],
    IconComponent: Zap,
  },
  {
    title: "Enterprise",
    popular: PopularPlan.NO,
    price: "Custom",
    description: "For large organizations",
    buttonText: "Contact Us",
    buttonUrl: "https://forms.gle/eAiXNMDjQN5isHyB9",
    benefitList: [
      "Custom AI solutions",
      "Unlimited mentorship",
      "Custom integrations",
      "24/7 premium support",
      "White-label options",
      "Custom feature development",
    ],
    IconComponent: Users,
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get unlimited access
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose the plan that fits your business needs best.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, buttonUrl, benefitList, IconComponent }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <IconComponent className="text-primary text-3xl mb-2" />
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">
                    {typeof price === "number" ? `₹${price}` : price}
                  </span>
                  {typeof price === "number" && (
                    <span className="text-muted-foreground"> /month</span>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <a href={buttonUrl}>
                  <Button
                    variant={popular === PopularPlan.YES ? "default" : "secondary"}
                    className="w-full"
                  >
                    {buttonText}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
