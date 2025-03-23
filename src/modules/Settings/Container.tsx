import { CustomCard } from "@/components/CustomCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import React, { useState } from "react";

const navigationItems = [
  "HOME",
  "ABOUT US",
  "SERVICES",
  "CAREERS",
  "APPOINTMENTS",
  "TEAM",
];
const userRoles = ["Admin", "Editor", "Viewer"];

const Container = () => {
  // const { data: session } = useSession();
  // const userRole = session?.user?.role as Role || "Viewer"; // Default to "Viewer"

  const [navigationEnabled, setNavigationEnabled] = useState(true);
  const [navSettings, setNavSettings] = useState<Record<string, boolean>>(
    navigationItems.reduce((acc, item) => ({ ...acc, [item]: true }), {})
  );
  const [userPermission, setUserPermission] = useState("Admin");

  const handleNavChange = (item: string) => {
    setNavSettings((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const handleSave = () => {
    const settingsData = { navigationEnabled, navSettings, userPermission };
    console.log("Saved Settings:", settingsData);
    alert("Settings saved successfully!");
  };

  // const isCanEditSettings = hasPermission(userRole, "settings:edit");
  // const isCanDeleteSettings = hasPermission(userRole, "settings:delete");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-lg mx-auto space-y-6">
          <CustomCard title="Navigation Settings">
            <div className="flex items-center justify-between">
              <Label>Enable Navigation</Label>
              <Switch
                className="cursor-pointer"
                checked={navigationEnabled}
                onCheckedChange={setNavigationEnabled}
              />
            </div>

            {navigationEnabled && (
              <div className="space-y-3 mt-4">
                {navigationItems.map((item) => (
                  <div key={item} className="flex items-center justify-between">
                    <Label>{item}</Label>
                    <Switch
                      className="cursor-pointer"
                      checked={navSettings[item]}
                      onCheckedChange={() => handleNavChange(item)}
                    />
                  </div>
                ))}
              </div>
            )}
          </CustomCard>

          <CustomCard title="User Permissions">
            <Select onValueChange={setUserPermission} value={userPermission}>
              <SelectTrigger>
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                {userRoles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CustomCard>
        </div>
      </div>

      {/* Sticky Save Button at the bottom */}
      <div className="p-4 bg-white shadow-md sticky bottom-0 w-full flex justify-end rounded-md">
        <Button className="cursor-pointer" onClick={handleSave}>
          <Check />
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default Container;
