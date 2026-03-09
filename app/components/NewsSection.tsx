export default function NewsSection() {
    const news = [
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "/images/home/news-1.png"
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "/images/home/news-2.png"
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "/images/home/news-3.png"
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img: "/images/home/news-4.png"
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col items-center" data-aos="fade-up">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-secondary opacity-60">
                        <svg className="w-5 h-5 fill-primary" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                    </span>
                    <span className="text-xs font-bold  uppercase tracking-widest">Latest News & Updates</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] mb-4 text-center leading-tight">
                    Explore our journey of growth, innovation, and global expansion.
                </h2>
                <p className="text-xs md:text-sm font-medium mb-16 text-center max-w-6xl leading-relaxed whitespace-pre-line">
                    Stay updated with our latest developments, product launches, international fair participations, certifications, and technological advancements. See our line up
                    continue to innovate and contribute to global healthcare.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                    {news.map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group group-hover:bg-white border border-gray-100 h-full flex flex-col" data-aos="fade-up" data-aos-delay={i * 100}>
                            <div className="h-44 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                                <span className="text-white text-[10px] font-black tracking-widest uppercase">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                                </span>
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="p-6 text-center flex-grow flex flex-col items-center justify-center">
                                <h3 className="text-sm font-black text-[#111827] mb-3 uppercase tracking-tighter leading-none">{item.title}</h3>
                                <p className="text-[10px] text-gray-500 leading-relaxed font-semibold max-w-[150px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
