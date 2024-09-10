"use client";
import { GithubIcon, InstagramIcon } from "@/shared/icons/Icons";
import { ProfileAvatar } from "@/shared/ui/Avatar";
import { useState } from "react";

export function Profile() {
  // Todo. Fetch API
  const [me, setMe] = useState({
    name: "donghyunlee",
    description: "안녕하세요. 개발자 이동현 입니다.",
    profileUrl:
      "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80",
  });

  return (
    <div className="col-span-3 row-span-1 w-full bg-[#F3EDF7]">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-row gap-6 pt-12 pl-12">
          <ProfileAvatar url={me.profileUrl} alt="profile" />
          <div className="flex flex-col gap-2 justify-end pb-4">
            <div>{me.name}</div>
            <div>{me.description}</div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-8">
          <button>
            <InstagramIcon />
          </button>
          <button>
            <GithubIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
