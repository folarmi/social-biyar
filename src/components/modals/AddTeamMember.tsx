/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Text } from "@radix-ui/themes";
import { LuX } from "react-icons/lu";
import { CustomInput } from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import { sampleOptions } from "../../utils/data";
import { useForm } from "react-hook-form";

const AddTeamMember = ({ toggleModal }: any) => {
  const { control } = useForm();
  return (
    <div className="p-8 w-[420px]">
      <Flex align="center" justify="between" className="mb-8">
        <Text size="6" className="text-gray-800 font-semibold" as="p">
          Add team member
        </Text>
        <LuX onClick={toggleModal} />
      </Flex>

      <form>
        <CustomInput
          label="User Email"
          placeholder="Enter user’s email address"
          className="mb-4"
        />

        <CustomSelect
          name="State"
          options={sampleOptions}
          isLoading={false}
          label="User Role"
          control={control}
          rules={{
            required: "State is required",
          }}
        />

        <Button className="mt-8 w-full">Invite</Button>
      </form>
    </div>
  );
};

export { AddTeamMember };
