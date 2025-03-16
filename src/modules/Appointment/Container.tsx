import { DataTable } from "@/components/Datatable";
import { ActionDropdown } from "@/components/Datatable/components";
import { ColumnDef } from "@tanstack/react-table";
import { Archive, Eye, Trash2 } from "lucide-react";
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
          label: "View",
          icon: <Eye size="16" />,
          onClick: () => alert("View User One"),
        },
        {
          label: "Delete",
          icon: <Trash2 size="16" />,
          onClick: () => alert("Delete User One"),
        },
        {
          label: "Archived",
          icon: <Archive size="16" />,
          onClick: () => alert("Archive User One"),
        },
      ],
    },
    {
      id: "2",
      email: "user2@example.com",
      name: "User Two",
      actions: [
        {
          label: "View",
          icon: <Eye size="16" />,
          onClick: () => alert("View User One"),
        },
        {
          label: "Delete",
          icon: <Trash2 size="16" />,
          onClick: () => alert("Delete User One"),
        },
        {
          label: "Archived",
          icon: <Archive size="16" />,
          onClick: () => alert("Archive User One"),
        },
      ],
    },
    {
      id: "3",
      email: "user3@example.com",
      name: "User Three",
      actions: [
        {
          label: "View",
          icon: <Eye size="16" />,
          onClick: () => alert("View User One"),
        },
        {
          label: "Delete",
          icon: <Trash2 size="16" />,
          onClick: () => alert("Delete User One"),
        },
        {
          label: "Archived",
          icon: <Archive size="16" />,
          onClick: () => alert("Archive User One"),
        },
      ],
    },
  ];

  return (
    <div className="p-2">
      <h1 className="text-xl font-medium mb-4">Appointments</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Container;
