import { countries } from "@/data/countries";
import React from "react";

const CountrySelect = ({
  register,
  errors,
  onChange,
  value,
  label = "Select Country",
  name = "country",
}: {
  register: any;
  errors: any;
  onChange?: any;
  value?: string;
  label?: string;
  name?: string;
}) => {
  return (
    <div className="relative w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        value={value}
        name={name}
        onChange={onChange}
        {...register(`${name}`, { required: true })}
        className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 appearance-none cursor-pointer"
      >
        <option value="" disabled>
          Choose a country
        </option>
        {countries.map((country) => (
          <option key={country.code} value={country.code} className="py-2">
            {country.flag} {country.name}
          </option>
        ))}
      </select>
      {errors[`${name}`] && (
        <span className="text-xs text-red-600">{label} is required</span>
      )}
    </div>
  );
};

export default CountrySelect;
