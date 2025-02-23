import { AuthLayout } from "../layouts/AuthLayout";
import forgotPasswordBg from "../assets/images/forgotpasswordBg.svg";
import { CustomInput } from "../components/ui/CustomInput";
import { IoEyeOutline } from "react-icons/io5";
import { Button } from "@radix-ui/themes";

const ResetPassword = () => {
  return (
    <AuthLayout
      moduleTitle="Reset Password"
      img={forgotPasswordBg}
      headerText="Enter your new password"
    >
      <form className="mt-8 flex flex-col gap-y-6">
        <CustomInput
          label="New Password"
          placeholder="Enter your password"
          type="password"
          icon={<IoEyeOutline />}
        />
        <CustomInput
          label="Confirm Password"
          placeholder="Re-type your password"
          type="password"
          icon={<IoEyeOutline />}
        />

        <Button className="mt-2 bg-blue-600 rounded-md py-6 text-sm font-medium">
          Proceed
        </Button>
      </form>
    </AuthLayout>
  );
};

export { ResetPassword };
