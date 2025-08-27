"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react"

export function ContactSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/curriculo-jonatas-silva-de-oliveira.pdf"
    link.download = "Curriculo-Jonatas-Silva-Oliveira.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contato" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Informações de Contato
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Entre em contato comigo para discutir oportunidades ou colaborações
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">jonatas1200@icloud.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone</p>
                    <p className="text-muted-foreground">(11) 96648-9321</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Localização</p>
                    <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary">Redes Sociais</h4>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 active:scale-95 transition-all duration-200"
                  onClick={() => window.open("https://github.com/jdeveloperanalyst", "_blank")}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent hover:scale-105 active:scale-95 transition-all duration-200"
                  onClick={() => window.open("https://www.linkedin.com/in/jonatas-silva-dev-6a6f6e", "_blank")}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <Card className="p-8 card-3d bg-card border-border">
            <h3 className="text-xl font-semibold mb-6 text-primary">Currículo</h3>
            <p className="text-card-foreground mb-6">
              Baixe meu currículo completo em PDF para mais detalhes sobre minha experiência profissional e formação
              acadêmica.
            </p>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 active:scale-95 transition-all duration-200"
              onClick={handleDownloadCV}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Currículo PDF
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
