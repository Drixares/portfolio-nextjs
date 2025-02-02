import { ProjectStack } from "@/types/projects";
import StackIcon from "./stack-icon";

const StackList = ({ stack }: { stack: ProjectStack }) => {
    return (
        <div className="flex items-center gap-2 flex-wrap max-w-2xl">
            {stack.map((stack, idx) => (
                <StackIcon key={idx} icon={stack} />
            ))}
        </div>
    );
};

export default StackList;
