import Button from "./Button";

export default function AboutSection() {
    const checkItems = [
        "Customer focus",
        "Expert staff",
        "Internal trainings",
        "Best support",
        "Special projects",
        "Sustainable production",
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left Column */}
                    <div className="lg:w-1/2" data-aos="fade-right">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-[#3dc4d9]">
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                                    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
                                </svg>
                            </div>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">About Us</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            We Pay Attention to Details to <br className="hidden md:block" /> Achieve Perfection
                        </h2>

                        <p className="text-gray-500 mb-8 max-w-xl">
                            We handle all processes from planning to shipment, in the most detailed way.
                        </p>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
                            {checkItems.map((item) => (
                                <div key={item} className="flex items-center gap-3 text-[15px] font-bold text-gray-800">
                                    <div className="w-6 h-6 rounded-full bg-[#3dc4d9] flex items-center justify-center text-white flex-shrink-0">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="w-full h-px bg-gray-100 mb-10" />

                        <div className="space-y-6 text-gray-500 text-sm leading-relaxed mb-10 max-w-xl">
                            <p>
                                We offer practical, modern and innovative products that pay attention to the needs of the user to create maximum comfort for both surgeons and patients.
                            </p>
                            <p>
                                Since 1968, we have been manufacturing operating room equipment and medical gas systems for more than 50 years. With the excitement of our first day, we adopt the principle of being one step ahead of change and in line with this vision, we aim to contribute to human health not only in Turkey but all over the world.
                            </p>
                        </div>

                        <Button variant="primary" size="lg" radius="full">
                            Show more About Us
                        </Button>
                    </div>

                    {/* Right Column - Stats Grid */}
                    <div className="lg:w-1/2 grid grid-cols-12 gap-4 h-[450px] md:h-[550px] relative items-stretch mt-12 lg:mt-0" data-aos="fade-left">
                        <div className="col-span-4 flex flex-col gap-6">
                            {/* 100+ Countries */}
                            <div className="bg-[#3dc4d9] rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center shadow-lg h-full">
                                <span className="text-5xl font-bold mb-1">100+</span>
                                <span className="text-sm font-bold opacity-100">Countries</span>
                            </div>

                            {/* 50+ Years */}
                            <div className="bg-[#3dc4d9] rounded-2xl p-6 text-white flex flex-col items-center justify-center text-center shadow-lg h-full">
                                <span className="text-5xl font-bold mb-1">50+</span>
                                <span className="text-sm font-bold opacity-100 leading-tight">Years of Experience</span>
                            </div>
                        </div>

                        {/* Image Space 1 - Circular Light (Right Background Image) */}
                        <div className="col-span-8 bg-gray-50 rounded-2xl overflow-hidden relative shadow-md">
                            <img src="/images/home/abt-1.jpg" alt="Circular Light" className="w-full h-full object-cover" />
                        </div>

                        {/* Image Space 2 - Operating Table (Overlapping Image) */}
                        <div className="absolute left-[0%] top-1/2 -translate-y-1/2 w-[55%] aspect-[1.3/1] bg-white rounded-[2rem] border-[10px] border-white shadow-2xl z-20 overflow-hidden">
                            <img src="/images/home/abt-2.jpg" alt="Operating Table" className="w-full h-full object-cover" />
                        </div>

                        {/* Decorative background element removed or updated */}
                    </div>
                </div>
            </div>
        </section>
    );
}
