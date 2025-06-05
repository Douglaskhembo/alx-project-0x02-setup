// reusable PostCard component:

import { type PostProps } from "@/interfaces";

const PostCard = ({ userId, title, content }: PostProps) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;