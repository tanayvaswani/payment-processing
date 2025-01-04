"use client";

import { PanelRightClose as SidebarLucide } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Sidebar from "./sidebar/sidebar";

const SidebarToggler = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <SidebarLucide className="h-4 w-4" />
        </Button>
      </SheetTrigger>

      <SheetContent side={"left"} className="min-w-64 p-0 py-3 overflow-y-auto">
        <SheetHeader className="text-left px-3">
          <SheetTitle>Welcome, Tanay!</SheetTitle>
        </SheetHeader>

        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default SidebarToggler;
