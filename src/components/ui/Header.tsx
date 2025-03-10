import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import logo from "../../assets/icons/logo.svg";
import avatar from "../../assets/images/avatar.svg";
import { LuBell } from "react-icons/lu";
import { useState } from "react";
import Modal from "./Modal";
import { ProfileModal } from "../modals/ProfileModal";

const Header = () => {
  const [profileModal, setProfileModal] = useState(false);

  const toggleModal = () => {
    setProfileModal(!profileModal);
  };
  return (
    <nav className="flex items-center bg-white justify-between py-4 px-6 shadow-sm">
      <img src={logo} className="cursor-pointer" />

      <Flex align="center">
        <LuBell className="w-6 h-6 mr-6" />
        <img
          src={avatar}
          className="mr-3 cursor-pointer"
          onClick={() => toggleModal()}
        />
        <Box>
          <Text
            as="p"
            weight="medium"
            size="2"
            className="text-foreground pb-1"
          >
            Precious Njoku
          </Text>
          <Badge className="rounded-full bg-lime-100 text-lime-800 ">
            Creator
          </Badge>
        </Box>
      </Flex>

      <Modal show={profileModal} toggleModal={toggleModal} position="right">
        <ProfileModal />
      </Modal>
    </nav>
  );
};

export { Header };
