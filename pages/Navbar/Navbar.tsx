import Link from 'next/link';

const NavBar = () => {
    return (
        <header className="bg-gray-700 p-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="font-semibold text-xl">
                    <Link href="/" className="text-2xl">
                        SNS Clone
                    </Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link
                                href="/login"
                                className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                            >
                                ログイン
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/signup"
                                className="bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"
                            >
                                サインアップ
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;