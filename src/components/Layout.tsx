import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference py-4 md:py-5 px-5 md:px-10 flex justify-between items-center transition-all duration-300">
                <Link to="/" className="flex items-center gap-2 md:gap-3 group min-h-[48px] glitch-hover">
                    <img
                        src="/assets/site-logo.webp"
                        alt="Swift Developers Logo"
                        className="w-8 h-8 md:w-10 md:h-10 object-contain brightness-110 group-hover:rotate-12 transition-transform"
                    />
                    <span className="font-heading font-black text-lg md:text-2xl uppercase tracking-tighter text-white">Swift Developers</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10 font-heading font-bold uppercase text-[10px] tracking-[0.2em] text-white">
                    <Link to="/" className={`hover:text-primary transition-colors py-2 ${location.pathname === '/' ? 'text-primary' : ''}`}>Home</Link>
                    <Link to="/#services" className="hover:text-primary transition-colors py-2">Services</Link>
                    <Link to="/#portfolio" className="hover:text-primary transition-colors py-2">Portfolio</Link>
                    <Link to="/#contact" className="hover:text-primary transition-colors border-b border-primary text-primary pb-1">Let's Talk</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden w-10 h-10 flex flex-col items-end justify-center gap-1.5 focus:outline-none z-50 group"
                    aria-label="Toggle Menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 9, width: '28px' } : { rotate: 0, y: 0, width: '28px' }}
                        className="h-[2px] bg-white block"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="h-[2px] w-4 bg-primary block"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -9, width: '28px' } : { rotate: 0, y: 0, width: '20px' }}
                        className="h-[2px] bg-white block"
                    />
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 bg-ink p-10 flex flex-col justify-center"
                    >
                        <div className="space-y-6 md:space-y-8">
                            {[
                                { label: 'Home', path: '/' },
                                { label: 'Ops / Services', path: '/#services' },
                                { label: 'Deployments', path: '/#portfolio' },
                                { label: 'Initiate Link', path: '/#contact' }
                            ].map((link, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link.label}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl md:text-5xl font-black uppercase tracking-tighter hover:text-primary transition-colors block py-1.5 active:scale-95 origin-left"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20 border-t border-white/5 pt-10 font-mono text-[10px] uppercase tracking-widest text-white/20">
                            System // Sukkur HQ <br /> v2026.04_Mobile
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export const Footer = () => {
    return (
        <footer className="py-16 md:py-20 px-5 md:px-10 border-t border-white/5 bg-black overflow-hidden">
            <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-y-12 md:gap-10">
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                        <img
                            src="/assets/site-logo.webp"
                            alt="Swift Developers Logo"
                            className="w-8 h-8 object-contain"
                        />
                        <span className="font-heading font-black text-xl uppercase tracking-tighter text-white">Swift Developers</span>
                    </div>
                    <p className="text-muted text-sm max-w-xs leading-relaxed">Helping Sukkur businesses dominate the digital space with premium software solutions.</p>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-8 flex flex-wrap justify-start md:justify-end gap-x-12 md:gap-20 gap-y-10">
                    <div>
                        <h4 className="font-bold uppercase text-[9px] md:text-[10px] tracking-widest text-primary mb-5 md:mb-6">Explore</h4>
                        <ul className="space-y-3 md:space-y-4 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">
                            <li><Link to="/" className="text-muted hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/#portfolio" className="text-muted hover:text-white transition-colors">Our Work</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase text-[9px] md:text-[10px] tracking-widest text-primary mb-5 md:mb-6">Contact</h4>
                        <ul className="space-y-3 md:space-y-4 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">
                            <li><a href="mailto:hello@swiftdev.pk" className="text-muted hover:text-white transition-colors break-all md:break-normal">hello@swiftdev.pk</a></li>
                            <li><a href="https://wa.me/923701224388" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors">WhatsApp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-white/30 text-center md:text-left">
                <span>&copy; 2026 Shift / Swift Developers</span>
                <span>Sukkur Division // Sindh HQ</span>
                <span>Built for the Digital Frontier</span>
            </div>
        </footer>
    )
}

export const Telemetry = ({ label, value, className }: { label: string, value: string, className?: string }) => (
    <div className={`font-mono text-[9px] uppercase tracking-widest text-white/30 ${className}`}>
        <span className="text-primary/50 mr-2">[</span>
        <span className="text-white/60">{label}</span>
        <span className="mx-2 text-primary/30">:</span>
        <span className="text-primary">{value}</span>
        <span className="text-primary/50 ml-2">]</span>
    </div>
)
export const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-ink min-h-screen selection:bg-primary selection:text-ink overflow-x-hidden relative">
            {/* Global Environmental FX */}
            <div className="crt-overlay"></div>
            <div className="grain-overlay"></div>
            <div className="scanline"></div>

            <Navbar />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {children}
            </motion.div>
            <Footer />
        </div>
    )
}
