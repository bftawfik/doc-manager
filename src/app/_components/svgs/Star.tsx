export const Star: React.FC<SvgProps> = ({
  className,
  width = 24,
  height = 24,
  fill = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      fill={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#EFEFEF" />
      <path
        d="M13.3821 5.15534L14.79 7.9943C14.9819 8.3895 15.4939 8.76856 15.9258 8.84115L18.4775 9.2686C20.1094 9.54282 20.4933 10.7365 19.3175 11.914L17.3337 13.9142C16.9977 14.2529 16.8137 14.9062 16.9177 15.374L17.4857 17.85C17.9336 19.8098 16.9017 20.568 15.1819 19.5437L12.7902 18.1162C12.3582 17.8581 11.6463 17.8581 11.2063 18.1162L8.81461 19.5437C7.1028 20.568 6.06292 19.8018 6.51087 17.85L7.07881 15.374C7.18279 14.9062 6.99881 14.2529 6.66285 13.9142L4.67907 11.914C3.5112 10.7365 3.88716 9.54282 5.51898 9.2686L8.0707 8.84115C8.49465 8.76856 9.00659 8.3895 9.19857 7.9943L10.6064 5.15534C11.3743 3.61489 12.6222 3.61489 13.3821 5.15534Z"
        fill="#85858C"
      />
    </svg>
  );
};