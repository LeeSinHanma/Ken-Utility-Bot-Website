import Link from "next/link";

const Footer = () => (
    <footer className="w-full py-16 px-8 bg-[#0b1326] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
                <span className="text-lg font-bold text-slate-200 font-manrope">{process.env.NEXT_PUBLIC_SITE_NAME}</span>
                <p className="text-slate-500 text-sm font-inter max-w-xs leading-relaxed">
                    © 2026 {process.env.NEXT_PUBLIC_SITE_NAME}. All rights reserved. Built for the Disciplined Architect and efficient professional servers.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm font-inter">
                <div className="flex flex-col gap-3">
                    <span className="text-slate-300 font-semibold mb-2">Legal</span>
                    <Link href="/tos" className="text-slate-500 hover:text-indigo-300 transition-colors">Terms of Service</Link>
                    <Link href="/privacy" className="text-slate-500 hover:text-indigo-300 transition-colors">Privacy Policy</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-slate-300 font-semibold mb-2">Connect</span>
                    <Link href={process.env.NEXT_PUBLIC_DISCORD_SUPPORT_LINK || "#"} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-300 transition-colors">Support Server</Link>
                    <Link href="#" className="text-slate-500 hover:text-indigo-300 transition-colors">Security</Link>
                    <Link href="#" className="text-slate-500 hover:text-indigo-300 transition-colors">Contact</Link>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
