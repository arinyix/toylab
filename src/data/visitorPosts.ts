export interface VisitorPost {
  id: string
  title: string
  content: string
  fullContent?: string
  author: string
  institution: string
  date: string
  image: string
  images?: string[]
  likes: number
  comments: number
  slug: string
  category: 'educacional' | 'empresarial' | 'pesquisa' | 'oficina'
  tags: string[]
}

export const mockVisitorPosts: VisitorPost[] = [
  {
    id: '1',
    title: 'Visita Incrível ao ToyLab',
    content: 'Foi uma experiência fantástica! Aprendemos muito sobre impressão 3D e robótica. Recomendo para todas as escolas!',
    fullContent: `Foi uma experiência fantástica! Aprendemos muito sobre impressão 3D e robótica. Recomendo para todas as escolas!

Nossa visita ao ToyLab superou todas as expectativas. Os alunos ficaram fascinados com as possibilidades da fabricação digital e como ela pode ser aplicada na educação.

Principais destaques da visita:
• Demonstração de impressão 3D em tempo real
• Workshop de programação de robôs
• Visita aos laboratórios de eletrônica
• Apresentação de projetos desenvolvidos pelos estudantes

A equipe do ToyLab foi excepcional, explicando conceitos complexos de forma didática e envolvente. Os alunos voltaram para a escola cheios de ideias para novos projetos.

Recomendo fortemente esta experiência para todas as instituições educacionais que buscam inovar e inspirar seus estudantes.`,
    author: 'Prof. Maria Silva',
    institution: 'Escola Municipal São Paulo',
    date: '2024-10-15',
    image: '/images/visitor-1.jpg',
    images: ['/images/visitor-1.jpg', '/images/visitor-1-2.jpg', '/images/visitor-1-3.jpg'],
    likes: 12,
    comments: 3,
    slug: 'visita-incrivel-toylab',
    category: 'educacional',
    tags: ['impressão 3D', 'robótica', 'educação', 'workshop']
  },
  {
    id: '2',
    title: 'Projeto de Drone Desenvolvido',
    content: 'Conseguimos desenvolver nosso primeiro protótipo de drone durante a visita. A equipe do ToyLab foi excepcional!',
    fullContent: `Conseguimos desenvolver nosso primeiro protótipo de drone durante a visita. A equipe do ToyLab foi excepcional!

Como parte do nosso projeto de pesquisa em monitoramento ambiental, visitamos o ToyLab para aprender sobre fabricação digital e aplicação em drones.

O que desenvolvemos:
• Estrutura do drone em fibra de carbono
• Sistema de controle de voo personalizado
• Sensores ambientais integrados
• Software de análise de dados

A equipe técnica nos auxiliou em cada etapa, desde o design até a programação dos sistemas de controle. O resultado foi um drone funcional capaz de coletar dados ambientais em tempo real.

Esta parceria com o ToyLab foi fundamental para o sucesso do nosso projeto de pesquisa.`,
    author: 'Eng. João Santos',
    institution: 'Universidade Federal',
    date: '2024-10-10',
    image: '/images/visitor-2.jpg',
    images: ['/images/visitor-2.jpg', '/images/visitor-2-2.jpg'],
    likes: 8,
    comments: 1,
    slug: 'projeto-drone-desenvolvido',
    category: 'pesquisa',
    tags: ['drone', 'pesquisa', 'monitoramento', 'fabricação digital']
  },
  {
    id: '3',
    title: 'Oficina de Arduino',
    content: 'Participamos da oficina de Arduino e foi incrível! Os alunos ficaram fascinados com as possibilidades.',
    fullContent: `Participamos da oficina de Arduino e foi incrível! Os alunos ficaram fascinados com as possibilidades.

A oficina de Arduino no ToyLab foi uma experiência transformadora para nossos estudantes. Eles puderam colocar em prática conceitos teóricos de programação e eletrônica.

Atividades realizadas:
• Introdução à plataforma Arduino
• Programação de sensores e atuadores
• Projetos práticos de automação
• Integração com impressão 3D

Os instrutores foram muito didáticos e pacientes, adaptando o conteúdo ao nível de conhecimento de cada aluno. O ambiente colaborativo do ToyLab facilitou muito o aprendizado.

Resultados alcançados:
• 15 projetos funcionais desenvolvidos
• Aumento significativo no interesse por programação
• Novos projetos implementados na escola

Recomendo esta oficina para todas as instituições que querem despertar o interesse dos alunos pela tecnologia.`,
    author: 'Prof. Ana Costa',
    institution: 'Colégio Técnico',
    date: '2024-10-08',
    image: '/images/visitor-3.jpg',
    images: ['/images/visitor-3.jpg', '/images/visitor-3-2.jpg', '/images/visitor-3-3.jpg'],
    likes: 15,
    comments: 5,
    slug: 'oficina-arduino',
    category: 'oficina',
    tags: ['Arduino', 'programação', 'eletrônica', 'oficina']
  },
  {
    id: '4',
    title: 'Primeira Impressão 3D',
    content: 'Nossa primeira experiência com impressão 3D foi aqui no ToyLab. Agora temos uma impressora na escola!',
    fullContent: `Nossa primeira experiência com impressão 3D foi aqui no ToyLab. Agora temos uma impressora na escola!

A visita ao ToyLab foi o ponto de partida para nossa jornada com a impressão 3D. Nunca tínhamos visto uma impressora funcionando de perto, muito menos entendido suas possibilidades educacionais.

O que aprendemos:
• Fundamentos da impressão 3D
• Software de modelagem 3D
• Configuração e operação de impressoras
• Manutenção e troubleshooting
• Aplicações educacionais

A equipe do ToyLab nos mostrou como a impressão 3D pode revolucionar o ensino, permitindo que os alunos materializem suas ideias e aprendam através da prática.

Após a visita, decidimos investir em uma impressora 3D para nossa escola. Hoje, nossos alunos desenvolvem projetos incríveis e o interesse pela tecnologia aumentou significativamente.

Esta experiência mudou completamente nossa perspectiva sobre o ensino de tecnologia.`,
    author: 'Diretor Carlos Lima',
    institution: 'Escola Estadual',
    date: '2024-10-05',
    image: '/images/visitor-4.jpg',
    images: ['/images/visitor-4.jpg', '/images/visitor-4-2.jpg'],
    likes: 20,
    comments: 7,
    slug: 'primeira-impressao-3d',
    category: 'educacional',
    tags: ['impressão 3D', 'educação', 'tecnologia', 'inovação']
  },
  {
    id: '5',
    title: 'Robótica Educacional',
    content: 'Implementamos o projeto de robótica que conhecemos aqui. Os alunos estão amando!',
    fullContent: `Implementamos o projeto de robótica que conhecemos aqui. Os alunos estão amando!

A visita ao ToyLab nos inspirou a criar um programa de robótica educacional em nossa instituição. Vimos como a robótica pode ser uma ferramenta poderosa para o aprendizado.

Projeto implementado:
• Curso de robótica para alunos do ensino médio
• Competições internas de robôs
• Projetos interdisciplinares
• Parceria com empresas locais

Os alunos desenvolveram robôs para diferentes aplicações:
• Robôs de limpeza automatizada
• Sistemas de monitoramento
• Protótipos industriais
• Projetos de automação residencial

A metodologia aprendida no ToyLab foi fundamental para o sucesso do nosso programa. Os alunos estão mais engajados e motivados para aprender.

Resultados:
• 80% dos alunos participando ativamente
• 3 projetos premiados em competições regionais
• Aumento de 40% no interesse por STEM

Obrigado, ToyLab, por nos inspirar e capacitar para esta jornada!`,
    author: 'Coordenadora Paula',
    institution: 'Instituto Técnico',
    date: '2024-10-03',
    image: '/images/visitor-5.jpg',
    images: ['/images/visitor-5.jpg', '/images/visitor-5-2.jpg', '/images/visitor-5-3.jpg'],
    likes: 11,
    comments: 2,
    slug: 'robotica-educacional',
    category: 'educacional',
    tags: ['robótica', 'educação', 'STEM', 'competições']
  },
  {
    id: '6',
    title: 'Visita Empresarial',
    content: 'Nossa empresa está considerando parcerias com o ToyLab. Tecnologia de ponta!',
    fullContent: `Nossa empresa está considerando parcerias com o ToyLab. Tecnologia de ponta!

Como CEO de uma empresa de tecnologia, sempre busco inovações que possam agregar valor aos nossos produtos e serviços. A visita ao ToyLab foi uma revelação.

O que nos impressionou:
• Infraestrutura de fabricação digital
• Equipe altamente qualificada
• Projetos inovadores em desenvolvimento
• Metodologia de trabalho colaborativo
• Foco em soluções práticas

Possibilidades de parceria identificadas:
• Desenvolvimento de protótipos para nossos produtos
• Treinamento técnico para nossa equipe
• Pesquisa e desenvolvimento conjunto
• Consultoria em fabricação digital

A tecnologia que vimos no ToyLab está anos à frente do que encontramos no mercado. A capacidade de prototipagem rápida e desenvolvimento iterativo é exatamente o que nossa empresa precisa.

Estamos formalizando uma proposta de parceria estratégica. O ToyLab tem o potencial de revolucionar nossa linha de produtos.

Recomendo esta visita para qualquer empresa que busca inovação e excelência técnica.`,
    author: 'CEO Roberto',
    institution: 'TechCorp',
    date: '2024-10-01',
    image: '/images/visitor-6.jpg',
    images: ['/images/visitor-6.jpg', '/images/visitor-6-2.jpg'],
    likes: 6,
    comments: 4,
    slug: 'visita-empresarial',
    category: 'empresarial',
    tags: ['parceria', 'inovação', 'tecnologia', 'empresa']
  }
]

export function getVisitorPostBySlug(slug: string): VisitorPost | undefined {
  return mockVisitorPosts.find(post => post.slug === slug)
}
