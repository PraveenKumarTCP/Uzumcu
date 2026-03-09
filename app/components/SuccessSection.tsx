import Button from "./Button";

export default function SuccessSection() {
    const boxes = [
        {
            title: "Catalogs",
            img: "/images/home/catalog.png",
        },
        {
            title: "Company Profile",
            img: "/images/home/profile.png",
        },
        {
            title: "Company Video",
            img: "/images/home/video.png",
        },
        {
            title: "Latest News",
            img: "/images/home/chart.png",
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left Column - Image Placeholder */}
                    <div className="lg:col-span-6 w-full h-[500px] bg-gray-50 rounded-3xl flex items-center justify-center border-4 border-gray-100/50 overflow-hidden shadow-inner" data-aos="fade-right">
                        <span className="text-gray-300 font-bold uppercase tracking-widest text-xs opacity-50">IMAGE SPACE</span>
                    </div>
                    {/* Right Column - Text */}
                    <div className="lg:col-span-6" data-aos="fade-left">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-primary">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                            </span>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Trust & Experience</span>
                        </div>

                        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                            We Are With You On The Road To Success.
                        </h2>

                        <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium text-justify">
                            We carry the excitement of the first day with over 50 years of experience. We produce in our 30,000 m2 facility located in Ankara. We continue our production in accordance with international ISO 9001 and ISO 13485 standards. We offer all operating room equipment with CE marking. With over 50 years of experience in production and sales, our company offers operating room solutions to more than 100 countries in the world with an innovative, reliable and human health-oriented approach. We are happy to contribute back to our country's economy while expanding the marketing of the products we produce by participating in domestic and international fairs.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 ">
                            {boxes.map((box, i) => (
                                <div key={i} className="flex flex-col items-center p-4 justify-center bg-primary rounded-xl text-white text-center group cursor-pointer  transition-transform shadow-lg shadow-primary/20">
                                    <img src={box.img} alt={box.title} className="mb-3 h-25 w-25 object-contain rounded-xl hover:scale-105" />
                                    <span className="text-[14px]! font-bold uppercase tracking-wider leading-tight">{box.title}</span>
                                </div>
                            ))}
                        </div>

                        <Button variant="primary" size="md" radius="full">
                            Explore Our Solutions
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
