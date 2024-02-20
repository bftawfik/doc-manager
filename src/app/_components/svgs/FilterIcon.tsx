export const FilterIcon: React.FC<SvgProps> = ({
  className,
  width = 16,
  height = 12,
  fill = "#85858C",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.91853 2.25237C4.91853 3.49682 3.89261 4.50548 2.62595 4.50548C1.36003 4.50548 0.333374 3.49682 0.333374 2.25237C0.333374 1.00866 1.36003 0 2.62595 0C3.89261 0 4.91853 1.00866 4.91853 2.25237ZM12.6623 1.26555C13.2163 1.26555 13.6667 1.70802 13.6667 2.25237C13.6667 2.79746 13.2163 3.23992 12.6623 3.23992H8.27859C7.72378 3.23992 7.27341 2.79746 7.27341 2.25237C7.27341 1.70802 7.72378 1.26555 8.27859 1.26555H12.6623ZM1.33855 8.63863H5.72223C6.27704 8.63863 6.72741 9.0811 6.72741 9.62619C6.72741 10.1705 6.27704 10.6137 5.72223 10.6137H1.33855C0.783742 10.6137 0.333374 10.1705 0.333374 9.62619C0.333374 9.0811 0.783742 8.63863 1.33855 8.63863ZM11.3741 11.8519C12.6408 11.8519 13.6667 10.8432 13.6667 9.59948C13.6667 8.35503 12.6408 7.34638 11.3741 7.34638C10.1082 7.34638 9.08155 8.35503 9.08155 9.59948C9.08155 10.8432 10.1082 11.8519 11.3741 11.8519Z"
        fill={fill}
      />
    </svg>
  );
};
