import React from "react";

type FilterSelectProps = {
  label: string;
  options: { value: string; label: string }[];
  onChange: (value: string | undefined) => void;
};

export default function FilterSelect({
  label,
  options,
  onChange,
}: FilterSelectProps) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        onChange={(e) => onChange(e.target.value || undefined)}
        className="border p-2 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-blue-200 appearance-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}