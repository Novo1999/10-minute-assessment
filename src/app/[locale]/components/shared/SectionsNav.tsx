'use client'
import { CourseData } from '@/app/types'
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'
import React, { useState } from 'react'

interface SectionsNavProps {
  courseData: CourseData
  onSectionSelect?: (sectionType: string) => void
}

const SectionsNav: React.FC<SectionsNavProps> = ({ courseData, onSectionSelect }) => {
  const [activeSection, setActiveSection] = useState(0)
  const [api, setApi] = useState<CarouselApi>()

  // Filter out sections that should be displayed in carousel
  const displayableSections = courseData.sections.filter((section) => section.name && section.name.trim() !== '')

  const handleSectionClick = (index: number, sectionType: string) => {
    setActiveSection(index)
    onSectionSelect?.(sectionType)

    if (api) {
      api.scrollTo(index)
    }
  }

  if (!displayableSections.length) {
    return null
  }

  return (
    <div className="bg-white border-b">
      <div className="container">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            dragFree: true,
            containScroll: 'trimSnaps',
          }}
          className="w-full"
        >
          <CarouselContent className="ml-6">
            {displayableSections.map((section, index) => (
              <CarouselItem key={section.type} className="pl-2 py-2 basis-auto">
                <Link
                  href={`#${section.type}`}
                  onClick={() => handleSectionClick(index, section.type)}
                  className={`
                    relative flex-shrink-0 px-4 py-3 text-sm font-medium whitespace-nowrap
                    transition-all duration-200 hover:text-primary
                    ${activeSection === index ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-gray-900'}
                  `}
                >
                  {section.name}

                  {/* Active underline */}
                  {activeSection === index && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform origin-center animate-in slide-in-from-bottom-1 duration-200" />}
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white shadow-md hover:bg-gray-50" />
          <CarouselNext className="right-2 bg-white shadow-md hover:bg-gray-50" />
        </Carousel>
      </div>
    </div>
  )
}

export default SectionsNav
