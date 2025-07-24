export interface Feature {
  icon: string
  id: string
  subtitle: string
  title: string
}

export interface FeatureExplanation {
  checklist: string[]
  file_type: 'image' | 'video'
  file_url: string
  id: string
  title: string
  video_thumbnail: string
}
