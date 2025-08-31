"use client"

import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section id="sobre" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-secondary p-1 profile-image-3d floating-animation pulse-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                <img
                  src="/perfil4.png"
                  alt="Jonatas Silva de Oliveira - DevOps Pleno"
                  className="w-full h-full object-cover rounded-full scale-110"
                />
              </div>
            </div>
            {/* 3D Floating Elements */}
            <div
              className="absolute -top-3 -right-3 w-12 h-12 bg-primary/20 rounded-lg rotate-12 floating-animation backdrop-blur-sm border border-primary/30"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary/20 rounded-full floating-animation backdrop-blur-sm border border-secondary/30"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left space-y-4">
          <div className="space-y-3">
            <p className="text-base text-card-foreground max-w-2xl leading-relaxed">
              Graduado em Análise e Desenvolvimento de Sistemas com experiência em desenvolvimento e sustentação de
              aplicações utilizando <span className="text-primary font-medium">Python</span> e{" "}
              <span className="text-primary font-medium">Java</span>. Atualmente DevOps Pleno na{" "}
              <span className="text-secondary font-medium">Vivo (Telefônica Brasil)</span>, com foco em automação de
              processos, microserviços e integração de sistemas em ambientes corporativos.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mt-6 max-w-sm mx-auto lg:mx-0">
            <Card className="p-3 text-center card-3d bg-card border-border">
              <div className="text-xl font-semibold text-primary">4+</div>
              <div className="text-xs text-muted-foreground">Anos de Experiência</div>
            </Card>
            <Card className="p-3 text-center card-3d bg-card border-border">
              <div className="text-xl font-semibold text-accent">10+</div>
              <div className="text-xs text-muted-foreground">Certificações</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
