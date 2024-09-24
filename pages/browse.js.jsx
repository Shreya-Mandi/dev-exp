import { useState } from 'react';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import ResourceCard from '../components/ResourceCard';
import { searchResources } from '../utils/api';

const BrowsePage = () => {
    const [resources, setResources] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (query) => {
        setIsLoading(true);
        setError(null);
        try {
            const results = await searchResources(query);
            setResources(results.resources);
        } catch (err) {
            setError('An error occurred while searching. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-4">Browse Compute Resources</h1>
            <SearchForm onSearch={handleSearch} />
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {resources.map((resource) => (
                <ResourceCard key={resource.resourceId} resource={resource} />
            ))}
        </Layout>
    );
};

export default BrowsePage;