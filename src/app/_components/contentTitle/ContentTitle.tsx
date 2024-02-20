interface ContentTitleProps {
  title: string;
  subTitle?: string;
}
const ContentTitle = ({ title, subTitle }: ContentTitleProps) => {
  return (
    <div className="flex w-full gap-2">
      <h2 className="text-[18px] font-bold capitalize">{title}</h2>
      <sub className="self-end align-bottom text-xs text-gray-500">
        {subTitle}
      </sub>
    </div>
  );
};

export default ContentTitle;
