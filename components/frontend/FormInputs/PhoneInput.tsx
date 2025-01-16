"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleHelp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { countries } from "@/data/countries";

type PhoneInputProps = {
  register: any;
  errors: any;
  label: string;
  type?: string;
  name: string;
  toolTipText?: string;
  placeholder?: string;
  icon?: any;
  value?: any;
  setPhoneCode?: any;
};

export default function PhoneInput({
  register,
  errors,
  label,
  type = "tel",
  name,
  toolTipText,
  icon,
  placeholder,
  value,
  setPhoneCode,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState(
    value || countries[73]
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setPhoneCode(selectedCountry.dial_code);
  }, [selectedCountry, setPhoneCode]);

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dial_code.includes(searchQuery)
  );

  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label
          htmlFor={name}
          className="block text-base font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button type="button">
                  <CircleHelp className="w-4 h-4 text-slate-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="mt-2">
        <div className="relative flex rounded-md">
          <Select
            name="phone-country"
            value={selectedCountry.code}
            onValueChange={(value) => {
              const country = countries.find((c) => c.code === value);
              if (country) {
                setSelectedCountry(country);
                setPhoneCode(selectedCountry.dial_code);
              }
            }}
          >
            <SelectTrigger className="w-[100px] border-r-0 rounded-r-none">
              <SelectValue>
                <span className="flex items-center gap-2">
                  <span>{selectedCountry.flag}</span>
                  <span>{selectedCountry.dial_code}</span>
                </span>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <div className="flex items-center gap-2 px-3 py-2 border-b">
                <Search className="h-4 w-4 text-slate-500" />
                <Input
                  placeholder="Search countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-8 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              {filteredCountries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  <span className="flex items-center gap-2">
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                    <span className="text-slate-500 ml-auto">
                      {country.dial_code}
                    </span>
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex-1 relative">
            {icon && (
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <icon.type className="text-slate-300 w-4 h-4" />
              </div>
            )}
            <input
              id={name}
              type={type}
              {...register(`${name}`, { required: true })}
              className={cn(
                "block w-full rounded-l-none rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                errors[`${name}`] && "focus:ring-red-500",
                icon ? "pl-8" : "pl-3"
              )}
              placeholder={placeholder || "Enter phone number"}
            />
          </div>
        </div>
        {errors[`${name}`] && (
          <span className="text-xs text-red-600">{label} is required</span>
        )}
      </div>
    </div>
  );
}
