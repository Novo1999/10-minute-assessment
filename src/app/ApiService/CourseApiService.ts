import { API_BASE } from '@/app/constants/url'
import { CourseResponse } from '@/app/types'
import { Locale } from '@/i18n/i18n-config'

export default class CourseApiService {
  static getCourse = async (slug: string, lang: Locale): Promise<CourseResponse> => {
    try {
      const res = await fetch(`${API_BASE}/discovery-service/api/v1/products/${slug}?lang=${lang}`, {
        headers: {
          'X-TENMS-SOURCE-PLATFORM': 'web',
        },
      })
      if (!res.ok) throw new Error('Failed to get course data')
      return await res.json()
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error('An unknown error occurred')
    }
  }
}
