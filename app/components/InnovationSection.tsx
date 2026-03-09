export default function InnovationSection() {
    const items = [
        {
            title: "Advanced Technology Research",
            description: "By researching the latest innovations and trends in healthcare technologies, we strive to develop the most advanced solutions in the industry.",
            img: "/images/home/research.jpg"
        },
        {
            title: "R&D Investments",
            description: "We are committed to continuously increasing R&D and supporting our teams to develop innovative products and solutions.",
            img: "/images/home/r-d.jpg"
        },
        {
            title: "Collaborations and Partnerships",
            description: "We establish collaborations with universities, research centers and other technology providers to be at the forefront of technological development.",
            img: "/images/home/partnerships.jpg"
        }
    ];

    return (
        <section className="py-24 bg-[url('/images/home/technology-bg.png')] bg-cover bg-center relative overflow-hidden">


            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-4 opacity-60">
                    <span className="text-primary">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                            <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
                        </svg>
                    </span>
                    <span className="text-xs font-bold text-white! uppercase tracking-widest">Technology Excellence</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center max-w-4xl leading-tight">
                    We Offer Leading and Innovative Solutions in Technology
                </h2>

                <div className="flex flex-col lg:flex-row gap-16 items-center w-full">
                    {/* Items List */}
                    <div className="lg:w-1/2 flex flex-col gap-6" data-aos="fade-right">
                        <p className="text-white text-sm mb-6 leading-relaxed ">
                            We deliver leading and innovative technology solutions by continuously advancing our research and development capabilities. Through in-depth analysis of emerging healthcare trends, and cutting-edge technologies, we create forward-thinking solutions that set new industry standards.
                        </p>

                        {items.map((item, i) => (
                            <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm border border-primary/5 hover:border-primary/20 transition-all group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center text-gray-200 text-[10px] font-bold">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Column */}
                    <div className="lg:w-1/2 w-full h-[600px] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative " data-aos="zoom-in">
                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-[0.3em] text-[10px]">
                            <video src="https://cdn.clinicalvisuals.com/siteImages/generic/bronchial_foreign_body.mp4" autoPlay loop muted className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
