import React from "react";
import FilterSelect from "./FilterSelect";

type FiltersProps = {
  setStatus: React.Dispatch<React.SetStateAction<string | undefined>>;
  setGender: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export default function Filters({ setStatus, setGender }: FiltersProps) {
  return (
    <div className="flex gap-6 mb-6">
      <FilterSelect
        label="Status"
        options={[
          { value: "", label: "All Status" },
          { value: "alive", label: "Alive" },
          { value: "dead", label: "Dead" },
          { value: "unknown", label: "Unknown" },
        ]}
        onChange={setStatus}
      />
      <FilterSelect
        label="Gender"
        options={[
          { value: "", label: "All Genders" },
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "genderless", label: "Genderless" },
          { value: "unknown", label: "Unknown" },
        ]}
        onChange={setGender}
      />
    </div>
  );
}