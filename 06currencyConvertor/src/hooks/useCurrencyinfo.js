import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((err) => console.error("API Error:", err));
  }, [currency]);

  return data;
}

export default useCurrencyinfo;
