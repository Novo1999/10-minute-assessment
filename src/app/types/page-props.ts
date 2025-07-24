import { Locale } from '@/i18n/i18n-config';

type Params = Promise<{ locale: Locale; id?: string }>
type SearchParams = Promise<{ [key: string]: string | undefined }>

export type PageProps = {
  params: Params
  searchParams?: SearchParams
}
