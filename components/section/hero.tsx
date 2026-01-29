"use client";
import React, { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const GalaxyScene = () => {
    const sphereRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        sphereRef.current.rotation.y = t * 0.15;
        sphereRef.current.rotation.x = t * 0.1;
    });

    return (
        <>
            <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1.5} />
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={2.5} color="#4F46E5" />
            <pointLight position={[-10, -10, -10]} intensity={2} color="#9333ea" />
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2.3}>
                    <MeshDistortMaterial color="#1e1b4b" distort={0.45} speed={2} roughness={0} metalness={0.9} emissive="#4F46E5" emissiveIntensity={1.2} />
                </Sphere>
            </Float>
        </>
    );
};

export const Hero = () => (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <Suspense fallback={null}><GalaxyScene /></Suspense>
            </Canvas>
        </div>
        <div className="z-10 text-center pointer-events-none px-4">
            <motion.div initial={{ opacity: 0, scale: 0.8, filter: "blur(15px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1.8 }}>
                <h1 className="text-6xl md:text-[11rem] font-black tracking-tighter leading-none">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-indigo-100 to-indigo-800 drop-shadow-[0_0_40px_rgba(79,70,229,0.7)]">
                        MAAZ HASHMI
                    </span>
                </h1>
                <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ delay: 1, duration: 2 }} className="h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent my-8" />
                <p className="text-indigo-300 font-mono tracking-[1em] text-[10px] md:text-sm uppercase opacity-60">Digital Space Architect • MERN • NEXT.JS</p>
            </motion.div>
        </div>
    </section>
);