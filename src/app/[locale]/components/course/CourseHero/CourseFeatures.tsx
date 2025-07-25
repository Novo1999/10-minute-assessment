import CourseEnroll from '@/app/[locale]/components/course/CourseHero/CourseEnroll'
import { CourseData } from '@/app/types'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const CourseFeatures = ({ courseData, className }: { courseData: CourseData; className?: string }) => {
  const [isOutOfView, setIsOutOfView] = useState(false)
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When component goes out of view (scrolled past the top), show sticky version
        setIsOutOfView(!entry.isIntersecting && entry.boundingClientRect.bottom < 0)
      },
      {
        rootMargin: '0px',
        threshold: 0,
      }
    )

    if (componentRef.current) {
      observer.observe(componentRef.current)
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current)
      }
    }
  }, [])

  return (
    <>
      <div className={className} ref={componentRef}>
        <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
        <div>
          {courseData.checklist.map((feature) => (
            <div key={feature.id}>
              <div className="flex items-center mb-3 leading-5">
                <div className="inline-block h-[1.25rem] w-[1.25rem] transition-opacity duration-300 ease-in-out text-[0px]">
                  <Image alt="icon" src={feature.icon} width={50} height={50} className="transparent" />
                </div>
                <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{feature.text}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky version when original is out of view */}
      {createPortal(
        <div
          className={`${className} ${
            isOutOfView ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } transition-opacity duration-300 ease-in-out hidden sm:block fixed border p-4 top-12 w-full md:max-w-[20.625rem] lg:max-w-[25rem] sm:right-6 lg:right-2 xl:right-40 2xl:right-[20rem] z-[9999] bg-white`}
        >
          <CourseEnroll courseData={courseData} className="hidden lg:block" />
          <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
          <div>
            {courseData.checklist.map((feature) => (
              <div key={feature.id}>
                <div className="flex items-center mb-3 leading-5">
                  <div className="inline-block h-[1.25rem] w-[1.25rem] transition-opacity duration-300 ease-in-out text-[0px]">
                    <Image alt="icon" src={feature.icon} width={50} height={50} className="transparent" />
                  </div>
                  <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">{feature.text}</h4>
                </div>
              </div>
            ))}
          </div>
          <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
            <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
            <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-600">
              <Phone className="w-4 h-4 mr-1" />
              <span className="ml-1">ফোন করুন (16910)</span>
            </span>
          </p>
        </div>,
        document.body
      )}
    </>
  )
}

export default CourseFeatures
