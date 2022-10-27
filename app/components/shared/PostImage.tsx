type PostImageProps = {
  image: string;
  description?: string;
  className?: string;
};

const PostImage = ({ image, description, className }: PostImageProps) => {
  console.log(image);
  return (
    <img
      className={
        className ??
        'rounded mx-auto shadow-[0_0_0.5rem_#00000033] dark:shadow-[0_0_0.5rem_#ffffff33]'
      }
      src={image}
      alt={description}
    />
  );
};

export default PostImage;
