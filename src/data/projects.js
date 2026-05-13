import siapenweb from '../assets/images/projects/siapenweb.png'
import eclesia from '../assets/images/projects/eclesia.png'
import sinpp from '../assets/images/projects/sinpp.png'
import parlatorio from '../assets/images/projects/parlatorio.png'

const projects = [
  {
    id: "siapenweb",
    title: "SIAPENWEB/AP",
    slug: "siapenweb",
    category: "Sistema Administrativo",

    description:
      "Sistema desenvolvido para centralizar processos administrativos, operacionais e controle institucional.",

    problem:
      "Processos administrativos descentralizados e dependentes de controles manuais.",

    solution:
      "Plataforma centralizada para gestão de processos administrativos e operacionais.",

    result:
      "Maior organização e eficiência no fluxo institucional.",

    role: "Full Stack Developer",

    technologies: ["Laravel", "PHP", "JavaScript", "MySQL"],

    highlights: [
      "Centralização de dados",
      "Automação de processos",
      "Interface administrativa otimizada"
    ],

    image: siapenweb,
  },

  {
    id: "eclesia",
    title: "Eclesia",
    slug: "eclesia",
    category: "Sistema de Gestão",

    description:
      "Plataforma web voltada à gestão administrativa e organização operacional.",

    problem:
      "Falta de controle e automação em processos internos.",

    solution:
      "Sistema web para organização e automação de processos administrativos.",

    result:
      "Melhoria significativa na eficiência operacional.",

    role: "Full Stack Developer",

    technologies: ["Laravel", "TailwindCSS", "APIs REST"],

    highlights: [
      "Automação de processos internos",
      "Interface moderna",
      "Sistema escalável"
    ],

    image: eclesia,
  },

  {
    id: "sinpp",
    title: "SINPP",
    slug: "sinpp",
    category: "Sistema Integrado",

    description:
      "Sistema integrado para entidades de classe com foco em automação e centralização de dados.",

    problem:
      "Falta de integração entre processos administrativos e financeiros.",

    solution:
      "Sistema integrado para centralizar dados e automatizar processos.",

    result:
      "Maior controle e eficiência na gestão institucional.",

    role: "Full Stack Developer",

    technologies: ["PHP", "JavaScript", "MySQL"],

    highlights: [
      "Gestão integrada",
      "Automação administrativa",
      "Controle financeiro"
    ],

    image: sinpp,
  },

  {
    id: "parlatorio",
    title: "PARLATORIUM",
    slug: "parlatorio",
    category: "Sistema de Atendimento",

    description:
      "Sistema destinado ao agendamento para atendimento jurídico ao custodiado do sistema prisional do Amapá.",

    problem:
      "Processo manual de agendamento de atendimentos jurídicos.",

    solution:
      "Sistema digital para controle e agendamento de atendimentos.",

    result:
      "Agilidade e organização no fluxo de atendimentos.",

    role: "Full Stack Developer",

    technologies: ["PHP", "JavaScript", "MySQL"],

    highlights: [
      "Agendamento digital",
      "Controle de atendimentos",
      "Fluxo otimizado"
    ],

    image: parlatorio,
  },
]

export default projects