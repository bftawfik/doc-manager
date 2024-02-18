import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserProfileProps {
  name: string;
  profileImageUrl: string;
}
const UserProfile = ({ profileImageUrl, name }: UserProfileProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          className="flex items-center gap-x-4 bg-transparent"
        >
          <Image
            className="h-[24px] w-[24px] rounded-[5px]"
            src={profileImageUrl}
            alt={`Profile image of ${name}`}
            width={43}
            height={43}
          />
          <span className="font-medium">{name}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="!hover:bg-red-500 cursor-pointer text-red-500">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
