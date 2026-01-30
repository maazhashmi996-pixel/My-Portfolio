"use client";
import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Float,
    MeshDistortMaterial,
    Sphere,
    Stars,
    PerspectiveCamera
} from '@react-three/drei';
import * as THREE from 'three';

// 1. Types Definition
interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
}

const projects: Project[] = [
    { id: 1, title: "Gifted Wheels Driving School", description: "Full-scale store with Stripe and Auth.", tags: ["React", "Node.js", "MongoDB"], link: "https://giftedwheelsds.com/" },
    { id: 2, title: "Hukam Express", description: "Interactive 3D viewer using Three.js.", tags: ["Three.js", "Next.js"], link: "https://hukamexpress.com/" },
    { id: 3, title: "Lead-Managment-System", description: "Live data visualization with Socket.io.", tags: ["Express", "Chart.js"], link: "https://leads-management-system-next.vercel.app/" },
    { id: 3, title: "Ride TO Mechanic", description: "Live data visualization with Socket.io.", tags: ["Express", "Chart.js"], link: "https://full-stack-project-sandy.vercel.app/" },
    { id: 4, title: "Dawood Gee Astrologer", description: "Modern AI-integrated web application.", tags: ["Next.js", "Tailwind", "Cloudinary"], link: "https://dawoodgeedawood.com/" },
    { id: 4, title: "Dib Education System", description: "Modern AI-integrated web application.", tags: ["Next.js", "Tailwind", "Cloudinary"], link: "https://dib.ac.pk/" },
];

// 2. Galaxy Scene Component (Optimized Glow)
const GalaxyScene = () => {
    const sphereRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        sphereRef.current.rotation.y = t * 0.15;
        sphereRef.current.rotation.x = t * 0.1;
    });

    return (
        <>
            {/* Infinite Space effect */}
            <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5} />

            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={2.5} color="#4F46E5" />
            <pointLight position={[-10, -10, -10]} intensity={2} color="#9333ea" />

            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.3}>
                    <MeshDistortMaterial
                        color="#1e1b4b"
                        distort={0.45}
                        speed={2}
                        roughness={0}
                        metalness={0.9}
                        emissive="#4F46E5"
                        emissiveIntensity={1.2} // High intensity for "Bloom" look without red lines
                    />
                </Sphere>
            </Float>
        </>
    );
};

export default function Portfolio() {
    return (
        <main className="bg-[#020205] min-h-screen text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">

            {/* HEADER / GALAXY HERO SECTION */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Canvas>
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                        <Suspense fallback={null}>
                            <GalaxyScene />
                        </Suspense>
                    </Canvas>
                </div>

                <div className="z-10 text-center pointer-events-none px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                    >
                        <h1 className="text-6xl md:text-[11rem] font-black tracking-tighter leading-none">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-indigo-100 to-indigo-800 drop-shadow-[0_0_40px_rgba(79,70,229,0.7)]">
                                MAAZ HASHMI
                            </span>
                        </h1>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ delay: 1, duration: 2 }}
                            className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent my-8"
                        />

                        <p className="text-indigo-300 font-mono tracking-[1em] text-[10px] md:text-sm uppercase opacity-60">
                            Digital Space Architect • MERN • NEXT.JS
                        </p>
                    </motion.div>
                </div>

                {/* Animated Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-5 h-9 rounded-full border border-indigo-500/30 flex justify-center p-1"
                    >
                        <div className="w-1 h-2 bg-indigo-500 rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* BIOGRAPHY SECTION */}
            <section className="py-32 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative group shrink-0"
                >
                    <div className="absolute -inset-4 bg-indigo-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000" />
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-sm">
                        <img
                            src="/Me.jpg"
                            alt="Maaz Hashmi"
                            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex-1"
                >
                    <h2 className="text-indigo-500 font-mono text-sm mb-4 tracking-widest uppercase italic">01 // Origin</h2>
                    <h3 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Crafting Web <br /> <span className="text-indigo-600 italic">Universes.</span></h3>
                    <p className="text-gray-400 text-xl leading-relaxed font-light">

                        "I am Maaz Hashmi, a dedicated Software Engineer specializing in the MERN stack. I bridge the gap between complex backend logic and immersive frontend experiences to build scalable, high-performance web applications. With a passion for clean code and a sharp eye for 3D interactive design, I transform ideas into seamless digital realities.
                        With the power of <span className="text-white font-medium underline decoration-indigo-500 underline-offset-4">Next.js</span> and
                        <span className="text-white font-medium"> Three.js</span>, I build websites that don't just work—they perform.
                    </p>
                </motion.div>
            </section>

            {/* PROJECTS GRID SECTION */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
                    <div>
                        <h2 className="text-indigo-500 font-mono text-xs mb-2 uppercase tracking-widest">Selected Works</h2>
                        <h3 className="text-5xl font-bold">Live Missions</h3>
                    </div>
                    <div className="text-gray-600 font-mono text-sm tracking-tighter italic">Total Projects: {projects.length}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <motion.a
                            href={project.link}
                            key={project.id}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -10 }}
                            className="group relative block rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 overflow-hidden backdrop-blur-md transition-all hover:border-indigo-500/40 shadow-2xl"
                        >
                            <div className="p-12 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                                        <span className="text-xl group-hover:scale-125 transition-transform">🛰️</span>
                                    </div>
                                    <div className="text-[10px] font-mono text-indigo-400 border border-indigo-400/30 px-3 py-1 rounded-full uppercase tracking-tighter group-hover:bg-indigo-400 group-hover:text-black transition-all">
                                        Launch Project
                                    </div>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 font-light mb-10 line-clamp-2 leading-relaxed">{project.description}</p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-[9px] py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-gray-400 font-mono group-hover:border-indigo-500/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-24 text-center relative border-t border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20" />
                <h4 className="text-gray-500 font-mono text-xs tracking-[0.5em] uppercase mb-4">Transmission End</h4>
                <p className="text-gray-400 text-sm">
                    Handcrafted by <span className="text-white font-bold">Maaz Hashmi</span> © 2026
                </p>
            </footer>
        </main>
    );
}