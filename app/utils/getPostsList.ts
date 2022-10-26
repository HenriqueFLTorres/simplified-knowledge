import * as dryCodePost from "@routes/blog/dry-code-controversies.mdx";
import * as postDryCode from "@routes/blog/controversias-dry-code.mdx";

import * as referencePost from "@routes/blog/reference-vs-value.mdx";
import * as postReferencia from "@routes/blog/referencia-vs-valor.mdx";

import * as middlewarePost from "@routes/blog/express-middlewares.mdx";
import * as middlewareNoExpress from "@routes/blog/middlewares-no-express.mdx";

import * as bigOPost from "@routes/blog/algorithms-and-big-o.mdx"
import * as postBigO from "@routes/blog/big-o-e-algoritimos.mdx"

export interface blogPostType {
  title: string;
  postImage: string;
  postedOn: string;
  editedOn: string;
  tags: string[];
  readTimeInMinutes: string;
  shortDescription: string;
  englishLanguage: boolean;
  postURL: string;
  alternativeLanguageURL: string;
}

let posts = [
  referencePost.attributes,
  postReferencia.attributes,
  dryCodePost.attributes,
  postDryCode.attributes,
  middlewareNoExpress.attributes,
  middlewarePost.attributes,
  bigOPost.attributes,
  postBigO.attributes
];

let dry = [
  referencePost,
  postReferencia,
  dryCodePost,
  postDryCode,
  middlewareNoExpress,
  middlewarePost,
  bigOPost,
  postBigO
];

const getPosts = new Promise((resolve) => resolve(posts));

export const getDry = new Promise((resolve) => resolve(dry));

export default getPosts;
