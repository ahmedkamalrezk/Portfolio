"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Command } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio.config";

export function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; content: React.ReactNode }[]>([
        { role: "assistant", content: "I am an interface for Ahmed's engineering system. How can I assist you?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Mock AI logic based on config
        // Advanced Rule-Based Logic
        setTimeout(() => {
            const lowerInput = input.toLowerCase();
            const isArabic = /[\u0600-\u06FF]/.test(input);
            let response = "";

            // 1. Check for CV / Resume
            if (lowerInput.includes("cv") || lowerInput.includes("resume") || lowerInput.includes("سيرة ذاتية") || lowerInput.includes("سي في")) {
                response = isArabic
                    ? "تقدر تحمل السيرة الذاتية لأحمد من هنا: <a href='/resume.pdf' target='_blank' class='text-accent hover:underline'>تحميل الـ CV</a>"
                    : "You can download Ahmed's CV from here: <a href='/resume.pdf' target='_blank' class='text-accent hover:underline'>Download Resume</a>";
            }

            // 2. Custom Personal Knowledge (User Provided)
            else if (lowerInput.includes("phone") || lowerInput.includes("number") || lowerInput.includes("call") || lowerInput.includes("whatsapp") || lowerInput.includes("رقم") || lowerInput.includes("تليفون")) {
                response = isArabic
                    ? "للاستفسارات المهنية، أحمد بيفضل التواصل عن طريق الإيميل: <a href='mailto:ahmed.kamalrezkk@gmail.com' class='text-accent hover:underline'>ahmed.kamalrezkk@gmail.com</a>."
                    : "For professional inquiries, Ahmed prefers communication via email. You can reach him at <a href='mailto:ahmed.kamalrezkk@gmail.com' class='text-accent hover:underline'>ahmed.kamalrezkk@gmail.com</a>.";
            }
            else if (lowerInput.includes("university") || lowerInput.includes("college") || lowerInput.includes("school") || lowerInput.includes("جامعة") || lowerInput.includes("كليب")) {
                response = isArabic
                    ? "أحمد حالياً طالب في **جامعة العلمين الدولية**."
                    : "Ahmed is currently studying at **Alamein International University**.";
            }
            else if (lowerInput.includes("study") || lowerInput.includes("major") || lowerInput.includes("department") || lowerInput.includes("specialization") || lowerInput.includes("يدرس") || lowerInput.includes("قسم") || lowerInput.includes("تخصص")) {
                response = isArabic
                    ? "هو بيدرس **هندسة وعلوم الحاسب**، تخصص **ذكاء اصطناعي**."
                    : "He is pursuing a degree in **Computer Science and Engineering**, specializing in the **Artificial Intelligence** department.";
            }
            else if (lowerInput.includes("graduated") || lowerInput.includes("degree") || lowerInput.includes("finish") || lowerInput.includes("تخرج") || lowerInput.includes("خريج")) {
                response = isArabic
                    ? "هو لسه متخرجش، وحالياً طالب في جامعة العلمين الدولية."
                    : "He hasn't graduated yet; he is currently an active student at Alamein International University.";
            }
            else if (lowerInput.includes("experience") || lowerInput.includes("years") || lowerInput.includes("خبرة") || lowerInput.includes("سنين")) {
                response = isArabic
                    ? "أحمد عنده **4 سنين** خبرة عملية في هندسة البرمجيات وتطوير أنظمة الذكاء الاصطناعي."
                    : "Ahmed has **4 years** of hands-on experience in software engineering and AI systems development.";
            }

            // 3. General Contact
            else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("reach") || lowerInput.includes("تواصل") || lowerInput.includes("ايميل")) {
                response = isArabic
                    ? `تقدر تتواصل مع أحمد عن طريق الإيميل: ${portfolioConfig.socials.email} أو من خلال LinkedIn.`
                    : `You can reach Ahmed via email at ${portfolioConfig.socials.email} or connect on LinkedIn.`;
            }
            else if (lowerInput.includes("available") || lowerInput.includes("hire") || lowerInput.includes("job") || lowerInput.includes("شغل") || lowerInput.includes("توظيف") || lowerInput.includes("متاح")) {
                response = isArabic
                    ? "أيوه، أحمد متاح حالياً لفرص شغل جديدة ومشاريع مثيرة للاهتمام. ابعتله إيميل!"
                    : "Yes, Ahmed is currently open to new opportunities and interesting projects. Feel free to send an email!";
            }

            // 4. Dynamic Portfolio Data Matching
            else if (lowerInput.includes("skills") || lowerInput.includes("stack") || lowerInput.includes("technologies") || lowerInput.includes("tech") || lowerInput.includes("مهارات") || lowerInput.includes("تقنيات")) {
                const allSkills = portfolioConfig.skills.flatMap(s => s.items).join(", ");
                response = isArabic
                    ? `أحمد بيستخدم مجموعة تقنيات قوية منها: ${allSkills}. وبيركز دايماً على العمق والوضوح في شغله.`
                    : `Ahmed's technical arsenal includes: ${allSkills}. He treats engineering with depth and clarity.`;
            }
            else if (lowerInput.includes("project") || lowerInput.includes("built") || lowerInput.includes("work") || lowerInput.includes("مشاريع") || lowerInput.includes("أعمال")) {
                const projectNames = portfolioConfig.projects.map(p => p.title).join(", ");
                response = isArabic
                    ? `أحمد صمم وبنى أنظمة كتير، أهمها: ${projectNames}. اسألني عن أي واحد فيهم عشان أقولك تفاصيله!`
                    : `Ahmed has engineered several systems, notably: ${projectNames}. Ask me about a specific one for details!`;
            }
            else if (portfolioConfig.projects.some(p => lowerInput.includes(p.title.toLowerCase()) || lowerInput.includes(p.id))) {
                const project = portfolioConfig.projects.find(p => lowerInput.includes(p.title.toLowerCase()) || lowerInput.includes(p.id));
                if (project) {
                    response = isArabic
                        ? `**مشروع ${project.title}**: ${project.description} اتبنى باستخدام تقنيات زي ${project.tags.join(", ")}. القصة وراه: ${project.story}`
                        : `**${project.title}**: ${project.description} It was built using ${project.tags.join(", ")}. ${project.story}`;
                }
            }
            else if (lowerInput.includes("cert") || lowerInput.includes("learning") || lowerInput.includes("course") || lowerInput.includes("شهادات") || lowerInput.includes("كورسات")) {
                response = isArabic
                    ? `أحمد معاه شهادات موثقة من مؤسسات كبيرة زي: ${portfolioConfig.certificates.map(c => c.name).join(", ")}.`
                    : `Ahmed has verified competencies from top institutions: ${portfolioConfig.certificates.map(c => c.name).join(", ")}.`;
            }
            else if (lowerInput.includes("mindset") || lowerInput.includes("philosophy") || lowerInput.includes("think") || lowerInput.includes("فلسفة") || lowerInput.includes("تفكير")) {
                response = isArabic
                    ? "أحمد بيتعامل مع الهندسة بمبدأ 'القصد والنية' (Intentionality). كل سطر كود لازم يكون له سبب وهدف واضح."
                    : portfolioConfig.engineeringMindset;
            }
            else if (lowerInput.includes("who") || lowerInput.includes("name") || lowerInput.includes("ahmed") || lowerInput.includes("مين") || lowerInput.includes("اسم")) {
                response = isArabic
                    ? "أحمد كمال، مهندس ذكاء اصطناعي بيحب يبني أنظمة قوية ومستقرة."
                    : portfolioConfig.bio;
            }

            // 5. Default / Fallback
            else {
                if (isArabic) {
                    const arabicDefaults = [
                        "أنا ممكن أكلمك عن مشاريع أحمد، مهاراته، أو شهاداته. حابب تعرف ايه؟",
                        "اسألني عن مشروع 'Aether' أو عن الـ CV بتاع أحمد.",
                        "ممكن تسألني عن تقنيات محددة زي Next.js أو AI."
                    ];
                    response = arabicDefaults[Math.floor(Math.random() * arabicDefaults.length)];
                } else {
                    const defaults = [
                        "I can tell you about Ahmed's projects, skills, certifications, or engineering philosophy. What would you like to know?",
                        "I'm designed to navigate Ahmed's professional system. Ask me about 'Aether', his 'tech stack', or his 'CV'.",
                        "Try asking about specific technologies like 'Next.js' or 'AI' to see Ahmed's experience with them."
                    ];
                    response = defaults[Math.floor(Math.random() * defaults.length)];
                }
            }

            // Allow HTML for links
            setMessages(prev => [...prev, { role: "assistant", content: <span dangerouslySetInnerHTML={{ __html: response }} /> }]);
            setIsTyping(false);
        }, 800);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 p-4 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 hover:text-white hover:border-neutral-700 transition-all shadow-2xl z-50"
            >
                <Command size={24} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 right-8 w-80 md:w-96 h-[500px] bg-neutral-950 border border-neutral-800 rounded-2xl flex flex-col shadow-2xl z-50 overflow-hidden"
                    >
                        <div className="p-4 border-b border-neutral-900 flex justify-between items-center bg-neutral-900/50">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-sm font-mono text-neutral-400">System Interface</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white">
                                <X size={18} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === "user"
                                        ? "bg-accent/10 border border-accent/20 text-accent-light"
                                        : "bg-neutral-900 text-neutral-300"
                                        }`}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-neutral-900 p-3 rounded-xl text-xs text-neutral-500 animate-pulse font-mono">
                                        Querying kernel...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="p-4 border-t border-neutral-900">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Ask the system..."
                                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-2 px-4 pr-10 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-accent"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
