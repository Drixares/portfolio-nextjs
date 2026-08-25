import PeepImage from "@/app/assets/images/peeps/peep-2.svg";
import * as stylex from "@stylexjs/stylex";
import Image from "next/image";

const Peep = ({ style }: { style?: stylex.StyleXStyles }) => {
	return (
		<Image
			src={PeepImage}
			alt="Peep"
			width={300}
			height={300}
			{...stylex.props(style)}
			priority
		/>
	);
};

export default Peep;
