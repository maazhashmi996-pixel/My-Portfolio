"use client";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 1. Types Definition (Red lines khatam karne ke liye)
interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
}

const projects: Project[] = [
    { id: 1, title: "MERN E-Commerce", description: "Full-scale store with Stripe and Auth.", tags: ["React", "Node.js", "MongoDB"], link: "https://your-link.com" },
    { id: 2, title: "3D Product Customizer", description: "Interactive 3D viewer using Three.js.", tags: ["Three.js", "Next.js"], link: "https://your-link.com" },
    { id: 3, title: "Real-time Dashboard", description: "Live data visualization with Socket.io.", tags: ["Express", "Chart.js"], link: "https://your-link.com" },
    { id: 4, title: "Next.js SaaS App", description: "Modern AI-integrated web application.", tags: ["Next.js", "Tailwind", "Cloudinary"], link: "https://your-link.com" },
];

// 2. 3D Background Component
const Scene = () => {
    const sphereRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    });

    return (
        <>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <Float speed={5} rotationIntensity={2} floatIntensity={2}>
                <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.5}>
                    <MeshDistortMaterial color="#4F46E5" distort={0.5} speed={2} roughness={0.1} />
                </Sphere>
            </Float>
        </>
    );
};

export default function Portfolio() {
    return (
        <main className="bg-[#050505] min-h-screen text-white font-sans selection:bg-indigo-500/30">

            {/* HEADER / HERO SECTION */}
            <section className="relative h-screen flex flex-col items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <Scene />
                    </Canvas>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="z-10 text-center px-4"
                >
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
                        MAAZ HASHMI
                    </h1>
                    <p className="mt-4 text-indigo-400 font-mono tracking-widest text-sm md:text-lg">
                        FULL STACK DEVELOPER • NEXT.JS • THREE.JS
                    </p>
                </motion.div>
            </section>

            {/* BIOGRAPHY SECTION */}
            <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="w-64 h-64 flex-shrink-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-3xl rotate-3 overflow-hidden shadow-2xl"
                >
                    {/* Replace with your actual image path */}
                    <img src="/api/placeholder/400/400" alt="Maaz Hashmi" className="w-full h-full object-cover -rotate-3 hover:rotate-0 transition-transform duration-500" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex-1"
                >
                    <h2 className="text-4xl font-bold mb-6 underline decoration-indigo-500 underline-offset-8">About Me</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        I'm a developer who loves building things for the web. With a strong grip on
                        **MERN Stack** and **Next.js**, I focus on creating fast, interactive,
                        and scalable applications. I believe in writing clean code and creating
                        meaningful user experiences.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        {["React", "Next.js", "Node", "MongoDB", "Three.js"].map(skill => (
                            <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-indigo-500 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* PROJECTS GRID SECTION */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            key={project.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                ↗
                            </div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                            <p className="text-gray-400 mt-3 mb-6 line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] uppercase tracking-widest bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-md border border-indigo-500/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-10 text-center text-gray-600 border-t border-white/5">
                <p>© 2024 Maaz Hashmi. Built with Passion & Caffeine.</p>
            </footer>
        </main>
    );
}