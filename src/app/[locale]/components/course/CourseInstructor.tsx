import { CourseData, Instructor } from '@/app/types'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface CourseInstructorProps {
  courseData: CourseData
}

const CourseInstructor: React.FC<CourseInstructorProps> = ({ courseData }) => {
  const instructorsSection = courseData?.sections?.find((sec) => sec?.type === 'instructors')
  const instructors = instructorsSection?.values as Instructor[]

  if (!instructors || instructors.length === 0) {
    return null
  }

  return (
    <div id="instructors" className="pt-4 pb-2 bg-white">
      <div className="container">
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">{instructorsSection?.name}</h2>

        {instructors.map((instructor: Instructor) => (
          <div key={instructor?.slug} className="flex items-center md:rounded-md md:border md:p-5">
            <div>
              <div className="rounded-full overflow-hidden w-[4.5625rem] h-[4.5625rem]">
                <Image alt={`Instructor ${instructor.name}`} src={instructor.image} width={73} height={73} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex-1 ml-4">
              <h3 className="text-lg font-medium">
                {instructor.has_instructor_page ? (
                  <a className="flex items-center hover:text-green-600 transition-colors duration-200" href={`/skills/instructors/${instructor.slug}/`}>
                    {instructor.name}
                    <span className="ml-2">
                      <ChevronRight size={14} className="text-gray-500" />
                    </span>
                  </a>
                ) : (
                  <span>{instructor.name}</span>
                )}
              </h3>

              <div className="text-sm text-gray-600 mt-1">
                <div
                  dangerouslySetInnerHTML={{
                    __html: instructor.description || instructor.short_description,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseInstructor
