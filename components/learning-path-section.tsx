import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Play, Award, Code, Trophy } from "lucide-react"

const learningPlatforms = [
  {
    name: "Curso em Vídeo",
    icon: Play,
    description: "Fundamentos de programação e lógica",
    courses: ["Python Básico", "Algoritmos", "Git e GitHub"],
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/30",
  },
  {
    name: "Alura",
    icon: BookOpen,
    description: "Desenvolvimento web e DevOps",
    courses: ["Python Avançado", "Docker", "Banco de Dados", "Scrum", "DevOps"],
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/30",
  },
  {
    name: "DIO (Digital Innovation One)",
    icon: Code,
    description: "Bootcamps e projetos práticos",
    courses: ["Java + Spring Boot", "Desenvolvimento Full Stack", "Cloud Computing"],
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/30",
  },
  {
    name: "Oracle University",
    icon: Award,
    description: "Certificações em IA e Cloud",
    courses: ["OCI AI Foundations", "IA Generativa", "Data Science", "AI Vector Search"],
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/30",
  },
  {
    name: "Yellow Belt - Lean 6 Sigma",
    icon: Trophy,
    description: "Vivo / Telefônica Brasil",
    courses: ["Metodologia Lean 6 Sigma", "Projeto Estratégico", "Melhoria de Processos"],
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/30",
  },
]

export function LearningPathSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Trilha de Aprendizado</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Minha jornada de aprendizado contínuo através das principais plataformas de ensino
          </p>
        </div>

        <div className="responsive-grid">
          {learningPlatforms.map((platform) => {
            const IconComponent = platform.icon
            return (
              <Card
                key={platform.name}
                className={`p-6 card-3d bg-card border-border hover:${platform.borderColor} transition-all duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg ${platform.bgColor} ${platform.borderColor} border mr-4`}>
                    <IconComponent className={`w-6 h-6 ${platform.color}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${platform.color}`}>{platform.name}</h3>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground mb-3">Cursos Realizados:</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform.courses.map((course) => (
                      <Badge
                        key={course}
                        variant="outline"
                        className={`text-xs ${platform.borderColor} ${platform.color} hover:${platform.bgColor} transition-colors`}
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Learning Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 text-center card-3d bg-card border-border">
            <div className="text-2xl font-bold text-primary">5</div>
            <div className="text-sm text-muted-foreground">Plataformas</div>
          </Card>
          <Card className="p-4 text-center card-3d bg-card border-border">
            <div className="text-2xl font-bold text-secondary">20+</div>
            <div className="text-sm text-muted-foreground">Cursos</div>
          </Card>
          <Card className="p-4 text-center card-3d bg-card border-border">
            <div className="text-2xl font-bold text-accent">500+</div>
            <div className="text-sm text-muted-foreground">Horas de Estudo</div>
          </Card>
          <Card className="p-4 text-center card-3d bg-card border-border">
            <div className="text-2xl font-bold gradient-text">∞</div>
            <div className="text-sm text-muted-foreground">Aprendizado Contínuo</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
