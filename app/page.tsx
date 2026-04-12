"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } as any
    }
  };

  return (
    <main className="relative">
      <section className="relative pt-48 pb-32 overflow-hidden hero-gradient-center">
        <motion.div 
          className="max-w-7xl mx-auto px-8 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/15 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-xs font-label font-medium uppercase tracking-widest text-on-surface-variant">
              Now Live
            </span>
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400"
          >
            Discord Utility,
            <br />
            Reimagined.
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant leading-relaxed mb-12"
          >
            A simple Discord utility bot for managing finances, splitting payments, and smart alerts. Designed for professional servers that demand efficiency.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold text-base hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)] transition-all flex items-center justify-center"
            >
              Invite Bot
            </Link>
            <Link
              href="/privacy"
              className="w-full sm:w-auto bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold text-base hover:bg-surface-container-highest transition-all flex items-center justify-center"
            >
              Privacy Policy
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] } as any}
          className="mt-24 max-w-5xl mx-auto px-8"
        >
          <div className="relative rounded-2xl overflow-hidden border border-outline-variant/10 shadow-2xl bg-surface-container-low">
            <img
              className="w-full h-auto"
              alt="Dashboard Interface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQg8bcnBmblSu-hVORUkK2HFXJBVwzJSGc0yPjYeYTWjMB6hu2VyuIVgIQ0jJqYSSHkHrfaj2Bts8ZNS13a3Rt_z9O-EYk_28fbFnc0q9SZ7CvrJlzRnJjmkulmhVOpRh6hdxoaMi-UGMPiqiBhte6anNKCM56o_BkHFR4xdaYQT5InhxyD3UjX8ouNTDuWdceuWtOdLheNqaOOWQxX4y4FlsEZQjoJUdn7030eA__G6s3sQZMv0o4TBsfPq6mShSqUlGlf2qtmxI4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </section>

      <section className="py-32 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-headline text-4xl font-bold tracking-tight text-white mb-4">Precision Tools</h2>
              <p className="text-on-surface-variant text-lg max-w-xl mx-auto mb-16">
                {process.env.NEXT_PUBLIC_SITE_NAME} focuses on the essentials, providing high-performance utility without the clutter.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "account_balance", title: "Bank", desc: "Centralized financial management and ledger system for your Discord guild ecosystem.", color: "primary" },
                { icon: "content_cut", title: "Split", desc: "Automated bill splitting and debt tracking between server members with one simple command.", color: "secondary" },
                { icon: "notifications_active", title: "Alert", desc: "High-priority notification triggers for system events and personalized member reminders.", color: "tertiary" }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-8 rounded-2xl bg-surface-container hover:bg-surface-container-high transition-all duration-300 transform hover:-translate-y-2 border border-outline-variant/5"
                >
                  <div className={`w-14 h-14 rounded-xl bg-${feature.color}/10 flex items-center justify-center mb-6 ring-1 ring-${feature.color}/20 group-hover:ring-${feature.color}/50 transition-all`}>
                    <span className={`material-symbols-outlined text-${feature.color} text-3xl`}>{feature.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-slate-100 mb-3">{feature.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "12K+", label: "Active Servers" },
              { val: "1.2M", label: "Users Managed" },
              { val: "99.9%", label: "Uptime History" },
              { val: "24/7", label: "Support Readiness" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="font-headline text-4xl font-extrabold text-primary mb-2">{stat.val}</div>
                <div className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
