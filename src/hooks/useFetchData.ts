import { useEffect, useState } from "react";
import { ErrorType } from "../definitions.ts";

interface FetchResponse<T> {
  data: T;
  loading: boolean;
  error: ErrorType;
}

const useFetchData = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = useState<T>([] as T);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>({} as ErrorType);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError({
            status: response.status,
            message: response.statusText,
          });
        }
        setData(await response.json());
      } finally {
        setLoading(false);
      }
    };

    getData().then();
  }, [url]);

  return { data, loading, error };
};
export default useFetchData;
