import styles from "../tailwind.css";

type Props = {
  image: any;
  description?: string;
};

const PostImage = ({ image, description }: Props) => (
    <img className="rounded mx-auto shadow-[0_0_0.5rem_#00000033] dark:shadow-[0_0_0.5rem_#ffffff33]" src={image} alt={description} />
);

export default PostImage;
