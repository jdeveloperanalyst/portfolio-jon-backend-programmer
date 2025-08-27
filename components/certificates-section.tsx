export function CertificatesSection() {
  const certificates = [
    {
      title: "Python 3",
      institution: "Alura",
      type: "Curso em Vídeo",
      status: "Concluído",
      color: "primary",
    },
    {
      title: "Banco de Dados Relacional e Não Relacional",
      institution: "Alura",
      type: "Curso em Vídeo",
      status: "Concluído",
      color: "secondary",
    },
    {
      title: "Docker",
      institution: "Alura",
      type: "Curso em Vídeo",
      status: "Concluído",
      color: "accent",
    },
    {
      title: "Yellow Belt (Lean Six Sigma)",
      institution: "Vivo / Telefônica Brasil",
      type: "Certificação",
      status: "Concluído",
      color: "primary",
    },
    {
      title: "Metodologia Scrum",
      institution: "Alura / FIA",
      type: "Curso",
      status: "Concluído",
      color: "secondary",
    },
    {
      title: "DevOps",
      institution: "Alura / FIAP",
      type: "Curso",
      status: "Concluído",
      color: "accent",
    },
    {
      title: "Java + Spring Boot",
      institution: "DIO (Digital Innovation One)",
      type: "Bootcamp",
      status: "Em andamento",
      color: "primary",
    },
    {
      title: "Fundamentos de IA (OCI AI Foundations)",
      institution: "Oracle University",
      type: "Certificação",
      status: "Em andamento",
      color: "secondary",
    },
    {
      title: "IA Generativa (OCI Generative AI)",
      institution: "Oracle University",
      type: "Certificação",
      status: "Em andamento",
      color: "accent",
    },
    {
      title: "Busca Vetorial com IA (Oracle AI Vector Search)",
      institution: "Oracle University",
      type: "Certificação",
      status: "Em andamento",
      color: "primary",
    },
    {
      title: "Ciência de Dados (OCI Data Science)",
      institution: "Oracle University",
      type: "Certificação",
      status: "Em andamento",
      color: "secondary",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certificações
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certificações e cursos que complementam minha formação técnica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-6 card-3d bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      cert.status === "Concluído" ? "bg-primary/20 text-primary" : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">{cert.institution}</p>
                <p className="text-xs text-accent font-medium">{cert.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
