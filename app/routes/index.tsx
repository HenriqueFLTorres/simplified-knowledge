import { useState } from 'react'

import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { useEnglishLanguage } from '@hooks/useLanguage'

import { Background, Navbar, Sidebar } from '@components/global'
import { BlogCard, Pill } from '@components/shared'

import type { blogPostType } from '@utils/getPostsList'
import getPosts from '@utils/getPostsList'
import { filterPostsByLanguage } from '@utils/index'

export const loader: LoaderFunction = async () => {
  return await getPosts
}

export default function Index() {
  const [tags, setTags] = useState<string[]>([])
  const { isEnglish } = useEnglishLanguage()

  const allPosts = useLoaderData()

  const handleSelectedTags = (tagName: string) => {
    if (!tags.includes(tagName)) return setTags([...tags, tagName])

    const filteredTags = tags.filter((tag) => tag !== tagName)
    return setTags(filteredTags)
  }

  return (
    <>
      <Background />
      <div className="flex min-h-screen max-w-full flex-col justify-between font-default">
        <div className="flex w-full flex-col items-center">
          <Navbar />

          <Sidebar />

          <div className="mx-auto flex w-4/5 flex-row flex-wrap justify-center gap-6 pt-40">
            {tagsFilter.map((tag) => (
              <Pill
                key={tag}
                name={tag}
                onClick={() => handleSelectedTags(tag)}
                activeTags={tags}
              />
            ))}
          </div>

          <div className="mx-auto mt-24 mb-32 flex w-4/5 flex-row flex-wrap justify-center gap-14">
            {filterPostsByLanguage(allPosts, isEnglish, tags).map(
              (post: blogPostType, index: number) => {
                return <BlogCard key={index} {...post} />
              }
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const tagsFilter = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js'
]
