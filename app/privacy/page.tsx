import Link from "next/link";

export default function PrivacyPage() {
    const sections = [
        { id: "introduction", title: "01. Introduction" },
        { id: "collect", title: "02. Information We Collect" },
        { id: "use-data", title: "03. How We Use Data" },
        { id: "security", title: "04. Storage & Security" },
        { id: "sharing", title: "05. Data Sharing" },
        { id: "retention", title: "06. Data Retention" },
        { id: "rights", title: "07. User Rights" },
        { id: "children", title: "08. Children's Privacy" },
        { id: "changes", title: "09. Changes" },
        { id: "contact", title: "10. Contact" },
    ];

    return (
        <main className="pt-32 pb-24 hero-gradient min-h-screen">
            <div className="max-w-7xl mx-auto px-8">
                <header className="mb-20 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-12 h-[1px] bg-secondary"></span>
                        <span className="font-label text-secondary text-sm font-semibold tracking-widest uppercase">Effective Date: April 12, 2026</span>
                    </div>
                    <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-6">Privacy Policy</h1>
                    <p className="font-body text-on-surface-variant text-xl max-w-2xl leading-relaxed font-light">
                        Explaining how Ken Utility Bot collects, uses, and protects your information to ensure a safe and transparent experience.
                    </p>
                </header>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-4">
                            <nav className="flex flex-col gap-0.5 border-l border-white/5 pl-6">
                                {sections.map((section) => (
                                    <Link 
                                        key={section.id}
                                        className="text-slate-500 hover:text-secondary font-medium text-sm transition-colors py-1.5 block" 
                                        href={`#${section.id}`}
                                    >
                                        {section.title}
                                    </Link>
                                ))}
                            </nav>
                            <div className="pt-8 text-center bg-surface-container-low/50 p-6 rounded-2xl border border-white/5">
                                <p className="text-xs text-on-surface-variant font-label mb-4 uppercase tracking-tighter">Privacy Concerns?</p>
                                <a 
                                    href="mailto:kennydael213@gmail.com"
                                    className="w-full py-3 bg-surface-container-high text-on-surface text-sm rounded-lg hover:bg-surface-container-highest transition-colors border border-white/5 flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-sm">shield_person</span>
                                    Contact DPO
                                </a>
                            </div>
                        </div>
                    </aside>

                    <div className="lg:col-span-9 space-y-24">
                        <section className="scroll-mt-32" id="introduction">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">01</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Introduction</h2>
                            </div>
                            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg bg-surface-container-low/50 p-8 rounded-2xl border border-white/5">
                                <p>This Privacy Policy explains how <span className="text-white font-medium">Ken Utility Bot</span> (“the Bot”), operated by <span className="text-secondary font-medium">Kenny</span> (“we”, “us”, or “our”), collects, uses, and protects user data.</p>
                                <p>By using the Bot, you agree to the collection and use of information in accordance with this policy.</p>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="collect">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">02</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Information We Collect</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="p-8 rounded-2xl bg-surface-container-low border border-white/5">
                                    <h3 className="text-primary font-bold text-xs uppercase tracking-widest mb-6">Data necessary for function:</h3>
                                    <ul className="space-y-4">
                                        {[
                                            { icon: "badge", text: "User IDs (Discord identifiers)" },
                                            { icon: "dns", text: "Server (Guild) IDs" },
                                            { icon: "account_balance_wallet", text: "Virtual currency and bank data" },
                                            { icon: "analytics", text: "Command usage data" }
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4 items-center text-on-surface">
                                                <span className="material-symbols-outlined text-primary text-xl">{item.icon}</span>
                                                <span className="text-sm">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-8 rounded-2xl bg-error-container/5 border border-error/10 flex flex-col justify-center">
                                    <h3 className="text-error font-bold text-xs uppercase tracking-widest mb-6">What we do NOT collect:</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {["Real names", "Email addresses", "Passwords", "Private messages"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 text-on-surface-variant text-sm">
                                                <span className="material-symbols-outlined text-error text-xs">close</span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="use-data">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">03</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">How We Use Data</h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Provide core bot features (bank, split, alerts)",
                                    "Store virtual balances and transaction data",
                                    "Improve performance and functionality",
                                    "Prevent abuse and enforce rules"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-5 rounded-xl bg-surface-container-low/30 border border-white/5 items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        <p className="text-on-surface-variant font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="security">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">04</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Data Storage & Security</h2>
                            </div>
                            <div className="bg-surface-container-low p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
                                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                    <span className="material-symbols-outlined text-[180px]">enhanced_encryption</span>
                                </div>
                                <div className="relative z-10 space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <span className="material-symbols-outlined text-primary">security</span>
                                        <p className="text-on-surface-variant leading-relaxed">Data is stored securely using appropriate technical measures. We take reasonable steps to protect data from unauthorized access.</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-surface-container-high border border-white/5 inline-block">
                                        <p className="text-xs text-on-surface-variant italic">Note: No system is completely secure, and we cannot guarantee absolute security.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="sharing">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">05</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Data Sharing</h2>
                            </div>
                            <div className="bg-gradient-to-r from-surface-container-low to-transparent p-8 rounded-2xl border-l border-primary/20">
                                <p className="text-white text-lg font-medium mb-4 italic">“We do not sell, trade, or share user data with third parties.”</p>
                                <p className="text-sm text-on-surface-variant">Data may only be disclosed if required by law or to comply with legal obligations.</p>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="retention">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">06</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Data Retention</h2>
                            </div>
                            <div className="space-y-6 text-on-surface-variant leading-relaxed">
                                <p>We retain data only as long as necessary to provide the Bot’s services.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-6 rounded-xl bg-surface-container-low border border-white/5">
                                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-xs text-primary">auto_delete</span>
                                            Active Deletion
                                        </h4>
                                        <p className="text-sm">We reserve the right to delete data at any time to optimize system performance.</p>
                                    </div>
                                    <div className="p-6 rounded-xl bg-surface-container-low border border-white/5">
                                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-xs text-primary">timer_off</span>
                                            Inactive Data
                                        </h4>
                                        <p className="text-sm">Remove inactive or unused data without notice to maintain database integrity.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="rights">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">07</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">User Rights</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-8 rounded-3xl bg-surface-container-high border border-white/5">
                                    <span className="material-symbols-outlined text-secondary mb-4">do_not_disturb_on</span>
                                    <h3 className="text-white font-bold mb-2">Usage Control</h3>
                                    <p className="text-on-surface-variant text-sm flex-grow">Users may stop using the Bot at any time by removing it from the server or blocking the application.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-surface-container-high border border-white/5">
                                    <span className="material-symbols-outlined text-primary mb-4">delete_sweep</span>
                                    <h3 className="text-white font-bold mb-2">Data Removal</h3>
                                    <p className="text-on-surface-variant text-sm flex-grow">Request data removal (if applicable) by contacting our team via the provided communication channels.</p>
                                </div>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="children">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">08</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Children’s Privacy</h2>
                            </div>
                            <div className="p-8 rounded-2xl bg-surface-container-low border-l-2 border-secondary/20 border-y border-r border-white/5">
                                <p className="text-on-surface-variant leading-relaxed">The Bot is not intended for users under the age required by Discord’s Terms of Service. We strictly adhere to platform safety guidelines.</p>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="changes">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">09</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Changes to This Policy</h2>
                            </div>
                            <p className="text-on-surface-variant leading-relaxed">We may update this Privacy Policy at any time. Continued use of the Bot means you accept any changes to our data handling practices.</p>
                        </section>

                        <section className="scroll-mt-32" id="contact">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">10</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Contact Information</h2>
                            </div>
                            <div className="p-12 rounded-[2rem] bg-surface-container-lowest border border-white/10 text-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <p className="text-on-surface-variant mb-8 text-lg">For privacy-related concerns or requests, contact our Data Protection Officer:</p>
                                    <a 
                                        href="mailto:kennydael213@gmail.com" 
                                        className="text-2xl md:text-4xl font-headline font-bold text-white hover:text-secondary transition-all flex items-center justify-center gap-4 flex-wrap"
                                    >
                                        <span className="material-symbols-outlined text-4xl md:text-5xl">mark_email_unread</span>
                                        kennydael213@gmail.com
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
