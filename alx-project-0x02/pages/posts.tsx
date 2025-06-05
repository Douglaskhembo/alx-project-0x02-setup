// Fetch data from JSONPlaceholder and render it using PostCard

import { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    type ApiPost = { userId: number; id: number; title: string; body: string };
    const formatted: PostProps[] = data.slice(0, 10).map((post: ApiPost) => ({
      userId: post.userId,
      title: post.title,
      content: post.body,
    }));

    return {
      props: {
        posts: formatted,
      },
    };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default function Posts({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
}
