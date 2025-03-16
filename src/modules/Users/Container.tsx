import { DataTable } from "@/components/Datatable";
import { ActionDropdown } from "@/components/Datatable/components";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2, UserRoundPlus } from "lucide-react";
import React, { useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  actions: any;
};

const Container = () => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  const columns: ColumnDef<User>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "name", header: "Name" },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => {
        const actions = row.original.actions || [];
        const isOpen = openDropdownId === row.id;
        return (
          <ActionDropdown
            actions={actions}
            isOpen={isOpen}
            onToggle={
              () => setOpenDropdownId(isOpen ? null : row.id) // Open only one at a time
            }
          />
        );
      },
      enableHiding: false,
    },
  ];

  const data: User[] = [
    {
      id: "1",
      email: "user1@example.com",
      name: "User One",
      actions: [
        {
          label: "Edit",
          icon: <Pencil size="16" />,
          onClick: () => alert("Edit User One"),
        },
        {
          label: "Delete",
          icon: <Trash2 size="16" />,
          onClick: () => alert("Delete User One"),
        },
      ],
    },
    {
      id: "2",
      email: "user2@example.com",
      name: "User Two",
      actions: [
        {
          label: "Edit",
          icon: <Pencil size="16" />,
          onClick: () => alert("Edit User One"),
        },
        {
          label: "Delete",
          icon: <Trash2 size="16" />,
          onClick: () => alert("Delete User One"),
        },
      ],
    },
    {
      id: "3",
      email: "user3@example.com",
      name: "User Three",
      actions: [
        {
          label: "Edit",
          icon: <Pencil size="16" />,
          onClick: () => alert("Edit User One"),
        },
        {
          label: "Delete",
          icon: <Trash2 size="16" />,
          onClick: () => alert("Delete User One"),
        },
      ],
    },
  ];

  return (
    <div className="p-2">
      <div className="flex items-center mb-4 gap-2">
        <h1 className="text-xl font-medium">Users</h1>
        <button className="flex gap-1 items-center bg-primary px-2 py-1 text-white text-[13.3px] rounded-sm cursor-pointer hover:bg-violet-700">
          <UserRoundPlus size="14" />
          Add User
        </button>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Container;
