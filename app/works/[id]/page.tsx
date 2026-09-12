import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

// Importas tu componente visual reutilizable
import { ProjectContent } from "@/components/projects/project-content";

// Importamos el array PROJECTS desde el componente donde lo tienes guardado
import { PROJECTS } from "@/data/data-projects";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<ReactNode> {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  // Buscamos el proyecto que coincida con el id de la URL
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <main className="mx-auto flex flex-1 flex-col max-w-275 px-6 pt-32 pb-20 sm:px-10">
      <Link 
        href="/works" 
        className="text-sm text-foreground/60 hover:text-foreground mb-8 inline-flex items-center gap-1.5 transition-colors"
      >
        &larr; Volver a Works
      </Link>
      
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="border-foreground/10 inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background">
            <Icon className="h-5 w-5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-base font-medium text-foreground">{project.iconLabel}</span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl font-medium mb-4 tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="text-xl text-foreground/65 tracking-tight">{project.description}</p>
        <p className="text-sm text-foreground/50 mt-4">{project.meta}</p>
      </header>

      {/* Imagen principal del caso de estudio */}
      <div 
        className="relative w-full overflow-hidden rounded-3xl bg-foreground/5 ring-1 ring-foreground/5 mb-12"
        style={{ aspectRatio: project.imageRatio }}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Espacio para la narrativa o contenido extendido de tu caso de estudio */}

        <ProjectContent
        overview={project.overview}
        challenge={project.challenge}
        solution={project.solution}
        technologies={project.technologies}
        />
    </main>
  );
}
