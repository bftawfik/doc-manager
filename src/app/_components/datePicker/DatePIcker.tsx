"use client";

import { format } from "date-fns";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { CalendarIcon } from "../svgs";
const DATE_FORMATTER = "PPP";
interface DatePickerProps {
  disabled?: boolean;
}
const DatePicker = ({ disabled = false }: DatePickerProps) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [dateValue, setDateValue] = useState<Date | undefined>();

  return (
    <div>
      <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
        <PopoverTrigger asChild>
          <Button
            disabled={disabled}
            variant={"outline"}
            className={cn(
              "w-[220px] rounded-sm  border-none bg-[#EDEDED] p-2 text-left font-normal text-black  hover:bg-[#EDEDED] focus:ring-2 focus:ring-brand "
            )}
          >
            {dateValue
              ? format(dateValue, DATE_FORMATTER)
              : format(new Date(), DATE_FORMATTER)}
            <CalendarIcon className="ml-auto h-5 w-5 fill-black" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="single"
            selected={dateValue}
            onSelect={(date) => {
              setDateValue(date);
              setCalendarOpen(false);
            }}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default DatePicker;
