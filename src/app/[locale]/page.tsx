import CourseDetails from '@/app/[locale]/components/course/CourseDetails'
import CourseExclusiveFeatures from '@/app/[locale]/components/course/CourseExclusiveFeature'
import CourseHero from '@/app/[locale]/components/course/CourseHero/CourseHero'
import CourseInstructor from '@/app/[locale]/components/course/CourseInstructor'
import CourseLaidOut from '@/app/[locale]/components/course/CourseLaidOut'
import WhatYouWillLearn from '@/app/[locale]/components/course/WhatWillYouLearn'
import SectionsNav from '@/app/[locale]/components/shared/SectionsNav'
import CourseApiService from '@/app/ApiService/CourseApiService'
import { IELTS_COURSE } from '@/app/constants/slugs'
import { PageProps } from '@/app/types/page-props'

export default async function CoursePage({ params }: PageProps) {
  const { locale } = await params
  const { data } = await CourseApiService.getCourse(IELTS_COURSE, locale)

  return (
    <div className="min-h-[90vh]">
      <CourseHero courseData={data} />
      <div className="flex sm:gap-24">
        <div className="flex flex-col w-full sm:w-1/2 lg:w-3/5 xl:w-[70%] 2xl:w-[78%]">
          <SectionsNav courseData={data} />
          <CourseInstructor courseData={data} />
          <CourseLaidOut courseData={data} />
          <WhatYouWillLearn courseData={data} />
          <CourseExclusiveFeatures courseData={data} />
          <CourseDetails courseData={data} />
        </div>
        <div className="sm:w-1/3 lg:w-1/5 xl:w-1/6"></div>
      </div>
    </div>
  )
}
