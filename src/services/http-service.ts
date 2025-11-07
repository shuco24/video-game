import apiClient from "./api-client";
interface Entity {
  id: number;
}

class HttpService<T extends Entity> {
  private readonly endpoint;
  private readonly transformerResponse;

  constructor(endpoint: string, transformerResponse?: (data: string) => T[]) {
    this.endpoint = endpoint;
    this.transformerResponse = transformerResponse;
  }

  getAll() {
    const defaultTransformers = apiClient.defaults.transformResponse;

    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
      ...(this.transformerResponse && {
        transformResponse: [
          ...(Array.isArray(defaultTransformers) ? defaultTransformers : []),
          this.transformerResponse,
        ],
      }),
    });

    return { request, cancel: controller } as const;
  }
}

export default HttpService;
