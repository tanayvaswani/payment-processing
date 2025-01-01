"use client";

import {
  Building2,
  ChartNoAxesColumn,
  CircleDollarSign,
  CreditCard,
  HeartHandshake,
  Layers,
  LayoutDashboard,
  Loader,
  Receipt,
  Send,
  Slack,
  UserRound,
  Users,
} from "lucide-react";

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
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "#",
  },
  {
    icon: UserRound,
    label: "Customers",
    href: "#",
  },
  {
    icon: Layers,
    label: "Products",
    href: "#",
  },
];

export const thirdGroup = [
  {
    icon: CircleDollarSign,
    label: "Payments",
    href: "#",
  },
  {
    icon: CreditCard,
    label: "Funding",
    href: "#",
  },
  {
    icon: Receipt,
    label: "Invoices",
    href: "#",
  },
  {
    icon: ChartNoAxesColumn,
    label: "Reporting",
    href: "#",
  },
];

export const fourthGroup = [
  {
    icon: Building2,
    label: "Company",
    href: "#",
  },
  {
    icon: Users,
    label: "Team",
    href: "#",
  },
];

export const bottomGroup = [
  {
    icon: Send,
    label: "Share Feedback",
    href: "#",
  },
  {
    icon: Slack,
    label: "Join our Slack",
    href: "#",
  },
  {
    icon: HeartHandshake,
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

        <Separator orientation="horizontal" className="my-1 bg-zinc-200/50" />

        {secondGroup.map((route, index) => (
          <SidebarItem
            key={index}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}

        <Separator orientation="horizontal" className="my-1 bg-zinc-200/50" />

        {thirdGroup.map((route, index) => (
          <SidebarItem
            key={index}
            label={route.label}
            icon={route.icon}
            href={route.href}
          />
        ))}

        <Separator orientation="horizontal" className="my-1 bg-zinc-200/50" />

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
