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
import { Metadata } from 'next'

// Next.js will invalidate the cache every 24 hours
export const revalidate = 86400

// Pre-render this page at build time using the slug
export const dynamicParams = true

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    slug: IELTS_COURSE,
    lang: locale,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const { data } = await CourseApiService.getCourse(slug, locale)

  const seoData = data.seo || {}
  const ogImage = seoData.defaultMeta?.find((meta) => meta.value === 'og:image')?.content
  const ogDescription = seoData.defaultMeta?.find((meta) => meta.value === 'og:description')?.content

  const metadata = {
    title: seoData.title || `${data?.title} - 10 Minute School`,
    description: seoData.description || ogDescription || '',
    keywords: seoData.keywords || [],

    openGraph: {
      title: data?.title,
      description: ogDescription || '',
      url: `/${locale}/courses/${data?.slug}`,
      images: [
        {
          url: ogImage || data?.media?.[0]?.thumbnail_url || '',
          alt: data?.title || 'Course Image',
        },
      ],
      locale: locale === 'bn' ? 'bn_BD' : 'en_US',
    },

    twitter: {
      card: 'summary_large_image',
      title: data?.title,
      description: ogDescription || '',
      images: [ogImage || data?.media?.[0]?.thumbnail_url || ''],
    },
  }
  return metadata
}

export default async function CoursePage({ params }: PageProps) {
  const { locale, slug } = await params
  const { data } = await CourseApiService.getCourse(slug, locale)

  const schemaData = data.seo?.schema?.filter((schema) => schema.type === 'ld-json' && schema.meta_value)

  return (
    <>
      {schemaData?.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: schema.meta_value,
          }}
        />
      ))}

      <div className="min-h-[90vh]">
        <CourseHero courseData={data} />
        <div className="flex sm:gap-24">
          <div className="flex flex-col w-full sm:w-2/3 lg:w-4/5 xl:w-[70%] 2xl:w-[78%]">
            <SectionsNav courseData={data} />
            <CourseInstructor courseData={data} />
            <CourseLaidOut courseData={data} />
            <WhatYouWillLearn courseData={data} />
            <CourseExclusiveFeatures courseData={data} />
            <CourseDetails courseData={data} />
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-1/5 xl:w-[30%] 2xl:w-[22%]">{/* Sidebar content can go here */}</div>
        </div>
      </div>
    </>
  )
}
