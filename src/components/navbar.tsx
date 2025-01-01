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
      <div className="flex items-center gap-3">
        {userNavigations.map((navigation, index) => (
          <div key={index}>
            <Button
              variant={"outline"}
              size={"icon"}
              className="rounded-xl border-zinc-300"
            >
              <navigation.icon className="w-4 h-4" />
            </Button>
          </div>
        ))}

        <div className="rounded-full inline-flex items-center justify-center w-8 h-8 cursor-pointer bg-violet-600">
          <Image
            src="/animoji.jpg"
            alt="User"
            width={32}
            height={32}
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
