import Link from "next/link";


const Header = () => {
    return(
        <header className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Welcome To Airbnb Clone Project</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/home" className="hover:underline">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:underline">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;