"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl transition-all duration-300 ease-in-out border-b border-white/5">
            <div className="flex justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-white/10 group-hover:ring-primary/50 transition-all">
                        <Image 
                            src="/KUB-Icon.png" 
                            alt="KUB Icon" 
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white font-manrope">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 font-manrope tracking-tight">
                    <Link 
                        href="/" 
                        className={`${pathname === '/' ? 'text-white border-b-2 border-primary' : 'text-slate-400'} hover:text-white transition-colors py-1`}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/commands" 
                        className={`${pathname === '/commands' ? 'text-white border-b-2 border-primary' : 'text-slate-400'} hover:text-white transition-colors py-1`}
                    >
                        Commands
                    </Link>
                    <Link href={process.env.NEXT_PUBLIC_DISCORD_SUPPORT_LINK || "#"} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Support</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link 
                        href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK || "#"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gradient-to-br from-primary to-primary-container text-white px-5 md:px-6 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wide hover:opacity-90 transition-all"
                    >
                        Add to Discord
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
