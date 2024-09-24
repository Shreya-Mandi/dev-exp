import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
            {/* TODO: Add footer component */}
        </div>
    );
};

export default Layout;