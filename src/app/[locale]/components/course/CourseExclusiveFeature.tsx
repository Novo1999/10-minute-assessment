import { CourseData, FeatureExplanation } from '@/app/types'
import { Check } from 'lucide-react'
import Image from 'next/image'

const CourseExclusiveFeatures = ({ courseData }: { courseData: CourseData }) => {
  const exclusiveFeaturesSection = courseData?.sections?.find((sec) => sec?.type === 'feature_explanations')
  const exclusiveFeatures = exclusiveFeaturesSection?.values as FeatureExplanation[]

  if (!exclusiveFeatures || exclusiveFeatures.length === 0) {
    return null
  }

  return (
    <div id="feature_explanations" className="flex flex-col gap-3 mb-10 container">
      <h2 className="text-xl font-semibold leading-[30px] text-black">{exclusiveFeaturesSection?.name || 'Course Exclusive Feature'}</h2>
      <div className="grid grid-cols-1 px-5 border divide-y rounded-md">
        {exclusiveFeatures.map((feature) => (
          <div key={feature.id} className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row">
            <div className="flex flex-col gap-2">
              <h2 className="text-[14px] font-[500] leading-[30px] text-[#111827] md:text-[16px]">{feature.title}</h2>
              {feature.checklist &&
                feature.checklist.map((item, index) => (
                  <div key={index} className="flex flex-row items-center gap-5">
                    <Check className="mr-1 mt-[0.125rem] flex-shrink-0 text-[#6294F8]" height="20" width="20" />
                    <p className="text-[14px] font-[400] leading-[24px] text-[#4B5563] md:text-[16px]">{item}</p>
                  </div>
                ))}
            </div>
            {feature.file_url && (
              <div>
                <div className="mb-4 mx-auto max-w-[350px] transition-opacity duration-300 ease-in-out">
                  <Image alt={feature.title} src={feature.file_url} width={250} height={200} className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseExclusiveFeatures
