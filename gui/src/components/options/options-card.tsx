import type { Option } from "@/types";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { HTMLAttributes } from "react";

const OptionsCard = ({
  option,
  ...props
}: { option: Option } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card className="justify-between animate-appear opacity-0" {...props}>
      <CardHeader>
        <CardTitle>{option.title}</CardTitle>
        <CardDescription>{option.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardAction className="place-self-end">
          <Button>
            <option.action.icon /> {option.action.label}
          </Button>
        </CardAction>
      </CardContent>
    </Card>
  );
};

export { OptionsCard };
