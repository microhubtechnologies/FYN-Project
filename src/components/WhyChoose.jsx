import { DollarSign, Building2, Lock } from 'lucide-react'
import { useEffect, useState } from 'react'
import ModernCard from './ModernCard'
import im from "../assets/ip1.jpg"
export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: DollarSign,
      title: 'Free transfers',
      description: 'No hidden fees or confusing small print — just clear numbers.',
      link: { text: 'Learn more →', href: '#' }
    },
    {
      icon: Building2,
      title: 'Multiple account',
      description:
        'Applications that take minutes, not days, to get underway.',
      link: { text: 'Learn more →', href: '#' }
    },
    {
      icon: Lock,
      title: 'Unmatched security',
      description: 'Dedicated lending specialists who understand your goals.',
      link: { text: 'Learn more →', href: '#' }
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top text block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <p
              className={`text-xs font-semibold tracking-[0.25em] mb-3 uppercase transition-all duration-700 ${
                isVisible ? 'animate-slide-left' : 'opacity-0 -translate-x-8'
              }`}
              style={{ color: '#05004f' }}
            >
              Why choose FYN
            </p>

            <h2
              className={`text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug transition-all duration-700 ${
                isVisible ? 'animate-slide-left' : 'opacity-0 -translate-x-8'
              }`}
            >
              Smarter finance, built around you.
            </h2>

            <p
              className={`text-sm md:text-base text-gray-600 max-w-xl transition-all duration-700 ${
                isVisible ? 'animate-slide-left' : 'opacity-0 -translate-x-8'
              }`}
            >
              Transparent rates, fast decisions and human support when it matters most —
              so you can move ahead with confidence, not paperwork.
            </p>
          </div>

          {/* Optional highlights on the right (desktop only) */}
          
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-[30px]'
                }`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <ModernCard
                  icon={Icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
