import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-tertiary/10 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bem-vindo ao{' '}
            <span className="text-primary">ToyLab</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Laboratório de tecnologia e inovação onde ideias se transformam em produtos únicos. 
            Explore nosso catálogo, participe de oficinas e descubra o futuro da fabricação digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visitas"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Agendar Visita
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/produtos"
              className="inline-flex items-center px-8 py-4 bg-white text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Ver Produtos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
