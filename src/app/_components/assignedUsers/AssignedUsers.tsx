import Image from "next/image";
import React from "react";

import { getRandomColor } from "@/app/_helpers/getRandomColor";
import { User } from "@/app/_types";

interface AssignedUsersProps {
  users: User[];
}

const AssignedUsers: React.FC<AssignedUsersProps> = ({ users }) => {
  const maxVisibleUsers = 4;
  const visibleUsers = users.slice(0, maxVisibleUsers);
  const restCount = Math.max(0, users.length - maxVisibleUsers);

  return (
    <div className="flex justify-end">
      {visibleUsers.map((user, index) => (
        <div
          className="user relative"
          key={user.id}
          style={{ zIndex: visibleUsers.length - index }}
        >
          {user.imageUrl ? (
            <div className="-ms-[11px] rounded-full bg-white p-[1px]">
              <Image
                src={user.imageUrl}
                alt={user.name}
                className="rounded-full object-cover"
                width={16}
                height={16}
              />
            </div>
          ) : (
            <div
              className={`-ms-[11px] flex h-4 w-4 items-center justify-center rounded-full`}
              style={{
                zIndex: visibleUsers.length - index,
                backgroundColor: getRandomColor(),
              }}
            >
              <span className="text-[10px] font-bold">
                {user.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      ))}
      {restCount > 0 && (
        <div
          className="user relative"
          style={{ zIndex: visibleUsers.length + 1 }}
        >
          <div
            className={`-ms-[11px] flex h-4 w-4 items-center justify-center rounded-full bg-white`}
          >
            <span className="text-[10px]">+{restCount}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(AssignedUsers);
