import { BellDot, CircleHelp, CodeXml, Settings } from "lucide-react";

import { Button } from "./ui/button";

import OrganizationToggler from "./org-toggler";
import Image from "next/image";

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
    <div className="w-full fixed top-0 z-50 h-14 border-b flex items-center justify-between bg-white px-3">
      <OrganizationToggler />

      {/* Navigation Buttons */}
      <div className="flex items-center gap-2.5">
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
    </div>
  );
};

export default Navbar;
