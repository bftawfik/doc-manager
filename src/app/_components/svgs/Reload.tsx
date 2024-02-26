export const Reload: React.FC<SvgProps> = ({
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
        d="M13.8876 16.2679H18.606V20.9863M10.1128 8.71841H5.39443V4M19 9.66507C18.4709 8.35548 17.585 7.22059 16.4431 6.38938C15.3011 5.55818 13.9491 5.06402 12.5402 4.96303C11.1314 4.86205 9.72221 5.15828 8.47337 5.81811C7.22453 6.47794 6.18601 7.4749 5.47553 8.69563M5 15.3212C5.52911 16.6308 6.41498 17.7657 7.55694 18.5969C8.6989 19.4281 10.0515 19.9223 11.4604 20.0232C12.8692 20.1242 14.2779 19.828 15.5267 19.1681C16.7756 18.5083 17.8136 17.5114 18.5241 16.2907"
        stroke="#85858C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
