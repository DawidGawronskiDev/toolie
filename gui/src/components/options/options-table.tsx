import type { Option } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const OptionsTable = ({ options }: { options: Option[] }) => {
  return (
    <Table>
      <TableHeader className="*:font-bold *:last:text-right">
        <TableHead>Title</TableHead>
        <TableHead>Description</TableHead>
        <TableHead>Action</TableHead>
      </TableHeader>
      <TableBody>
        {options.map((option, index) => (
          <TableRow key={index} className=" *:last:text-right">
            <TableCell className="font-bold">{option.title}</TableCell>
            <TableCell className="text-muted-foreground">
              {option.description}
            </TableCell>
            <TableCell>
              <Button variant="outline" size="icon">
                <option.action.icon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { OptionsTable };
