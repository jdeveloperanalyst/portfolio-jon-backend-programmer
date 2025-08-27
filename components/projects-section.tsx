"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Automação de Processos",
    description:
      "Sistema de automação desenvolvido em Python para otimização de processos empresariais, com integração a APIs e bancos de dados.",
    technologies: ["Python", "REST API", "Automação", "RPA"],
    github: "https://github.com/jdeveloperanalyst/Automacao-de-Processos",
    status: "Concluído",
  },
  {
    title: "Envio SMS Twilio",
    description:
      "Aplicação para envio automatizado de SMS utilizando a API do Twilio, com interface web e sistema de templates personalizáveis.",
    technologies: ["Python", "Twilio API", "Flask", "SMS"],
    github: "https://github.com/jdeveloperanalyst/Envio-SMS-Twilio",
    status: "Concluído",
  },
  {
    title: "Análise de Dados",
    description:
      "Projeto de análise e visualização de dados utilizando Python, Pandas e bibliotecas de visualização para insights empresariais.",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "https://github.com/jdeveloperanalyst/Analise-de-Dados",
    status: "Concluído",
  },
  {
    title: "My First API",
    description:
      "Primeira API REST desenvolvida em Python com Flask, incluindo autenticação, CRUD completo e documentação com Swagger.",
    technologies: ["Python", "Flask", "REST API", "Swagger"],
    github: "https://github.com/jdeveloperanalyst/My-First-API",
    status: "Concluído",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades técnicas e experiência prática
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 card-3d bg-card border-border group hover:border-primary/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="default" className="bg-primary text-primary-foreground">
                    {project.status}
                  </Badge>
                </div>

                <p className="text-card-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-muted text-muted-foreground text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.open("https://github.com/jdeveloperanalyst", "_blank")}
          >
            <Github className="w-4 h-4 mr-2" />
            Ver Mais Projetos no GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
