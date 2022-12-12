import * as dryCodePost from '@routes/blog/dry-code-controversies.mdx'
import * as postDryCode from '@routes/blog/controversias-dry-code.mdx'

import * as referencePost from '@routes/blog/reference-vs-value.mdx'
import * as postReferencia from '@routes/blog/referencia-vs-valor.mdx'

import * as middlewarePost from '@routes/blog/express-middlewares.mdx'
import * as middlewareNoExpress from '@routes/blog/middlewares-no-express.mdx'

import * as bigOPost from '@routes/blog/algorithms-and-big-o.mdx'
import * as postBigO from '@routes/blog/big-o-e-algoritimos.mdx'

import * as boostCodeReadability from '@routes/blog/boost-code-readability.mdx'
import * as aumentandoLegibilidadeDoCodigo from '@routes/blog/aumentando-legibilidade-do-codigo.mdx'

export interface blogPostType {
  title: string
  postImage: string
  postedOn: string
  editedOn: string
  tags: string[]
  readTimeInMinutes: string
  shortDescription: string
  englishLanguage: boolean
  postURL: string
  alternativeLanguageURL: string
}

let posts = [
  boostCodeReadability.attributes,
  aumentandoLegibilidadeDoCodigo.attributes,
  bigOPost.attributes,
  postBigO.attributes,
  referencePost.attributes,
  postReferencia.attributes,
  middlewareNoExpress.attributes,
  middlewarePost.attributes,
  dryCodePost.attributes,
  postDryCode.attributes
]

let dry = [
  boostCodeReadability,
  aumentandoLegibilidadeDoCodigo,
  bigOPost,
  postBigO,
  referencePost,
  postReferencia,
  middlewareNoExpress,
  middlewarePost,
  dryCodePost,
  postDryCode
]

const getPosts = new Promise((resolve) => resolve(posts))

export const getDry = new Promise((resolve) => resolve(dry))

export default getPosts
