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
import { useMobile } from "@/hooks/useMobile";
import { Badge } from "../ui/badge";

const OptionsTable = ({ options }: { options: Option[] }) => {
  const { isMobile } = useMobile();

  return (
    <Table className="bg-background/0 backdrop-blur-xs">
      <TableHeader className="*:font-bold *:last:text-right">
        <TableHead>Title</TableHead>
        <TableHead className="hidden sm:block">Category</TableHead>
        {!isMobile && <TableHead>Description</TableHead>}
        <TableHead>Action</TableHead>
      </TableHeader>
      <TableBody>
        {options.map((option, index) => (
          <TableRow
            key={index}
            style={{ animationDelay: `${index * 50}ms` }}
            className="*:last:text-right opacity-0 animate-appear"
          >
            <TableCell className="font-bold">{option.title}</TableCell>
            <TableCell className="hidden sm:block">
              <Badge variant="secondary">
                <option.category.icon />
                {option.category.label}
              </Badge>
            </TableCell>
            {!isMobile && (
              <TableCell className="text-muted-foreground">
                {option.description}
              </TableCell>
            )}
            <TableCell>
              <Button
                variant="outline"
                size="icon"
                onClick={option.action.onClick}
              >
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
