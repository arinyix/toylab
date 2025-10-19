'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { mockProducts } from '@/data/mockData'
import { notFound } from 'next/navigation'
import Product3DViewer from '@/components/Product3DViewer'
import { MessageCircle } from 'lucide-react'

interface ProductDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = mockProducts.find(p => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-primary">Home</a></li>
            <li>/</li>
            <li><a href="/produtos" className="hover:text-primary">Produtos</a></li>
            <li>/</li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Galeria e Viewer 3D */}
          <div className="space-y-6">
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            
            {product.has3D && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Visualização 3D
                </h3>
                <div className="aspect-square bg-white rounded-lg border">
                  <Suspense fallback={
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-500">Carregando visualização 3D...</div>
                    </div>
                  }>
                    <Product3DViewer productSlug={product.slug} />
                  </Suspense>
                </div>
              </div>
            )}
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {product.description}
              </p>
            </div>

            {/* Categorias */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Categorização
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Categoria:</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subcategoria:</span>
                  <span className="font-medium">{product.subcategory}</span>
                </div>
              </div>
            </div>

            {/* Tecnologias */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Tecnologias Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.technology.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Especificações Técnicas */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Especificações Técnicas
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600">
                  Este produto foi desenvolvido utilizando as mais modernas tecnologias de fabricação digital, 
                  combinando impressão 3D, eletrônica e programação para criar uma solução inovadora e funcional.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Desenvolvido no ToyLab</li>
                  <li>• Protótipo funcional</li>
                  <li>• Documentação técnica completa</li>
                  <li>• Suporte para customização</li>
                </ul>
              </div>
            </div>

            {/* CTA para Orçamento */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Interessado neste produto?
              </h3>
              <p className="text-gray-600 mb-4">
                Entre em contato conosco para solicitar um orçamento personalizado ou esclarecer dúvidas técnicas.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200">
                <MessageCircle className="mr-2" size={20} />
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
