"use client";

import React from "react";
import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
}

export function DataTableViewOptions<TData>({
  table,
  globalFilter,
  setGlobalFilter,
}: DataTableViewOptionsProps<TData>) {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* 🔍 Search Input */}
      <Input
        type="text"
        placeholder="Search..."
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        className="w-full max-w-sm text-sm"
      />

      {/* Column Visibility Toggle */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer hover:bg-primary"
          >
            Columns
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table.getAllColumns().map((column) =>
            column.getCanHide() && column.id !== "action" ? ( // Exclude "action"
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(value)}
                className="text-xs cursor-pointer"
              >
                {column.columnDef.header as string}
              </DropdownMenuCheckboxItem>
            ) : null
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
