import { Feature, Section } from '@/app/types'
import Image from 'next/image'
import React from 'react'

interface CourseLaidOutProps {
  sectionData: Section
}

const CourseLaidOut: React.FC<CourseLaidOutProps> = ({ sectionData }) => {
  const features = sectionData?.values as Feature[]

  if (!features || features.length === 0) {
    return null
  }

  return (
    <div id="features" className="bg-white py-8">
      <div className="container">
        <h2 className="mb-8 text-2xl font-semibold text-gray-900 md:text-3xl">{sectionData?.name}</h2>

        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-row items-start gap-3 m-1">
              {/* Icon */}
              <div>
                <div className="mb-4 mx-auto transition-opacity duration-300 ease-in-out">
                  <Image alt={feature.title} src={feature.icon} width={36} height={36} className="w-9 h-9 object-contain" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 gap-2">
                <h3 className="text-lg font-medium leading-[1.625rem] text-white">{feature.title}</h3>
                <p className="text-sm font-normal leading-[1.375rem] text-[#9CA3AF]">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseLaidOut
