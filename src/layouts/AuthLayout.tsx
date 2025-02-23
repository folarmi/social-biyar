/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Text } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import logo from "../assets/icons/logo.svg";
import { LuCopyright } from "react-icons/lu";

interface AuthLayoutProps {
  children: ReactNode;
  img: string;
  headerText?: string | any;
  moduleTitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  img,
  headerText,
  moduleTitle,
}: AuthLayoutProps) => {
  return (
    <Flex>
      <div className="w-1/2 h-screen">
        <img className="w-full h-full object-cover" src={img} />
      </div>
      <Flex
        direction="column"
        align="center"
        // justify="center"
        className="w-1/2 bg-slate-50 pt-[73px]"
      >
        <img src={logo} />
        <Text
          className="pt-2 text-gray-500 w-[245px] text-center"
          as="p"
          size="2"
          weight="regular"
        >
          {headerText}
        </Text>

        <Flex
          direction="column"
          className="mt-6 bg-white border border-gray-100 rounded-2xl px-6 py-8 w-[457px]"
        >
          <Text as="p" className="text-gray-800 font-semibold" size="6">
            {moduleTitle}
          </Text>
          {children}
        </Flex>

        <Flex align="center" className="mt-auto mb-10">
          <LuCopyright className="text-gray-400" />
          <Text size="2" className="text-gray-500 pl-1">
            2024 BiyarSocial. All rights reserved
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { AuthLayout };
