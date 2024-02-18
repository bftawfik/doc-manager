export const TagsIcon: React.FC<SvgProps> = ({
  className,
  width = 20,
  height = 20,
  fill = "none",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={fill}
    >
      <path
        d="M16.525 7.24992L12.75 3.47492C11.9584 2.68325 10.8667 2.25825 9.75002 2.31659L5.58335 2.51659C3.91669 2.59159 2.59169 3.91659 2.50835 5.57492L2.30835 9.74159C2.25835 10.8583 2.67502 11.9499 3.46669 12.7416L7.24169 16.5166C8.79169 18.0666 11.3084 18.0666 12.8667 16.5166L16.525 12.8583C18.0834 11.3166 18.0834 8.79992 16.525 7.24992ZM7.91669 10.3166C6.59169 10.3166 5.51669 9.24159 5.51669 7.91659C5.51669 6.59159 6.59169 5.51659 7.91669 5.51659C9.24169 5.51659 10.3167 6.59159 10.3167 7.91659C10.3167 9.24159 9.24169 10.3166 7.91669 10.3166Z"
        fill="#FFA500"
        fill-opacity="0.3"
      />
    </svg>
  );
};
