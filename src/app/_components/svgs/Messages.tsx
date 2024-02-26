export const Messages: React.FC<SvgProps> = ({
  className,
  width = 24,
  height = 24,
  fill = "none",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="4" fill="#EFEFEF" />
      <path
        d="M12.9917 7H7.65841C7.44175 7 7.23341 7.00833 7.03341 7.03333C4.79175 7.225 3.66675 8.55 3.66675 10.9917V14.325C3.66675 17.6583 5.00008 18.3167 7.65841 18.3167H7.99175C8.17508 18.3167 8.41675 18.4417 8.52508 18.5833L9.52508 19.9167C9.96675 20.5083 10.6834 20.5083 11.1251 19.9167L12.1251 18.5833C12.2501 18.4167 12.4501 18.3167 12.6584 18.3167H12.9917C15.4334 18.3167 16.7584 17.2 16.9501 14.95C16.9751 14.75 16.9834 14.5417 16.9834 14.325V10.9917C16.9834 8.33333 15.6501 7 12.9917 7ZM7.41675 13.6667C6.95008 13.6667 6.58341 13.2917 6.58341 12.8333C6.58341 12.375 6.95841 12 7.41675 12C7.87508 12 8.25008 12.375 8.25008 12.8333C8.25008 13.2917 7.87508 13.6667 7.41675 13.6667ZM10.3251 13.6667C9.85841 13.6667 9.49175 13.2917 9.49175 12.8333C9.49175 12.375 9.86675 12 10.3251 12C10.7834 12 11.1584 12.375 11.1584 12.8333C11.1584 13.2917 10.7917 13.6667 10.3251 13.6667ZM13.2417 13.6667C12.7751 13.6667 12.4084 13.2917 12.4084 12.8333C12.4084 12.375 12.7834 12 13.2417 12C13.7001 12 14.0751 12.375 14.0751 12.8333C14.0751 13.2917 13.7001 13.6667 13.2417 13.6667Z"
        fill="#85858C"
      />
      <path
        d="M20.3166 7.65841V10.9917C20.3166 12.6584 19.7999 13.7917 18.7666 14.4167C18.5166 14.5667 18.2249 14.3667 18.2249 14.0751L18.2333 10.9917C18.2333 7.65841 16.3249 5.75008 12.9916 5.75008L7.91659 5.75841C7.62492 5.75841 7.42492 5.46675 7.57492 5.21675C8.19992 4.18341 9.33325 3.66675 10.9916 3.66675H16.3249C18.9833 3.66675 20.3166 5.00008 20.3166 7.65841Z"
        fill="#85858C"
      />
    </svg>
  );
};
