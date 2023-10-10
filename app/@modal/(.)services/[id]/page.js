import Frame from '@/components/frame/frame'
import Modal from '@/components/modal/modal'
import { serviceData } from '@/app/data/serviceData';

export default function PhotoModal({ params: { id: serviceId } }) {

    const services = serviceData;
    const service = services.find((p) => p.id === serviceId);

    return (
        <Modal>
            <Frame service={service} />
        </Modal>
    )
}