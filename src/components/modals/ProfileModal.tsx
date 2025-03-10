import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import avatar from "../../assets/images/avatar.svg";
import { profileSidebar, profileSidebarTwo } from "../../utils/data";
const ProfileModal = () => {
  return (
    <div className="bg-white  min-h-screen">
      <Flex align="center" className="p-8 border-b border-gray-50">
        <img src={avatar} className="mr-3" />
        <Box>
          <Text as="p" size="2" className="text-gray-800" weight="medium">
            Precious Njoku
          </Text>
          <Text as="p" size="1" className="text-gray-500 py-1" weight="regular">
            precynjoku123@gmail.com
          </Text>
          <Text as="p" size="2" className="text-blue-500" weight="medium">
            Edit profile
          </Text>
        </Box>
      </Flex>

      <Flex direction="column" className="mt-8 border-b border-gray-50">
        {profileSidebar.map(({ id, name }) => {
          return (
            <Flex align="center" justify="between" className="mb-4" key={id}>
              <Text size="3" className="py-4 text-gray-800" as="p">
                {name}
              </Text>
              {name === "Subscription" && (
                <Badge className="bg-gray-50 rounded-full text-gray-500 px-2.5 py-0.5">
                  Free
                </Badge>
              )}
            </Flex>
          );
        })}
      </Flex>

      <Flex direction="column" className="mt-4 border-b border-gray-50">
        <Text size="1" as="p" className="text-gray-400 py-3">
          Project
        </Text>
        <Flex align="center" justify="between">
          <Text size="3" className="py-4 text-gray-800" as="p">
            Fanfam
          </Text>
          <Badge className="bg-blue-50 rounded-full text-blue-500 px-2.5 py-0.5">
            1 member
          </Badge>
        </Flex>
        <Text size="3" className="py-4 text-gray-800" as="p">
          Manage Project
        </Text>
      </Flex>

      <Flex direction="column" className="mt-4 border-b border-gray-50">
        {profileSidebarTwo.map(({ id, name }) => {
          return (
            <Flex align="center" justify="between" key={id}>
              <Text size="3" className="py-4 text-gray-800" as="p">
                {name}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </div>
  );
};

export { ProfileModal };
