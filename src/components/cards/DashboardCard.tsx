import { Button, Text } from "@radix-ui/themes";

type Prop = {
  title: string;
  subTitle: string;
  bgColor: string;
  icon: React.ElementType;
  buttonText: string;
  iconColor: string;
  borderColor: string;
  textColor: string;
  isDisabled?: boolean;
};

const DashboardCard = ({
  title,
  bgColor,
  buttonText,
  icon: Icon,
  subTitle,
  iconColor,
  borderColor,
  textColor,
  isDisabled,
}: Prop) => {
  return (
    <div
      className="p-5 rounded-2xl w-[204px] mr-6 min-h-[228px] flex flex-col"
      style={{ backgroundColor: bgColor }}
    >
      <Icon className="w-6 h-6" style={{ color: iconColor }} />
      <Text
        as="p"
        size="2"
        className="pt-4 text-gray-800 font-semibold pb-[2px]"
      >
        {title}
      </Text>
      <Text as="p" size="2" className="text-gray-500">
        {subTitle}
      </Text>
      <Button
        disabled={isDisabled}
        className="mt-auto bg-white font-medium rounded-3xl w-full py-[19px]"
        style={{
          border: `1px solid ${borderColor}`,
          color: `${textColor}`,
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export { DashboardCard };
