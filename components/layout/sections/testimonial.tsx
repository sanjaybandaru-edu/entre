"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://example.com/user1.png",
    name: "Liam Hayes",
    userName: "Startup Founder - Tech Innovator",
    comment:
      "Entreconnect has been a game-changer for my startup journey. The mentorship sessions and consulting have been invaluable in turning my idea into a scalable business model. I couldn’t have done it alone!",
    rating: 5.0,
  },
  {
    image: "https://example.com/user2.png",
    name: "Olivia Patel",
    userName: "Entrepreneur & Student",
    comment:
      "As a student founder, Entreconnect provided me with the tools I needed to navigate early-stage challenges. The market research insights were spot-on, helping me understand my competition and refine my strategy.",
    rating: 4.9,
  },
  {
    image: "https://example.com/user3.png",
    name: "Mason Lee",
    userName: "Young Innovator in Health Tech",
    comment:
      "The community at Entreconnect has been incredibly supportive. I’ve gained both clients and friends. The events and networking opportunities opened doors I never thought possible!",
    rating: 5.0,
  },
  {
    image: "https://example.com/user4.png",
    name: "Emma Wu",
    userName: "Business Management Student",
    comment:
      "Entreconnect’s services gave me confidence to take my startup to the next level. The website development team made my vision come to life, and now my online presence is stronger than ever!",
    rating: 4.8,
  },
  {
    image: "https://example.com/user5.png",
    name: "Dr. Pavan Soni",
    userName: "Innovation Evangelist, Professor at IIM B and ISB Hyderabad",
    comment:
      "This is a great initiative towards shaping the lives of studentpreneurs. I would love joining this community.",
    rating: 5.0,
  },
  {
    image: "https://example.com/user6.png",
    name: "Rahul Khatri",
    userName: "Founder & CEO at AuraX",
    comment:
      "I never thought EntreConnect could be this great. The community is very good, Great work!",
    rating: 4.9,
  },

];


export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our 1000+ Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
