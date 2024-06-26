import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="h-autho w-full object-contain"
      sizes="100vh"
      quality={100}
      {...props}
    />
  );
};

export default PromoBanner;
