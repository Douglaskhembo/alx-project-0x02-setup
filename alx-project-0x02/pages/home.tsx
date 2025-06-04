import Card from "@/components/common/Card";

const Home = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <Card title="First Card" content="This is the first card's content." />
      <Card title="Second Card" content="Here is some more content in another card." />
    </div>
  );
};

export default Home;
