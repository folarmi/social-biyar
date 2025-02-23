import { AuthLayout } from "../layouts/AuthLayout";
import loginBg from "../assets/images/loginBg.svg";
import { CustomInput } from "../components/ui/CustomInput";
import { IoEyeOutline } from "react-icons/io5";
import { Button, Checkbox, Flex, Text } from "@radix-ui/themes";
import { AlreadyhaveAccount } from "../components/ui/AlreadyhaveAccount";
import { Link } from "react-router";

const Login = () => {
  return (
    <AuthLayout
      img={loginBg}
      headerText="Welcome back to Biyarsocial, let’s pick up from where you left off "
      moduleTitle="Log in to your account"
    >
      <form className="mt-8 flex flex-col gap-y-6">
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
        <Flex align="center" justify="between">
          <Flex align="center">
            <Checkbox />
            <Text className="text-gray-600 pl-2" as="p" size="3">
              Remember me{" "}
            </Text>
          </Flex>

          <Link to="/forgot-password">
            <Text
              as="p"
              weight="medium"
              size="2"
              className="text-sm text-blue-600"
            >
              Forgot Password
            </Text>
          </Link>
        </Flex>

        <Button className="mt-2 bg-blue-600 rounded-md py-6 text-sm font-medium">
          Login
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

export { Login };
