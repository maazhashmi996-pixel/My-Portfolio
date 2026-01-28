"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const AnimatedShape = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    });

    return (
        <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
            <MeshDistortMaterial
                color="#4F46E5"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0}
            />
        </Sphere>
    );
};

export default function Hero() {
    return (
        <section className="relative h-screen w-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
            {/* 3D Canvas Layer */}
            <div className="absolute inset-0 z-0">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} />
                    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                        <AnimatedShape />
                    </Float>
                </Canvas>
            </div>

            {/* Content Layer */}
            <div className="z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-7xl md:text-9xl font-extrabold text-white tracking-tighter"
                >
                    MAAZ <span className="text-indigo-500 underline decoration-indigo-500/30">HASHMI</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 text-gray-400 font-mono"
                >
                    {"< Full Stack Developer / Three.js Wizard />"}
                </motion.p>
            </div>
        </section>
    );
}