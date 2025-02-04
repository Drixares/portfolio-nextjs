import { ContactSchemaType, InputName } from "@/types/contact-form";
import { useForm } from "react-hook-form";

interface InputProps {
    register: ReturnType<typeof useForm<ContactSchemaType>>["register"];
    placeholder: string;
    name: InputName;
    label: string;
}

const Input = ({ register, placeholder, name, label }: InputProps) => {
    return (
        <div
            className="group relative w-full grid grid-cols-1 sm:grid-cols-2 items-center 
                px-3 gap-x-4 max-sm:py-2 sm:h-20 border-t border-neutral-300 has-[:focus]:border-neutral-800 transition-colors"
        >
            <label htmlFor={name} className="text-neutral-800">
                {label}
            </label>
            {name === "message" ? (
                <textarea
                    id={name}
                    {...register(name)}
                    placeholder={placeholder}
                    className="bg-transparent outline-none placeholder:text-neutral-400 max-sm:placeholder:text-base"
                />
            ) : (
                <input
                    type="text"
                    id={name}
                    {...register(name)}
                    placeholder={placeholder}
                    className="bg-transparent outline-none placeholder:text-neutral-400 max-sm:placeholder:text-base"
                />
            )}
        </div>
    );
};

export default Input;
