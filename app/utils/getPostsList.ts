import * as referencePost from "../routes/blog/reference-vs-value.mdx";

import * as postReferencia from "../routes/blog/referencia-vs-valor.mdx";

let posts = [referencePost, postReferencia];

// Function to get Posts atributtes
// const getAttributes = (modulesArray: Array<any>) => {
//   return modulesArray.map((item) => item.attributes);
// };

const getPosts = () => {
  return posts;
};

export default getPosts;
