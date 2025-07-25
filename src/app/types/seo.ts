export interface SEOMeta {
  content: string
  type: 'property' | 'name'
  value: string
}

export interface SEOSchema {
  meta_name: string
  meta_value: string
  type: 'ld-json'
}

export interface SEOData {
  defaultMeta: SEOMeta[]
  description: string
  keywords: string[]
  schema: SEOSchema[]
  title: string
}
