import { API_URL } from '../constants/api-routing';

export function useFetch() {
  function request(method: string) {
    return async (
      resource: RequestInfo,
      args?: {
        body?: any;
      }
    ) => {
      const requestOptions: RequestInit = {
        method,
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      try {
        const body = args.body ? JSON.stringify(args.body) : null;
        const res = await fetch(API_URL + resource, {
          ...requestOptions,
          body,
        });

        return await res.json();
      } catch (error: unknown) {
        return null;
      }
    };
  }

  return {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    remove: request('DELETE'),
  };
}
