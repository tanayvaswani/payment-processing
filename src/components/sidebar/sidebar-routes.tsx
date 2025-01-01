"use client";

import { Loader, LogOut, Phone } from "lucide-react";

import SidebarItem from "./sidebar-item";
import { Separator } from "../ui/separator";

export const firstGroup = [
  {
    icon: Loader,
    label: "Get Started",
    href: "#",
  },
];

export const secondGroup = [
  {
    icon: Phone,
    label: "Dashboard",
    href: "#",
  },
  {
    icon: LogOut,
    label: "Customer",
    href: "#",
  },
  {
    icon: Phone,
    label: "Products",
    href: "#",
  },
];

export const thirdGroup = [
  {
    icon: LogOut,
    label: "Payments",
    href: "#",
  },
  {
    icon: LogOut,
    label: "Funding",
    href: "#",
  },
  {
    icon: LogOut,
    label: "Invoices",
    href: "#",
  },
  {
    icon: LogOut,
    label: "Reporting",
    href: "#",
  },
];

export const fourthGroup = [
  {
    icon: LogOut,
    label: "Company",
    href: "#",
  },
  {
    icon: LogOut,
    label: "Team",
    href: "#",
  },
];

export const bottomGroup = [
  {
    icon: LogOut,
    label: "Share Feedback",
    href: "#",
  },
  {
    icon: LogOut,
    label: "Join our Slack",
    href: "#",
  },
  {
    icon: LogOut,
    label: "Support",
    href: "#",
  },
];

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full px-2">
      <div className="flex flex-col gap-1">
        {firstGroup.map((route, index) => (
          <SidebarItem
            key={index}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}

        <Separator orientation="horizontal" className="my-1 bg-zinc-200/60" />

        {secondGroup.map((route, index) => (
          <SidebarItem
            key={index}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}

        <Separator orientation="horizontal" className="my-1 bg-zinc-200/60" />

        {thirdGroup.map((route, index) => (
          <SidebarItem
            key={index}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}

        <Separator orientation="horizontal" className="my-1 bg-zinc-200/60" />

        {fourthGroup.map((route, index) => (
          <SidebarItem
            key={index}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}
      </div>

      <div className="flex flex-col gap-1">
        {bottomGroup.map((route, index) => (
          <SidebarItem
            key={index}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarRoutes;
