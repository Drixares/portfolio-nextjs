import Footer from "@/components/footer";
import ContactForm from "./_components/contact-form";

const ContactPage = () => {
    return (
        <div className="space-y-64">
            <div className="mt-16 mx-auto max-w-screen-2xl w-full">
                <div className="space-y-5">
                    <h1 className="text-7xl lowercase font-light">
                        contact form.
                    </h1>
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
