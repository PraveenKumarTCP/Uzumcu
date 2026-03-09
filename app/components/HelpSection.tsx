import Button from "./Button";

export default function HelpSection() {
    return (
        <section className="py-24 bg-[url('/images/home/help-bg.png')] bg-cover bg-center relative overflow-hidden">


            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center" data-aos="zoom-in">
                <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 text-center leading-tight tracking-tight text-shadow-md">
                    Need Help?
                </h2>
                <p className="text-xl! text-white! font-bold mb-12 text-center leading-relaxed text-shadow-sm">
                    You can share all your questions and opinions with us. It is our pleasure to meet your needs.
                </p>

                <Button
                    variant="outline"
                    size="xl"
                    radius="full"
                    icon={<svg className="w-5 h-5 fill-current transition-colors" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>}
                >
                    Contact Us
                </Button>
            </div>
        </section>
    );
}

