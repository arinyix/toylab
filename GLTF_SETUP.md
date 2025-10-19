# Como Adicionar Arquivos GLTF ao ToyLab

## 📁 Estrutura de Pastas

Crie a seguinte estrutura na pasta `public` do seu projeto:

```
public/
├── models/
│   ├── robo-alpha.gltf
│   ├── robo-alpha.bin (se necessário)
│   ├── drone-prototype.gltf
│   ├── drone-prototype.bin (se necessário)
│   ├── braco-robotico.gltf
│   ├── braco-robotico.bin (se necessário)
│   └── irrigacao.gltf
```

## 🔧 Passos para Adicionar um Modelo GLTF

### 1. Coloque seus arquivos na pasta `public/models/`

Seu arquivo GLTF deve estar em:
```
public/models/seu-modelo.gltf
```

**Importante**: Se seu modelo tem texturas ou arquivos binários, coloque-os também na mesma pasta.

### 2. Atualize a configuração em `src/config/modelConfig.ts`

Adicione ou modifique a configuração do seu produto:

```typescript
export const productModels: { [key: string]: ModelConfig } = {
  'seu-produto-slug': {
    path: '/models/seu-modelo.gltf',
    scale: 1,                    // Escala do modelo (1 = tamanho original)
    position: [0, 0, 0],         // Posição [x, y, z]
    rotation: [0, 0, 0],         // Rotação [x, y, z] em radianos
    hasGLTF: true                // Sempre true para modelos GLTF
  },
  // ... outros produtos
}
```

### 3. Exemplo Prático

Se você tem um arquivo `meu-robo.gltf` para o produto "robo-educacional-alpha":

1. **Coloque o arquivo em**: `public/models/meu-robo.gltf`

2. **Atualize o config**:
```typescript
'robo-educacional-alpha': {
  path: '/models/meu-robo.gltf',
  scale: 1.5,                    // 50% maior
  position: [0, -1, 0],          // Movido para baixo
  rotation: [0, 0, 0],           // Sem rotação inicial
  hasGLTF: true
}
```

## 🎛️ Configurações Disponíveis

### Scale (Escala)
- `1` = tamanho original
- `0.5` = metade do tamanho
- `2` = dobro do tamanho

### Position (Posição)
- `[0, 0, 0]` = centro
- `[0, -1, 0]` = 1 unidade para baixo
- `[1, 0, 0]` = 1 unidade para direita

### Rotation (Rotação)
- `[0, 0, 0]` = sem rotação
- `[0, Math.PI/2, 0]` = 90 graus no eixo Y
- `[Math.PI, 0, 0]` = 180 graus no eixo X

## 🔄 Como Funciona

1. **Carregamento**: O sistema tenta carregar o modelo GLTF primeiro
2. **Fallback**: Se não encontrar o arquivo, usa formas geométricas básicas
3. **Suspense**: Mostra um loading enquanto carrega o modelo
4. **Animação**: O modelo gira automaticamente no eixo Y

## 📝 Exemplo Completo

Para adicionar um novo produto com modelo GLTF:

1. **Arquivo**: `public/models/novo-produto.gltf`

2. **Config**:
```typescript
'novo-produto-slug': {
  path: '/models/novo-produto.gltf',
  scale: 0.8,
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  hasGLTF: true
}
```

3. **Dados do produto** (em `src/data/mockData.ts`):
```typescript
{
  id: '5',
  name: 'Novo Produto',
  slug: 'novo-produto-slug',
  has3D: true,  // ← Importante: deve ser true
  // ... outros campos
}
```

## 🚨 Troubleshooting

### Modelo não aparece
- Verifique se o arquivo está em `public/models/`
- Confirme se o caminho no config está correto
- Verifique se `has3D: true` no produto

### Modelo muito grande/pequeno
- Ajuste o valor `scale` no config
- Valores menores = modelo menor
- Valores maiores = modelo maior

### Modelo fora de posição
- Ajuste `position` no config
- Use valores negativos para mover para baixo/esquerda/atrás

### Erro de carregamento
- Verifique se o arquivo GLTF não está corrompido
- Confirme se todos os arquivos relacionados (.bin, texturas) estão na pasta
- Verifique o console do navegador para erros

## 🎯 Dicas

1. **Otimização**: Use modelos com poucos polígonos para melhor performance
2. **Texturas**: Mantenha as texturas em resolução adequada (não muito alta)
3. **Nomes**: Use nomes descritivos para os arquivos
4. **Teste**: Sempre teste o modelo após adicionar

Agora você pode adicionar seus arquivos GLTF facilmente! 🚀
