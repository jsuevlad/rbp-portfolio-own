import { 
  FolderKanban, FileStack,
  Goal, BrainCircuit, } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

// Importamos el contenido desde su propio archivo

import { dummy } from "./contents/dummy";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio:string;
  image: string;
  imageAlt: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  technologies?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "juleshidde",
    icon: FolderKanban,
    iconLabel: "Jules Hidde",
    title:"Structure for the ones building from scratch.",
    description:
      "Jules Hidde explores how thoughtful systems can give small businesses the clarity, tools, and direction to grow with intention.",
    meta: "Product Strategy & Design, 2025",
    imageRatio: 752 / 497,
    image: "/img/juleshidde.png",
    imageAlt: "Jules Hidde visual concept.",
    
      // Usamos el operador de propagación (...) aquí
    ...dummy,
  },
  {
    id: "miranda",
    icon: FileStack,
    iconLabel: "Miranda",
    title: "Making complexity feel effortless.",
    description:
      "Miranda rethinks everyday project management as a flexible, collaborative system built around how people actually work.",
    meta: "Product Design & UX, 2026",
    imageRatio: 1024 / 768,
    image: "/img/miranda.png",
    imageAlt: "Miranda visual concept",
  },
  {
    id: "insulso",
    icon: Goal,
    iconLabel: "Insulso",
    title: "Complexity, deliberately designed.",
    description: "A startup concept built around turning ambitious ideas into thoughtful digital products, combining design, technology, and strategy from the ground up.",
    meta: "Product Strategy & Innovation, 2024",
    imageRatio: 1024 / 768,
    image: "/img/insulso.png",
    imageAlt: "Insulso visual concept",
  },
  {
    id: "solene",
    icon: BrainCircuit,
    iconLabel: "Solene",
    title: "Making data understand itself.",
    description: "An experimental semantic data system exploring how structured information can become more meaningful, connected, and useful through relationships.",
    meta: "Semantic Systems, 2026",
    imageRatio: 1024 / 768,
    image: "/img/solene.png",
    imageAlt: "Solene visual concept",
  },
];
