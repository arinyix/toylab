import Link from 'next/link'
import Image from 'next/image'
import { mockProducts } from '@/data/mockData'
import { ArrowRight } from 'lucide-react'

export default function ProductHighlights() {
  const featuredProducts = mockProducts.filter(product => product.featured)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção de produtos inovadores desenvolvidos no ToyLab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/produtos/${product.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 block"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.technology.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                  Ver detalhes
                  <ArrowRight className="ml-1" size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/produtos"
            className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-colors duration-200"
          >
            Ver todos os produtos
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
