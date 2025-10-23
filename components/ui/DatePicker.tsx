"use client";

import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  MyPopover,
  MyPopoverContent,
  MyPopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

interface DatePickerProps {
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker = ({ name, value, onChange }: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const date = value ? new Date(value) : undefined;

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={name} className="px-1">
        Date of birth
      </label>
      <MyPopover open={open} onOpenChange={setOpen}>
        <MyPopoverTrigger asChild>
          <Button
            variant="outline"
            id={name}
            className="w-48 justify-between font-normal bg-card"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </MyPopoverTrigger>
        <MyPopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setOpen(false);
              if (date) {
                onChange({
                  target: {
                    name,
                    value: date.toISOString().split("T")[0],
                  },
                } as React.ChangeEvent<HTMLInputElement>);
              }
            }}
          />
        </MyPopoverContent>
      </MyPopover>
      {/* hidden input agar form submit masih bawa nilai */}
      <input type="hidden" name={name} value={value || ""} />
    </div>
  );
};

export default DatePicker;
