const BASE_URL = 'http://192.168.1.70:3000/api';

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
        const res = await fetch(BASE_URL + resource, {
          ...requestOptions,
          body: JSON.stringify(args.body),
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
