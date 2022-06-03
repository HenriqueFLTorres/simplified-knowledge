import * as referencePost from "../routes/blog/reference-vs-value.mdx";
import * as dryCodePost from "../routes/blog/dry-code-controversies.mdx";

import * as postReferencia from "../routes/blog/referencia-vs-valor.mdx";
import * as postDryCode from "../routes/blog/controversias-dry-code.mdx";

let posts = [referencePost, postReferencia, dryCodePost, postDryCode];

const getPosts = () => {
  return posts;
};

export default getPosts;
