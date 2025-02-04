import Image, { StaticImageData } from "next/image";

interface ImagesListProps {
    images: StaticImageData[];
}

const ImagesList = ({ images }: ImagesListProps) => {
    return (
        <div className="flex flex-col items-center gap-8">
            {images.map((image, idx) => (
                <Image
                    key={`img::${idx}`}
                    src={image}
                    alt={`Image ${idx + 1}`}
                />
            ))}
        </div>
    );
};

export default ImagesList;
