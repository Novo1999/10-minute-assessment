import CoursePrice from '@/app/[locale]/components/course/CourseHero/CoursePrice';
import { CourseData } from '@/app/types';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const CourseEnroll = ({ courseData, className }: { courseData: CourseData; className: string }) => {
  const [isOutOfView, setIsOutOfView] = useState(false)
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When component goes out of view (scrolled past the top), show fixed bottom
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
        <CoursePrice className={className} />
        <Button className="bg-primary w-full cursor-pointer whitespace-nowrap button text-white text-center md:w-full text-sm rounded-lg hover:shadow-none shadow-black/30 shadow-[0px_9px_0px_-4px_rgba(0,_0,_0,_0.1)] px-4 py-1.5 mb-6">{courseData?.cta_text?.name}</Button>
      </div>
      {/* show this at bottom when original component is out of view */}
      <div
        className={`${className} ${
          isOutOfView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
        } transition-all duration-300 ease-in-out block sm:hidden bg-white fixed bottom-0 z-50 w-full left-0 px-4 shadow-[0px_-9px_13px_0px_rgba(0,_0,_0,_0.1)] border`}
      >
        <CoursePrice className={className} />
        <Button className="bg-primary w-full whitespace-nowrap button cursor-pointer text-white text-center md:w-full text-sm rounded-lg shadow-black/30 shadow-[0px_9px_0px_-4px_rgba(0,_0,_0,_0.1)] px-4 py-1.5 mb-6">
          {courseData?.cta_text?.name}
        </Button>
      </div>
    </>
  )
}

export default CourseEnroll
