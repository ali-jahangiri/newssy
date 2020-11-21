import { useState } from "react";
const useDetails = () => {
  const [details, setDetails] = useState(null);
  return [details, setDetails];
};

export default useDetails;
