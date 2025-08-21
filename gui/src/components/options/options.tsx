import { OptionsToggle } from "@/components/options/options-toggle";
import { OptionsCards } from "@/components/options/options-cards";
import { OptionsTable } from "@/components/options/options-table";
import { options } from "@/config";
import { useState } from "react";

type OptionsMode = "grid" | "table";

const Options = () => {
  const [mode, setMode] = useState<OptionsMode>("table");

  const sortedOptions = options.sort((a, b) =>
    a.category.label.localeCompare(b.category.label)
  );

  const toggleMode = () => {
    setMode((prev) => (prev === "grid" ? "table" : "grid"));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2>Options</h2>
        <OptionsToggle onClick={toggleMode} />
      </div>
      {mode === "grid" ? (
        <OptionsCards options={sortedOptions} />
      ) : (
        <OptionsTable options={sortedOptions} />
      )}
    </div>
  );
};

export { Options };
