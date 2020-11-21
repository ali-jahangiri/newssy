import { useEffect, useState } from "react";

import apiKey from "../apiKey";

const useFetch = (country) => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&${apiKey}`
        );
        const data = await response.json();
        setValue(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [setLoading, setValue, setError, country]);

  return [value, error, loading];
};

export default useFetch;
