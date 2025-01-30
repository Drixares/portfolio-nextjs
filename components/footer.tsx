import { Tree } from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
    return (
        <footer className="pb-9 w-full flex flex-col items-center justify-center gap-3 font-medium">
            <Tree size={24} color="#475569" />
            Designed & Built by Mattéo.
        </footer>
    );
};

export default Footer;
