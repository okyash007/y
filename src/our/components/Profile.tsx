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

const ProfileCard = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Avatar className="size-10">
          <AvatarImage
            className="object-cover"
            src="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_1:1,c_fill,g_face/v1757105138/1000010180_g496qx.jpg"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="">
        <p className="text-lg font-semibold">Yash Verma</p>
        <p className="text-xs text-muted-foreground/50">#21094</p>
      </div>
    </div>
  );
};

const Profile = () => {
  const searchParams = useSearchParams();
  const isVerifyEmailModal = searchParams.get("verify_email_modal") === "true";
  const [isDialogOpen, setIsDialogOpen] = useState(isVerifyEmailModal ? true : false);

//   useEffect(() => {
//     if (isVerifyEmailModal) {
//       setIsDialogOpen(true);
//     }
//   }, [isVerifyEmailModal]);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="secondary" size="lg" className="max-w-10 h-10">
            <RiVerifiedBadgeFill className="!size-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-80">
          <div className="space-y-2">
            <div>
              <ProfileCard />
            </div>
            <div className="flex gap-2">
              <p className="bg-secondary text-sm text-secondary-foreground/60 rounded-md py-2 px-3 truncate flex-1">
                helloyashverma@gmail.comqeuidqhdouiqlb dqiyuyoiudqhuniqdyoqduy
              </p>
              <Button
                onClick={() => setIsDialogOpen(true)}
                variant="destructive"
                className="text-sm"
              >
                Verify
              </Button>
            </div>
            <div></div>
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
