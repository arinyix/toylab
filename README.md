# ToyLab Website

Site institucional do ToyLab - Laboratório de Tecnologia e Inovação, desenvolvido com Next.js 14, TypeScript e Three.js.

## 🚀 Funcionalidades

### 1. Vitrine de Produtos e Tecnologias
- **Página Home**: Hero section, produtos em destaque e próximas oficinas
- **Listagem de Produtos** (`/produtos`): Filtros por categoria, subcategoria e tecnologia
- **Detalhe do Produto** (`/produtos/{slug}`): Galeria de imagens e visualizador 3D interativo

### 2. Captação de Visitas Institucionais
- **Página de Visitas** (`/visitas`): Formulário de agendamento com integração para Google Sheets

### 3. Inscrições em Oficinas
- **Listagem de Oficinas** (`/oficinas`): Grade com status das inscrições
- **Detalhe da Oficina** (`/oficinas/{slug}`): Formulário de inscrição com validação de vagas

### 4. Vitrine de Impacto (Comunidade)
- **Galeria de Visitantes** (`/visitantes`): Projetos e feedbacks moderados

### 5. Canal de Orçamento com IA
- **Chatbot Flutuante**: Assistente virtual para solicitações de orçamento

## 🎨 Design System

### Cores
- **Principal**: `#678441` (verde)
- **Secundária**: `#fc393a` (vermelho)
- **Accent**: `#faa619` (laranja)
- **Terciária**: `#93c4c4` (azul claro)

### Tecnologias
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Instalação

1. **Clone o repositório**
```bash
git clone <repository-url>
cd toylab-website
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto em desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── produtos/          # Páginas de produtos
│   ├── oficinas/          # Páginas de oficinas
│   ├── visitas/           # Página de visitas
│   └── visitantes/        # Página de visitantes
├── components/            # Componentes React
│   ├── Header.tsx        # Cabeçalho com navegação
│   ├── Footer.tsx        # Rodapé
│   ├── Hero.tsx          # Seção hero da home
│   ├── ProductHighlights.tsx # Produtos em destaque
│   ├── UpcomingWorkshops.tsx # Próximas oficinas
│   ├── Chatbot.tsx       # Chatbot de IA
│   └── Product3DViewer.tsx # Visualizador 3D
└── data/
    └── mockData.ts       # Dados mock para desenvolvimento
```

## 🎯 Páginas Principais

### Home (`/`)
- Hero section com CTAs principais
- Produtos em destaque (3-4 produtos)
- Próximas oficinas (lista compacta)

### Produtos (`/produtos`)
- Filtros laterais (desktop) / bottom sheet (mobile)
- Grade responsiva de produtos
- Sistema de busca e filtros dinâmicos

### Detalhe do Produto (`/produtos/{slug}`)
- Galeria de imagens
- Visualizador 3D interativo (Three.js)
- Informações técnicas detalhadas
- CTA para orçamento via chatbot

### Visitas (`/visitas`)
- Informações sobre benefícios da visita
- Formulário de agendamento completo
- Integração com Google Sheets (App Script)

### Oficinas (`/oficinas`)
- Grade de oficinas com status
- Filtros por data e disponibilidade
- Informações sobre instrutores

### Detalhe da Oficina (`/oficinas/{slug}`)
- Descrição completa da oficina
- Formulário de inscrição
- Validação de vagas disponíveis

### Visitantes (`/visitantes`)
- Galeria moderada de projetos
- Estatísticas de visitantes
- Sistema de likes e comentários

## 🤖 Chatbot de IA

O chatbot flutuante está disponível em todas as páginas e oferece:
- Saudação inicial
- Qualificação de leads (Dúvida técnica vs Orçamento)
- Coleta de dados para orçamento
- Handoff para equipe humana

## 🎮 Visualização 3D

Produtos com suporte a visualização 3D:
- **Robô Educacional Alpha**: Cubo rotativo verde
- **Protótipo de Drone**: Esfera rotativa vermelha
- **Braço Robótico Industrial**: Cilindro rotativo laranja

### Tecnologias 3D
- Three.js para renderização 3D
- React Three Fiber para integração React
- React Three Drei para componentes auxiliares
- OrbitControls para interação do usuário

## 📱 Responsividade

O site é totalmente responsivo com:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Menu hambúrguer em mobile
- Grid adaptativo para produtos e oficinas

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Linting do código
```

## 📋 Próximos Passos

1. **Integração com Backend**
   - API para produtos e oficinas
   - Sistema de autenticação
   - Painel administrativo

2. **Funcionalidades Avançadas**
   - Sistema de pagamento para oficinas
   - Notificações por email
   - Analytics e métricas

3. **Melhorias 3D**
   - Modelos 3D mais complexos
   - Texturas e materiais realistas
   - Animações interativas

4. **SEO e Performance**
   - Otimização de imagens
   - Meta tags dinâmicas
   - Lazy loading

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**ToyLab** - Conectando ideias ao futuro através da tecnologia e inovação.
