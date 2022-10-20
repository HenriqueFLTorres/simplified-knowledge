import type { blogPostType } from './getPostsList';

export const filterPostsByLanguage = (
  posts: blogPostType[],
  isEnglish: boolean,
  tags: string[]
) => {
  let filteredPosts = posts.filter(
    (post) => post.englishLanguage === isEnglish
  );

  if (tags.length < 1) return filteredPosts;

  return filteredPosts.filter((post) => tags.includes(post.tags[0]));
};
