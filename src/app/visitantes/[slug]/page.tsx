import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Heart, MessageCircle, Calendar, User, Building, Tag } from 'lucide-react'
import { getVisitorPostBySlug, mockVisitorPosts } from '@/data/visitorPosts'

interface VisitorDetailPageProps {
  params: {
    slug: string
  }
}

export default function VisitorDetailPage({ params }: VisitorDetailPageProps) {
  const post = getVisitorPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'educacional':
        return 'bg-primary/10 text-primary'
      case 'empresarial':
        return 'bg-secondary/10 text-secondary'
      case 'pesquisa':
        return 'bg-accent/10 text-accent'
      case 'oficina':
        return 'bg-tertiary/10 text-tertiary'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'educacional':
        return 'Educacional'
      case 'empresarial':
        return 'Empresarial'
      case 'pesquisa':
        return 'Pesquisa'
      case 'oficina':
        return 'Oficina'
      default:
        return category
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li>/</li>
            <li><Link href="/visitantes" className="hover:text-primary">Visitantes</Link></li>
            <li>/</li>
            <li className="text-gray-900">{post.title}</li>
          </ol>
        </nav>

        {/* Botão Voltar */}
        <Link
          href="/visitantes"
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8"
        >
          <ArrowLeft className="mr-2" size={16} />
          Voltar para Galeria
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Imagem Principal */}
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Imagem do projeto</span>
              </div>

              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {getCategoryLabel(post.category)}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Heart className="mr-1" size={14} />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="mr-1" size={14} />
                        {post.comments}
                      </div>
                    </div>
                  </div>

                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h1>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <User className="mr-3" size={16} />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Building className="mr-3" size={16} />
                      <span>{post.institution}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-3" size={16} />
                      <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                </div>

                {/* Conteúdo Completo */}
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                    {post.fullContent || post.content}
                  </p>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <Tag className="mr-2" size={16} />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informações da Visita
              </h3>

              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-700">Autor:</span>
                  <p className="text-gray-600">{post.author}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-700">Instituição:</span>
                  <p className="text-gray-600">{post.institution}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-700">Data:</span>
                  <p className="text-gray-600">{new Date(post.date).toLocaleDateString('pt-BR')}</p>
                </div>

                <div>
                  <span className="text-sm font-medium text-gray-700">Categoria:</span>
                  <p className="text-gray-600">{getCategoryLabel(post.category)}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Interações
                </h4>
                <div className="flex items-center justify-between">
                  <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="mr-2" size={16} />
                    Curtir ({post.likes})
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-primary transition-colors">
                    <MessageCircle className="mr-2" size={16} />
                    Comentar ({post.comments})
                  </button>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Compartilhar
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Compartilhe esta experiência com outros interessados no ToyLab.
                </p>
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Compartilhar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Relacionados */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Outras Experiências
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVisitorPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/visitantes/${relatedPost.slug}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-32 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Imagem do projeto</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {relatedPost.content}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{relatedPost.author}</span>
                      <span>{new Date(relatedPost.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
