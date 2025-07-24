'use client'
import { CourseData } from '@/app/types'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

interface SectionsNavProps {
  courseData: CourseData
  onSectionSelect?: (sectionType: string) => void
}

const SectionsNav: React.FC<SectionsNavProps> = ({ courseData, onSectionSelect }) => {
  const [activeSection, setActiveSection] = useState(0)

  // Filter out sections that should be displayed in carousel
  const displayableSections = courseData.sections.filter((section) => section.name && section.name.trim() !== '')

  const scrollLeft = () => {
    const container = document.getElementById('sections-carousel')
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    const container = document.getElementById('sections-carousel')
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  const handleSectionClick = (index: number, sectionType: string) => {
    setActiveSection(index)
    onSectionSelect?.(sectionType)

    // Scroll the clicked section into view
    const sectionElement = document.getElementById(`section-${index}`)
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }

  if (!displayableSections.length) {
    return null
  }

  return (
    <div className="bg-white border-b">
      <div className="container">
        <div className="relative">
          {/* Left Arrow */}
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors" aria-label="Scroll left">
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          {/* Sections Container */}
          <div id="sections-carousel" className="flex overflow-x-auto scrollbar-none scroll-smooth px-12" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {displayableSections.map((section, index) => (
              <button
                key={section.type}
                id={`section-${index}`}
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
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-50 transition-colors" aria-label="Scroll right">
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SectionsNav
