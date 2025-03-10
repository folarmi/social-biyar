import { Badge } from "@radix-ui/themes";

type Prop = {
  text: string;
};

const YesOrNoBadge = ({ text }: Prop) => {
  return (
    <Badge
      size="2"
      className={`font-medium text-xs rounded-full uppercase text-primaryForeground ${
        text === "Yes" ? "bg-success" : "bg-destructive"
      }`}
    >
      {text}
    </Badge>
  );
};

export { YesOrNoBadge };
