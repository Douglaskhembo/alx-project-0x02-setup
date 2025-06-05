import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">ALX Project</h1>
      <nav className="space-x-4">
        <Link href="/home" className="hover:underline hover:font-semibold">Home</Link>
        <Link href="/about" className="hover:underline hover:font-semibold">About</Link>
        <Link href="/posts" className="hover:underline hover:font-semibold">Posts</Link>
        <Link href="/users" className="hover:underline hover:font-semibold">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
