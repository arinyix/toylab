import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              ToyLab
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Laboratório de tecnologia e inovação que conecta ideias ao futuro através de produtos únicos e experiências transformadoras.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos" className="text-gray-300 hover:text-primary transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="/oficinas" className="text-gray-300 hover:text-primary transition-colors">
                  Oficinas
                </Link>
              </li>
              <li>
                <Link href="/visitas" className="text-gray-300 hover:text-primary transition-colors">
                  Agendar Visita
                </Link>
              </li>
              <li>
                <Link href="/visitantes" className="text-gray-300 hover:text-primary transition-colors">
                  Galeria de Visitantes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: contato@toylab.com</p>
              <p>Telefone: (93) 99999-9999</p>
              <p>Endereço: Santarém, PA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ToyLab. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
