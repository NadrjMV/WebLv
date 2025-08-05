// js/projects-data.js

export const projectsData = {
    
    jordancell: {
        title: "Jordan Cell | Assistência Técnica",
        category: "E-commerce",
        subtitle: "Landing Page de Apresentação",
        liveUrl: "https://nadrjmv.github.io/jordancell",
        heroImage: "https://i.postimg.cc/3JcGGmN0/Whats-App-Image-2025-07-08-at-11-37-19.jpg",
        galleryImages: [
            "https://i.postimg.cc/LXbp1QSv/sdg.jpg",
            "https://i.postimg.cc/QNKtq1zV/dfgs.jpg",
        ],
        description: "Jordan Cell é uma landing page projetada para apresentar os serviços da minha assistência técnica de celulares. O objetivo foi criar uma apresentação digital atraente e direta, que comunicasse profissionalismo e facilitasse o contato do cliente, com botões de ação claros para o WhatsApp.",
        myRole: [
            "Criação do conceito visual e da identidade da marca, incluindo a logo.",
            "Desenvolvimento Front-end completo, utilizando HTML5 e CSS3 para criar uma interface responsiva e moderna.",
            "Implementação de interatividade com JavaScript para animações e galeria de imagens.",
            "Otimização de SEO On-Page para melhorar a visibilidade em mecanismos de busca.",
            "Publicação e configuração do site em ambiente de produção."
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "SEO", "Design Responsivo"] ,
        keyFeatures: [
            "Design limpo e focado na conversão.",
            "Galeria de imagens para exibir minha foto e produtos à venda.",
            "Totalmente responsivo, com perfeita visualização em dispositivos móveis.",
            "Botões de 'Call to Action' (CTA) para contato rápido via WhatsApp."
        ]
    },

    bgfunilaria: {
        title: "BG Funilaria | Pintura Automotiva",
        category: "Serviços Locais",
        subtitle: "Site Institucional",
        liveUrl: "https://nadrjmv.github.io/bgfunilaria",
        heroImage: "https://i.postimg.cc/3xrK3cYg/Whats-App-Image-2025-07-08-at-11-41-29.jpg",
        galleryImages: [
             "https://i.postimg.cc/L8cvnzGf/asfd.jpg",
             "https://i.postimg.cc/hjp9bxZ2/sdfv.jpg",
             // Adicione mais URLs de imagens do projeto aqui
        ],
        description: "O projeto BG Funilaria é um site institucional clássico, desenvolvido para estabelecer a presença online da oficina. O site serve como um portfólio digital, apresentando a qualidade dos serviços, a localização e facilitando o agendamento de orçamentos.",
        myRole: [
            "Desenvolvimento integral do site, desde o wireframe até o código final.",
            "Criação de layout com foco na apresentação visual dos serviços automotivos.",
            "Implementação de mapa interativo para facilitar a localização da oficina.",
            "Otimização de performance para um carregamento rápido."
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "SEO", "Design Responsivo"],
        keyFeatures: [
            "Seção 'Antes e Depois' para demonstrar a qualidade do trabalho.",
            "Mapa do Google Maps integrado.",
            "Formulário de contato para agendamento de orçamentos.",
            "Design responsivo para acesso via celular no local."
        ]
    },

    sunplan: {
        title: "SunPlan | Controle de Horas",
        category: "SaaS",
        subtitle: "Sistema Automatizado de Controle de Horas",
        liveUrl: "https://nadrjmv.github.io/SunPlan",
        heroImage: "https://i.postimg.cc/Y2n4ddXN/asd.jpg",
        galleryImages: [
            "https://i.postimg.cc/Y2n4ddXN/asd.jpg",
            "https://i.postimg.cc/cJVQD0dn/daf.jpg",
        ],
        description: "O SunPlan é um robusto sistema de controle de horas no modelo SaaS, desenvolvido para equipes. A plataforma permite que funcionários registrem suas horas de trabalho diárias e oferece um dashboard completo com cálculos automatizados. O sistema também conta com uma área administrativa para visualização de dados de todos os funcionários.",
        myRole: [
            "Idealização completa do projeto, incluindo a criação do nome e da logo 'SunPlan'.",
            "Desenvolvimento 100% da aplicação, tanto do front-end (interface) quanto do backend (lógicas de negócio).",
            "Implementação de um sistema de autenticação seguro (Login, Cadastro, Recuperação de Senha).",
            "Estruturação do banco de dados NoSQL com Firestore para armazenar dados de usuários e registros de ponto em tempo real.",
            "Criação de algoritmos complexos em JavaScript para calcular banco de horas, saldos, dias úteis (considerando feriados) e outras métricas.",
            "Desenvolvimento de um painel de administrador para supervisão de equipes.",
            "Publicação e manutenção da aplicação."
        ],
        technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "Firebase", "Single-Page Application (SPA)", "Flatpickr.js"],
        keyFeatures: [
            "Autenticação de usuários com diferentes níveis de permissão (funcionário e admin).",
            "Dashboard em tempo real com métricas detalhadas de produtividade.",
            "CRUD completo para registros de horários (Adicionar, Editar, Apagar).",
            "Cálculo automático de banco de horas, considerando feriados nacionais e carga horária personalizada.",
            "Interface com tema claro e escuro (Light/Dark Mode).",
            "Painel de administrador para visualização dos dados de toda a equipe."
        ]
    },
    
    suncontrol: {
        title: "SunControl | Gestão de Plantões",
        category: "SaaS (Software as a Service)",
        subtitle: "Plataforma de Gestão de Trocas de Plantão",
        liveUrl: "#",
        heroImage: "https://i.postimg.cc/3NfczXPf/fe.jpg",
        galleryImages: [
            "https://i.postimg.cc/3NfczXPf/fe.jpg",
            "https://i.postimg.cc/pXmxYH1v/sd.png",
        ],
        description: "SunControl é uma plataforma SaaS completa, projetada para gerenciar solicitações de troca de plantão em empresas de segurança ou setores que operam 24/7. O sistema agiliza a comunicação entre vigilantes e supervisores, que estes, têm permissões para interagir entre si de acordo com sua região. criando um fluxo de aprovação transparente e um registro histórico de todas as ocorrências.",
        myRole: [
            "Desenvolvimento full-stack da aplicação usando HTML, CSS e JavaScript puro, integrado ao Firebase.",
            "Criação do sistema de login e perfis de usuário com diferentes níveis de acesso (vigilante, supervisor, dono).",
            "Implementação da lógica de solicitação e aprovação de trocas limitadas a regionais, com notificações em tempo real.",
            "Desenvolvimento de um dashboard analítico para supervisores e administradores, com estatísticas de trocas por status e por mês.",
            "Integração da biblioteca FullCalendar para visualização de plantões aprovados."
        ],
        technologies: ["JavaScript (ES6+)", "Firebase Auth", "Firestore Database", "SPA", "Git"],
        keyFeatures: [
            "Sistema de permissões baseado em papéis (roles).",
            "Fluxo de aprovação de trocas em múltiplos níveis.",
            "Notificações em tempo real para ações importantes.",
            "Dashboard com gráficos e estatísticas para tomada de decisão.",
            "Histórico completo e calendário visual de todas as trocas de plantão."
        ]
    },

        tattoo: {
        title: "Estúdio de Tatto | Projeto pessoal",
        category: "SPA",
        subtitle: "Site de apresentação de empresa fictícia",
        liveUrl: "#",
        heroImage: "https://i.postimg.cc/3NfczXPf/fe.jpg",
        galleryImages: [
            "https://i.postimg.cc/52RMXkm0/se.jpg",
        ],
        description: "Este é um site que desenvolvi pensando unicamente em aumentar meu portfólio, é um projeto pessoal, mas que podia facilmente ser lançado. É uma single-page completa, com fotos do local (ilustrativa), área com 'Nossos Artistas', de 'portfólio', mostrando suas artes, mapa, botões de ação e muito mais.",
        myRole: [
            "Desenvolvimento integral do projeto, desde a concepção e design até a codificação e implementação final.",
            "Criação de um layout moderno e imersivo, focado na experiência visual para destacar a arte dos tatuadores.",
            "Codificação do front-end utilizando HTML5, CSS3 e JavaScript para garantir uma navegação fluida e interativa em uma Single-Page Application.",
            "Implementação de galerias de imagem dinâmicas e integração com a API do Google Maps para a localização do estúdio.",
            "Otimização para performance e responsividade, garantindo uma experiência perfeita em desktops e celulares."
        ],
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript (ES6+)",
            "SPA (Single-Page Application)",
            "Google Maps API",
            "Design Responsivo"
        ],
        keyFeatures: [
            "Navegação fluida em página única (SPA) para uma experiência de usuário contínua e sem recarregamentos.",
            "Seção 'Artistas' com perfis individuais para cada tatuador, destacando suas especialidades.",
            "Portfólio de trabalhos com galerias de imagem para exibir as tatuagens e artes de cada profissional.",
            "Mapa interativo com a localização do estúdio para facilitar a chegada dos clientes.",
            "Botões de 'Call to Action' (CTA) para agendamento e contato rápido via WhatsApp ou formulário."
        ]
    },

    suntalk: {
        title: "SunTalk | Mural de Comunicados",
        category: "SaaS",
        subtitle: "Sistema Automatizado de Controle de Horas",
        liveUrl: "https://nadrjmv.github.io/SunTalk",
        heroImage: "https://i.postimg.cc/Y2n4ddXN/asd.jpg",
        galleryImages: [
            "https://i.postimg.cc/Y2n4ddXN/asd.jpg",
            "https://i.postimg.cc/cJVQD0dn/daf.jpg",
        ],
        description: "O SunTalk foi desenvolvida para melhorar a comunicação interna, com comunicados e avisos diretos pela plataforma. Ela permite que funcionários se registrem e vejam da forma mais simples possível as novidades. O sistema também conta com uma área administrativa para a adição de novas notícias e visão geral de funcionários cadastrados.",
        myRole: [
            "Idealização completa do projeto, incluindo a criação do nome e da logo 'SunTalk'.",
            "Desenvolvimento 100% da aplicação, tanto do front-end (interface) quanto do backend (lógicas de negócio).",
            "Implementação de um sistema de autenticação seguro (Login, Cadastro, Recuperação de Senha).",
            "Estruturação do banco de dados NoSQL com Firestore para armazenar dados de usuários e adição de notícias em tempo real.",
            "Desenvolvimento de um painel de administrador para controle total do site.",
            "Publicação e manutenção da aplicação."
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Firebase"],
        keyFeatures: [
            "Autenticação de usuários com diferentes níveis de permissão (funcionário e admin).",
            "Dashboard em tempo real com contagem de cadastros.",
            "CRUD completo para registros de notícias/avisos (Adicionar, Editar, Apagar).",
            "Painel de administrador para visualização de toda a equipe."
        ]
    },};