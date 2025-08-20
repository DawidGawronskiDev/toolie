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

const OptionsCard = ({ option }: { option: Option }) => {
  return (
    <Card className="justify-between">
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
