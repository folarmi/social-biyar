import { Box, Button, Flex, Switch, Text } from "@radix-ui/themes";
import { DashboardLayout } from "../../layouts/DashboardLayout";
// import { Progress } from "@radix-ui/react-progress";
import { DashboardCard } from "../../components/cards/DashboardCard";
import {
  LuEye,
  LuPlus,
  LuTrash2,
  LuUserRound,
  LuWaypoints,
} from "react-icons/lu";
import { connectedAccounts, testAccounts } from "../../utils/data";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-6">
        <Text size="6" as="p" className="text-gray-800 font-semibold pb-2">
          Hello, Precious
        </Text>
        <Text size="2" as="p" className="text-gray-500 pb-6">
          Keep your social media active by creating and scheduling posts
          regularly
        </Text>

        <Flex align="center">
          <Box className="w-[198px]">
            <Text size="4" as="p" className="text-gray-800 font-semibold pb-2">
              Get started with biyarsocial{" "}
            </Text>
            <Text
              size="2"
              as="p"
              weight="regular"
              className="text-gray-500 pb-4"
            >
              Get your account up and running in 4 easy steps
            </Text>
            {/* <Progress.Root
              className="relative h-4 w-full overflow-hidden rounded bg-gray-200"
              value={70} // Change this dynamically
            >
              <Progress.Indicator
                className="h-full bg-blue-600 transition-all"
                style={{ width: "70%" }} // Bind this dynamically
              />
            </Progress.Root> */}
          </Box>
          <DashboardCard
            title="1. Connect your social accounts"
            subTitle="Boost your online visibility and increase "
            buttonText="Connect"
            bgColor="#ECFCCB"
            icon={LuWaypoints}
            iconColor="#65a30d"
            borderColor="#84CC16"
            textColor="#0F172A"
          />
          <DashboardCard
            title="2. Invite your teams"
            subTitle="Create your tailor made posts for each platform"
            buttonText="Create"
            bgColor="#FFE4E6"
            icon={LuUserRound}
            iconColor="#FDA4AF"
            borderColor="#FDA4AF"
            textColor="#1F2937"
            isDisabled
          />
          <DashboardCard
            title="3.Classify content into distinct categories."
            subTitle="Plan, organize, and vary your posts effectively."
            buttonText="Manage"
            bgColor="#FEF3C7"
            icon={LuWaypoints}
            iconColor="#F59E0B"
            borderColor="#F59E0B"
            textColor="#0F172A"
            isDisabled
          />
          <DashboardCard
            title="4.Schedule categories"
            subTitle="Plan, organize, and vary your posts effectively."
            buttonText="Schedule"
            bgColor="#FAE8FF"
            icon={LuWaypoints}
            iconColor="#C026D3"
            borderColor="#D946EF"
            textColor="#1F2937"
            isDisabled
          />
        </Flex>

        <Box className="mt-[72px]">
          <Flex justify="between" align="center">
            <Box>
              <Text size="4" className="font-semibold text-gray-800" as="p">
                Connected Accounts
              </Text>
              <Text
                size="2"
                weight="regular"
                className=" text-gray-500 pt-[2px]"
                as="p"
              >
                View and manage your social accounts in one place
              </Text>
            </Box>

            <Flex align="center" gap="4">
              <Button
                style={{
                  border: "1px solid #E2E8F0",
                }}
                className="bg-white text-primary rounded-3xl border border-border py-4 px-2.5"
              >
                See all connected accounts
              </Button>
              <Button className="bg-blue-50 text-primary rounded-3xl border border-border py-4 px-2.5">
                <LuPlus />
                Connect more accounts
              </Button>
            </Flex>
          </Flex>

          <Flex align="center" justify="between" className="mt-8 mb-4">
            {connectedAccounts.map(({ id, name }) => {
              return (
                <Text key={id} as="p" className="py-4">
                  {name}
                </Text>
              );
            })}
          </Flex>

          {/* <Flex> */}
          {testAccounts.map(({ id, img, name, noOfPosts, socialMedia }) => {
            return (
              <Flex
                key={id}
                align="center"
                justify="between"
                className="mb-4 rounded-2xl bg-gray-50 border border-gray-200 p-4"
              >
                <Flex justify="center" align="center">
                  <img src={img} className="mr-3" />
                  <Box>
                    <Text
                      size="2"
                      as="p"
                      weight="medium"
                      className="text-foreground"
                    >
                      {name}
                    </Text>
                    <Text
                      weight="regular"
                      size="2"
                      className="text-mutedForeground"
                      as="p"
                    >
                      {socialMedia}
                    </Text>
                  </Box>
                </Flex>
                <Flex align="center">
                  <LuEye />
                  <Text
                    size="2"
                    className="text-gray-800 pl-2"
                    weight="medium"
                    as="p"
                  >
                    {noOfPosts} posts
                  </Text>
                </Flex>
                <Flex align="center">
                  <Text
                    size="2"
                    weight="medium"
                    className="text-gray-800 pr-2"
                    as="p"
                  >
                    Paused
                  </Text>
                  <Switch />
                </Flex>
                <Button
                  style={{
                    border: "1px solid #E2E8F0",
                  }}
                  className="rounded-3xl bg-white py-2 px-3 text-sm font-medium text-primary"
                >
                  <LuPlus />
                  Create Post
                </Button>
                <LuTrash2 className="w-8 h-8 text-gray-600" />
              </Flex>
            );
          })}
          {/* </Flex> */}
        </Box>
      </div>
    </DashboardLayout>
  );
};

export { Dashboard };
