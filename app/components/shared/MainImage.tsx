type PostImageProps = {
  src: string;
  alt?: string;
  title: string;
};

const MainImage = ({ src, alt, title }: PostImageProps) => (
  <img
    //   className="rounded mx-auto shadow-[0_0_0.5rem_#00000033] dark:shadow-[0_0_0.5rem_#ffffff33]"
    className="MainImage"
    title={title}
    src={src}
    alt={alt}
  />
);

export default MainImage;
