import Link from 'next/link'
import { mockWorkshops } from '@/data/mockData'
import { Calendar, Users, Clock } from 'lucide-react'

export default function UpcomingWorkshops() {
  const upcomingWorkshops = mockWorkshops.slice(0, 3)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Inscrições Abertas</span>
      case 'full':
        return <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Lotado</span>
      case 'upcoming':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Em Breve</span>
      default:
        return null
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Próximas Oficinas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Participe das nossas oficinas e desenvolva novas habilidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {upcomingWorkshops.map((workshop) => (
            <div key={workshop.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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

                <div className="space-y-2 mb-4">
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
                </div>

                <div className="text-sm text-gray-500 mb-4">
                  <strong>Instrutor:</strong> {workshop.instructor}
                </div>

                <Link
                  href={`/oficinas/${workshop.slug}`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Ver detalhes e inscrever-se
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/oficinas"
            className="inline-flex items-center px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            Ver todas as oficinas
          </Link>
        </div>
      </div>
    </section>
  )
}
