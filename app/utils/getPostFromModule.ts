const getPostFromModule = (mod: any) => {
    return {
      name: mod.filename.replace(/\.mdx?$/, ""),
      ...mod.attributes,
    }
}

export default getPostFromModule