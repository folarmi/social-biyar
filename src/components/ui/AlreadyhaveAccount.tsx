import { Text } from "@radix-ui/themes";
import { Link } from "react-router";

type Prop = {
  text?: string;
  subText?: string;
  href: string;
};

const AlreadyhaveAccount = ({
  text = "Already have an account?",
  subText = "Login",
  href,
}: Prop) => {
  return (
    <Text
      className="text-gray-600 pt-2"
      size="3"
      align="center"
      weight="regular"
    >
      {text}
      <Link to={href}>
        <span className="text-sm text-blue-600 pl-1">{subText}</span>
      </Link>
    </Text>
  );
};

export { AlreadyhaveAccount };
