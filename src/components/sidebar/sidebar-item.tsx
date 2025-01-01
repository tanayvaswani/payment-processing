"use client";

import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface SidebarItemProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

const SidebarItem = ({ icon: Icon, label }: SidebarItemProps) => {
  return (
    <Button
      variant={"ghost"}
      className={cn(
        "flex items-center justify-start gap-x-2 px-2 border-2 border-transparent text-[#414651] hover:text-[#414651]",
        label == "Dashboard" && "bg-accent",
        label == "Get Started" &&
          "text-[#298219] bg-[#EFFDE9] hover:text-[#298219] hover:bg-[#EFFDE9]"
      )}
    >
      <div className="flex items-center justify-start gap-x-2 w-full">
        <Icon
          className={cn(
            "text-[#414651]",
            label == "Get Started" && "text-[#298219]"
          )}
        />
        {label}

        {label == "Get Started" && (
          <span className="font-mono ml-auto">90%</span>
        )}
      </div>
    </Button>
  );
};

export default SidebarItem;
