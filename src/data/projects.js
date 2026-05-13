import siapenweb from "../assets/images/projects/siapenweb.png";
import eclesia from "../assets/images/projects/eclesia.png";
import sinpp from "../assets/images/projects/sinpp.png";
import parlatorio from "../assets/images/projects/parlatorio.png";

const projects = [
  {
    id: "siapenweb",
    title: "SIAPENWEB/AP",
    slug: "siapenweb",
    category: "Sistema Administrativo / Gestão Pública",

    description:
      "Plataforma web crítica de gestão prisional desenvolvida para modernizar, unificar e dar rastreabilidade total às operações do sistema penitenciário do Amapá.",

    context:
      "O SIAPEN original era um sistema legado baseado em Microsoft Access, utilizado para controle de informações sensíveis de custodiados. Apesar de atender parcialmente às demandas iniciais, sua arquitetura era altamente limitada, com frontend desktop, ausência de padronização e forte dependência de um único responsável técnico. Após o bloqueio do banco de dados pelo antigo desenvolvedor, o sistema tornou-se inacessível para evolução, colocando em risco a continuidade operacional da gestão prisional.",

    challenges: [
      "Engenharia reversa de um banco de dados Microsoft Access sem documentação técnica e com regras de negócio embutidas no próprio frontend",

      "Migração de dados legados altamente despadronizados para MySQL, exigindo análise manual de relacionamentos implícitos e inconsistências estruturais",

      "Recuperação de um sistema bloqueado por senha após saída do desenvolvedor original, sem acesso ao código-fonte ou estrutura completa do sistema",

      "Reconstrução completa da lógica de negócio do sistema prisional a partir de um sistema desktop obsoleto e não escalável",

      "Garantir continuidade operacional durante a transição do sistema legado para uma nova plataforma web sem interrupção dos serviços críticos",

      "Atender novas exigências institucionais do Conselho Nacional de Justiça (CNJ) que não eram suportadas pela arquitetura original",

      "Projetar uma arquitetura web escalável e segura para um sistema de alta criticidade em ambiente governamental",
    ],

    problem:
      "O sistema legado apresentava falhas estruturais críticas: base de dados desnormalizada, relacionamentos implícitos em código Access, ausência de documentação técnica e impossibilidade de manutenção ou expansão. Além disso, novas exigências institucionais do Conselho Nacional de Justiça (CNJ) demandavam maior controle, rastreabilidade e transparência, algo que o sistema existente não conseguia atender.",

    solution:
      "Foi realizada uma engenharia reversa completa da base Access, com reconstrução do modelo de dados e migração para MySQL. Em seguida, o sistema foi totalmente reescrito como SIAPENWEB utilizando Laravel, PHP e JavaScript. A nova arquitetura foi desenhada para ser escalável, modular e orientada a processos institucionais, com autenticação robusta, controle de permissões por perfil e módulos administrativos independentes. Além da replicação do legado, foram implementados novos fluxos operacionais críticos para gestão prisional moderna.",

    result:
      "O SIAPENWEB passou a operar como sistema central da gestão prisional do estado, suportando operações contínuas por aproximadamente 4 anos. Atualmente, gerencia mais de 35.000 registros de custodiados e atende mais de 1.500 usuários ativos entre policiais penais e servidores administrativos, com alta disponibilidade e estabilidade operacional.",

    impact:
      "A solução transformou um sistema inacessível e tecnicamente obsoleto em uma plataforma estratégica de gestão pública. O resultado foi a recuperação total da capacidade operacional digital do sistema prisional, garantindo rastreabilidade, controle institucional, auditoria de informações e suporte direto às operações diárias de segurança pública do estado.",

    achievements: [
      "Recuperação e reestruturação completa de sistema legado bloqueado",
      "Migração de dados críticos de Access para MySQL sem perda operacional",
      "Implantação de sistema web institucional em produção contínua (~4 anos)",
      "Gestão de +35.000 registros de custodiados",
      "Suporte a +1.500 usuários ativos em ambiente governamental",
      "Atendimento a exigências de controle e rastreabilidade do CNJ",
      "Criação de novos módulos operacionais inexistentes no sistema original",
    ],

    role: "Full Stack Developer / System Architect",

    technologies: [
      "Laravel",
      "PHP",
      "JavaScript",
      "MySQL",
      "Arquitetura MVC",
      "Engenharia de Software",
      "Migração de Dados Legados",
    ],

    highlights: [
      "Engenharia reversa de sistema legado crítico",
      "Arquitetura web escalável para governo",
      "Digitalização completa de processos prisionais",
      "Alta criticidade operacional em ambiente real",
      "Evolução contínua por mais de 4 anos em produção",
    ],

    image: siapenweb,
  },

{
  id: "eclesia",
  title: "Eclesia",
  slug: "eclesia",
  category: "Sistema de Gestão",

  description:
    "Plataforma web voltada à gestão administrativa e organização operacional da Convenção das Assembleias de Deus no Amapá e suas igrejas conveniadas.",

  context:
    "A Convenção das Assembleias de Deus no Amapá não possuía um sistema unificado para gestão administrativa, ministerial e operacional das igrejas conveniadas, dificultando a visualização em tempo real da realidade de cada igreja, seus líderes, membros e atividades.",

  problem:
    "Ausência de um sistema centralizado que permitisse o controle em tempo real das igrejas conveniadas, seus pastores, membros, ministros e atividades administrativas e financeiras, resultando em processos descentralizados e baixa visibilidade institucional.",

  challenges:
    "Desenvolver um sistema multi-institucional capaz de integrar a gestão da convenção geral com dezenas de igrejas locais, garantindo controle de membros, ministros eclesiásticos, eventos e cultos em tempo real, além de implementar check-in de presença via QR Code, relatórios automáticos de frequência, dashboards analíticos e controle financeiro de dízimos e ofertas com integração via Pix/QR Code, tudo dentro de uma arquitetura escalável e centralizada.",

  solution:
    "Desenvolvimento de uma plataforma web integrada para gestão da convenção e das igrejas conveniadas, incluindo controle administrativo central, gestão de igrejas, membros e ministros, registro de eventos e cultos com controle de presença via QR Code, relatórios em tempo real e módulo financeiro para dízimos e ofertas com integração digital.",

  result:
    "Centralização completa da gestão eclesiástica, permitindo acesso em tempo real às informações administrativas, ministeriais e financeiras de todas as igrejas conveniadas, com maior precisão e agilidade na tomada de decisões.",

  impact:
    "Mais de 156 igrejas cadastradas, 573 pastores e ministros registrados e 63 eventos/reuniões/cultos registrados. O sistema reduziu drasticamente o tempo de obtenção de informações e aumentou a rastreabilidade e transparência dos processos administrativos e financeiros.",

  role: "Full Stack Developer",

  technologies: ["Laravel", "TailwindCSS", "APIs REST"],

  highlights: [
    "Gestão centralizada da convenção e igrejas conveniadas",
    "Check-in de presença em tempo real via QR Code",
    "Dashboards administrativos e ministeriais",
    "Controle financeiro de dízimos e ofertas",
    "Relatórios automáticos de frequência e participação"
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

  context:
    "O Sindicato dos Policiais Penais do Amapá necessitava de um sistema web capaz de apoiar a gestão administrativa e operacional da entidade, com foco em organização, transparência e acesso facilitado às informações.",

  problem:
    "A ausência de uma ferramenta web gerava insegurança nas informações, falta de transparência na gestão dos recursos e ações do sindicato, além da impossibilidade de os policiais penais realizarem seu cadastro de forma prática e independente. Também havia dificuldade de acesso às informações em diferentes dispositivos como computadores, tablets e celulares.",

  challenges:
    "Desenvolver uma plataforma web responsiva capaz de atender simultaneamente às necessidades de acesso público e gestão administrativa interna, garantindo usabilidade em múltiplos dispositivos, organização dos dados institucionais, controle de informações financeiras e implementação de um fluxo de autoatendimento para sindicalização com integração de pagamentos via PIX.",

  solution:
    "Foi desenvolvido um sistema web utilizando PHP, Laravel, JavaScript e MySQL, composto por um ambiente público e um ambiente administrativo. No ambiente público, foram disponibilizadas funcionalidades como prestação de contas, aniversariantes do dia, emissão de declaração de membro, solicitação de sindicalização e pagamento de mensalidade via PIX. No ambiente administrativo, foram implementados módulos de gestão de usuários, sindicalizados, dependentes, controle financeiro e emissão de certidões.",

  result:
    "O sistema passou a centralizar as operações do sindicato, permitindo melhor organização das informações, automação de processos e maior controle administrativo e financeiro.",

  impact:
    "Tanto sindicalizados quanto não sindicalizados passaram a ter acesso facilitado às informações institucionais e à prestação de contas em tempo real, aumentando a transparência e a confiança na gestão.",

  role: "Full Stack Developer",

  technologies: ["PHP", "Laravel", "JavaScript", "MySQL"],

  highlights: [
    "Gestão integrada",
    "Transparência institucional",
    "Autoatendimento digital",
  ],

  image: sinpp,
},

  {
    id: "parlatorio",
    title: "PARLATORIUM",
    slug: "parlatorio",
    category: "Sistema de Atendimento Jurídico e Controle Operacional",

    description:
      "Sistema completo de gestão e agendamento de atendimentos jurídicos a custodiados do sistema prisional do Amapá, com controle de agenda, capacidade por unidade, boxes de atendimento e rastreabilidade total dos fluxos operacionais entre advogados, custodiados e agentes penitenciários.",

    context:
      "O atendimento jurídico a pessoas privadas de liberdade é um direito garantido por lei, porém no sistema prisional do Amapá esse processo era realizado de forma não estruturada, sem qualquer ferramenta digital de controle de agenda, capacidade ou registro operacional. A ausência de organização gerava conflitos institucionais entre OAB-AP e IAPEN-AP, além de comprometer diretamente a segurança operacional dentro das unidades prisionais. O problema chegou à Vara de Execução Penal, que determinou a criação de uma solução em prazo judicial de 90 dias.",

    problem:
      "O processo de agendamento era totalmente manual e espontâneo, sem controle de horários, capacidade por unidade ou limitação de atendimentos. Advogados chegavam às unidades com listas extensas de custodiados sem prévia organização, gerando sobrecarga operacional, movimentação descontrolada de presos e riscos elevados à segurança interna. Isso resultava em conflitos institucionais, insatisfação de agentes penitenciários e risco real de motins e falhas de segurança.",

    challenges:
      "O principal desafio foi transformar um processo altamente sensível e crítico, realizado de forma manual e descentralizada, em um sistema digital sem comprometer a operação diária das unidades prisionais. Era necessário lidar com múltiplas restrições simultâneas: segurança física, limitação de movimentação de custodiados, conflitos institucionais entre órgãos distintos (OAB-AP e IAPEN-AP) e a necessidade de aderência a uma determinação judicial com prazo rígido de 90 dias.\n\nOutro desafio relevante foi modelar regras complexas de negócio, como limites de atendimento por advogado, controle de frequência por custodiado em diferentes períodos de tempo e gestão de capacidade por unidade e box de atendimento, garantindo que todas as regras fossem aplicadas em tempo real sem gerar inconsistências operacionais.",

    solution:
      "Desenvolvimento do sistema PARLATORIUM, uma plataforma de gestão centralizada capaz de configurar e controlar toda a operação de atendimentos jurídicos dentro das unidades prisionais. O sistema permite parametrização por unidade prisional, definição de capacidade diária de atendimentos, configuração de boxes de atendimento (ativos e inativos), regras de dias úteis e finais de semana, horários de início e fim, tempo máximo por atendimento, limites por advogado e por custodiado, além de controle de frequência por período (dia, semana, quinzena, mês e ano). Implementação de fluxo completo de status do atendimento e geração de relatórios gerenciais para órgãos administrativos e jurídicos.",

    result:
      "O sistema estruturou completamente o fluxo de atendimentos jurídicos dentro do sistema prisional, eliminando a aleatoriedade do processo e permitindo previsibilidade operacional em tempo real. Policiais penais passaram a ter controle antecipado das movimentações de custodiados, advogados passaram a atuar com agenda organizada e previsível, e a administração penitenciária passou a contar com rastreabilidade completa de todos os atendimentos realizados.",

    impact:
      "Antes do sistema, o atendimento jurídico nas unidades prisionais era totalmente desestruturado, sem previsibilidade de agenda, controle de capacidade ou rastreabilidade dos atendimentos. Isso resultava em movimentações simultâneas de custodiados, alto risco operacional e conflitos constantes entre advogados, agentes penitenciários e administração prisional.\n\nApós a implantação do PARLATORIUM, todo o fluxo passou a ser digital, organizado e controlado em tempo real. As unidades passaram a operar com agenda estruturada por capacidade diária, boxes de atendimento e regras de tempo por atendimento, eliminando a aleatoriedade do processo.\n\n📊 Resultados mensuráveis:\n- 175 advogados cadastrados ativos no sistema\n- 297 dias de operação contínua no período analisado\n- 1.797 atendimentos jurídicos agendados e controlados\n- Média de 6,05 atendimentos por dia com fluxo estabilizado\n\nO sistema garantiu previsibilidade operacional, redução de riscos de segurança interna e eliminação do fluxo espontâneo de entrada e saída de custodiados durante atendimentos jurídicos.",

    role: "Full Stack Developer",

    technologies: ["PHP", "JavaScript", "MySQL"],

    highlights: [
      "Gestão completa de agenda jurídica prisional",
      "Controle de capacidade por unidade e box de atendimento",
      "Fluxo de status em tempo real dos atendimentos",
      "Regras avançadas de limitação por advogado e custodiado",
      "Relatórios gerenciais para OAB e administração prisional",
      "Redução de riscos operacionais dentro das unidades",
      "Conformidade com determinação judicial (90 dias)",
    ],

    image: parlatorio,
  },
];

export default projects;
