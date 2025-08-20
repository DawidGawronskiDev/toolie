import { OptionsCard } from "@/components/options-card";
import type { Option } from "@/types";

const OptionsCards = ({ options }: { options: Option[] }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(255px,1fr))] gap-4">
      {options.map((option, index) => (
        <OptionsCard key={index} option={option} />
      ))}
    </div>
  );
};

export { OptionsCards };
