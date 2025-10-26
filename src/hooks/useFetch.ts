import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);
      let attempts = 0;

      while (attempts < 3) {
        try {
          const response = await axios.get<T>(url);
          if (!isMounted) return;
          setData(response.data);
          setError(null);
          break;
        } catch (err: any) {
          if (err.response?.status === 429) {
            attempts++;
            const delay = attempts * 1000;
            await new Promise((r) => setTimeout(r, delay));
          } else {
            if (isMounted) setError(err);
            break;
          }
        } finally {
          if (isMounted) setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};
