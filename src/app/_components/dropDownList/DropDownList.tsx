import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface Item {
  id: number;
  title: string;
  icon?: React.ReactNode;
  handler: () => void;
}
interface DropDownListProps {
  label?: string | React.ReactNode;
  icon?: React.ReactNode;
  list: Item[];
  labelClassName?: string;
  contentClassName?: string;
}
const DropDownList = ({
  list,
  icon,
  label,
  labelClassName = "flex items-center gap-1",
  contentClassName = "min-w-fit",
}: DropDownListProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="cursor-pointer focus:outline-none "
      >
        <button className={labelClassName}>
          {label && <span className="text-sm text-black/65">{label}</span>}
          {icon && icon}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={contentClassName}>
        {list.map(({ id, icon, handler, title }) => (
          <DropdownMenuItem key={id}>
            <button
              className="flex w-full items-center gap-1"
              onClick={handler}
            >
              {icon && icon}
              <span className="text-sm capitalize">{title}</span>
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownList;
