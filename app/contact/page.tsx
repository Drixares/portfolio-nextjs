import Footer from "@/components/footer";
import ContactForm from "./_components/contact-form";
import Heading1 from "@/components/heading1";

const ContactPage = () => {
    return (
        <div className="space-y-64">
            <div className="mt-16 mx-auto max-w-screen-2xl w-full">
                <div className="space-y-5">
                    <Heading1>contact form.</Heading1>
                    <p className="text-lg text-neutral-600 max-w-2xl">
                        hey, let&apos;s talk about what you need and how i can
                        help.
                    </p>
                </div>
                <ContactForm />
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
