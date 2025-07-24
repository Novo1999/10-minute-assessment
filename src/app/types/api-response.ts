// Generic API Response Structure
export interface ApiResponse<T = unknown> {
  code: number
  data: T
  error: unknown[]
  message: string
  payload: unknown[]
  status_code: number
}

// Success Response (when data is present)
export interface ApiSuccessResponse<T> extends ApiResponse<T> {
  code: 200
  status_code: 200
  message: 'Success'
  error: []
  payload: []
}

// Error Response (when there's an error)
export interface ApiErrorResponse extends ApiResponse<null> {
  code: number
  status_code: number
  data: null
  error: string[] | { message: string; field?: string }[]
  message: string
}
