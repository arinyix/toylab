# Pasta de Modelos 3D

Esta pasta contém os arquivos GLTF dos produtos do ToyLab.

## 📁 Estrutura Esperada

```
models/
├── robo-alpha.gltf          # Robô Educacional Alpha
├── drone-prototype.gltf      # Protótipo de Drone  
├── braco-robotico.gltf       # Braço Robótico Industrial
├── irrigacao.gltf            # Sistema de Irrigação
└── README.md                 # Este arquivo
```

## 📋 Como Adicionar Seus Arquivos

1. **Coloque seu arquivo .gltf aqui**
2. **Atualize o arquivo** `src/config/modelConfig.ts`
3. **Configure o produto** em `src/data/mockData.ts` com `has3D: true`

## 🔧 Configuração no modelConfig.ts

```typescript
'seu-produto-slug': {
  path: '/models/seu-arquivo.gltf',
  scale: 1,                    // Escala (1 = original)
  position: [0, 0, 0],         // Posição [x, y, z]
  rotation: [0, 0, 0],         // Rotação [x, y, z]
  hasGLTF: true
}
```

## 📝 Exemplo

Se você tem um arquivo `meu-modelo.gltf`:

1. Coloque em: `public/models/meu-modelo.gltf`
2. Configure em `modelConfig.ts`:
```typescript
'meu-produto': {
  path: '/models/meu-modelo.gltf',
  scale: 1.2,
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  hasGLTF: true
}
```

## ⚠️ Importante

- Arquivos .bin e texturas devem estar na mesma pasta
- Use nomes descritivos para os arquivos
- Teste sempre após adicionar um novo modelo

Para mais detalhes, veja o arquivo `GLTF_SETUP.md` na raiz do projeto.
