import { useState, useEffect, useRef, ReactNode } from "react";

const ActionDropdown = ({
  actions,
  isOpen,
  onToggle,
}: {
  actions: { label: string; onClick: () => void; icon?: ReactNode }[];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        onToggle();
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onToggle]);

  return (
    <div className="relative inline-block">
      {/* Action Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition"
      >
        •••
      </button>

      {/* Dropdown Menu - Tightly Positioned */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 top-[100%] mt-0.5 bg-white shadow-lg rounded-md w-44 z-50 border border-gray-200"
        >
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.onClick();
                onToggle();
              }}
              className="flex items-center w-full px-4 py-2 text-left text-xs hover:bg-gray-100 space-x-2 cursor-pointer"
            >
              {action.icon && <span>{action.icon}</span>}
              <span className="font-medium">{action.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActionDropdown;
