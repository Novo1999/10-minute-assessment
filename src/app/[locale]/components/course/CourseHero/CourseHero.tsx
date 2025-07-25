'use client'
import CourseEnroll from '@/app/[locale]/components/course/CourseHero/CourseEnroll'
import CourseFeatures from '@/app/[locale]/components/course/CourseHero/CourseFeatures'
import MediaPlayer from '@/app/[locale]/components/course/CourseHero/MediaPlayer'
import ThumbnailGallery from '@/app/[locale]/components/course/CourseHero/ThumbnailGallery'
import { CourseData } from '@/app/types'
import { Phone, Star } from 'lucide-react'
import React, { useState } from 'react'

interface CourseHeroProps {
  courseData: CourseData
}

const CourseHero: React.FC<CourseHeroProps> = ({ courseData }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Filter media items for preview gallery
  const previewMediaItems = courseData.media.filter((item) => item.name === 'preview_gallery')

  return (
    <>
      <div className="relative flex flex-col gap-4 container md:flex-row md:gap-12 min-h-[18.75rem] bg-cover bg-center bg-[url(/course-hero-bg.jpeg)]">
        <div className="relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[18.75rem]">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_21.75rem)] lg:max-w-[calc(100%_-_28rem)]">
            {/* Mobile Media Player */}
            <div className="block mt-4 md:mt-0 md:hidden">
              <MediaPlayer
                activeMediaIndex={activeMediaIndex}
                isVideoPlaying={isVideoPlaying}
                setIsVideoPlaying={setIsVideoPlaying}
                setActiveMediaIndex={setActiveMediaIndex}
                previewMediaItems={previewMediaItems}
              />
              <ThumbnailGallery activeMediaIndex={activeMediaIndex} setActiveMediaIndex={setActiveMediaIndex} setIsVideoPlaying={setIsVideoPlaying} previewMediaItems={previewMediaItems} />

              {/* Mobile Title - Hidden on Desktop */}
              <div className="block md:hidden">
                <h1 className="text-gray mb-3 mt-3 text-[1.3125rem] font-semibold md:text-4xl"></h1>
                <div className="mb-4 text-sm font-normal"></div>
              </div>
            </div>

            {/* Course Title and Description */}
            <h1 className="text-white mb-2 text-[1.3125rem] font-semibold md:text-4xl">{courseData.title}</h1>

            <div className="mb-2">
              <button className="flex flex-row flex-wrap gap-2 text-white">
                <span className="inline-block">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </span>
                <span className="inline-block text-sm md:text-base">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
              </button>
            </div>

            <div>
              <div className="text-gray-400 overflow-hidden h-auto">
                <div>
                  <div dir="ltr">
                    <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: courseData?.description }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Course Info */}
          <section className="w-full md:max-w-[20.625rem] lg:max-w-[25rem] order-2 bg-white absolute right-0 md:top-[3.125rem]">
            <div className="md:sticky md:top-[7rem]">
              <div className="md:border">
                {/* Desktop Media Player */}
                <div className="hidden p-1 md:block">
                  <MediaPlayer
                    activeMediaIndex={activeMediaIndex}
                    isVideoPlaying={isVideoPlaying}
                    setIsVideoPlaying={setIsVideoPlaying}
                    setActiveMediaIndex={setActiveMediaIndex}
                    previewMediaItems={previewMediaItems}
                  />
                  <ThumbnailGallery activeMediaIndex={activeMediaIndex} setActiveMediaIndex={setActiveMediaIndex} setIsVideoPlaying={setIsVideoPlaying} previewMediaItems={previewMediaItems} />

                  {/* Mobile Title in Sidebar - Hidden on Desktop */}
                  <div className="block md:hidden">
                    <h1 className="text-gray mb-3 mt-3 text-[1.3125rem] font-semibold md:text-4xl">{courseData.title}</h1>
                    <div className="mb-4 text-sm font-normal"></div>
                  </div>
                </div>

                {/* Spacer divs for desktop */}
                <div className="hidden md:block"></div>

                {/* Course Features - Now visible on mobile */}
                <div className="hidden sm:block">
                  <div className="grid py-2 md:p-4">
                    <CourseEnroll className="hidden sm:block" courseData={courseData} />
                    <CourseFeatures courseData={courseData} />
                  </div>
                </div>

                {/* Contact Info */}
              </div>
              <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
                <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
                <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green-600">
                  <Phone className="w-4 h-4 mr-1" />
                  <span className="ml-1">ফোন করুন (16910)</span>
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="grid py-2 p-4 sm:hidden">
        <div className="flex flex-col w-full">
          <CourseEnroll className="sm:hidden" courseData={courseData} />
        </div>
        <CourseFeatures className="sm:hidden" courseData={courseData} />
      </div>
    </>
  )
}

export default CourseHero
