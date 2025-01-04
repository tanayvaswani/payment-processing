import {
  BellDot,
  ChevronDown,
  CircleHelp,
  CodeXml,
  Settings,
} from "lucide-react";
import Image from "next/image";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import OrganizationToggler from "./org-toggler";
import SidebarToggler from "./sidebar-toggler";

const userNavigations = [
  {
    title: "Support",
    link: "/support",
    icon: CircleHelp,
  },
  {
    title: "Framework",
    link: "/framework",
    icon: CodeXml,
  },
  {
    title: "Notifications",
    link: "/notifications",
    icon: BellDot,
  },
  {
    title: "Settings",
    link: "/settings",
    icon: Settings,
  },
];

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-50 h-14 border-b border-zinc-200/50 flex items-center justify-between bg-white px-3">
      <div className="flex items-center gap-2">
        <div className="md:hidden block">
          <SidebarToggler />
        </div>
        <OrganizationToggler />
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex items-center gap-2.5">
        {userNavigations.map((navigation, index) => (
          <div key={index}>
            <Button
              variant={"outline"}
              size={"icon"}
              className="rounded-xl border-zinc-400/60 shadow-none p-0"
            >
              <navigation.icon className="w-5 h-5 text-zinc-700" />
            </Button>
          </div>
        ))}

        <div className="rounded-full inline-flex items-center justify-center w-9 h-9 cursor-pointer bg-violet-600">
          <Image
            src="/animoji.jpg"
            alt="User"
            width={36}
            height={36}
            className="w-full h-full rounded-full border border-zinc-400/60"
          />
        </div>
      </div>

      <div className="flex md:hidden items-center gap-2.5">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center">
            <div className="rounded-full inline-flex items-center justify-center w-9 h-9 cursor-pointer bg-violet-600">
              <Image
                src="/animoji.jpg"
                alt="User"
                width={36}
                height={36}
                className="w-full h-full rounded-full border border-zinc-400/60"
              />
            </div>

            <ChevronDown className="w-4 h-4 text-zinc-700" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="max-w-64 mx-2">
            <DropdownMenuLabel className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-medium text-foreground">
                Tanay
              </span>
              <span className="truncate text-xs font-normal text-muted-foreground">
                tanayvaswani.work@gmail.com
              </span>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            {userNavigations.map((navigation, index) => (
              <DropdownMenuItem key={index}>
                <navigation.icon className="w-5 h-5 text-zinc-700 mr-1" />
                <span>{navigation.title}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
