const ResourceCard = ({ resource }) => {
    return (
        <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-lg font-semibold">{resource.resourceType}</h3>
            <p className="text-sm text-gray-600 mb-2">Provider: {resource.provider}</p>
            <p className="mb-2">{resource.description}</p>
            <div className="text-sm">
                <p>Compute: {JSON.stringify(resource.requiredSpecifications.compute)}</p>
                <p>Storage: {resource.requiredSpecifications.storage.Storage} GB</p>
                {resource.requiredSpecifications.xaas && (
                    <p>Template: {resource.requiredSpecifications.xaas.template}</p>
                )}
            </div>
        </div>
    );
};

export default ResourceCard;