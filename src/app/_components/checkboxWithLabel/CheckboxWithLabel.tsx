import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxWithLabel {
  id: string;
  label: string;
  checked?: boolean;
  handleCheck: () => void;
}
const CheckboxWithLabel = ({
  id,
  label,
  checked = true,
  handleCheck,
}: CheckboxWithLabel) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        className="border-[#999CA0]"
        checked={checked}
        onCheckedChange={handleCheck}
      />
      <label
        htmlFor={id}
        className="cursor-pointer text-sm font-medium leading-none text-black/65 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
