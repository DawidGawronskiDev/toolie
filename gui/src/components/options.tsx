import { options } from "@/config";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Options = () => {
  return (
    <div>
      {options.map((option, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{option.title}</CardTitle>
            <CardDescription>{option.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <CardAction>
              <Button>
                <option.action.icon /> {option.action.label}
              </Button>
            </CardAction>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export { Options };
