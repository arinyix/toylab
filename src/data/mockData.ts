export interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  subcategory: string
  technology: string[]
  has3D: boolean
  slug: string
  featured: boolean
}

export interface Workshop {
  id: string
  title: string
  description: string
  date: string
  time: string
  instructor: string
  maxParticipants: number
  currentParticipants: number
  status: 'open' | 'full' | 'upcoming'
  slug: string
  prerequisites?: string
  targetAudience: string
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Dragão',
    description: 'Dragão programável para ensino de robótica e programação',
    image: '/images/dragao.png',
    category: 'Robótica',
    subcategory: 'Educacional',
    technology: ['Arduino', '3D Printing', 'Electronics'],
    has3D: true,
    slug: 'dragao',
    featured: true
  },
  {
    id: '2',
    name: 'Protótipo de Drone',
    description: 'Drone customizado para monitoramento ambiental',
    image: '/images/drone-prototype.jpg',
    category: 'Aeronáutica',
    subcategory: 'Drones',
    technology: ['3D Printing', 'Carbon Fiber', 'Electronics'],
    has3D: true,
    slug: 'prototipo-drone',
    featured: true
  },
  {
    id: '3',
    name: 'Sistema de Irrigação Inteligente',
    description: 'Sistema automatizado para agricultura de precisão',
    image: '/images/irrigation-system.jpg',
    category: 'Agricultura',
    subcategory: 'IoT',
    technology: ['IoT', 'Sensors', 'Automation'],
    has3D: false,
    slug: 'sistema-irrigacao-inteligente',
    featured: true
  },
  {
    id: '4',
    name: 'Braço Robótico Industrial',
    description: 'Braço robótico para automação industrial',
    image: '/images/robotic-arm.jpg',
    category: 'Robótica',
    subcategory: 'Industrial',
    technology: ['3D Printing', 'Servo Motors', 'CNC'],
    has3D: true,
    slug: 'braco-robotico-industrial',
    featured: false
  }
]

export const mockWorkshops: Workshop[] = [
  {
    id: '1',
    title: 'Introdução à Impressão 3D',
    description: 'Aprenda os fundamentos da impressão 3D e crie seu primeiro objeto',
    date: '2024-11-15',
    time: '14:00',
    instructor: 'Dr. Maria Silva',
    maxParticipants: 15,
    currentParticipants: 8,
    status: 'open',
    slug: 'introducao-impressao-3d',
    targetAudience: 'Iniciantes',
    prerequisites: 'Conhecimento básico de computação'
  },
  {
    id: '2',
    title: 'Programação de Robôs com Arduino',
    description: 'Desenvolva habilidades em programação de microcontroladores',
    date: '2024-11-22',
    time: '09:00',
    instructor: 'Eng. João Santos',
    maxParticipants: 12,
    currentParticipants: 12,
    status: 'full',
    slug: 'programacao-robos-arduino',
    targetAudience: 'Intermediário',
    prerequisites: 'Conhecimento básico de programação'
  },
  {
    id: '3',
    title: 'Design de Produtos Digitais',
    description: 'Crie produtos digitais usando ferramentas de design modernas',
    date: '2024-12-05',
    time: '16:00',
    instructor: 'Designer Ana Costa',
    maxParticipants: 20,
    currentParticipants: 5,
    status: 'open',
    slug: 'design-produtos-digitais',
    targetAudience: 'Todos os níveis'
  }
]
