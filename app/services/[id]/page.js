import Frame from '@/components/frame/frame';
import { serviceData } from '@/app/data/serviceData';

export default function ServicePage({ params }) {
    //transform s.id to string to compare with params.id (which is a string)
    const service = serviceData.find((s) => s.id.toString() === params.id);

    if (!service) {
        // Handle the error appropriately, e.g., return an error message or redirect.
        return <div>Service not found</div>;
    }

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <Frame service={service} />
            </div>
        </div>
    )
}
