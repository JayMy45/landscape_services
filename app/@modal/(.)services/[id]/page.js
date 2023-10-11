import Frame from '@/components/frame/frame'
import Modal from '@/components/modal/modal'
import { serviceData } from '@/app/data/serviceData';

export default function ServiceModal({ params }) {

    const services = serviceData;
    //transform param.id to number to compare s.id (which is a number)
    const service = services.find((s) => s.id === Number(params.id));

    return (
        <Modal>
            <Frame service={service} />
        </Modal>
    )
}