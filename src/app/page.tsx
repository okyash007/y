import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <div>
          <p className="text-lg font-medium text-primary/80">
            Hi, I’m{" "}
            <span className="text-[100px] font-semibold max-sm:text-[70px] leading-[0.7] font-brunelis pr-1 text-primary drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              Yash Verma
            </span>
            , a Software Engineer passionate about building scalable web
            applications. I specialize in{" "}
            <span className="relative z-10">
              <HoverCard openDelay={10} closeDelay={100}>
                <HoverCardTrigger>React.js, </HoverCardTrigger>
                <HoverCardContent className="flex w-64 flex-col gap-0.5">
                  <div className="font-semibold">@nextjs</div>
                  <div>
                    The React Framework – created and maintained by @vercel.
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    Joined December 2021
                  </div>
                </HoverCardContent>
              </HoverCard>
            </span>{" "}
            <span className="relative z-10">
              <HoverCard openDelay={10} closeDelay={100}>
                <HoverCardTrigger>Next.js, </HoverCardTrigger>
                <HoverCardContent className="flex w-64 flex-col gap-0.5">
                  <div className="font-semibold">@nextjs</div>
                  <div>
                    The React Framework – created and maintained by @vercel.
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    Joined December 2021
                  </div>
                </HoverCardContent>
              </HoverCard>
            </span>{" "}
            <span className="relative z-10">
              <HoverCard openDelay={10} closeDelay={100}>
                <HoverCardTrigger>Node.js, </HoverCardTrigger>
                <HoverCardContent className="flex w-64 flex-col gap-0.5">
                  <div className="font-semibold">@nextjs</div>
                  <div>
                    The React Framework – created and maintained by @vercel.
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    Joined December 2021
                  </div>
                </HoverCardContent>
              </HoverCard>
            </span>{" "}
            and{" "}
            <span className="relative z-10">
              <HoverCard openDelay={10} closeDelay={100}>
                <HoverCardTrigger>Go, </HoverCardTrigger>
                <HoverCardContent className="flex w-64 flex-col gap-0.5">
                  <div className="font-semibold">@nextjs</div>
                  <div>
                    The React Framework – created and maintained by @vercel.
                  </div>
                  <div className="text-muted-foreground mt-1 text-xs">
                    Joined December 2021
                  </div>
                </HoverCardContent>
              </HoverCard>
            </span>
            focusing on clean architecture and performance. I enjoy turning
            complex problems into simple, elegant solutions.
          </p>
        </div>
        <div className="mt-10">
          <p className="text-2xl font-medium mb-2">Some of my Projects</p>
          <div className="flex gap-4 max-md:flex-col">
            <Card className="p-4">
              <CardContent className="px-0">
                <div>
                  <div className="flex gap-3">
                    <div className="border border-primary/20 rounded-md w-fit h-fit min-w-12 aspect-square">
                      <Image
                        className="rounded-md"
                        src="/sessionstory_logo.svg"
                        alt="Peeps"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div>
                      <p className="text-3xl font-semibold leading-[0.8]">
                        SessionStory
                      </p>
                      <p className="text-primary/50 text-sm mt-2">
                        Deep dive into user experiences with high-fidelity
                        session replays. Effortlessly understand user journeys,
                        reproduce bugs instantly without guesswork, and share
                        actionable insights to build better products.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Link href="https://sessionstory.co">
                          <Button
                            className="h-8 font-medium cursor-pointer"
                            variant="secondary"
                          >
                            sessionstory.co
                            <ArrowUpRight className="" strokeWidth={3} />
                          </Button>
                        </Link>
                        <Link href="https://player.sessionstory.co/session_1770393543671_mmr5l3l">
                          <Button
                            className="h-8 font-medium cursor-pointer"
                            variant="secondary"
                          >
                            Player Demo
                            <Play className="" strokeWidth={3} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p>Card Content</p> */}
              </CardContent>
            </Card>
            <Card className="p-4">
              <CardContent className="px-0">
                <div>
                  <div className="flex gap-3">
                    <div className="border-2 border-primary w-fit h-fit min-w-12 aspect-square rotate-3 shadow-[2px_2px_0px_0px_var(--primary)] bg-white">
                      <Image
                        className=""
                        src="/potatopay_logo.svg"
                        alt="Peeps"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div>
                      <p className="text-3xl font-semibold leading-[0.8]">
                        PotatoPay
                      </p>
                      <p className="text-primary/50 text-sm mt-2">
                        PotatoPay is a dedicated tipping platform designed for
                        creators. It enables users to customize their tip pages
                        and manage their earnings, with the entire experience
                        revolving around seamless tipping and creator support.
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Link href="https://potatopay.co">
                          <Button
                            className="h-8 font-medium cursor-pointer"
                            variant="secondary"
                          >
                            potatopay.co
                            <ArrowUpRight className="" strokeWidth={3} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p>Card Content</p> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* <div>
        <CrowdCanvas
          src="https://skiper-ui.com/images/peeps/all-peeps.png"
          rows={5}
          cols={7}
        />
      </div> */}
    </>
  );
};

export default page;

export const dynamic = "force-static";
