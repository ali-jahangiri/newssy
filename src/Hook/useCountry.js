import { useState } from "react";
const useCountry = () => {
  const [countery, setCountery] = useState("us");
  return [countery, setCountery];
};
export default useCountry;
