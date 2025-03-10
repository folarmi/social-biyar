import { Box, Flex } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import { Header } from "../components/ui/Header";
import { Sidebar } from "../components/ui/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <Box>
      <Header />
      <Flex>
        <Sidebar />
        {children}
      </Flex>
    </Box>
  );
};

export { DashboardLayout };
