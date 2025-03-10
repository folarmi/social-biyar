import { Tabs, Text } from "@radix-ui/themes";
import { DashboardLayout } from "../../layouts/DashboardLayout";
import TeamMembers from "./TeamMembers";
import { ManageProjectSettings } from "./ManageProjectSettings";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="p-6 w-full">
        <Text size="6" className="font-semibold text-gray-800 pb-4" as="p">
          Manage Project
        </Text>

        <Tabs.Root defaultValue="teamMembers" className="w-full">
          <Tabs.List className="w-full">
            <Tabs.Trigger value="teamMembers">Team members</Tabs.Trigger>
            <Tabs.Trigger value="settings"> Settings</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content className="w-full" value="teamMembers">
            <TeamMembers />
          </Tabs.Content>
          <Tabs.Content className="w-full" value="settings">
            <ManageProjectSettings />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </DashboardLayout>
  );
};

export { Settings };
