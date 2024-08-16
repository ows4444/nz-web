export interface ResponseState {
  message: string;
  error?: string;
  data?: {
    [key: string]: string[];
  };
}
