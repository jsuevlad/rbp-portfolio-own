import type { ReactNode } from "react";

// Definimos qué props va a aceptar este componente visual
export type ProjectContentProps = {
  overview?: string;
  challenge?: string;
  solution?: string;
  technologies?: string[];
  children?: ReactNode; // Por si en algún proyecto quieres meter algo custom extra
};

export function ProjectContent({
  overview,
  challenge,
  solution,
  technologies,
  children,
}: ProjectContentProps) {
  return (
    <div className="prose max-w-none text-foreground/80 space-y-12">
      {/* 1. Resumen o Introducción del proyecto */}
      {overview && (
        <section>
          <p className="text-lg leading-relaxed text-foreground/90">{overview}</p>
        </section>
      )}

      {/* 2. Sección del Reto */}
      {challenge && (
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-medium tracking-tight text-foreground">
            El Reto
          </h2>
          <p className="leading-relaxed">{challenge}</p>
        </section>
      )}

      {/* 3. Sección de la Solución */}
      {solution && (
        <section className="space-y-4">
          <h2 className="text-2xl font-serif font-medium tracking-tight text-foreground">
            La Solución & Ejecución
          </h2>
          <p className="leading-relaxed">{solution}</p>
        </section>
      )}

      {/* 4. Lista de tecnologías o herramientas utilizadas */}
      {technologies && technologies.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
            Tecnologías y Herramientas
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg border border-foreground/15 bg-background px-3 py-1 text-sm font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Espacio para hijos adicionales (por si quieres meter componentes extra específicos) */}
      {children}
    </div>
  );
}
