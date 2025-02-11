export interface ApiResponse<T> {
  status: string; // e.g., "success" or "error"
  statusCode: number; // HTTP status code
  data: T; // Generic type for the response data
}
