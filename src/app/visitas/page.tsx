'use client'

import { useState } from 'react'
import { Calendar, Clock, Users, MapPin, CheckCircle } from 'lucide-react'

export default function VisitsPage() {
  const [formData, setFormData] = useState({
    responsibleName: '',
    institutionName: '',
    participants: '',
    date: '',
    time: '',
    email: '',
    phone: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simular envio para Google Sheets
    console.log('Dados do formulário:', formData)
    
    // Simular delay de envio
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <CheckCircle className="mx-auto mb-4 text-green-500" size={64} />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Visita Agendada com Sucesso!
          </h1>
          <p className="text-gray-600 mb-6">
            Recebemos sua solicitação de visita. Você receberá um email de confirmação em breve com todos os detalhes.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Agendar Nova Visita
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Agende sua Visita ao ToyLab
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Venha conhecer nosso laboratório de tecnologia e inovação. 
            Uma experiência única para instituições educacionais e empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Por que visitar o ToyLab?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Experiência Prática</h3>
                    <p className="text-gray-600">Conheça nossos produtos e tecnologias em funcionamento</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <Calendar className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visita Personalizada</h3>
                    <p className="text-gray-600">Adaptamos o roteiro às necessidades do seu grupo</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Localização Central</h3>
                    <p className="text-gray-600">Facilmente acessível em São Paulo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                O que está incluso na visita?
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Tour completo pelo laboratório</li>
                <li>• Demonstração de produtos em funcionamento</li>
                <li>• Apresentação das tecnologias utilizadas</li>
                <li>• Sessão de perguntas e respostas</li>
                <li>• Material informativo sobre o ToyLab</li>
              </ul>
            </div>

            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Para quem se destina?
              </h3>
              <p className="text-gray-600">
                Instituições educacionais, empresas interessadas em inovação, 
                grupos de pesquisa e qualquer organização que queira conhecer 
                o futuro da fabricação digital.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Formulário de Agendamento
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="responsibleName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do Responsável *
                </label>
                <input
                  type="text"
                  id="responsibleName"
                  name="responsibleName"
                  value={formData.responsibleName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Instituição *
                </label>
                <input
                  type="text"
                  id="institutionName"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Participantes *
                </label>
                <input
                  type="number"
                  id="participants"
                  name="participants"
                  value={formData.participants}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="50"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Data Desejada *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    Horário Preferido *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecione</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>
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

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                Agendar Visita
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
