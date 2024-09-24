import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link href="/">
                        <a className="text-xl font-bold">Open Cloud Compute</a>
                    </Link>
                    <div className="space-x-4">
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/browse"><a>Browse</a></Link>
                        <Link href="/resources"><a>Resources</a></Link>
                        <Link href="/about"><a>About</a></Link>
                        {/* TODO: Add login/account functionality */}
                        <Link href="/help"><a>Help</a></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;