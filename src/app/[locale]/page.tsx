import CourseHero from '@/app/[locale]/components/course/CourseHero'
import CourseApiService from '@/app/ApiService/CourseApiService'
import { IELTS_COURSE } from '@/app/constants/slugs'
import { PageProps } from '@/app/types/page-props'

export default async function CoursePage({ params }: PageProps) {
  const { locale } = await params
  const { data } = await CourseApiService.getCourse(IELTS_COURSE, locale)
  console.log('🚀 ~ Home ~ data:', data)
  return (
    <div>
      <CourseHero />
    </div>
  )
}
