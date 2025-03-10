/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge, Box, Button, Flex, Text } from "@radix-ui/themes";
import { LuPlus } from "react-icons/lu";
import Table from "../../components/ui/Table";
import { permissionsSampleData, teamSampleData } from "../../utils/data";
import { createColumnHelper } from "@tanstack/react-table";
import { YesOrNoBadge } from "../../components/ui/YesOrNoBadge";
import Modal from "../../components/ui/Modal";
import { AddTeamMember } from "../../components/modals/AddTeamMember";
import { useState } from "react";

const TeamMembers = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const columnHelper = createColumnHelper<any>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Team",
      cell: (info) => {
        const name = info.getValue();
        const email = info.row.original.email;
        const image = info.row.original.image;

        return (
          <Flex align="center">
            <img src={image} className="mr-3 cursor-pointer" />
            <Box>
              <Text
                as="p"
                weight="medium"
                size="2"
                className="text-gray-800 pb-1"
              >
                {name}
              </Text>
              <Text as="p" weight="regular" size="2" className="text-gray-500">
                {email}
              </Text>
            </Box>
          </Flex>
        );
      },
    }),
    columnHelper.accessor("role", {
      header: "Status",
      cell: (info) => (
        <Badge
          size="2"
          variant="soft"
          className={`font-medium rounded-full ${
            info.getValue() === "Content Creator"
              ? "bg-lime-100 text-lime-800"
              : "bg-amber-100 text-amber-800"
          }`}
        >
          {info.getValue()}
        </Badge>
      ),
    }),
  ];

  const permissionColumns = [
    columnHelper.accessor("action", {
      header: "Action",
      cell: (info) => {
        return (
          <Text as="p" weight="regular" size="2" className="text-gray-800">
            {info.getValue()}
          </Text>
        );
      },
    }),
    columnHelper.accessor("admin", {
      header: "Admin",
      cell: (info) => <YesOrNoBadge text={info.getValue()} />,
    }),
    columnHelper.accessor("contentApproved", {
      header: "Content Approver",
      cell: (info) => <YesOrNoBadge text={info.getValue()} />,
    }),
    columnHelper.accessor("socialMediaManager", {
      header: "Social Media Manager",
      cell: (info) => <YesOrNoBadge text={info.getValue()} />,
    }),
    columnHelper.accessor("contentCreator", {
      header: "Content Creator",
      cell: (info) => <YesOrNoBadge text={info.getValue()} />,
    }),
  ];
  return (
    <div>
      <Flex className="w-full" align="center" justify="between">
        <Box className="mt-8">
          <Text size="4" className="text-gray-800 font-semibold pb-2" as="p">
            Team management for Biyar
          </Text>
          <Text size="2" weight="regular" className="text-gray-500" as="p">
            Manage all users on this project
          </Text>
        </Box>

        <Flex align="center">
          <Button
            onClick={() => toggleModal()}
            className="rounded-3xl bg-blue-50 text-blue-600 font-normal text-sm mr-4 cursor-pointer"
          >
            <LuPlus />
            Add team member
          </Button>
          <Button
            style={{
              border: "1px solid #E2E8F0",
            }}
            className="rounded-3xl text-primary bg-white font-medium text-sm"
          >
            Create New Project
          </Button>
        </Flex>
      </Flex>

      <Box className="mt-11">
        <div className="w-1/2">
          <Table columns={columns} data={teamSampleData} />
        </div>

        <Text size="4" className="text-gray-800 font-semibold pt-9 pb-6" as="p">
          Team permissions
        </Text>
        <Table columns={permissionColumns} data={permissionsSampleData} />
      </Box>

      <Modal show={modal} toggleModal={toggleModal} position="center">
        <AddTeamMember toggleModal={toggleModal} />
      </Modal>
    </div>
  );
};

export default TeamMembers;
