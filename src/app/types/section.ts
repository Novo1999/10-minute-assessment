import { AboutItem } from '@/app/types/about-item'
import { GroupJoinEngagement } from '@/app/types/engagement'
import { FAQ } from '@/app/types/faq'
import { Feature, FeatureExplanation } from '@/app/types/feature'
import { Instructor } from '@/app/types/instructor'
import { Offer } from '@/app/types/offer'
import { Pointer } from '@/app/types/pointer'
import { Testimonial } from '@/app/types/testimonial'

// Section Value Types (Union type for all possible section values)
export type SectionValue = Offer[] | Instructor[] | Feature[] | GroupJoinEngagement[] | Pointer[] | AboutItem[] | FeatureExplanation[] | Testimonial[] | FAQ[]

export interface Section {
  type:
    | 'bundle_items'
    | 'offers'
    | 'instructors'
    | 'features'
    | 'group_join_engagement'
    | 'pointers'
    | 'content_preview'
    | 'about'
    | 'feature_explanations'
    | 'free_items'
    | 'certificate'
    | 'bundle_certificate'
    | 'testimonials'
    | 'requirements'
    | 'how_to_pay'
    | 'faq'
  name: string
  description: string
  bg_color: string
  order_idx: number
  values: SectionValue
}
