// Configuração dos modelos 3D para produtos
export interface ModelConfig {
  path: string
  scale?: number
  position?: [number, number, number]
  rotation?: [number, number, number]
  hasGLTF: boolean
}

export const productModels: { [key: string]: ModelConfig } = {
  'dragao': {
    path: '/models/dragon_1.gltf',
    scale: 0.1,
    position: [0, 0, 0],
    rotation: [0, Math.PI, 0],
    hasGLTF: true
  },
  'prototipo-drone': {
    path: '/models/drone-prototype.gltf',
    scale: 1.2,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    hasGLTF: true
  },
  'braco-robotico-industrial': {
    path: '/models/braco-robotico.gltf',
    scale: 0.8,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    hasGLTF: true
  },
  'sistema-irrigacao-inteligente': {
    path: '/models/irrigacao.gltf',
    scale: 1,
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    hasGLTF: true
  }
}

// Função para verificar se um produto tem modelo GLTF
export function hasGLTFModel(productSlug: string): boolean {
  return productModels[productSlug]?.hasGLTF || false
}

// Função para obter configuração do modelo
export function getModelConfig(productSlug: string): ModelConfig | null {
  return productModels[productSlug] || null
}
