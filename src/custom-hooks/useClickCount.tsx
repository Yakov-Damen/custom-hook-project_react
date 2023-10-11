import { useState } from "react";

const useClickCount = () :[number, ()=> void]=> {
  const [count, setCount] = useState(0);
  const handleEvent = () => setCount((prev) => prev += 1);
  return [count, handleEvent];
};
export default useClickCount;
