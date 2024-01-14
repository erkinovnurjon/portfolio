"use client";

import { Checkbox } from "@/components/ui/checkbox";

const CheckBoxComp = () => {
  return (
    <div className=" py-2 pb-5 md:p-4">
      <h1 className="text-xl md:text-2xl py-3">Select subject?</h1>
      <div className="flex items-center gap-1 space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
        <Checkbox id="values" />
        <label
          htmlFor="values"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
};
export default CheckBoxComp;
