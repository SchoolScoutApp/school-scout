"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Mail, Copy, Phone } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { toast } from "@/hooks/use-toast";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Button
          variant="link"
          className="p-0 h-auto"
          onClick={() =>
            (window.location.href = `mailto:${row.original.email}`)
          }
        >
          <Mail className="w-4 h-4 mr-2" />
          {row.original.email}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 transition-all hover:bg-slate-100"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(row.original.email);
              toast({
                title: "Copied!",
                description: "Email address copied to clipboard",
                duration: 2000,
              });
            } catch {
              toast({
                title: "Failed to copy",
                description: "Please try selecting and copying manually",
                variant: "destructive",
                duration: 3000,
              });
            }
          }}
          title="Copy email"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="max-w-[150px] truncate" title={row.original.phone}>
        <a
          href={`tel:${row.original.phone}`}
          className="text-blue-500 flex items-center gap-2"
        >
          <Phone className="w-4 h-4 mr-" />
          {row.original.phone}
        </a>
      </div>
    ),
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <div className="max-w-[300px] truncate" title={row.original.message}>
        {row.original.message}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const variants: { [key: string]: string } = {
        new: "bg-green-100 text-green-800",
        contacted: "bg-blue-100 text-blue-800",
        closed: "bg-gray-100 text-gray-800",
      };

      return (
        <Badge className={variants[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Received",
    cell: ({ row }) => {
      return formatDistanceToNow(new Date(row.original.createdAt), {
        addSuffix: true,
      });
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                (window.location.href = `mailto:${row.original.email}`)
              }
            >
              Send email
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                // Add status update logic here
                console.log("Mark as contacted", row.original.id);
              }}
            >
              Mark as contacted
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                // Add status update logic here
                console.log("Mark as closed", row.original.id);
              }}
            >
              Mark as closed
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
