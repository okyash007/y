"use client"

import dynamic from 'next/dynamic'

const BlogEditor = dynamic(() => import('./Client'), {
  ssr: false
})

const page = () => {
  return (
    <BlogEditor />
  )
}

export default page