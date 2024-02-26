export const StarIcon: React.FC<SvgProps> = ({
  className,
  width = 16,
  height = 16,
  fill = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      className={className}
    >
      <path
        d="M8.15327 1.34001L9.32661 3.68668C9.48661 4.01334 9.91327 4.32668 10.2733 4.38668L12.3999 4.74001C13.7599 4.96668 14.0799 5.95334 13.0999 6.92668L11.4466 8.58001C11.1666 8.86001 11.0133 9.40001 11.0999 9.78668L11.5733 11.8333C11.9466 13.4533 11.0866 14.08 9.65327 13.2333L7.65994 12.0533C7.29994 11.84 6.70661 11.84 6.33994 12.0533L4.34661 13.2333C2.91994 14.08 2.05327 13.4467 2.42661 11.8333L2.89994 9.78668C2.98661 9.40001 2.83327 8.86001 2.55327 8.58001L0.899939 6.92668C-0.073394 5.95334 0.23994 4.96668 1.59994 4.74001L3.72661 4.38668C4.07994 4.32668 4.50661 4.01334 4.66661 3.68668L5.83994 1.34001C6.47994 0.0666764 7.51994 0.0666764 8.15327 1.34001Z"
        fill="currentColor"
      />
    </svg>
  );
};
