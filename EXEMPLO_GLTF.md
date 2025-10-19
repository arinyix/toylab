// EXEMPLO: Como adicionar um novo produto com modelo GLTF
// Este arquivo é apenas para referência - não será usado no código

// 1. PASSO: Adicionar o produto em src/data/mockData.ts
const novoProduto = {
  id: '5',
  name: 'Drone de Monitoramento',
  description: 'Drone customizado para monitoramento ambiental com câmera 4K',
  image: '/images/drone-monitoramento.jpg',
  category: 'Aeronáutica',
  subcategory: 'Drones',
  technology: ['3D Printing', 'Electronics', 'IoT'],
  has3D: true,  // ← IMPORTANTE: deve ser true para mostrar o viewer 3D
  slug: 'drone-monitoramento',  // ← Este slug será usado no config
  featured: false
}

// 2. PASSO: Adicionar configuração em src/config/modelConfig.ts
const novaConfiguracao = {
  'drone-monitoramento': {
    path: '/models/drone-monitoramento.gltf',  // ← Caminho do seu arquivo GLTF
    scale: 1.5,                    // Modelo 50% maior que o original
    position: [0, -0.5, 0],       // Movido meio metro para baixo
    rotation: [0, 0, 0],           // Sem rotação inicial
    hasGLTF: true                 // Sempre true para modelos GLTF
  }
}

// 3. PASSO: Colocar o arquivo GLTF em public/models/
// Seu arquivo deve estar em: public/models/drone-monitoramento.gltf
// Se tiver arquivos .bin ou texturas, coloque-os na mesma pasta

// 4. PASSO: Testar
// Acesse: http://localhost:3000/produtos/drone-monitoramento
// O modelo GLTF deve aparecer no visualizador 3D

// CONFIGURAÇÕES AVANÇADAS:
const configuracaoAvancada = {
  'produto-complexo': {
    path: '/models/produto-complexo.gltf',
    scale: 0.8,                   // 20% menor
    position: [1, 0, -1],         // Movido para direita e para trás
    rotation: [0, Math.PI/4, 0],  // Rotacionado 45 graus no eixo Y
    hasGLTF: true
  }
}

// DICAS:
// - Scale: valores menores = modelo menor, valores maiores = modelo maior
// - Position: [x, y, z] onde y é altura (positivo = cima, negativo = baixo)
// - Rotation: em radianos (Math.PI = 180 graus)
// - Se o modelo não aparecer, verifique o console do navegador para erros
// - Use modelos otimizados para melhor performance
