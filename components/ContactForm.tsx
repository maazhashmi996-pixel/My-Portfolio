"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleWhatsAppSend = (e: React.FormEvent) => {
        e.preventDefault();

        // WhatsApp Configuration
        const phoneNumber = "923339844424";
        const text = `*New Portfolio Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;

        // Open WhatsApp Link
        window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Glow Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto relative z-10"
            >
                <div className="text-center mb-16">
                    <h2 className="text-indigo-500 font-mono text-xs mb-2 uppercase tracking-[0.3em]">02 // Contact</h2>
                    <h3 className="text-5xl font-bold">Start a <span className="text-indigo-600 italic">Mission.</span></h3>
                </div>

                <form
                    onSubmit={handleWhatsAppSend}
                    className="backdrop-blur-xl bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-indigo-400 uppercase ml-2">Name</label>
                            <input
                                required
                                type="text"
                                placeholder="John Doe"
                                className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-indigo-400 uppercase ml-2">Email</label>
                            <input
                                required
                                type="email"
                                placeholder="john@galaxy.com"
                                className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2 mb-8">
                        <label className="text-xs font-mono text-indigo-400 uppercase ml-2">Message</label>
                        <textarea
                            required
                            rows={4}
                            placeholder="Tell me about your project..."
                            className="w-full bg-transparent border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all resize-none"
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all flex items-center justify-center gap-3 group"
                    >
                        <span>SEND TO COMMAND CENTER</span>
                        <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">🚀</span>
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
}