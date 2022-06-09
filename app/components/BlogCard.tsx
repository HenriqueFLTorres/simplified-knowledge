import { Link } from "@remix-run/react";
import { formatRelative } from "date-fns";
import { ptBR } from "date-fns/locale";
import "app/public/images/ReferenceVsValue.jpg";
import Clock from "../svg/Clock";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "../tailwind.css";

type Props = {
  title: string;
  postImage: string;
  postedOn: string;
  editedOn?: string;
  tags: JSX.Element;
  readTimeInMinutes: string;
  postLanguage: string;
  postURL: string;
};

const BlogCard = ({ title, postImage, postedOn, editedOn, tags, readTimeInMinutes, postLanguage, postURL }: Props) => {
  const uploadDate = new Date(postedOn);
  const isPortuguse = postLanguage === "PT"
  const dateFormated = isPortuguse ? formatRelative(uploadDate, new Date(), { locale: ptBR }) : formatRelative(uploadDate, new Date())
  return (
    <Link to={`blog/${postURL}`}>
      <div className="group h-[300px] w-[350px] cursor-pointer bg-neutral-200 dark:bg-neutral-800 rounded-tl-3xl rounded-br-3xl hover:scale-110 transition-transform duration-[400ms] clip-path-inset">
        <div className={`w-full h-[150px] bg-cool rounded-tl-3xl group-hover:h-[190px] transition-all clip-path-inset duration-[400ms]`}>
            <img className="object-cover bg-center w-full h-full rounded-tl-3xl" src={postImage} alt="" />
            <div className="w-5 h-5 z-50 ml-auto mr-2.5 pt-2.5 fill-neutral-800 dark:fill-neutral-100 opacity-0 group-hover:opacity-100 group-hover:drop-shadow-[0_0_1px_#404040] dark:group-hover:drop-shadow-[0_0_1px_#fff] transition duration-[400ms]">
              {tags}
            </div>
        </div>
        <div className="px-5 py-2.5 h-[150px] flex flex-col justify-between group-hover:h-[110px] transition-all duration-[400ms]">
          <h1 className="text-lg text-neutral-800 dark:text-neutral-100 font-semibold">
            {title}
          </h1>
          <footer className="flex flex-row justify-between group-hover:opacity-0 transition-opacity duration-[400ms]">
            <p className="text-lg text-neutral-400 font-semibold">{dateFormated}</p>
            <div className="flex flex-row w-auto justify-between items-center">
              <Clock className="w-4 h-4 mr-2 fill-amber-600" />
              <p className="text-lg text-amber-600 font-semibold text-right">
                {readTimeInMinutes} min
              </p>
            </div>
          </footer>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
