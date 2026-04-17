import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/newLogo.png" alt="FINTEENS" height={40} width={40} />

          <h1 className="text-2xl font-extrabold tracking-wide text-blue-600">
            FINTEENS
          </h1>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2">
        <SidebarItem label="Learn" href="/learn" iconSrc="/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Quests" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Shop" href="/shop" iconSrc="/shop.svg" />
      </div>

      <div className="p-4">
        <div className="flex items-center gap-x-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium">
          <div className="h-8 w-8 rounded-full bg-blue-500"></div>
          <span className="text-neutral-600">Demo Teen</span>
        </div>
      </div>
    </div>
  );
};
