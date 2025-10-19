'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { mockProducts } from '@/data/mockData'
import { Filter, Search } from 'lucide-react'

export default function ProductsPage() {
  const [products] = useState(mockProducts)
  const [filters, setFilters] = useState({
    category: '',
    subcategory: '',
    technology: '',
    search: ''
  })

  const categories = [...new Set(products.map(p => p.category))]
  const subcategories = [...new Set(products.map(p => p.subcategory))]
  const technologies = [...new Set(products.flatMap(p => p.technology))]

  const filteredProducts = products.filter(product => {
    const matchesCategory = !filters.category || product.category === filters.category
    const matchesSubcategory = !filters.subcategory || product.subcategory === filters.subcategory
    const matchesTechnology = !filters.technology || product.technology.includes(filters.technology)
    const matchesSearch = !filters.search || 
      product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.search.toLowerCase())

    return matchesCategory && matchesSubcategory && matchesTechnology && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h1>
          <p className="text-lg text-gray-600">
            Explore nossa coleção de produtos inovadores desenvolvidos no ToyLab
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="mr-2" size={20} />
                Filtros
              </h3>

              <div className="space-y-4">
                {/* Busca */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Buscar
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      value={filters.search}
                      onChange={(e) => setFilters({...filters, search: e.target.value})}
                      placeholder="Nome ou descrição..."
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Categoria */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoria
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Todas as categorias</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Subcategoria */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subcategoria
                  </label>
                  <select
                    value={filters.subcategory}
                    onChange={(e) => setFilters({...filters, subcategory: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Todas as subcategorias</option>
                    {subcategories.map(subcategory => (
                      <option key={subcategory} value={subcategory}>{subcategory}</option>
                    ))}
                  </select>
                </div>

                {/* Tecnologia */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tecnologia
                  </label>
                  <select
                    value={filters.technology}
                    onChange={(e) => setFilters({...filters, technology: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Todas as tecnologias</option>
                    {technologies.map(tech => (
                      <option key={tech} value={tech}>{tech}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Grade de Produtos */}
          <div className="lg:w-3/4">
            <div className="mb-4">
              <p className="text-gray-600">
                {filteredProducts.length} produto(s) encontrado(s)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/produtos/${product.slug}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 block"
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
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {product.category} • {product.subcategory}
                      </span>
                      {product.has3D && (
                        <span className="px-2 py-1 bg-tertiary/20 text-tertiary text-xs rounded-full">
                          3D
                        </span>
                      )}
                    </div>
                    <div className="mt-4 inline-block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200">
                      Ver detalhes
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Nenhum produto encontrado com os filtros aplicados.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
