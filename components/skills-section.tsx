import {
  SiPython,
  SiSpring,
  SiDocker,
  SiLinux,
  SiGitlab,
  SiOracle,
  SiMysql,
  SiMongodb,
  SiApachekafka,
} from "react-icons/si"
import { FaServer, FaCogs, FaRunning, FaJava, FaEye } from "react-icons/fa"
import { MdApi } from "react-icons/md"
import { DiCode } from "react-icons/di"

const skills = [
  {
    name: "Python",
    category: "Backend",
    icon: SiPython,
    color: "text-[#3776ab]",
  },
  {
    name: "Java",
    category: "Backend",
    icon: FaJava,
    color: "text-[#f89820]",
  },
  {
    name: "Groovy",
    category: "Backend",
    icon: DiCode,
    color: "text-[#4298b8]",
  },
  {
    name: "Spring Boot",
    category: "Backend",
    icon: SiSpring,
    color: "text-[#6db33f]",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: SiDocker,
    color: "text-[#2496ed]",
  },
  {
    name: "Linux",
    category: "DevOps",
    icon: SiLinux,
    color: "text-[#fcc624]",
  },
  {
    name: "GitLab",
    category: "DevOps",
    icon: SiGitlab,
    color: "text-[#fc6d26]",
  },
  {
    name: "Zabbix",
    category: "DevOps",
    icon: FaEye,
    color: "text-[#d40000]",
  },
  {
    name: "Oracle DB",
    category: "Database",
    icon: SiOracle,
    color: "text-[#f80000]",
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
    color: "text-[#4479a1]",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: SiMongodb,
    color: "text-[#47a248]",
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: MdApi,
    color: "text-[#9333ea]",
  },
  {
    name: "Microserviços",
    category: "Architecture",
    icon: FaServer,
    color: "text-[#6366f1]",
  },
  {
    name: "Kafka",
    category: "Messaging",
    icon: SiApachekafka,
    color: "text-[#231f20]",
  },
  {
    name: "Scrum",
    category: "Methodology",
    icon: FaRunning,
    color: "text-[#06b6d4]",
  },
  {
    name: "DevOps",
    category: "Methodology",
    icon: FaCogs,
    color: "text-[#10b981]",
  },
]

export function SkillsSection() {
  return (
    <section className="py-16 px-4 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-3 gradient-text">Skills Técnicas</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções robustas e escaláveis
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div key={skill.name} className="group relative" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="skill-icon-3d p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center floating-animation">
                  <div
                    className={`mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300 flex justify-center`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xs font-medium text-card-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-[10px] text-muted-foreground mt-1">{skill.category}</p>
                </div>

                {/* Efeito de brilho 3D */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
