import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
          <p className="text-base text-muted-foreground">Minha jornada no desenvolvimento de soluções tecnológicas</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary hidden md:block"></div>

          <div className="space-y-12">
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <Card className="p-6 card-3d bg-card border-border">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-semibold text-primary">DevOps Pleno (Python)</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        05/2023 - Atual
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        VIVO (Telefônica Brasil)
                      </div>
                    </div>
                  </div>

                  <p className="text-card-foreground mb-4">
                    Atuação no desenvolvimento de RPAs em Python, além de projetos em Java e Groovy, com foco em
                    automação de processos, otimização operacional e integrações sistêmicas.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-secondary mb-2">Principais Responsabilidades:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Desenvolvimento de RPAs em Python para automação de processos</li>
                        <li>Projetos em Java e Groovy para integração sistêmica</li>
                        <li>Administração de bancos Oracle, MySQL e MongoDB</li>
                        <li>Consumo e desenvolvimento de APIs REST</li>
                        <li>Containerização com Docker em ambientes Linux</li>
                        <li>Aplicação de metodologias ágeis (Scrum, DevOps)</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {[
                        "Python",
                        "Java",
                        "Groovy",
                        "Docker",
                        "Linux",
                        "GitLab",
                        "Oracle",
                        "MySQL",
                        "MongoDB",
                        "REST APIs",
                        "Scrum",
                        "DevOps",
                      ].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg z-10 floating-animation order-1 md:order-2">
                V
              </div>

              <div className="md:w-1/2 md:pl-8 order-3"></div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1"></div>

              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-lg z-10 floating-animation order-1 md:order-2">
                P
              </div>

              <div className="md:w-1/2 md:pl-8 order-3">
                <Card className="p-6 card-3d bg-card border-border">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-semibold text-secondary">Analista de Sustentação Pleno</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        02/2022 - 05/2022
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        PROVU S.A
                      </div>
                    </div>
                  </div>

                  <p className="text-card-foreground mb-4">
                    Responsável no apoio à equipe de automação, analisando fluxos internos para identificar
                    oportunidades de automação com Python, implementando alertas automatizados via e-mail e Slack.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-secondary mb-2">Principais Responsabilidades:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Análise de fluxos internos para identificar oportunidades de automação</li>
                        <li>Implementação de alertas automatizados via e-mail e Slack</li>
                        <li>Participação em reuniões diárias para alinhamento estratégico</li>
                        <li>Monitoramento de aplicações com New Relic, Slack e Zabbix</li>
                        <li>Sustentação de sistemas em produção para área BNPL (Buy Now, Pay Later)</li>
                        <li>Consultas e análises em MySQL com Redash</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {["Python", "MySQL", "New Relic", "Zabbix", "Slack", "Redash", "BNPL"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-secondary/30 text-secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1">
                <Card className="p-6 card-3d bg-card border-border">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl font-semibold text-accent">Analista de Infraestrutura Jr</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        10/2017 - 04/2020
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        CAPGEMINI BRASIL S.A
                      </div>
                    </div>
                  </div>

                  <p className="text-card-foreground mb-4">
                    Responsável pelo gerenciamento e resolução de incidentes Nível 1 e Nível 2, incluindo monitoramento
                    de serviços críticos, links de voz e dados, infraestrutura de rede, servidores Windows/Linux e
                    bancos de dados.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-accent mb-2">Principais Responsabilidades:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        <li>Gerenciamento e resolução de incidentes Nível 1 e Nível 2</li>
                        <li>Monitoramento de serviços críticos e infraestrutura de rede</li>
                        <li>Administração de servidores Windows/Linux e bancos de dados</li>
                        <li>Monitoração e reexecução de backups utilizando NetBackup</li>
                        <li>Automação e gerenciamento de jobs via Control-M</li>
                        <li>Garantia de alta disponibilidade e performance dos ambientes de TI</li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {[
                        "Windows",
                        "Linux",
                        "NetBackup",
                        "Control-M",
                        "CA SDM",
                        "SolarWinds",
                        "Zabbix",
                        "OpMon",
                        "UC4",
                      ].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-accent/30 text-accent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg z-10 floating-animation order-1 md:order-2">
                C
              </div>

              <div className="md:w-1/2 md:pl-8 order-3"></div>
            </div>

            {/* Education */}
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:pr-8 order-2 md:order-1"></div>

              <div className="w-16 h-16 bg-muted-foreground rounded-full flex items-center justify-center text-background font-bold text-lg z-10 order-1 md:order-2">
                🎓
              </div>

              <div className="md:w-1/2 md:pl-8 order-3">
                <Card className="p-6 card-3d bg-card border-border">
                  <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                    Análise e Desenvolvimento de Sistemas
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Graduação com foco em desenvolvimento de software, arquitetura de sistemas e metodologias de
                    desenvolvimento ágil.
                  </p>
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                    Graduação Completa
                  </Badge>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
