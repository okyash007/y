import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div>
        <Avatar className="size-12">
          <AvatarImage
            className="object-cover"
            src="https://res.cloudinary.com/dspp405ug/image/upload/q_auto,f_auto,w_auto/v1758616681/IMG_1592_fops9k.png"
          />
          <AvatarFallback>Y</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default page;
