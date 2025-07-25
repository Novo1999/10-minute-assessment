import { IELTS_COURSE } from '@/app/constants/slugs'
import { redirect } from 'next/navigation'

export default async function CoursePage() {
  // redirect the user, because we need to implement ISR
  return redirect(`/course/${IELTS_COURSE}`)
}
