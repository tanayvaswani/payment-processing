import { ShieldQuestionIcon } from "lucide-react";

import { Button } from "./ui/button";

import OrganizationToggler from "./org-toggler";

const userNavigations = [
  {
    title: "Support",
    link: "/support",
    icon: ShieldQuestionIcon,
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
            <Button variant={"outline"} size={"icon"}>
              <navigation.icon className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
