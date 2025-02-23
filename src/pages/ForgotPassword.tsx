import { AuthLayout } from "../layouts/AuthLayout";
import forgotPasswordBg from "../assets/images/forgotpasswordBg.svg";
import { CustomInput } from "../components/ui/CustomInput";
import { Button, Text } from "@radix-ui/themes";
import { Link } from "react-router";
import { AlreadyhaveAccount } from "../components/ui/AlreadyhaveAccount";

const ForgotPassword = () => {
  return (
    <AuthLayout
      img={forgotPasswordBg}
      moduleTitle="Forgot Password"
      headerText="Enter your email adddress and we will send a link to reset your password"
    >
      <form className="mt-8 flex flex-col gap-y-6">
        <CustomInput
          label="Email"
          placeholder="Enter your email address"
          type="email"
        />

        <Link to="/login">
          <Text
            as="p"
            weight="medium"
            size="2"
            className="text-sm text-blue-600"
          >
            Return to login
          </Text>
        </Link>

        <Button className="mt-2 bg-blue-600 rounded-md py-6 text-sm font-medium">
          Send Link
        </Button>

        <AlreadyhaveAccount
          text="Don’t have an account?"
          subText="Sign Up"
          href="/"
        />
      </form>
    </AuthLayout>
  );
};

export { ForgotPassword };
