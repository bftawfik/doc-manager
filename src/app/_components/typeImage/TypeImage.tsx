import Image from "next/image";

const TypeImage: React.FC<{ type: string }> = ({ type }) => {
  const imageSrcs: { [key: string]: string } = {
    pdf: "/images/fileTypes/pdf.png",
    word: "/images/fileTypes/word.png",
    excel: "/images/fileTypes/excel.png",
    pptx: "/images/fileTypes/pptx.png",
    default: "/default.png",
  };

  const getImageUrl = (type: string): string => {
    return imageSrcs[type] || imageSrcs.default;
  };

  return <Image src={getImageUrl(type)} alt={type} width={96} height={96} />;
};

export default TypeImage;
