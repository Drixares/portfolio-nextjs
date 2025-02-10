import PeepImage from "@/app/assets/images/peeps/peep-2.svg";
import Image from "next/image";

const Peep = ({ className }: { className?: string }) => {
    return ( 
        <Image
            src={PeepImage}
            alt="Peep"
            width={300}
            height={300}
            className={className}
            priority

        />
     );
}
 


export default Peep;