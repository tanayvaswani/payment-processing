import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

const SearchInput = () => {
  return (
    <div className="space-y-2 w-full md:w-[420px]">
      <div className="relative">
        <Input
          className="peer pe-9 ps-9"
          placeholder="Search new customers"
          type="search"
        />

        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
