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
import { i18n } from '@/i18n/i18n-config'

// Next.js will invalidate the cache every 24 hours
export const revalidate = 86400

// Pre-render this page at build time using the slug
// if a request comes in for a slug that doesn't exist,
// Next.js will try to server render the page on demand
export const dynamicParams = true

export async function generateStaticParams() {
  return (
    i18n.locales.map((locale) => ({
      slug: IELTS_COURSE,
      lang: locale,
    })) || []
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug, locale } = await params
  const { data } = await CourseApiService.getCourse(slug, locale)

  return {
    title: data?.title + ' - 10 minute school',

    openGraph: {
      url: `/courses/${data?.slug}`,
      images: [data?.media?.[0]?.thumbnail_url],
    },
  }
}

export default async function CoursePage({ params }: PageProps) {
  const { locale, slug } = await params
  const { data } = await CourseApiService.getCourse(slug, locale)

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
