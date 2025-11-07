import { useEffect, useState } from "react";
import { CanceledError, type Response } from "../services/api-client";

export default function useGeneric<T>(
  getFunction: () => {
    request: Promise<Response<T[], any, {}>>;
    cancel: AbortController;
  }
) {
  const [elements, setElements] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = getFunction();

    request
      .then((res) => {
        setElements(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      cancel.abort();
    };
  }, []);

  return { elements, setElements, error, setError, isLoading };
}
