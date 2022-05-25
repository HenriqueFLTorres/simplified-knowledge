import * as referencePost from "../routes/blog/reference-vs-value.mdx"

const ENPosts = [ referencePost ]

export const getENPosts = () => {
    return [ ...ENPosts ]
}