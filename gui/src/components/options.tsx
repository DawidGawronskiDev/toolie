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
    <div className="space-y-4">
      <h2>Options</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(255px,1fr))] gap-4">
        {options.map((option, index) => (
          <Card key={index} className="justify-between">
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
        ))}
      </div>
    </div>
  );
};

export { Options };
