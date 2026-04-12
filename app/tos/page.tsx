import Link from "next/link";

export default function TermsPage() {
    const sections = [
        { id: "introduction", title: "01. Introduction" },
        { id: "service", title: "02. Description of Service" },
        { id: "responsibilities", title: "03. User Responsibilities" },
        { id: "currency", title: "04. Virtual Currency" },
        { id: "data", title: "05. Data & Privacy" },
        { id: "monetization", title: "06. Monetization" },
        { id: "availability", title: "07. Availability" },
        { id: "termination", title: "08. Termination" },
        { id: "changes", title: "09. Changes" },
        { id: "governing-law", title: "10. Governing Law" },
        { id: "contact", title: "11. Contact" },
    ];

    return (
        <div className="pt-32 bg-background min-h-screen">
            <header className="pb-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-surface-container-high px-4 py-1.5 rounded-full mb-6 border border-white/5">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Effective Date: April 12, 2026</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-white leading-none mb-6">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                        These Terms govern your use of Ken Utility Bot. By inviting or using the Bot, you agree to be bound by these provisions.
                    </p>
                </div>
            </header>

            <main className="px-8 pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <aside className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-32 space-y-4">
                            <nav className="flex flex-col gap-0.5 border-l border-white/5 pl-6">
                                {sections.map((section) => (
                                    <Link 
                                        key={section.id}
                                        className="text-slate-500 hover:text-primary font-medium text-sm transition-colors py-1.5 block" 
                                        href={`#${section.id}`}
                                    >
                                        {section.title}
                                    </Link>
                                ))}
                            </nav>
                            <div className="pt-8">
                                <div className="p-6 rounded-xl bg-surface-container-low border border-white/5">
                                    <p className="text-xs text-on-surface-variant font-label mb-4 uppercase tracking-tighter text-center">Need clarification?</p>
                                    <a 
                                        href="mailto:kennydael213@gmail.com"
                                        className="w-full py-3 bg-surface-container-high text-on-surface text-sm rounded-lg hover:bg-surface-container-highest transition-colors border border-white/5 flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined text-sm">mail</span>
                                        Contact Owner
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <article className="lg:col-span-9 space-y-24">
                        <section className="scroll-mt-32" id="introduction">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">01</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Introduction</h2>
                            </div>
                            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg bg-surface-container-low/50 p-8 rounded-2xl border border-white/5">
                                <p>These Terms of Service (“Terms”) govern your use of <span className="text-white font-medium">Ken Utility Bot</span> (“the Bot”), operated by <span className="text-primary font-medium">Kenny</span> (“Owner”, “we”, “us”, or “our”).</p>
                                <p>By inviting or using the Bot in any Discord server, you agree to these Terms. <span className="text-secondary">If you do not agree, you must stop using the Bot immediately.</span></p>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="service">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">02</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Description of Service</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { icon: "account_balance", title: "Bank System", desc: "Virtual currency management tools." },
                                    { icon: "content_cut", title: "Split System", desc: "Loot and money sharing automation." },
                                    { icon: "notifications_active", title: "Alerts", desc: "Custom timers and notification triggers." }
                                ].map((item, i) => (
                                    <div key={i} className="p-6 rounded-xl bg-surface-container-low border border-white/5">
                                        <span className="material-symbols-outlined text-primary mb-4">{item.icon}</span>
                                        <h3 className="text-white font-headline font-semibold mb-2">{item.title}</h3>
                                        <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-on-surface-variant/60 text-sm italic">We may modify, add, or remove features at any time without prior notice.</p>
                        </section>

                        <section className="scroll-mt-32" id="responsibilities">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">03</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">User Responsibilities</h2>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Use the Bot in compliance with Discord’s Terms of Service",
                                    "Not abuse, exploit, or attempt to manipulate the Bot’s systems",
                                    "Not use the Bot for illegal, harmful, or malicious activities"
                                ].map((resp, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-surface-container-low/30 border border-white/5 items-center">
                                        <span className="material-symbols-outlined text-secondary">check_circle</span>
                                        <p className="text-on-surface-variant">{resp}</p>
                                    </div>
                                ))}
                                <div className="mt-6 p-6 rounded-xl bg-primary/5 border border-primary/10">
                                    <p className="text-primary text-sm font-medium">Server administrators are responsible for how the Bot is configured and used within their servers.</p>
                                </div>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="currency">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">04</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Virtual Currency Disclaimer</h2>
                            </div>
                            <div className="bg-surface-container-low p-8 rounded-2xl border border-white/5 relative overflow-hidden">
                                <div className="absolute right-0 top-0 p-8 opacity-5">
                                    <span className="material-symbols-outlined text-9xl">monetization_on</span>
                                </div>
                                <p className="text-on-surface-variant mb-6">All currency, balances, or values within the Bot:</p>
                                <ul className="space-y-3">
                                    {["Have no real-world value", "Cannot be exchanged for real money, goods, or services", "Exist solely for entertainment and server-based utility purposes"].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-center text-white">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="data">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">05</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Data Collection & Usage</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-white font-semibold">What we store:</h3>
                                    {["User IDs", "Server (Guild) IDs", "Virtual currency and bank data", "Command usage data"].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-on-surface-variant text-sm py-2 border-b border-white/5">
                                            <span className="material-symbols-outlined text-xs text-primary">database</span>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 rounded-2xl bg-surface-container-high border border-white/5 flex flex-col justify-center">
                                    <p className="text-on-surface-variant text-sm leading-relaxed">
                                        We <span className="text-white font-bold">do not</span> collect or store personal data such as real names, passwords, or private messages. Data is used strictly to operate and improve the Bot’s features.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="monetization">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">06</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Donations & Monetization</h2>
                            </div>
                            <div className="p-8 rounded-2xl border border-dashed border-white/10 text-center">
                                <p className="text-on-surface-variant mb-6">Ken Utility Bot may accept voluntary donations.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                                    {[
                                        { title: "Non-refundable", text: "Donations are optional and final." },
                                        { title: "No Ownership", text: "Does not grant ownership or guaranteed services." },
                                        { title: "Development", text: "Used to support hosting and future builds." }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-surface-container-low border border-white/5">
                                            <p className="text-primary text-xs font-bold uppercase mb-1">{item.title}</p>
                                            <p className="text-on-surface-variant text-sm">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="availability">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">07</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Availability & Liability</h2>
                            </div>
                            <div className="bg-error-container/10 border border-error/20 p-8 rounded-2xl space-y-6">
                                <p className="text-white font-medium">Provided “as is” and “as available” without warranties.</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-xs font-bold text-error uppercase mb-3">No Guarantees</p>
                                        <ul className="space-y-2 text-sm text-on-surface-variant">
                                            <li>• Continuous uptime</li>
                                            <li>• Error-free operation</li>
                                            <li>• Data preservation</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-error uppercase mb-3">Not Liable For</p>
                                        <ul className="space-y-2 text-sm text-on-surface-variant">
                                            <li>• Data loss</li>
                                            <li>• Misuse of the Bot</li>
                                            <li>• Resulting damages</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="termination">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">08</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Termination</h2>
                            </div>
                            <p className="text-on-surface-variant leading-relaxed mb-8">We reserve the right to restrict or block access, remove stored data, or discontinue the Bot at any time without notice.</p>
                        </section>

                        <section className="scroll-mt-32" id="changes">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">09</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Changes to Terms</h2>
                            </div>
                            <div className="p-8 rounded-2xl bg-surface-container border border-white/5">
                                <p className="text-on-surface-variant leading-relaxed">We may update these Terms at any time. Continued use of the Bot after changes means you accept the updated Terms.</p>
                            </div>
                        </section>

                        <section className="scroll-mt-32" id="governing-law">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">10</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Governing Law</h2>
                            </div>
                            <p className="text-on-surface-variant leading-relaxed">These Terms are governed by the laws of the <span className="text-white font-semibold">Republic of the Philippines</span>.</p>
                        </section>

                        <section className="scroll-mt-32" id="contact">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-6xl font-headline font-extrabold text-white/5">11</span>
                                <h2 className="text-3xl font-headline font-bold text-white tracking-tight">Contact Information</h2>
                            </div>
                            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 text-center">
                                <p className="text-white text-lg mb-6">For questions or concerns regarding these Terms, contact:</p>
                                <a 
                                    href="mailto:kennydael213@gmail.com" 
                                    className="text-2xl md:text-3xl font-headline font-bold text-white hover:text-primary transition-colors flex items-center justify-center gap-3 flex-wrap"
                                >
                                    <span className="material-symbols-outlined text-4xl">alternate_email</span>
                                    kennydael213@gmail.com
                                </a>
                            </div>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
}
