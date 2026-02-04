import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Zap, Cpu, Layers, Globe, Send, Terminal, Database, ChevronDown, X } from 'lucide-react'
import { Telemetry } from '../components/Layout'
import { useState, useEffect } from 'react'

const Typewriter = ({ text }: { text: string }) => {
    const [displayed, setDisplayed] = useState("")
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i))
            i++
            if (i > text.length) {
                clearInterval(interval)
                setIsDone(true)
            }
        }, 100)
        return () => clearInterval(interval)
    }, [text])

    return (
        <span className="relative">
            {displayed}
            {!isDone && <span className="inline-block w-[0.1em] h-[1em] bg-primary ml-1 animate-pulse align-middle"></span>}
        </span>
    )
}

const Hero = () => {
    return (
        <section className="relative min-h-[100svh] flex items-end px-6 md:px-10 pb-16 md:pb-24 pt-32 md:pt-40 overflow-hidden">
            <Telemetry label="Node" value="SKR_HQ_01" className="absolute top-40 left-10 hidden lg:block" />
            <Telemetry label="System" value="V2026.04" className="absolute bottom-20 right-10 hidden lg:block" />

            <div className="absolute top-20 right-6 md:right-10 w-[60%] h-[70vh] border-l border-b border-white/5 pointer-events-none hidden md:block">
                <div className="absolute bottom-0 right-0 p-4 font-mono text-[10px] text-white/20 uppercase tracking-widest leading-none">
                    Infrastructure // Sukkur Division <br /> System Version 2026.04
                </div>
            </div>

            <div className="relative z-10 w-full">
                <div className="max-w-[1400px] mx-auto">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(3.5rem,14vw,12rem)] leading-[0.82] font-black uppercase tracking-tighter"
                    >
                        <Typewriter text="Grow" /> <br />
                        <span className="text-white/20 text-[0.4em] font-mono tracking-[0.2em] block mb-4">Precision Engineering</span>
                        <span className="text-primary italic text-[0.9em]"><Typewriter text="Your" /></span> <br />
                        Business.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-8 md:mt-12 max-w-xl grid grid-cols-12 gap-4 md:gap-6"
                    >
                        <div className="col-span-2 md:col-span-1 border-t-4 border-primary mt-2"></div>
                        <p className="col-span-10 md:col-span-11 text-base md:text-xl text-muted font-medium leading-relaxed">
                            We provide powerful software that stops stock theft, speeds up your billing,
                            and lets you manage your business from anywhere. Proven in Sindh.
                        </p>
                    </motion.div>

                    <div className="mt-10 md:mt-16 flex flex-col sm:flex-row gap-4 md:gap-6">
                        <button className="cyber-button group w-full sm:w-auto" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                            See Our Solutions
                            <ArrowRight className="inline-block ml-4 group-hover:translate-x-2 transition-transform" size={20} />
                        </button>
                        <button className="cyber-button-outline w-full sm:w-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Get a Free Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative Grid Lines */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>
        </section>
    )
}

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-40 px-5 md:px-10 relative bg-zinc-950">
            <div className="grid grid-cols-12 gap-y-12 md:gap-y-20">
                <div className="col-span-12 lg:col-span-4 self-start lg:sticky lg:top-40">
                    <h2 className="text-4xl md:text-7xl font-black leading-none uppercase">Why <br /><span className="text-primary">Us?</span></h2>
                    <p className="mt-5 md:mt-8 text-muted max-w-sm text-base md:text-lg">We don't just write code; we solve your business problems. Built for reliability, designed to help you grow.</p>
                </div>

                <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-1 bg-white/5 border border-white/5 overflow-hidden">
                    {[
                        { icon: <Zap size={32} />, title: 'Smart Billing (POS)', desc: 'Fast, easy-to-use billing software that works even without internet. Perfect for busy shops and restaurants.' },
                        { icon: <Cpu size={32} />, title: 'Stop Stock Theft', desc: 'Auto-track every item. Get instant alerts when stock is low or if something goes missing from your inventory.' },
                        { icon: <Layers size={32} />, title: 'Mobile Management', desc: 'Check your daily sales, profit, and staff attendance right from your phone, no matter where you are.' },
                        { icon: <Globe size={32} />, title: 'Local Sindh Support', desc: 'Friendly technical support available in your city. We come to your shop to set everything up for you.' }
                    ].map((service, idx) => (
                        <motion.div
                            whileHover={{ backgroundColor: '#1A1A1A', y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="p-8 md:p-12 bg-ink transition-all duration-300 group will-change-transform border border-white/5"
                            key={idx}
                        >
                            <div className="text-primary mb-8 md:mb-12 group-hover:scale-110 transition-transform origin-left">{service.icon}</div>
                            <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-6 uppercase tracking-tight group-hover:text-white transition-colors">{service.title}</h3>
                            <p className="text-muted leading-relaxed text-sm md:text-lg group-hover:text-white/70 transition-colors">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const About = () => {
    return (
        <section id="about" className="py-20 md:py-40 px-5 md:px-10 border-t border-white/5 overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-10">
                <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">Homegrown <br />in <span className="text-primary">Sukkur</span></h2>
                    <p className="text-base md:text-xl text-muted leading-relaxed max-w-xl">
                        We believe Pakistan's business potential is limitless. Based in the heart of Sindh, we bridge the gap between local market requirements and international engineering standards.
                    </p>
                    <div className="mt-10 space-y-5">
                        {[
                            "Local Support & Region-wide Integration",
                            "99.9% System Resilience",
                            "Karachi Performance, Personalized Care"
                        ].map((item, i) => (
                            <div className="flex gap-4 items-center" key={i}>
                                <div className="w-1.5 h-1.5 bg-primary"></div>
                                <span className="font-bold uppercase tracking-[0.2em] text-[9px] md:text-[10px]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 relative order-1 lg:order-2">
                    <div className="aspect-square bg-white/5 border border-white/10 flex items-center justify-center group overflow-hidden relative">
                        <img
                            src="/assets/skr_image.jpg"
                            alt="SKR Infrastructure"
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
                        <div className="absolute inset-0 border-[15px] md:border-[20px] border-ink/50 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Location = () => {
    return (
        <section className="py-20 md:py-40 px-5 md:px-10 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-12 gap-10 items-center">
                    <div className="col-span-12 lg:col-span-12 mb-12 lg:mb-32">
                        <h2 className="text-primary font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 font-bold">Physical Node</h2>
                        <h3 className="text-4xl md:text-9xl font-black uppercase tracking-tighter leading-none">
                            Our <br /> <span className="text-white">HQ</span>.
                        </h3>
                    </div>

                    <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                        <div className="space-y-8 md:space-y-12">
                            <div>
                                <h4 className="text-primary font-black uppercase text-lg md:text-xl mb-3 md:mb-4 tracking-tight">MJ Building Hub</h4>
                                <p className="text-muted text-base md:text-lg leading-relaxed max-w-sm">
                                    Located on the top floor of MJ Building, Microwave Colony. The strategic command center for all Swift Ops deployments in Sindh.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 border-l border-white/10 pl-6 md:pl-8 font-mono">
                                <div>
                                    <span className="block text-[9px] md:text-[10px] text-white/30 uppercase tracking-widest mb-1 md:mb-2">Latitude</span>
                                    <span className="text-base md:text-xl font-bold text-white tracking-tight">27.71185° N</span>
                                </div>
                                <div>
                                    <span className="block text-[9px] md:text-[10px] text-white/30 uppercase tracking-widest mb-1 md:mb-2">Longitude</span>
                                    <span className="text-base md:text-xl font-bold text-white tracking-tight">68.84187° E</span>
                                </div>
                            </div>

                            <a
                                href="https://www.google.com/maps/place/MJ+Building/@27.7118563,68.8418726,17.76z/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cyber-button-outline inline-block w-full sm:w-auto text-center"
                            >
                                Show Path on Maps
                            </a>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 mb-10 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-10%" }}
                            className="aspect-[16/9] bg-white/5 border border-white/10 relative group overflow-hidden"
                        >
                            {/* Real Google map embed using coordinates to avoid reviews card */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1764.35858!2d68.84187!3d27.71185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spk!4v1710000000000!5m2!1sen!2spk"
                                className="w-full h-full border-0 grayscale brightness-75 contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            {/* Technical Overlay */}
                            <div className="absolute top-4 left-4 md:top-6 md:left-6 font-mono text-[8px] md:text-[9px] text-primary space-y-0.5 md:space-y-1 uppercase tracking-widest bg-black/80 p-2 md:p-3 border border-primary/20 pointer-events-none">
                                <div>Node_ID: SKR_HQ_01</div>
                                <div>Status: ONLINE</div>
                            </div>

                            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 font-mono text-[9px] md:text-[10px] text-white/40 uppercase bg-black/80 px-3 md:px-4 py-1.5 md:py-2 pointer-events-none">
                                [ Swift Developers HQ // Top Floor ]
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Background Background Text */}
            <div className="absolute -bottom-5 md:-bottom-10 -right-10 md:-right-20 text-[30vw] md:text-[25vw] font-black text-white/[0.01] uppercase select-none pointer-events-none -z-0 italic">
                SUKKUR
            </div>
        </section>
    )
}

const SoftwareShowcase = () => {
    const deployments = [
        {
            name: "Asif Super Store",
            location: "Sukkur, Sindh",
            image: "/assets/branch3.webp",
            tech: ["Faster Billing", "Zero Stock Leakage"]
        },
        {
            name: "711 Medical Store",
            location: "Sukkur, Sindh",
            image: "/assets/711 Medical Store.jpg",
            tech: ["Stock Control", "Easy Billing"]
        },
        {
            name: "Family Super Mart",
            location: "Sukkur, Sindh",
            image: "/assets/family_supermart.webp",
            tech: ["Multi-Counter", "Phone Sync"]
        },
        {
            name: "Memon Restaurant",
            location: "Khairpur, Sindh",
            image: "/assets/memon_restauraunt khairpur.webp",
            tech: ["Smart Billing", "Order Tracking"]
        }
    ];

    return (
        <section id="showcase" className="py-20 md:py-40 px-5 md:px-10 border-t border-white/5 bg-zinc-950/50">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-20">
                    <h2 className="text-primary font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 font-bold">Trusted by Local Leaders</h2>
                    <h3 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        Proven <br /> <span className="text-white">Success</span>.
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-white/5 border border-white/5">
                    {deployments.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative aspect-[4/3] overflow-hidden bg-ink"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                loading="lazy"
                                decoding="async"
                                onClick={() => (window as any).setActiveImage(item.image)}
                                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-60 group-hover:opacity-100 cursor-zoom-in"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                            <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                                    {item.tech.map((t, index) => (
                                        <span key={index} className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-primary border border-primary/30 bg-primary/5 px-1.5 md:px-2 py-0.5 md:py-1">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h4 className="text-2xl md:text-4xl font-black uppercase text-white mb-1 md:mb-2">{item.name}</h4>
                                <p className="text-white/40 font-mono text-[10px] uppercase tracking-widest">{item.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:mt-20 flex justify-end">
                    <p className="text-muted font-mono text-[9px] md:text-[10px] uppercase tracking-widest max-w-xs text-right opacity-50 md:opacity-100">
                        More deployments being verified. <br /> System expanding across Sindh sector.
                    </p>
                </div>
            </div>
        </section>
    )
}

const projects = [
    {
        title: "Elite Retail POS",
        sector: "Wholesale & Retail",
        desc: "Trusted by major textile distributors in Sindh. Easy management for inventory and sales.",
        tech: ["Branch Sync", "Accounts", "Inventory"],
        image: "/assets/pos-vibe.png"
    },
    {
        title: "Sindh Biz Monitor",
        sector: "Supply Chain",
        desc: "Watch your distribution network in real-time. Know exactly where your stock is.",
        tech: ["Tracking", "Live Data"],
        icon: <Database className="text-primary" size={48} />
    },
    {
        title: "Warehouse Alpha",
        sector: "Inventory Management",
        desc: "Never run out of products again. Smart system that predicts what you need to buy.",
        tech: ["Smart Buy", "Stock Alerts"],
        icon: <Cpu className="text-primary" size={48} />
    },
    {
        title: "Cloud Dash",
        sector: "Analytics",
        desc: "See your daily profit and sales from anywhere in the world on your phone.",
        tech: ["Mobile View", "Daily Profits"],
        icon: <Zap className="text-primary" size={48} />
    }
]

const POSShowcase = () => {
    return (
        <section id="portfolio" className="relative py-20 lg:py-40 bg-white/5 border-b border-white/10 overflow-hidden">
            <Telemetry label="Registry" value="ACTIVE_DEPLOYMENTS" className="absolute top-10 left-10 hidden lg:block" />
            <Telemetry label="Region" value="SINDH_CORE" className="absolute bottom-10 right-10 hidden lg:block" />
            <div className="container mx-auto px-5 md:px-10">
                <div className="grid grid-cols-12 gap-10 items-center">
                    <div className="col-span-12 lg:col-span-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-primary font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 font-bold">Top Selling Solution</h2>
                            <h3 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8 md:mb-10">
                                Swift <br /> <span className="text-white">POS</span>.
                            </h3>
                            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-lg mb-10 md:mb-12">
                                The ultimate software for Sindh's largest wholesalers and retailers. Manage accounts, stock, and sales in one simple place.
                            </p>
                            <div className="grid grid-cols-2 gap-6 md:gap-8">
                                <div>
                                    <h4 className="text-white font-black uppercase text-base md:text-lg mb-1 md:mb-2">Easy to Use</h4>
                                    <p className="text-[9px] md:text-xs text-muted uppercase tracking-widest font-bold">No Computer Degree Needed</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-black uppercase text-base md:text-lg mb-1 md:mb-2">Instant Sync</h4>
                                    <p className="text-[9px] md:text-xs text-muted uppercase tracking-widest font-bold">Mobile Reporting</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0">
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative z-20 border border-white/20 aspect-[4/3] overflow-hidden bg-zinc-900 group"
                            >
                                <img
                                    src="/assets/site-branding/pos-face.jpg"
                                    loading="lazy"
                                    decoding="async"
                                    onClick={() => (window as any).setActiveImage("/assets/site-branding/pos-face.jpg")}
                                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 cursor-zoom-in"
                                    alt="POS Interface"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 z-30 w-1/2 border-4 border-primary shadow-2xl overflow-hidden hidden sm:block"
                            >
                                <img
                                    src="/assets/site-branding/pos-login.png"
                                    loading="lazy"
                                    decoding="async"
                                    onClick={() => (window as any).setActiveImage("/assets/site-branding/pos-login.png")}
                                    className="w-full cursor-zoom-in"
                                    alt="POS Login"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: -15 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                                className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 z-40 w-32 md:w-48 pointer-events-none drop-shadow-2xl opacity-40 md:opacity-100"
                            >
                                <img
                                    src="/assets/wireless_barcode_scanner-removebg-preview.png"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-auto"
                                    alt="Barcode Scanner"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="absolute -top-5 -left-5 md:-top-10 md:-left-10 z-0 w-32 md:w-48 opacity-30 md:opacity-50 grayscale invert"
                            >
                                <img
                                    src="/assets/site-branding/receipt.png"
                                    loading="lazy"
                                    decoding="async"
                                    onClick={() => (window as any).setActiveImage("/assets/site-branding/receipt.png")}
                                    className="w-full cursor-zoom-in"
                                    alt="System Output"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[40vw] lg:text-[30vw] font-black text-white/[0.02] uppercase leading-none select-none pointer-events-none -z-0">
                SWIFT-POS
            </div>
        </section>
    )
}

const PetShopShowcase = () => {
    const petShopImages = [
        "/assets/petshop/screenshot-132.png",
        "/assets/petshop/screenshot-133.png",
        "/assets/petshop/screenshot-134.png",
        "/assets/petshop/screenshot-135.png",
        "/assets/petshop/screenshot-136.png",
        "/assets/petshop/screenshot-137.png"
    ]

    return (
        <section id="pet-shop" className="py-20 lg:py-40 bg-zinc-950 border-b border-white/5 relative overflow-hidden">
            <Telemetry label="ID" value="PROJECT_PAW_SYNC" className="absolute top-10 right-10 hidden lg:block" />

            <div className="container mx-auto px-6 md:px-10">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-primary font-mono text-sm uppercase tracking-[0.4em] mb-6 font-bold">E-Commerce Ready</h2>
                        <h3 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
                            Professional <br /> <span className="text-white">Websites</span>.
                        </h3>
                        <p className="text-xl text-muted leading-relaxed max-w-2xl mb-12">
                            Take your shop online. We build beautiful, fast-loading websites that help you sell products even while you sleep.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {petShopImages.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative border border-white/10 overflow-hidden bg-black group ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                        >
                            <img
                                src={src}
                                alt={`Pet Shop Interface ${i + 1}`}
                                loading="lazy"
                                decoding="async"
                                onClick={() => (window as any).setActiveImage(src)}
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 cursor-zoom-in"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end pointer-events-none">
                                <span className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold">SYS_VIEW_0{i + 1}</span>
                            </div>
                            <div className="absolute top-4 right-4 w-1 h-1 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Cat for Pet Shop */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -right-10 bottom-0 w-64 md:w-80 pointer-events-none z-10 hidden lg:block"
            >
                <img
                    src="/assets/petshop/hairy-fluffy-cat-playing-png.png"
                    alt="Fluffy Cat Deco"
                    className="w-full h-auto drop-shadow-2xl"
                />
            </motion.div>
        </section>
    )
}

const OtherProjects = () => {
    return (
        <section id="portfolio" className="py-24 px-6 md:px-10 relative overflow-hidden">
            <div className="mb-20">
                <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-none">Our <br /><span className="text-primary">Portfolio</span></h2>
                <div className="mt-10 flex gap-4 font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    <span>Active nodes: 142</span>
                    <span>|</span>
                    <span>Total processed: 2.1M tx</span>
                    <span>|</span>
                    <span>Sindh Region Hub</span>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-1 bg-white/5 border border-white/5">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ backgroundColor: '#111' }}
                        className="col-span-12 md:col-span-6 lg:col-span-3 p-10 bg-ink transition-colors group relative overflow-hidden border-r border-b border-white/5 will-change-contents"
                    >
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-10">
                                <div className="p-3 border border-primary/20 bg-primary/5">
                                    {project.icon || <Terminal className="text-primary" size={32} />}
                                </div>
                                <span className="font-mono text-[9px] text-primary uppercase tracking-[0.2em] font-bold border border-primary px-2 py-1">
                                    {project.sector}
                                </span>
                            </div>

                            <h3 className="text-2xl font-black mb-4 uppercase group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-muted text-sm mb-8 leading-relaxed line-clamp-3">{project.desc}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-[8px] uppercase tracking-widest font-bold text-white/30 border border-white/10 px-2 py-1">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="absolute -bottom-5 -right-2 text-[10vw] font-black text-white/[0.02] select-none pointer-events-none italic">
                            0{idx + 1}
                        </div>

                        {/* Scanning Line Effect on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-20 -translate-y-full group-hover:animate-[scanline_2s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

const RestaurantPOS = () => {
    const images = [
        "/assets/Restauraunt_Pos_App/Screenshot (148).png",
        "/assets/Restauraunt_Pos_App/44.png",
        "/assets/Restauraunt_Pos_App/Screenshot (149).png",
        "/assets/Restauraunt_Pos_App/Screenshot (159).png",
        "/assets/Restauraunt_Pos_App/Screenshot (160).png",
        "/assets/Restauraunt_Pos_App/Screenshot (164).png"
    ]

    return (
        <section id="restaurant-pos" className="py-20 lg:py-40 bg-zinc-950 border-b border-white/5 relative overflow-hidden">
            <Telemetry label="Node" value="REST_POS_STATION" className="absolute top-10 right-10 hidden lg:block" />

            <div className="container mx-auto px-6 md:px-10">
                <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-primary font-mono text-sm uppercase tracking-[0.4em] mb-6 font-bold">Industry Specialized</h2>
                        <h3 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
                            Restaurant <br /> <span className="text-white">POS App</span>.
                        </h3>
                        <p className="text-xl text-muted leading-relaxed">
                            A complete solution for modern food establishments. From KOT (Kitchen Order Tickets) to table management and real-time sales reporting.
                        </p>
                    </motion.div>
                    <div className="flex gap-10 font-mono text-[10px] text-white/40 uppercase tracking-widest border-l border-white/10 pl-10 hidden lg:block">
                        <div>Feature: Table Mgmt</div>
                        <div>Feature: KOT Print</div>
                        <div>Feature: Recipe Costing</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <motion.div
                        className="md:col-span-8 relative group border border-white/10 overflow-hidden bg-black"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={images[0]}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 cursor-zoom-in"
                            onClick={() => (window as any).setActiveImage(images[0])}
                            alt="Main Interface"
                        />
                        <div className="absolute top-5 left-5 bg-black/80 border border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-primary">
                            Primary Terminal
                        </div>

                        {/* Deco Receipt Overlay */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 15 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="absolute -right-10 -bottom-20 z-50 w-32 md:w-56 drop-shadow-2xl cursor-zoom-in hidden sm:block grayscale brightness-125"
                        >
                            <img
                                src="/assets/Restauraunt_Pos_App/receipt.png"
                                alt="Order Receipt"
                                className="w-full h-auto"
                                loading="lazy"
                                decoding="async"
                                onClick={() => (window as any).setActiveImage("/assets/Restauraunt_Pos_App/receipt.png")}
                            />
                        </motion.div>

                        {/* Deco Logo */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -30 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-10 -right-10 w-40 md:w-64 opacity-20 pointer-events-none grayscale invert"
                        >
                            <img src="/assets/Restauraunt_Pos_App/logo.png" alt="POS Logo Deco" className="w-full h-auto" />
                        </motion.div>
                    </motion.div>
                    <div className="md:col-span-4 grid grid-cols-1 gap-6">
                        {images.slice(2, 4).map((img, i) => (
                            <motion.div
                                key={i}
                                className="relative group border border-white/10 overflow-hidden bg-black aspect-video"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <img
                                    src={img}
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 cursor-zoom-in"
                                    onClick={() => (window as any).setActiveImage(img)}
                                    alt="Sub View"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const RestaurantWebsite = () => {
    const images = [
        "/assets/restauraunt_website/Screenshot (139).png",
        "/assets/restauraunt_website/Screenshot (140).png",
        "/assets/restauraunt_website/Screenshot (142).png",
        "/assets/restauraunt_website/Screenshot (145).png",
        "/assets/restauraunt_website/Screenshot (146).png"
    ]

    return (
        <section id="restaurant-web" className="py-20 lg:py-40 bg-zinc-900 border-b border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center mb-20">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-primary font-mono text-sm uppercase tracking-[0.4em] mb-6 font-bold">Web Presence</h2>
                            <h3 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
                                Gourmet <br /> <span className="text-white">Web Portals</span>.
                            </h3>
                            <p className="text-xl text-muted leading-relaxed mb-10">
                                High-end digital experiences for elite dining brands. Integrated menus, reservation systems, and stunning visual storytelling.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["Responsive", "Fast Load", "SEO Ready"].map(tag => (
                                    <span key={tag} className="border border-white/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-white/60">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                        {images.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="border border-white/10 group overflow-hidden bg-black aspect-[3/4]"
                            >
                                <img
                                    src={img}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 cursor-zoom-in group-hover:scale-105"
                                    onClick={() => (window as any).setActiveImage(img)}
                                    alt="Vertical View"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const VotingAppShowcase = () => {
    const images = [
        "/assets/Voting_app/Screenshot (122).png",
        "/assets/Voting_app/Screenshot (90).png"
    ]

    return (
        <section id="voting-app" className="py-20 lg:py-40 bg-zinc-950 border-b border-white/5 relative overflow-hidden">
            <Telemetry label="Process" value="BIOMETRIC_ENROLL" className="absolute top-10 right-10 hidden lg:block" />

            <div className="container mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-20 border-2 border-primary shadow-[0_0_50px_rgba(255,107,0,0.1)] overflow-hidden bg-black aspect-[16/10]"
                        >
                            <img
                                src={images[0]}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 cursor-zoom-in"
                                onClick={() => (window as any).setActiveImage(images[0])}
                                alt="Voting Interface"
                            />
                        </motion.div>

                        {/* Fingerprint Deco */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                            whileInView={{ opacity: 0.4, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="absolute -bottom-10 -left-10 md:-bottom-20 md:-left-20 z-10 w-40 md:w-72 pointer-events-none will-change-transform"
                        >
                            <img
                                src="/assets/Voting_app/fingerprint.png"
                                alt="Biometric Deco"
                                className="w-full h-auto text-primary brightness-150"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-zinc-900/50 p-8 md:p-12 border border-white/5 relative overflow-hidden"
                        >
                            <div className="relative z-10">
                                <h2 className="text-primary font-mono text-sm uppercase tracking-[0.4em] mb-6 font-bold">Secure Infrastructure</h2>
                                <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10">
                                    Digital <br /> <span className="text-white">Democracy</span>.
                                </h3>
                                <p className="text-lg md:text-xl text-muted leading-relaxed mb-10">
                                    A high-integrity voting system designed for secure, transparent, and real-time election management. Featuring biometric verification and immutable audit trails.
                                </p>
                                <div className="space-y-4">
                                    {["Biometric Authentication", "Immutable Audit Logs", "Real-time Tallying"].map(item => (
                                        <div key={item} className="flex items-center gap-4 text-white font-mono text-xs uppercase tracking-widest border-b border-white/5 pb-2">
                                            <div className="w-1.5 h-1.5 bg-primary"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-10 font-mono text-[80px] text-white/[0.02] font-black select-none pointer-events-none">
                                SEC_01
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-40 px-5 md:px-10 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
            <Telemetry label="Target" value="CONTACT_MOD" className="absolute top-20 right-10 hidden lg:block" />

            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 md:mb-12">
                        Get Your <br /> <span className="text-primary italic">Free Demo</span>.
                    </h2>
                    <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mb-12 md:mb-16 px-4">
                        Speak with our experts today. We’ll show you exactly how our software can make your business easier to manage and more profitable.
                    </p>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center text-left max-w-md md:max-w-4xl">
                        <div className="space-y-10 md:space-y-12">
                            <div className="space-y-3 md:space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                    <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary/60">Node Status: Online</span>
                                </div>
                                <h4 className="text-white font-black uppercase text-3xl md:text-4xl tracking-tight">Swift Developers</h4>
                                <p className="text-muted text-[10px] md:text-sm font-mono uppercase tracking-widest leading-relaxed">
                                    Strategic Lead: <span className="text-white">Tahir Ali Khan Junjua</span> <br />
                                    Region: Sindh Regional Operations HQ
                                </p>
                            </div>

                            <div className="space-y-6 md:space-y-8">
                                <div className="space-y-3 md:space-y-4">
                                    <span className="block font-mono text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.2em]">Primary Link</span>
                                    <a href="mailto:swiftdevelopers@gmail.com" className="flex items-center gap-3 md:gap-4 group">
                                        <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary transition-colors">
                                            <Globe className="text-primary" size={18} />
                                        </div>
                                        <span className="font-mono text-[11px] md:text-sm uppercase tracking-widest group-hover:text-primary transition-colors truncate">swiftdevelopers@gmail.com</span>
                                    </a>
                                </div>

                                <div className="space-y-3 md:space-y-4">
                                    <span className="block font-mono text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.2em]">Direct Verbal</span>
                                    <a href="https://wa.me/923701224388" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 group">
                                        <div className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-primary transition-colors">
                                            <Send className="text-primary" size={18} />
                                        </div>
                                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-primary">+92 370 1224388</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative mx-auto md:ml-auto md:mr-0 mt-8 md:mt-0">
                            <div className="bg-white p-2 md:p-3">
                                <div className="w-40 h-40 md:w-48 md:h-48 bg-white mx-auto">
                                    <img
                                        src="/assets/whatsapp_qr.png"
                                        alt="WhatsApp QR Code"
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-[10px] text-black text-center p-4">QR_NOT_FOUND</div>';
                                        }}
                                    />
                                </div>
                                <div className="mt-2 text-center border-t border-black/5 pt-2">
                                    <span className="block font-sans text-[9px] md:text-[10px] text-black font-bold uppercase tracking-[0.2em]">
                                        WhatsApp Connect
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Background Text */}
            <div className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 text-[35vw] md:text-[25vw] font-black text-white/[0.01] uppercase select-none pointer-events-none -z-0">
                SWIFT
            </div>
        </section>
    )
}

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={onClick}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left group"
            >
                <span className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-primary"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-muted text-base md:text-lg leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const faqs = [
        {
            question: "Does the software work without Internet?",
            answer: "Absolutely. Our systems are engineered to be 'Offline-First'. Your shop can continue billing and managing stock even during a complete regional internet outage. Data syncs automatically once connectivity is restored."
        },
        {
            question: "Can I monitor my sales from home?",
            answer: "Yes. Every Swift deployment comes with cloud-sync capabilities. You can check your daily gross profit, staff attendance, and stock levels from your smartphone anywhere in Pakistan."
        },
        {
            question: "What happens if I face a technical issue at night?",
            answer: "We are local. Unlike distant software providers, we have a fast-response team in Sindh. If there's a critical system failure, our engineers can be physically present at your location within hours."
        },
        {
            question: "Is this suitable for a small medical store?",
            answer: "Our 'Lite' builds are perfect for small businesses. They are fast, simple, and won't overwhelm your staff, while still providing the precision control needed for medicine expiry and batch tracking."
        },
        {
            question: "Do you provide training for our staff?",
            answer: "Yes, we provide full on-site training. Our team will visit your shop to ensure your staff is comfortable using the billing, inventory, and reporting features. We stay with you until you are confident."
        },
        {
            question: "What hardware do I need?",
            answer: "Our software is lightweight and runs on most Windows computers. We also suggest and provide compatible thermal printers, barcode scanners, and cash drawers to ensure a smooth, ready-to-use setup."
        },
        {
            question: "Is my data safe and backed up?",
            answer: "Security is built-in. We implement automatic daily backups both locally and in the cloud. Even if your computer fails, your business data—including sales history and stock—remains safe and recoverable."
        },
        {
            question: "Can the software be customized for my type of business?",
            answer: "Yes. Whether you run a garments shop, a grocery store, or a pharmacy, we tailor the interface and reporting to match your industry's specific workflow and 'Khata' requirements."
        }
    ]

    return (
        <section id="faq" className="py-20 md:py-40 px-5 md:px-10 border-t border-white/5 relative bg-zinc-950">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-12 md:mb-20">
                    <h2 className="text-primary font-mono text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.4em] mb-4 md:mb-6 font-bold">Inquiry Pipeline</h2>
                    <h3 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        Common <br /> <span className="text-white">Queries</span>.
                    </h3>
                </div>

                <div className="border-t border-white/10">
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none"></div>
        </section>
    )
}

const ImageModal = ({ src, onClose }: { src: string, onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-5 md:p-20"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-5 right-5 md:top-10 md:right-10 text-white hover:text-primary transition-colors z-[110]"
            >
                <X size={48} />
            </button>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl max-h-full overflow-hidden border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={src}
                    alt="Full View"
                    className="w-full h-auto max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    Swift System // Asset Viewer
                </div>
            </motion.div>
        </motion.div>
    )
}

const Home = () => {
    const [activeImage, setActiveImage] = useState<string | null>(null)

    // Expose setter to window for deep components without prop drilling
    useEffect(() => {
        (window as any).setActiveImage = setActiveImage
    }, [])

    return (
        <>
            <AnimatePresence>
                {activeImage && (
                    <ImageModal src={activeImage} onClose={() => setActiveImage(null)} />
                )}
            </AnimatePresence>
            <Hero />
            <Services />
            <About />
            <SoftwareShowcase />
            <POSShowcase />
            <RestaurantPOS />
            <RestaurantWebsite />
            <VotingAppShowcase />
            <PetShopShowcase />
            <OtherProjects />
            <FAQ />
            <Location />
            <Contact />
        </>
    )
}

export default Home
