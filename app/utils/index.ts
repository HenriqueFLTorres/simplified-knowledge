import type { blogPostType } from './getPostsList';

export const filterPostsByLanguage = (
  posts: blogPostType[],
  isEnglish: boolean
) => {
  
  return posts.filter(
    (post: blogPostType) => post.englishLanguage === isEnglish
  );
};
