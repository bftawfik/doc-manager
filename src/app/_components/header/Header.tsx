"use client";
import Link from "next/link";

import NotificationBadge from "../notificationBadge/NotificationBadge";
import { Logo } from "../svgs/Logo";
import UserProfile from "../userProfile/UserProfile";

const Header = () => {
  // handle search change
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="flex justify-between border-b border-gray-100 px-8 py-[10px]">
      <div className="flex items-center justify-between">
        <Link href="/" className="min-w-[327px]">
          <Logo />
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <NotificationBadge />
        <UserProfile
          profileImageUrl="/images/profilePhoto.png"
          name="Test User"
        />
      </div>
    </div>
  );
};

export default Header;
