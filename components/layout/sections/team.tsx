import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQEOl7T4ouRFHQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726415824311?e=1736985600&v=beta&t=NWxiyxgunV8odaA-x8GLy8dpGGkMtyxK22a5czHFNQk",
      firstName: "Anurag",
      lastName: "Mishra",
      positions: ["Founder"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/anurag-mishra-2ba2b9329/",
        }
      ],
    },
    {
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQGhPxVoEFN4Lw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726726232944?e=1736985600&v=beta&t=XpwscfHSy_jv5Mljkxilpk1-tmCGlIpuJ0aicA2ACxw",
      firstName: "Aman",
      lastName: "Thoyaj",
      positions: ["Co-Founder"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/k-aman-thoyaj-krishna-794131245/",
        }
      ],
    },
    {
      imageUrl: "https://collegehive.in/docs/ass/images/rakshit_dp.png",
      firstName: "Rakshita",
      lastName: "Sanghvi",
      positions: ["Research Analyst"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/rakshita-ec/",
        },
        {
          name: "Github",
          url: "https://github.com/rakshitaec",
        },
      ],
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      firstName: "Ananya",
      lastName: "EC",
      positions: ["Position Title"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ananya-ec/",
        },
      ],
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      firstName: "Mayank",
      lastName: "Lastname",
      positions: ["Position Title"],
      socialNetworks: [
        {
          name: "Github",
          url: "https://github.com/mayank",
        },
      ],
    },
    {
      imageUrl: "https://collegehive.in/docs/ass/images/sanjay_dp.png",
      firstName: "Sanjay",
      lastName: "Bandaru",
      positions: ["Growth Specialist"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/habibur-ec/",
        },
        {
          name: "X",
          url: "https://x.com/habiburec",
        },
      ],
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1616805765352-beedbad46b2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      firstName: "Dolly",
      lastName: "Lastname",
      positions: ["Position Title"],
      socialNetworks: [
        {
          name: "Github",
          url: "https://github.com/dollylastname",
        },
      ],
    },
    {
      imageUrl: "https://ibb.co/9GsjD7v",
      firstName: "Aadya",
      lastName: "Mall",
      positions: [""],
      socialNetworks: [
        {
          name: "Github",
          url: "https://github.com/aadyaec",
        },
      ],
    },
    {
      imageUrl: "https://ibb.co/f8HN7rY",
      firstName: "Aditya",
      lastName: "Dev",
      positions: ["Position Title"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/aditya-ec/",
        },
      ],
    },
    {
      imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEuz5aATWbpxQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730843069126?e=1736985600&v=beta&t=nczF1b67lvQc0zdudBWS1sc2sTHqXFFxD0MVOK8CnMQ",
      firstName: "Aadiyaa",
      lastName: "Kurupp",
      positions: ["Content Creator"],
      socialNetworks: [
        {
          name: "X",
          url: "https://x.com/aadiyaaec",
        },
      ],
    },
  ];
  
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "X":
        return <XIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The Company Dream Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}
                  <span className="text-primary ml-2">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
