"use client";

import { motion } from "framer-motion";
import { portfolioConfig } from "@/data/portfolio.config";
import { Github, Linkedin, Mail, Twitter, ChevronDown, ExternalLink, Award, Check } from "lucide-react";
import { useState } from "react";
import { AIAssistant } from "@/components/AIAssistant";
import { ClientOnly } from "@/components/ClientOnly";

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
    return (
        <ClientOnly>
            <main className="min-h-screen max-w-4xl mx-auto px-6 py-24 md:py-32 space-y-32">
                {/* Hero Section */}
                <section className="space-y-10">
                    <div className="flex flex-col gap-6 items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0"
                        >
                            {/* Silver 3D Effect Layers */}
                            <div className="absolute -inset-[2px] rounded-full bg-gradient-to-tr from-neutral-600 via-neutral-100 to-neutral-600 opacity-40" />
                            <div className="absolute inset-0 rounded-full bg-[#0a0a0a]" /> {/* Background to prevent bleed */}

                            <div className="relative w-full h-full rounded-full overflow-hidden border-[2px] border-neutral-700/50 z-10">
                                <img
                                    src="/avatar.jpg"
                                    alt={portfolioConfig.name}
                                    className="w-full h-full object-cover transition-opacity duration-700"
                                    style={{ imageRendering: 'auto' }}
                                />
                            </div>

                            {/* Highlights for 3D feel */}
                            <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none z-20" />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-100"
                        >
                            {portfolioConfig.name}
                        </motion.h1>
                    </div>

                    <div className="space-y-6">
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.05,
                                    },
                                },
                            }}
                            className="text-sm font-mono text-neutral-500 uppercase tracking-widest flex flex-wrap"
                        >
                            {portfolioConfig.role.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 5 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight max-w-2xl"
                        >
                            {portfolioConfig.bio}
                        </motion.h1>
                    </div>
                </section>

                {/* About Section */}
                <section className="space-y-8">
                    <motion.div
                        {...fadeUp}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest pt-1">
                            Mindset
                        </h2>
                        <div className="md:col-span-2 text-lg leading-relaxed text-neutral-400">
                            {portfolioConfig.engineeringMindset}
                        </div>
                    </motion.div>
                </section>

                {/* Skills Section */}
                <section className="space-y-12">
                    <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                        Cognitive Stack
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {portfolioConfig.skills.map((skill, index) => (
                            <motion.div
                                key={skill.category}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h3 className="text-neutral-200 font-medium">{skill.category}</h3>
                                <ul className="space-y-2 text-sm text-neutral-500 font-mono">
                                    {skill.items.map(item => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="space-y-12">
                    <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                        Selected Systems
                    </h2>
                    <div className="space-y-24">
                        {portfolioConfig.projects.map((project, index) => (
                            <ProjectItem key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </section>

                {/* Certificates Section */}
                <section className="space-y-12">
                    <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                        Verified Competencies
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {portfolioConfig.certificates.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-neutral-900/30 border border-neutral-900 rounded-xl flex items-start gap-4 group hover:border-neutral-800 transition-colors"
                            >
                                <div className="p-2 bg-neutral-900 rounded-lg text-neutral-600 group-hover:text-accent transition-colors">
                                    <Award size={20} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-neutral-200 font-medium">{cert.name}</h3>
                                    <p className="text-xs text-neutral-500 font-mono uppercase tracking-tight">
                                        {cert.issuer} &middot; {cert.date}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="space-y-12 pb-12">
                    <div className="space-y-4">
                        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                            Communication
                        </h2>
                        <h3 className="text-3xl font-medium tracking-tight">Let's discuss systems.</h3>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex flex-col md:flex-row gap-6"
                    >
                        <a
                            href={`mailto:${portfolioConfig.socials.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-950 font-medium rounded-full hover:bg-white transition-colors"
                        >
                            Initialize Connection <Mail size={18} />
                        </a>
                        <div className="flex items-center gap-6 px-4">
                            <a href={portfolioConfig.socials.github} className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm">
                                <Github size={18} /> GitHub
                            </a>
                            <a href={portfolioConfig.socials.linkedin} className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm">
                                <Linkedin size={18} /> LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* Footer / Socials */}
                <footer className="pt-24 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4">
                        <p className="text-sm text-neutral-500 font-mono">
                            &copy; 2026 {portfolioConfig.name}. All Rights Reserved.
                        </p>
                        <div className="flex gap-4">
                            <a href={portfolioConfig.socials.github} className="text-neutral-500 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href={portfolioConfig.socials.linkedin} className="text-neutral-500 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href={`mailto:${portfolioConfig.socials.email}`} className="text-neutral-500 hover:text-white transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                    <p className="text-sm text-neutral-600 max-w-xs text-left md:text-right">
                        Building with intentionality. Every state change matters.
                    </p>
                </footer>
                <AIAssistant />
            </main>
        </ClientOnly>
    );
}

function ProjectItem({ project, index }: { project: any, index: number }) {
    const [isExpanded, setIsExpanded] = useState(index === 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex justify-between items-end pb-8 border-b border-neutral-900 group-hover:border-neutral-800 transition-colors">
                <div className="space-y-2">
                    <h3 className="text-2xl font-medium group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-neutral-500 max-w-md">{project.description}</p>
                </div>
                <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    className="text-neutral-700"
                >
                    <ChevronDown size={24} />
                </motion.div>
            </div>

            <motion.div
                initial={false}
                animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                className="overflow-hidden bg-neutral-950/50"
            >
                <div className="py-12 px-2 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-6">
                        <h4 className="text-sm font-mono text-neutral-600 uppercase">Logic & Origin</h4>
                        <p className="text-neutral-400 leading-relaxed">{project.story}</p>
                        <div className="flex gap-4">
                            {project.link !== "#" && (
                                <a href={project.link} className="flex items-center gap-2 text-sm text-accent hover:underline">
                                    Visit Project <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h4 className="text-sm font-mono text-neutral-600 uppercase">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag: string) => (
                                <span key={tag} className="px-3 py-1 bg-neutral-900 text-neutral-500 rounded-full text-xs font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
