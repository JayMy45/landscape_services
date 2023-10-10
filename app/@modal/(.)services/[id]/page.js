import Frame from '@/components/frame/frame'
import Modal from '@/components/modal/modal'
import swagPhotos, { Photo } from '../../../../photos'

export default function PhotoModal({ params: { id: photoId } }) {
    const photos = swagPhotos;
    const photo = photos.find((p) => p.id === photoId);

    return (
        <Modal>
            <Frame photo={photo} />
        </Modal>
    )
}