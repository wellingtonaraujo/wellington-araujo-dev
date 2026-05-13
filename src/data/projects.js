import siapenweb from "../assets/images/projects/siapenweb.png";
import eclesia from "../assets/images/projects/eclesia.png";
import sinpp from "../assets/images/projects/sinpp.png";
import parlatorio from "../assets/images/projects/parlatorio.png";

const projects = [

/* ===================== SIAPENWEB ===================== */
{
  id: "siapenweb",
  slug: "siapenweb",
  image: siapenweb,

  title: {
    pt: "SIAPENWEB/AP",
    en: "SIAPENWEB/AP"
  },

  category: {
    pt: "Sistema Administrativo / Gestão Pública",
    en: "Administrative System / Public Management"
  },

  description: {
    pt: "Plataforma web crítica de gestão prisional desenvolvida para modernizar, unificar e dar rastreabilidade total às operações do sistema penitenciário do Amapá.",
    en: "Critical prison management web platform developed to modernize, unify and provide full traceability for the operations of the Amapá penitentiary system."
  },

  context: {
    pt: "O SIAPEN original era um sistema legado baseado em Microsoft Access, utilizado para controle de informações sensíveis de custodiados. Apesar de atender parcialmente às demandas iniciais, sua arquitetura era altamente limitada, com frontend desktop, ausência de padronização e forte dependência de um único responsável técnico. Após o bloqueio do banco de dados pelo antigo desenvolvedor, o sistema tornou-se inacessível para evolução, colocando em risco a continuidade operacional da gestão prisional.",
    en: "The original SIAPEN was a legacy system based on Microsoft Access, used to manage sensitive inmate data. Although it partially met initial requirements, its architecture was highly limited, with a desktop frontend, lack of standardization, and strong dependency on a single technical maintainer. After the database was locked by the former developer, the system became inaccessible for further evolution, putting operational continuity at risk."
  },

  challenges: {
    pt: [
      "Engenharia reversa de um banco de dados Microsoft Access sem documentação técnica e com regras de negócio embutidas no próprio frontend",
      "Migração de dados legados altamente despadronizados para MySQL, exigindo análise manual de relacionamentos implícitos e inconsistências estruturais",
      "Recuperação de um sistema bloqueado por senha após saída do desenvolvedor original, sem acesso ao código-fonte ou estrutura completa do sistema",
      "Reconstrução completa da lógica de negócio do sistema prisional a partir de um sistema desktop obsoleto e não escalável",
      "Garantir continuidade operacional durante a transição do sistema legado para uma nova plataforma web sem interrupção dos serviços críticos",
      "Atender novas exigências institucionais do Conselho Nacional de Justiça (CNJ) que não eram suportadas pela arquitetura original",
      "Projetar uma arquitetura web escalável e segura para um sistema de alta criticidade em ambiente governamental"
    ],
    en: [
      "Reverse engineering of a Microsoft Access database without technical documentation and with business rules embedded in the frontend",
      "Migration of highly unstructured legacy data to MySQL, requiring manual analysis of implicit relationships and structural inconsistencies",
      "Recovery of a password-locked system after the original developer left, without access to source code or full system structure",
      "Complete reconstruction of the prison system business logic from an obsolete and non-scalable desktop system",
      "Ensuring operational continuity during the transition from legacy system to a new web platform without disrupting critical services",
      "Meeting new institutional requirements from the National Justice Council (CNJ) not supported by the original architecture",
      "Designing a scalable and secure web architecture for a high-criticality government system"
    ]
  },

  problem: {
    pt: "O sistema legado apresentava falhas estruturais críticas: base de dados desnormalizada, relacionamentos implícitos em código Access, ausência de documentação técnica e impossibilidade de manutenção ou expansão. Além disso, novas exigências institucionais do Conselho Nacional de Justiça (CNJ) demandavam maior controle, rastreabilidade e transparência, algo que o sistema existente não conseguia atender.",
    en: "The legacy system had critical structural failures: denormalized database, implicit relationships in Access code, lack of technical documentation, and inability to be maintained or expanded. Additionally, new institutional requirements from the National Justice Council (CNJ) demanded greater control, traceability, and transparency, which the existing system could not provide."
  },

  solution: {
    pt: "Foi realizada uma engenharia reversa completa da base Access, com reconstrução do modelo de dados e migração para MySQL. Em seguida, o sistema foi totalmente reescrito como SIAPENWEB utilizando Laravel, PHP e JavaScript. A nova arquitetura foi desenhada para ser escalável, modular e orientada a processos institucionais, com autenticação robusta, controle de permissões por perfil e módulos administrativos independentes. Além da replicação do legado, foram implementados novos fluxos operacionais críticos para gestão prisional moderna.",
    en: "A complete reverse engineering of the Access database was performed, rebuilding the data model and migrating it to MySQL. The system was then fully rewritten as SIAPENWEB using Laravel, PHP, and JavaScript. The new architecture was designed to be scalable, modular, and process-oriented, with robust authentication, role-based access control, and independent administrative modules. In addition to replicating legacy functionality, new critical operational workflows for modern prison management were implemented."
  },

  result: {
    pt: "O SIAPENWEB passou a operar como sistema central da gestão prisional do estado, suportando operações contínuas por aproximadamente 4 anos. Atualmente, gerencia mais de 35.000 registros de custodiados e atende mais de 1.500 usuários ativos entre policiais penais e servidores administrativos, com alta disponibilidade e estabilidade operacional.",
    en: "SIAPENWEB became the central system for the state prison management, supporting continuous operations for approximately 4 years. It currently manages over 35,000 inmate records and serves more than 1,500 active users including correctional officers and administrative staff, with high availability and operational stability."
  },

  impact: {
    pt: "A solução transformou um sistema inacessível e tecnicamente obsoleto em uma plataforma estratégica de gestão pública. O resultado foi a recuperação total da capacidade operacional digital do sistema prisional, garantindo rastreabilidade, controle institucional, auditoria de informações e suporte direto às operações diárias de segurança pública do estado.",
    en: "The solution transformed an inaccessible and technically obsolete system into a strategic public management platform. The result was the full recovery of digital operational capacity of the prison system, ensuring traceability, institutional control, auditing, and direct support for daily public security operations."
  },

  achievements: {
    pt: [
      "Recuperação e reestruturação completa de sistema legado bloqueado",
      "Migração de dados críticos de Access para MySQL sem perda operacional",
      "Implantação de sistema web institucional em produção contínua (~4 anos)",
      "Gestão de +35.000 registros de custodiados",
      "Suporte a +1.500 usuários ativos em ambiente governamental",
      "Atendimento a exigências de controle e rastreabilidade do CNJ",
      "Criação de novos módulos operacionais inexistentes no sistema original"
    ],
    en: [
      "Full recovery and restructuring of a locked legacy system",
      "Migration of critical Access data to MySQL without operational loss",
      "Deployment of institutional web system in continuous production (~4 years)",
      "Management of +35,000 inmate records",
      "Support for +1,500 active users in a government environment",
      "Compliance with CNJ control and traceability requirements",
      "Creation of new operational modules not present in the original system"
    ]
  },

  role: {
    pt: "Full Stack Developer / System Architect",
    en: "Full Stack Developer / System Architect"
  },

  technologies: [
    "Laravel",
    "PHP",
    "JavaScript",
    "MySQL",
    "Arquitetura MVC",
    "Engenharia de Software",
    "Migração de Dados Legados"
  ],

  highlights: {
    pt: [
      "Engenharia reversa de sistema legado crítico",
      "Arquitetura web escalável para governo",
      "Digitalização completa de processos prisionais",
      "Alta criticidade operacional em ambiente real",
      "Evolução contínua por mais de 4 anos em produção"
    ],
    en: [
      "Reverse engineering of a critical legacy system",
      "Scalable government web architecture",
      "Full digitization of prison workflows",
      "High operational criticality in real environment",
      "Continuous evolution over 4+ years in production"
    ]
  }
},

/* ===================== ECLESIA ===================== */
{
  id: "eclesia",
  slug: "eclesia",
  image: eclesia,

  title: {
    pt: "Eclesia",
    en: "Eclesia"
  },

  category: {
    pt: "Sistema de Gestão Eclesiástica",
    en: "Church Management System"
  },

  description: {
    pt: "Plataforma web voltada à gestão administrativa e organização operacional da Convenção das Assembleias de Deus no Amapá.",
    en: "Web platform focused on administrative and operational management for the Assembly of God Convention in Amapá."
  },

  context: {
    pt: "A Convenção das Assembleias de Deus no Amapá enfrentava uma limitação crítica na sua gestão institucional: não existia um sistema unificado que integrasse a administração da convenção geral com a gestão individual das igrejas espalhadas pelo estado. As informações estavam fragmentadas entre igrejas locais e a administração central, dificultando uma visão consolidada da realidade organizacional, ministerial e financeira.",
    en: "The Assembly of God Convention in Amapá faced a critical limitation in its institutional management: there was no unified system integrating the central convention with individual churches across the state. Information was fragmented between local churches and the central administration, making it difficult to maintain a consolidated view of the organizational, ministerial, and financial structure."
  },

  problem: {
    pt: "A ausência de visibilidade em tempo real da realidade de cada igreja gerava falta de controle centralizado, dificuldade em identificar lideranças, gestão manual de membros e ministros, ausência de controle de eventos e baixa visibilidade sobre frequência e participação, além de processos financeiros pouco integrados.",
    en: "The lack of real-time visibility of each church created issues such as lack of centralized control, difficulty identifying leadership, manual management of members and ministers, no event control system, low visibility on attendance, and poorly integrated financial processes."
  },

  challenges: {
    pt: [
      "Integração de múltiplas igrejas em um único sistema",
      "Modelagem de estrutura multi-institucional",
      "Controle de presença via QR Code",
      "Unificação de dados ministeriais e administrativos"
    ],
    en: [
      "Integration of multiple churches into a single system",
      "Multi-institutional architecture modeling",
      "QR Code-based attendance system",
      "Unification of ministerial and administrative data"
    ]
  },

  solution: {
    pt: "Foi desenvolvido um sistema completo de gestão eclesiástica com arquitetura multi-institucional, permitindo gestão central da convenção, administração de igrejas locais, controle ministerial, gestão de membros, eventos em tempo real com QR Code e gestão financeira integrada.",
    en: "A complete ecclesiastical management system was developed with a multi-institutional architecture, enabling central convention management, local church administration, ministerial control, member management, real-time events with QR Code, and integrated financial management."
  },

  result: {
    pt: "O sistema centralizou completamente a gestão, permitindo visão unificada da convenção e das igrejas locais, automatizando processos administrativos e eliminando dependência de registros manuais.",
    en: "The system fully centralized management, enabling a unified view of the convention and local churches, automating administrative processes and eliminating reliance on manual records."
  },

  impact: {
    pt: "Visibilidade em tempo real da situação de cada igreja, maior controle administrativo e ministerial, organização de membros e ministros, transparência financeira e automação de presença em eventos.",
    en: "Real-time visibility of each church, improved administrative and ministerial control, structured member and minister organization, financial transparency, and automated event attendance."
  },

  role: {
    pt: "Full Stack Developer",
    en: "Full Stack Developer"
  },

  technologies: [
    "Laravel",
    "TailwindCSS",
    "APIs REST"
  ],

  highlights: {
    pt: [
      "Gestão centralizada da convenção",
      "Controle de presença via QR Code",
      "Dashboard administrativo em tempo real"
    ],
    en: [
      "Centralized convention management",
      "QR Code attendance control",
      "Real-time administrative dashboard"
    ]
  }
},

/* ===================== SINPP ===================== */
{
  id: "sinpp",
  title: { pt: "SINPP", en: "SINPP" },
  slug: "sinpp",
  category: {
    pt: "Sistema Integrado",
    en: "Integrated System",
  },

  description: {
    pt: "Sistema integrado para entidades de classe com foco em automação e centralização de dados.",
    en: "Integrated system for class entities focused on automation and data centralization.",
  },

  context: {
    pt: "O Sindicato dos Policiais Penais do Amapá necessitava de uma solução digital para modernizar sua gestão administrativa, ampliar a transparência e facilitar o acesso dos membros aos serviços e informações institucionais.",
    en: "The Penitentiary Police Union of Amapá needed a digital solution to modernize administrative management, increase transparency, and improve access to institutional services and information for members.",
  },

  problem: {
    pt: "A ausência de uma plataforma web estruturada gerava impactos diretos na gestão do sindicato, como falta de transparência na prestação de contas, insegurança nas informações, dificuldade de comunicação, inexistência de autoatendimento para sindicalização, processos manuais de cadastro e baixa acessibilidade em dispositivos móveis.",
    en: "The lack of a structured web platform directly impacted union management, causing lack of transparency in financial reporting, information inconsistency, communication issues, absence of self-service membership onboarding, manual registration processes, and poor mobile accessibility.",
  },

  challenges: {
    pt: "Desenvolver uma plataforma web responsiva capaz de atender simultaneamente às necessidades de acesso público e gestão administrativa interna, garantindo usabilidade em múltiplos dispositivos, organização dos dados institucionais, controle financeiro e implementação de autoatendimento com integração de pagamentos via PIX.",
    en: "Develop a responsive web platform capable of supporting both public access and internal administration, ensuring multi-device usability, structured institutional data management, financial control, and self-service onboarding with PIX payment integration.",
  },

  solution: {
    pt: "Foi desenvolvido um sistema web utilizando PHP, Laravel, JavaScript e MySQL, com dois ambientes: público e administrativo. O ambiente público permite consulta de prestação de contas, aniversariantes, emissão de declarações, sindicalização online e pagamentos via PIX. O ambiente administrativo gerencia usuários, sindicalizados, dependentes, finanças e emissão de certidões.",
    en: "A web system was developed using PHP, Laravel, JavaScript, and MySQL with two environments: public and administrative. The public area provides financial transparency, member services, online membership requests, and PIX payments. The administrative panel manages users, members, dependents, financial control, and document issuance.",
  },

  result: {
    pt: "O sistema centralizou as operações do sindicato, melhorando a organização, automação de processos e controle administrativo e financeiro.",
    en: "The system centralized union operations, improving organization, process automation, and administrative and financial control.",
  },

  impact: {
    pt: "A implementação trouxe maior transparência institucional, redução de processos manuais, melhor comunicação e acesso em tempo real às informações, aumentando a confiança dos sindicalizados.",
    en: "The implementation increased institutional transparency, reduced manual processes, improved communication, and enabled real-time access to information, strengthening member trust.",
  },

  role: {
    pt: "Full Stack Developer",
    en: "Full Stack Developer",
  },

  technologies: ["PHP", "Laravel", "JavaScript", "MySQL"],

  highlights: {
    pt: [
      "Gestão integrada",
      "Transparência institucional",
      "Autoatendimento digital",
    ],
    en: [
      "Integrated management",
      "Institutional transparency",
      "Self-service system",
    ],
  },

  image: sinpp,
},

/* ===================== PARLATORIO ===================== */
{
  id: "parlatorio",
  slug: "parlatorio",
  image: parlatorio,

  title: {
    pt: "PARLATORIUM",
    en: "PARLATORIUM"
  },

  category: {
    pt: "Sistema de Atendimento Jurídico e Controle Operacional",
    en: "Legal Service Management System for Prison Units"
  },

  description: {
    pt: "Sistema completo de gestão e controle de atendimentos jurídicos em unidades prisionais, com foco em organização, segurança operacional e rastreabilidade total dos fluxos de atendimento entre advogados, custodiados e agentes penitenciários.",
    en: "Full legal service management system for prison facilities, focused on operational control, safety, and full traceability of interactions between lawyers, inmates, and prison officers."
  },

  context: {
    pt: "O sistema PARLATORIUM foi desenvolvido para o Instituto de Administração Penitenciária do Amapá (IAPEN-AP), em um cenário onde o atendimento jurídico a custodiados acontecia de forma não estruturada dentro das unidades prisionais, sem qualquer sistema informatizado de controle de agenda ou capacidade.",
    en: "PARLATORIUM was developed for the Prison Administration Institute of Amapá (IAPEN-AP) in a scenario where legal assistance for inmates was unstructured and manually managed, with no digital system for scheduling or capacity control."
  },

  problem: {
    pt: "O processo de atendimento jurídico era totalmente manual e desorganizado: advogados compareciam sem agendamento, listas de custodiados eram apresentadas de forma caótica, não havia controle de capacidade por unidade ou box, e a movimentação simultânea de presos gerava riscos operacionais graves.",
    en: "The legal service process was fully manual and disorganized: lawyers arrived without scheduling, inmate lists were chaotic, there was no capacity control per unit or booth, and simultaneous inmate movement created serious operational risks."
  },

  challenges: {
    pt: "O principal desafio foi transformar um processo crítico, sensível e operacionalmente caótico em um sistema digital seguro, respeitando restrições de segurança, limites de movimentação de custodiados, regras institucionais entre OAB e IAPEN e uma determinação judicial com prazo de 90 dias.",
    en: "The main challenge was transforming a critical, sensitive, and operationally chaotic process into a secure digital system while respecting security constraints, inmate movement restrictions, institutional rules between OAB and IAPEN, and a 90-day legal deadline."
  },

  solution: {
    pt: "Foi desenvolvido o sistema PARLATORIUM, com configuração completa de unidades prisionais, controle de capacidade diária, gestão de boxes de atendimento, regras de agenda, limites por advogado e por custodiado, além de um fluxo completo de status do atendimento e relatórios gerenciais.",
    en: "The PARLATORIUM system was developed with full prison unit configuration, daily capacity control, service booth management, scheduling rules, lawyer/inmate limits, and a complete attendance status workflow with management reporting."
  },

  result: {
    pt: "O sistema estruturou completamente o fluxo de atendimentos jurídicos, garantindo previsibilidade operacional, controle em tempo real das movimentações e organização total da agenda de atendimentos nas unidades prisionais.",
    en: "The system fully structured the legal service workflow, ensuring operational predictability, real-time movement control, and complete scheduling organization within prison units."
  },

  impact: {
    pt: "175 advogados cadastrados, 1.797 atendimentos registrados, 297 dias de operação contínua, média de 6,05 atendimentos por dia. O sistema eliminou o fluxo desorganizado de movimentação de custodiados e reduziu riscos operacionais críticos dentro das unidades prisionais.",
    en: "175 registered lawyers, 1,797 recorded appointments, 297 days of continuous operation, averaging 6.05 daily appointments. The system eliminated unstructured inmate movement and reduced critical operational risks within prison facilities."
  },

  role: {
    pt: "Full Stack Developer",
    en: "Full Stack Developer"
  },

  technologies: [
    "PHP",
    "JavaScript",
    "MySQL"
  ],

  highlights: {
    pt: [
      "Gestão completa de agenda jurídica prisional",
      "Controle de capacidade por unidade e box",
      "Fluxo de status em tempo real",
      "Relatórios gerenciais para OAB e administração",
      "Redução de riscos operacionais críticos"
    ],
    en: [
      "Complete prison legal scheduling system",
      "Unit and booth capacity control",
      "Real-time status workflow",
      "Management reports for legal authorities",
      "Reduction of critical operational risks"
    ]
  }
},

];

export default projects;