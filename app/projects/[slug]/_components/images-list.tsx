import * as stylex from "@stylexjs/stylex";
import Image, { StaticImageData } from "next/image";

interface ImagesListProps {
	images: StaticImageData[];
}

const styles = stylex.create({
	list: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "2rem",
	},
});

const ImagesList = ({ images }: ImagesListProps) => {
	return (
		<div {...stylex.props(styles.list)}>
			{images.map((image, idx) => (
				<Image
					key={`img::${idx}`}
					src={image}
					alt={`Image ${idx + 1}`}
					priority={idx === 0}
					blurDataURL={image.blurDataURL}
					placeholder="blur"
				/>
			))}
		</div>
	);
};

export default ImagesList;
