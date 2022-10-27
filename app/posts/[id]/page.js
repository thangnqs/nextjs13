import { use } from 'react'

async function getSingle(id) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`)
  return res.json();
}

export default function PostItem({ params }) {
  let singleData = use(getSingle(decodeURIComponent(params.id)))
  console.log(singleData)
  return <>
    <div>
      { singleData.title &&
        <h3>{singleData.title}</h3>
      }
      { singleData.body &&
        (
          <p>{singleData.body}</p>
        )
      }
    </div>
  </>
}
