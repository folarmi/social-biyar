import { AuthLayout } from "../layouts/AuthLayout";
import forgotPasswordBg from "../assets/images/forgotpasswordBg.svg";
import { Text } from "@radix-ui/themes";

const EmailSent = () => {
  return (
    <AuthLayout img={forgotPasswordBg} moduleTitle="Email sent!">
      <Text as="p" size="2" className="text-gray-500 py-4" weight="regular">
        We have sent an email at precious.njoku @biyartech.com. Check your inbox
        and follow the information to reset your password.
      </Text>

      <Text className="text-gray-600 pt-2" size="3" weight="regular">
        Did not receive an email?
        <span className="text-sm text-blue-600 pl-1 pb-4">Resend email</span>
      </Text>

      <Text className="text-gray-600 pt-2" size="3" weight="regular">
        Wrong email address?
        <span className="text-sm text-blue-600 pl-1 pb-4">
          Change email address
        </span>
      </Text>
    </AuthLayout>
  );
};

export { EmailSent };
