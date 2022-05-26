import * as referencePost from "../routes/blog/reference-vs-value.mdx";

import * as postReferencia from "../routes/blog/referencia-vs-valor.mdx";

let ENPosts = [referencePost];
let PTPosts = [postReferencia];

const getAttributes = (modulesArray: Array<any>) => {
  return modulesArray.map((item) => item.attributes);
};

const getPosts = () => {
  let language;
  if (typeof document !== "undefined") {
    language = localStorage.getItem("language");
  }

  if (language === "PT") return postReferencia;
  else return referencePost;
};

export default getPosts;
