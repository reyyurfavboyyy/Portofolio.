"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { projects } from "@/app/data/projects";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;

  // Cari project sesuai id
  const project = projects.find((p) => p.id === id);

  // Kalau project tidak ditemukan → bisa redirect ke homepage
  if (!project) {
    router.push("/");
    return null;
  }

  return (
    <main className="min-h-screen bg-black text-white px-10 py-20">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-10 border border-white/40 px-4 py-2 rounded hover:bg-white hover:text-black transition"
      >
        ← Back
      </button>

      {/* Project Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        {project.title}
      </motion.h1>

      {/* Project Category & Tech */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-300 mb-6"
      >
        <p className="text-sm">{project.category}</p>
        <p className="text-sm">{project.tech.join(" • ")}</p>
      </motion.div>

      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full h-[400px] md:h-[500px] mb-6 rounded-lg overflow-hidden border border-white/20"
      >
        <Image
          src={`/projects-${id}.jpg`}
          alt={`Projects ${id}`}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Project Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="opacity-70 mb-6"
      >
        {project.description}
      </motion.p>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex gap-6"
      >
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            className="underline text-sm"
          >
            Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="underline text-sm"
          >
            GitHub
          </a>
        )}
      </motion.div>
    </main>
  );
}
