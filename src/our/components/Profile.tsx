import { Button } from "@/components/ui/button";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import VerifyEmail from "./VerifyEmail";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAppStore } from "@/lib/store";
import { FaApple, FaWindows, FaLinux, FaAndroid } from "react-icons/fa";
import { HiDevicePhoneMobile } from "react-icons/hi2";

const ProfileCard = ({
  user,
}: {
  user: { email: string; name: string; displayId: string } | null;
}) => {
  return (
    <div className="flex items-center gap-4 rounded-lg">
      <div className="relative">
        <Avatar className="size-12 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
          <AvatarImage className="object-cover" src="" />
          <AvatarFallback>
            {user?.name?.charAt(0)?.toUpperCase() || "?"}
          </AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-1 -right-1 size-4 bg-green-500 border-2 border-background rounded-full"></div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold text-foreground truncate">
            {user?.name || "Unknown User"}
          </p>
        </div>
        <p className="text-sm text-muted-foreground font-mono">
          #{user?.displayId || "000000"}
        </p>
      </div>
    </div>
  );
};

const DeviceTypeSection = () => {
  const [selectedDevice, setSelectedDevice] = useState<string>("mac");

  const devices = [
    {
      id: "iphone",
      name: "iPhone",
      icon: HiDevicePhoneMobile,
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: "android",
      name: "Android",
      icon: FaAndroid,
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
    },
    {
      id: "mac",
      name: "Mac",
      icon: FaApple,
      color: "text-gray-600 dark:text-gray-400",
      bgColor: "bg-gray-50 dark:bg-gray-950/20",
      borderColor: "border-gray-200 dark:border-gray-800",
    },
    {
      id: "windows",
      name: "Windows",
      icon: FaWindows,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
      id: "linux",
      name: "Linux",
      icon: FaLinux,
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">Device Type</h3>
        <div className="flex items-center gap-1">
          <div className="size-2 bg-green-500 rounded-full"></div>
          <span className="text-xs text-muted-foreground">Connected</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {devices.map((device) => {
          const Icon = device.icon;
          const isSelected = selectedDevice === device.id;

          return (
            <button
              key={device.id}
              onClick={() => setSelectedDevice(device.id)}
              className={`
                relative p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105 group
                ${
                  isSelected
                    ? `${device.bgColor} ${device.borderColor} shadow-md`
                    : "bg-secondary/30 border-border/50 hover:border-border hover:bg-secondary/50"
                }
              `}
            >
              <div className="flex flex-col items-center gap-2">
                <Icon
                  className={`size-5 transition-colors duration-200 ${
                    isSelected
                      ? device.color
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                />
                <span
                  className={`text-xs font-medium transition-colors duration-200 ${
                    isSelected
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {device.name}
                </span>
              </div>

              {isSelected && (
                <div className="absolute -top-1 -right-1 size-4 bg-primary border-2 border-background rounded-full flex items-center justify-center">
                  <div className="size-1.5 bg-primary-foreground rounded-full"></div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <p className="text-xs text-muted-foreground/70 leading-relaxed">
        Your current device type helps us optimize your experience.
      </p>
    </div>
  );
};

const Profile = () => {
  const { device } = useAppStore();
  const user = device?.user;
  const searchParams = useSearchParams();
  const isVerifyEmailModal = searchParams.get("verify_email_modal") === "true";
  const [isDialogOpen, setIsDialogOpen] = useState(
    isVerifyEmailModal ? true : false
  );

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" size="lg" className="max-w-10 h-10">
            <RiVerifiedBadgeFill className="!size-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="center"
          className="w-[350px] mx-4 mt-2"
        >
          <div className="p-3 space-y-6">
            <div>
              <ProfileCard user={user || null} />
            </div>

            <div className="space-y-3">
              <div className="relative">
                <div className="bg-secondary/50 border border-border/50 rounded-lg p-3 pr-20">
                  <p className="text-sm text-foreground truncate font-mono">
                    {user?.email || "No email provided"}
                  </p>
                </div>
                <Button
                  onClick={() => setIsDialogOpen(true)}
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 "
                >
                  Verify
                </Button>
              </div>

              <p className="text-xs text-muted-foreground/70 leading-relaxed">
                Verify your email to access all features and secure your
                account.
              </p>
            </div>

            <div className="border-t border-border/20 pt-6">
              <DeviceTypeSection />
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <VerifyEmail
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
};

export default Profile;
