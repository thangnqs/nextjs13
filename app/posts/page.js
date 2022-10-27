// https://nextjs.org/blog/next-13#data-fetching
import { use } from 'react'
import Link from "next/link";
async function getData() {
  const res = await fetch('https://dummyjson.com/posts?limit=10')
  return res.json();
}

export default function PostPage(){
  let { posts } = use(getData())
  return <>
    <h3>Post Page</h3>
    <ul>
      { posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>

  </>
}