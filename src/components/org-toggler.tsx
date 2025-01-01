import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const OrganizationToggler = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Organization Image */}
      <span className="p-2 inline-flex h-8 w-8 rounded-full items-center justify-center text-[#704218] bg-[#FEF4C6]">
        S
      </span>

      {/* Organization Name */}
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-none border-none flex items-center gap-2">
          Baked Design <ChevronDown className="w-4 h-4" />
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
};

export default OrganizationToggler;
