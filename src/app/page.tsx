import Hero from '@/components/Hero'
import ProductHighlights from '@/components/ProductHighlights'
import UpcomingWorkshops from '@/components/UpcomingWorkshops'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductHighlights />
      <UpcomingWorkshops />
    </div>
  )
}
