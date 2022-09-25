import * as dryCodePost from '@routes/blog/dry-code-controversies.mdx';
import * as postDryCode from '@routes/blog/controversias-dry-code.mdx';

import * as referencePost from '@routes/blog/reference-vs-value.mdx';
import * as postReferencia from '@routes/blog/referencia-vs-valor.mdx';

import * as middlewarePost from '@routes/blog/express-middlewares.mdx';
import * as middlewareNoExpress from '@routes/blog/middlewares-no-express.mdx';

export interface blogPostType {
  title: string;
  postImage: string;
  postedOn: string;
  editedOn: string;
  postTags: string[];
  readTimeInMinutes: string;
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
];

let dry = [
  referencePost,
  postReferencia,
  dryCodePost,
  postDryCode,
  middlewareNoExpress,
  middlewarePost,
];

const getPosts = new Promise((resolve) => {
  // console.log(posts)
  resolve(posts);
});

export const getDry = new Promise((resolve) => {
  // console.log(posts)
  resolve(dry);
});

export default getPosts;
