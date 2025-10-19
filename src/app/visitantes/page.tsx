import Link from 'next/link'
import { Heart, MessageCircle, Calendar } from 'lucide-react'
import { mockVisitorPosts } from '@/data/visitorPosts'

export default function VisitorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galeria de Visitantes
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja os projetos, experiências e feedbacks dos nossos visitantes. 
            Uma comunidade crescente de inovadores e educadores.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">1,247</div>
            <div className="text-gray-600">Visitantes Totais</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-secondary mb-2">89</div>
            <div className="text-gray-600">Projetos Desenvolvidos</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">156</div>
            <div className="text-gray-600">Instituições Parceiras</div>
          </div>
        </div>

        {/* Galeria */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockVisitorPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Imagem do projeto</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.content}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {post.institution}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1" size={14} />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Heart className="mr-1" size={14} />
                      {post.likes}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MessageCircle className="mr-1" size={14} />
                      {post.comments}
                    </div>
                  </div>
                  <Link 
                    href={`/visitantes/${post.slug}`}
                    className="text-primary hover:text-primary/80 text-sm font-medium"
                  >
                    Ver mais
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-primary rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Quer compartilhar sua experiência?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Envie fotos e depoimentos sobre sua visita ao ToyLab e inspire outros visitantes.
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Enviar Depoimento
          </button>
        </div>

        {/* Informações sobre Moderação */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Sobre a Galeria
          </h3>
          <p className="text-gray-600">
            Todos os conteúdos desta galeria são moderados pela equipe do ToyLab para garantir 
            a qualidade e relevância das publicações. Os depoimentos e projetos compartilhados 
            aqui representam experiências reais de nossos visitantes e parceiros.
          </p>
        </div>
      </div>
    </div>
  )
}
