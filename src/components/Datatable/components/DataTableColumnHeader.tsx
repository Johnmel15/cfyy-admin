"use client";

import { Column } from "@tanstack/react-table";
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: React.ReactNode; // ✅ Allow JSX and strings
  className?: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="cursor-pointer flex items-center space-x-2">
          <span>{title}</span>
          {column.getIsSorted() === "desc" ? (
            <ArrowDown className="h-4 w-4" />
          ) : column.getIsSorted() === "asc" ? (
            <ArrowUp className="h-4 w-4" />
          ) : (
            <ChevronsUpDown className="h-4 w-4" />
          )}
        </span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        {/* Ascending Sort - Highlight when active */}
        <DropdownMenuItem
          className={cn(
            "group cursor-pointer mb-1",
            column.getIsSorted() === "asc" &&
              "bg-primary text-primary-foreground"
          )}
          onClick={() => column.toggleSorting(false)}
        >
          <ArrowUp
            className={cn(
              "h-4 w-4",
              column.getIsSorted() === "asc"
                ? "text-white"
                : "group-hover:text-primary-foreground"
            )}
          />
          Ascending
        </DropdownMenuItem>

        {/* Descending Sort - Highlight when active */}
        <DropdownMenuItem
          className={cn(
            "group cursor-pointer",
            column.getIsSorted() === "desc" &&
              "bg-primary text-primary-foreground"
          )}
          onClick={() => column.toggleSorting(true)}
        >
          <ArrowDown
            className={cn(
              "h-4 w-4",
              column.getIsSorted() === "desc"
                ? "text-white"
                : "group-hover:text-primary-foreground"
            )}
          />
          Descending
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* Hide Column */}
        <DropdownMenuItem
          className="group cursor-pointer"
          onClick={() => column.toggleVisibility(false)}
        >
          <EyeOff className="h-4 w-4 group-hover:text-primary" />
          Hide Column
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
