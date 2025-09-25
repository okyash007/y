import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { CrowdCanvas, Skiper39 } from "@/components/ui/skiper-ui/skiper39";
import DropText from "./DropText";

const page = () => {

  console.log("e2u dwcinjkwdlcwwdjckldw cdwiubjknwdl")

  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex items-center gap-4 bg-secondary/50 rounded-lg p-4">
          <Image
            src="https://res.cloudinary.com/dspp405ug/image/upload/q_auto,f_webp,w_100/v1758616681/IMG_1592_fops9k.png"
            alt="avatar"
            className="object-cover size-12 rounded-full"
            width={100}
            height={100}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold text-foreground truncate">
                Yash Verma
              </p>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              Full Stack Developer
            </p>
          </div>
        </div>
        {/* <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div> */}
      </div>
      <div>
        <CrowdCanvas
          src="https://res.cloudinary.com/dspp405ug/image/upload/v1758620398/all-peeps_ixinyk.png"
          rows={15}
          cols={7}
        />
      </div>
      <div> 
        <DropText  />
      </div>
    </>
  );
};

export default page;

export const dynamic = "force-static";
