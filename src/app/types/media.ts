export interface Media {
  name: string
  resource_type: 'video' | 'image'
  resource_value: string
  thumbnail_url?: string
}
