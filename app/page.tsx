'use client'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AddPost from './components/AddPost'
import Post from './components/Post'
import { PostType } from './types/Posts'
const allPosts = async () => {
  const response = await axios.get('/api/posts/getPosts')
  return response.data
}
export default function Home() {
  const { data, error, isLoading } = useQuery<PostType[]>({
    queryFn: allPosts,
    queryKey: ['posts'],
  })
  if (error) return error
  if (isLoading) return 'Loading...'
  console.log(data)
  return (
    <main>
      <AddPost />
      {data?.map(post => (
        <Post
          key={post.id}
          postTitle={post.title}
          name={post.user.name}
          avatar={post.user.image}
          id={post.id}
          comments={post.comments}
        />
      ))}
    </main>
  )
}
