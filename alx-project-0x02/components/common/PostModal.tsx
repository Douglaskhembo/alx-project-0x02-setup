import { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">Create Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full mb-3 p-2 border rounded"
            required
          />
            <div className="flex justify-end gap-2">
            <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-red-500 rounded cursor-pointer hover:bg-red-600 hover:font-bold transition duration-200">
                Cancel
            </button>
            <button
                type="submit"
                disabled={!title || !content}
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 hover:font-bold transition duration-200 disabled:opacity-50">
                Post
            </button>
            </div>

        </form>
      </div>
    </div>
  );
};

export default PostModal;
