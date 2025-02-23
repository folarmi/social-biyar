/* eslint-disable no-irregular-whitespace */
import { AuthLayout } from "../layouts/AuthLayout";
import registerBg from "../assets/images/registerBg.svg";
import { Button, Text } from "@radix-ui/themes";
import { CustomInput } from "../components/ui/CustomInput";
import { IoEyeOutline } from "react-icons/io5";
import google from "../assets/icons/google.svg";
import { AlreadyhaveAccount } from "../components/ui/AlreadyhaveAccount";

const Register = () => {
  return (
    <AuthLayout
      img={registerBg}
      headerText="Social media management simplified"
      moduleTitle="Create your account"
    >
      <form className="mt-8 flex flex-col gap-y-6">
        <CustomInput label="Name" placeholder="Enter your name" />
        <CustomInput
          label="Email"
          placeholder="Enter your email address"
          type="email"
        />
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          icon={<IoEyeOutline />}
        />
        <CustomInput
          label="Re-type Password"
          placeholder="Retype your password"
          type="password"
          icon={<IoEyeOutline />}
        />

        <Text className="text-zinc-600" size="2" weight="regular">
          By creating an account, you agree with our terms and privacy policy
        </Text>

        <Button className="mt-2 bg-blue-600 rounded-md py-6 text-sm font-medium">
          Create Account
        </Button>
        {/* border !border-border */}
        <Button
          variant="outline"
          className="text-primary  rounded-md py-6 text-sm font-medium"
        >
          <img src={google} />
          Sign up with Google
        </Button>

        <AlreadyhaveAccount href="/login" />
      </form>
    </AuthLayout>
  );
};

export { Register };
