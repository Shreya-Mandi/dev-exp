const API_ENDPOINT = 'https://occ.peopleplus.hack/discover';

export const searchResources = async (query) => {
    const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch resources');
    }

    return response.json();
};