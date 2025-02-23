import { AuthLayout } from "../layouts/AuthLayout";
import forgotPasswordBg from "../assets/images/forgotpasswordBg.svg";
import { OTPInput } from "../components/ui/OTPInput";
import { Button, Text } from "@radix-ui/themes";

const VerifyEmail = () => {
  return (
    <AuthLayout
      moduleTitle="Verify your Email"
      img={forgotPasswordBg}
      headerText={
        <p>
          We sent a code to{" "}
          <span className="font-semibold">precious.njoku@biyartech.com</span>{" "}
        </p>
      }
    >
      <form className="mt-8 flex flex-col gap-y-6">
        <OTPInput length={6} />

        <Button className="mt-2 bg-blue-600 rounded-md py-6 text-sm font-medium">
          Proceed
        </Button>

        <Text
          className="text-gray-600 pt-2"
          size="3"
          align="center"
          weight="regular"
        >
          Resend Code in
          <span className="text-sm text-blue-600 pl-1">10s</span>
        </Text>
      </form>
    </AuthLayout>
  );
};

export { VerifyEmail };
