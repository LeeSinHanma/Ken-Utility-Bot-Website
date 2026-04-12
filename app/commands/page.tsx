"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const commands = [
  {
    category: "Economy & Bank",
    icon: "account_balance",
    color: "text-primary",
    bgColor: "bg-primary/10",
    items: [
      {
        name: "/bank balance",
        params: "[user]",
        description: "Check your current bank balance or view another user's balance (requires Bank Admin permissions).",
        useCase: "Verifying your wealth before a split or auditing user funds."
      },
      {
        name: "/bank add",
        params: "<user> <amount>",
        description: "Add a specific amount of coins to a user's account (Admin only).",
        useCase: "Distributing event rewards, prizes, or manual compensation."
      },
      {
        name: "/bank remove",
        params: "<user> <amount>",
        description: "Remove a specific amount of coins from a user's account (Admin only).",
        useCase: "Processing payments for in-game trades or manual penalties."
      },
      {
        name: "/bank setup",
        params: "<admin-role>",
        description: "Configure which Discord role is authorized to manage bank transactions.",
        useCase: "Initial server setup to empower specific staff members."
      }
    ]
  },
  {
    category: "Money Split",
    icon: "content_cut",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    items: [
      {
        name: "/split start",
        params: "<amount> <discount> <users> [extra] [deductions] [modifiers]",
        description: "Initiate a smart credit split with integrated math for taxes, discounts, and overhead costs.",
        useCase: "Dividing loot from a boss hunt fairly after deducting preparation costs."
      },
      {
        name: "/split check",
        params: "",
        description: "Displays a personal list of all pending splits that you have not yet claimed.",
        useCase: "Catching up on unclaimed earnings across multiple sessions."
      },
      {
        name: "/split help",
        params: "",
        description: "Provides a detailed technical guide on how the split system, modifiers, and manual claims work.",
        useCase: "Learning how to use advanced modifiers like 50% @user for specialized payouts."
      }
    ]
  },
  {
    category: "Alerts (Custom Commands)",
    icon: "notifications_active",
    color: "text-tertiary",
    bgColor: "bg-tertiary/10",
    items: [
      {
        name: "/create-alert",
        params: "<name> <description> <role> <duration> <interval>",
        description: "Create a permanent, server-specific slash command with preset timers and roles.",
        useCase: "Building a reusable /farm-alert that pings every 5 minutes."
      },
      {
        name: "/edit-alert",
        params: "<name> [options]",
        description: "Modify the settings (role, timer, interval, color) of an existing custom alert command.",
        useCase: "Updating the primary ping role for a boss alert."
      },
      {
        name: "/delete-alert",
        params: "<name>",
        description: "Permanently removes a custom alert command from the server's database.",
        useCase: "Removing a command for a limited-time event that has ended."
      },
      {
        name: "/<custom-name>",
        params: "[location] [duration] [image]",
        description: "Triggers a dynamic countdown based on a template created via /create-alert.",
        useCase: "Running a high-precision countdown for a specific event spawn."
      }
    ]
  },
  {
    category: "General Utilities",
    icon: "apps",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    items: [
      {
        name: "/mention-role",
        params: "<target-role> [duration] [interval]",
        description: "Set a high-precision recurring timer that pings a role at specific intervals.",
        useCase: "Reminding the 'Guard' role to check a gate every 10 minutes."
      },
      {
        name: "/help",
        params: "",
        description: "Shows the master manual, including a live list of all Server Custom Presets currently active.",
        useCase: "Orienting new users or checking available server-specific commands."
      },
      {
        name: "/ping",
        params: "",
        description: "Heartbeat check to verify the bot's current latency and responsiveness.",
        useCase: "Verifying if the bot is experiencing lag during critical windows."
      }
    ]
  }
];

export default function CommandsPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/15 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-label font-medium uppercase tracking-widest text-on-surface-variant">
              Command Library
            </span>
          </div>
          <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-50 to-slate-400">
            Master the Bot.
            <br />
            Control the Guild.
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-on-surface-variant leading-relaxed">
            Explore our comprehensive suite of slash commands designed to streamline your community management and economy.
          </p>
        </motion.div>

        <div className="space-y-24">
          {commands.map((cat, idx) => (
            <motion.section 
              key={idx} 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-12 h-12 rounded-xl ${cat.bgColor} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined ${cat.color} text-2xl`}>{cat.icon}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-50 font-headline">{cat.category}</h2>
                  <div className={`h-1 w-12 bg-gradient-to-r from-${cat.color.split('-')[1]} to-transparent mt-1 opacity-50`}></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {cat.items.map((cmd, cmdIdx) => (
                  <motion.div 
                    key={cmdIdx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: cmdIdx * 0.05 }}
                    className="group relative p-6 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 hover:bg-surface-container-high transition-all duration-300 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-x-20 -top-20 h-40 w-40 bg-primary/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <code className="text-primary font-bold text-lg font-mono tracking-tight ring-1 ring-primary/20 px-2 py-0.5 rounded bg-primary/5 uppercase">
                            {cmd.name}
                          </code>
                          {cmd.params && (
                            <span className="text-xs text-on-surface-variant font-mono bg-surface-container-highest px-2 py-1 rounded">
                              {cmd.params}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {cmd.description}
                      </p>
                      
                      <div className="pt-4 border-t border-outline-variant/10">
                        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant opacity-60">
                          <span className="material-symbols-outlined text-xs">lightbulb</span>
                          Use Case
                        </div>
                        <p className="mt-1 text-xs italic text-on-surface-variant/80">
                          &quot;{cmd.useCase}&quot;
                        </p>
                      </div>
                    </div>
                    
                    {/* Subtle Side Bar Accent */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-${cat.color.split('-')[1]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-surface-container to-surface-container-high border border-outline-variant/10 text-center relative overflow-hidden"
        >
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full"></div>
             
             <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Ready to start?</h3>
             <p className="text-on-surface-variant mb-8 max-w-xl mx-auto relative z-10">
                Join thousands of servers already using {process.env.NEXT_PUBLIC_SITE_NAME} to power their communities.
             </p>
             <Link 
                href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-container text-white px-8 py-3 rounded-xl font-bold transition-all relative z-10 inline-block"
             >
                Add to Discord
             </Link>
        </motion.section>
      </div>
    </main>
  );
}
