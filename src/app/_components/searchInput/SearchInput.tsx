import { Search } from "lucide-react";

interface SearchInputProps {
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
const SearchInput = ({
  className = "relative w-60",
  onChange,
  placeholder = "Search in documents...",
}: SearchInputProps) => {
  return (
    <div className={className}>
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <Search className="h-4 w-4 text-black/30" />
      </div>
      <input
        type="text"
        className=" w-full border-b border-gray-300 p-2.5 ps-10 text-sm text-black/80 focus:outline-none focus:ring-0"
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
