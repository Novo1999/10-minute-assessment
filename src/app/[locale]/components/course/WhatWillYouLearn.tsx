import { Pointer, Section } from '@/app/types'
import { Check } from 'lucide-react'
import React from 'react'

interface WhatYouWillLearnProps {
  sectionData: Section
}

const WhatYouWillLearn: React.FC<WhatYouWillLearnProps> = ({ sectionData }) => {
  const pointers = sectionData?.values as Pointer[]

  if (!pointers || pointers.length === 0) {
    return null
  }

  return (
    <div>
      <div id="pointers">
        <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
          <div className="pt-6 pb-6 bg-white md:pb-0 md:pt-0">
            <div className="container">
              <h2 className="mb-4 text-xl font-semibold md:text-2xl">{sectionData?.name}</h2>

              <div className="rounded-md md:border">
                <div className="pt-2 md:p-6">
                  <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                    {pointers.map((pointer) => (
                      <li key={pointer.id} className="flex items-start gap-2 mb-2">
                        <Check className="mr-1 mt-[0.125rem] flex-shrink-0 text-[#6294F8]" height="20" width="20" />
                        <div className="flex-1">{pointer.text}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatYouWillLearn
