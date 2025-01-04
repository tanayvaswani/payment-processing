"use client";

import {
  Check,
  Clock,
  XCircle,
  AlertCircle,
  MinusCircle,
  UserPlus,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import SearchInput from "./search-input";

interface User {
  name: string;
  email: string;
  date: string;
  type: string;
  status: "verified" | "pending" | "rejected" | "review" | "inactive";
}

const getStatusIcon = (status: User["status"]) => {
  switch (status) {
    case "verified":
      return <Check className="h-4 w-4 text-blue-500" />;
    case "pending":
      return <Clock className="h-4 w-4 text-gray-500" />;
    case "rejected":
      return <XCircle className="h-4 w-4 text-red-500" />;
    case "review":
      return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    case "inactive":
      return <MinusCircle className="h-4 w-4 text-gray-400" />;
  }
};

const getStatusText = (status: User["status"]) => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};

const getInitialBgColor = (initial: string) => {
  const colors = {
    Z: "bg-blue-100",
    R: "bg-yellow-100",
    A: "bg-green-100",
    T: "bg-orange-100",
    O: "bg-purple-100",
  };

  return colors[initial as keyof typeof colors] || "bg-gray-100";
};

const users: User[] = [
  {
    name: "Zoe Blackwell",
    email: "zoe@synopsis.com",
    date: "4 Oct, 1:05 PM",
    type: "Individual",
    status: "verified",
  },
  {
    name: "Ryan Smith",
    email: "ryan@magic.com",
    date: "3 Oct, 12:50 PM",
    type: "Individual",
    status: "pending",
  },
  {
    name: "Astrid Larsson",
    email: "a.larsson@supered.io",
    date: "29 Sep, 10:12 PM",
    type: "Individual",
    status: "rejected",
  },
  {
    name: "Tyrone Washington",
    email: "t_wash@capital.com",
    date: "28 Sep, 9:15 PM",
    type: "Individual",
    status: "review",
  },
  {
    name: "Olivia Brown",
    email: "o@brown.com",
    date: "4 Oct, 3:30 PM",
    type: "Individual",
    status: "inactive",
  },
];

const UserTable = () => {
  return (
    <Card className="w-full space-y-6 bprder border-zinc-100">
      <CardHeader className="flex flex-col md:flex-row items-center justify-between w-full">
        <CardTitle className="text-xl flex items-center gap-2 w-full">
          <div className="bg-violet-600 rounded-lg h-7 w-7 flex items-center justify-center text-white">
            <UserPlus className="h-4 w-4" />
          </div>{" "}
          New Customers
        </CardTitle>

        <SearchInput />
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell className="flex items-center gap-3">
                    <div
                      className={`${getInitialBgColor(
                        user.name[0]
                      )} w-8 h-8 rounded-full flex items-center justify-center text-gray-600`}
                    >
                      {user.name[0]}
                    </div>
                    {user.name}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.date}</TableCell>
                  <TableCell>{user.type}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(user.status)}
                      {getStatusText(user.status)}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserTable;
