import axios, { AxiosInstance, AxiosResponse } from "axios";

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;
  public controller: AbortController | null = new AbortController();

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL: `http://localhost:5216/${baseURL}`,
    });

    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    );
  }

  private async handleResponse(response: AxiosResponse) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return response;
  }
  private handleError(error: any) {
    return Promise.reject(error);
  }
}
