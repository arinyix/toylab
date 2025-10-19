'use client'

import { useState } from 'react'
import { mockWorkshops } from '@/data/mockData'
import { notFound } from 'next/navigation'
import { Calendar, Clock, Users, User, CheckCircle } from 'lucide-react'

interface WorkshopDetailPageProps {
  params: {
    slug: string
  }
}

export default function WorkshopDetailPage({ params }: WorkshopDetailPageProps) {
  const workshop = mockWorkshops.find(w => w.slug === params.slug)

  if (!workshop) {
    notFound()
  }

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (workshop.status !== 'open') {
      alert('Esta oficina não está com inscrições abertas.')
      return
    }

    if (workshop.currentParticipants >= workshop.maxParticipants) {
      alert('Esta oficina está lotada.')
      return
    }

    // Simular envio
    console.log('Inscrição:', formData)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Inscrições Abertas</span>
      case 'full':
        return <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">Lotado</span>
      case 'upcoming':
        return <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">Em Breve</span>
      default:
        return null
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="mx-auto mb-4 text-green-500" size={64} />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Inscrição Realizada!
          </h1>
          <p className="text-gray-600 mb-6">
            Você foi inscrito na oficina <strong>{workshop.title}</strong>. 
            Você receberá um email de confirmação em breve com todos os detalhes.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Voltar à Oficina
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li>/</li>
            <li><a href="/oficinas" className="hover:text-primary">Oficinas</a></li>
            <li>/</li>
            <li className="text-gray-900">{workshop.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações da Oficina */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex justify-between items-start mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                  {workshop.title}
                </h1>
                {getStatusBadge(workshop.status)}
              </div>

              <p className="text-lg text-gray-600 mb-8">
                {workshop.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Calendar className="mr-3 text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Data</p>
                    <p className="font-semibold">{new Date(workshop.date).toLocaleDateString('pt-BR')}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="mr-3 text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Horário</p>
                    <p className="font-semibold">{workshop.time}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Users className="mr-3 text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Vagas</p>
                    <p className="font-semibold">{workshop.currentParticipants}/{workshop.maxParticipants}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <User className="mr-3 text-primary" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Instrutor</p>
                    <p className="font-semibold">{workshop.instructor}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Público-alvo
                  </h3>
                  <p className="text-gray-600">{workshop.targetAudience}</p>
                </div>

                {workshop.prerequisites && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Pré-requisitos
                    </h3>
                    <p className="text-gray-600">{workshop.prerequisites}</p>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Conteúdo da Oficina
                  </h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-600">
                      Esta oficina oferece uma experiência prática e interativa, 
                      onde os participantes terão a oportunidade de trabalhar diretamente 
                      com as tecnologias e ferramentas apresentadas.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li>• Teoria e fundamentos</li>
                      <li>• Demonstrações práticas</li>
                      <li>• Exercícios hands-on</li>
                      <li>• Discussão e networking</li>
                      <li>• Certificado de participação</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Inscrição */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Inscrever-se
              </h2>

              {workshop.status === 'open' && workshop.currentParticipants < workshop.maxParticipants ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  >
                    Confirmar Inscrição
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <p className="text-gray-600 mb-4">
                    {workshop.status === 'full' 
                      ? 'Esta oficina está lotada. Entre em contato conosco para ser adicionado à lista de espera.'
                      : 'As inscrições para esta oficina ainda não estão abertas.'
                    }
                  </p>
                  <button
                    disabled
                    className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-lg font-semibold cursor-not-allowed"
                  >
                    {workshop.status === 'full' ? 'Lotado' : 'Em Breve'}
                  </button>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Informações Importantes
                </h3>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Chegue 15 minutos antes do início</li>
                  <li>• Traga um notebook se necessário</li>
                  <li>• Material incluso no valor</li>
                  <li>• Certificado de participação</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
