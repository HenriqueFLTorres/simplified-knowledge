import * as referencePost from "../routes/blog/reference-vs-valor.mdx"

const PTPosts = [ referencePost ]

export const getPTPosts = () => {
    return [ ...PTPosts ]
}