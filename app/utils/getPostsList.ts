import * as dryCodePost from '@content/dry-code-controversies/dry-code-controversies.mdx';
import * as postDryCode from '@content/dry-code-controversies/controversias-dry-code.mdx';

import * as referencePost from '@content/reference-vs-value/reference-vs-value.mdx';
import * as postReferencia from '@content/reference-vs-value/referencia-vs-valor.mdx';

import * as middlewarePost from '@content/express-middlewares/express-middlewares.mdx';
import * as middlewareNoExpress from '@content/express-middlewares/middlewares-no-express.mdx';

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

const getPosts = new Promise((resolve) => {
  resolve(posts);
});

export default getPosts;
