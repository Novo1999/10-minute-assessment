import { ChecklistItem } from '@/app/types/checklist'
import { CtaText } from '@/app/types/cta-text'
import { Media } from '@/app/types/media'
import { Section } from '@/app/types/section'

export interface OldInfo {
  cat_id: number
  course_id: number
  platform: string
  skills_cat_id: number
  slug: string
}

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
  seo: unknown[]
  cta_text: CtaText
  sections: Section[]
  is_cohort_based_course: boolean
  secondary_cta_group: unknown[]
  delivery_method: string
}
export interface CourseResponse {
  code: number
  data: CourseData
  error: unknown[]
  message: string
  payload: unknown[]
  status_code: number
}
