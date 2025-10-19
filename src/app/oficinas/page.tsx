import Link from 'next/link'
import { mockWorkshops } from '@/data/mockData'
import { Calendar, Users, Clock, User } from 'lucide-react'

export default function WorkshopsPage() {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oficinas ToyLab
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Desenvolva novas habilidades participando das nossas oficinas práticas. 
            Aprenda sobre tecnologia, inovação e fabricação digital.
          </p>
        </div>

        {/* Grade de Oficinas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockWorkshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {workshop.title}
                  </h3>
                  {getStatusBadge(workshop.status)}
                </div>
                
                <p className="text-gray-600 mb-4">
                  {workshop.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-2" size={16} />
                    {new Date(workshop.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-2" size={16} />
                    {workshop.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="mr-2" size={16} />
                    {workshop.currentParticipants}/{workshop.maxParticipants} participantes
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="mr-2" size={16} />
                    {workshop.instructor}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700">Público-alvo: </span>
                  <span className="text-sm text-gray-600">{workshop.targetAudience}</span>
                </div>

                {workshop.prerequisites && (
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-700">Pré-requisitos: </span>
                    <span className="text-sm text-gray-600">{workshop.prerequisites}</span>
                  </div>
                )}

                <Link
                  href={`/oficinas/${workshop.slug}`}
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                    workshop.status === 'open'
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : workshop.status === 'full'
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-accent text-white hover:bg-accent/90'
                  }`}
                >
                  {workshop.status === 'open' && 'Inscrever-se'}
                  {workshop.status === 'full' && 'Lotado'}
                  {workshop.status === 'upcoming' && 'Em Breve'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Informações Adicionais */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Grupos Pequenos
              </h3>
              <p className="text-gray-600">
                Oficinas com número limitado de participantes para garantir atenção personalizada.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Horários Flexíveis
              </h3>
              <p className="text-gray-600">
                Oficinas em diferentes horários para se adequar à sua agenda.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Instrutores Especializados
              </h3>
              <p className="text-gray-600">
                Professores e especialistas com vasta experiência em suas áreas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
