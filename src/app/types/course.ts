import { ApiResponse } from '@/app/types/api-response'
import { ChecklistItem } from '@/app/types/checklist'
import { CtaText } from '@/app/types/cta-text'
import { Media } from '@/app/types/media'
import { Section } from '@/app/types/section'
import { SEOData } from '@/app/types/seo'

// Old Info
export interface OldInfo {
  cat_id: number
  course_id: number
  platform: string
  skills_cat_id: number
  slug: string
}

// Main Course Data Interface
export interface CourseData {
  slug: string
  id: number
  title: string
  description: string
  platform: string
  type: string
  modality: string
  old_info: OldInfo
  start_at: string
  media: Media[]
  checklist: ChecklistItem[]
  seo: SEOData
  cta_text: CtaText
  sections: Section[]
  is_cohort_based_course: boolean
  secondary_cta_group: unknown[]
  delivery_method: string
}

// API Response Structure for Course
export type CourseResponse = ApiResponse<CourseData>
