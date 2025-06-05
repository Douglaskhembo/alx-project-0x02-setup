import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const Home = () => {
  const [cards, setCards] = useState([
    { title: "Welcome", content: "This is a demo card" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (title: string, content: string) => {
    setCards([...cards, { title, content }]);
  };

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:font-bold hover:text-lg cursor-pointer"
        >
          Add New Post
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCard}
        />
      </div>
    </>
  );
};

export default Home;
