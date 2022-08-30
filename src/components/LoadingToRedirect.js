import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(1);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1);

    count === 0 && history.push("/login");
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div>
      {/* <p>Redirecting you in {count} seconds</p> */}
    </div>
  );
};

export default LoadingToRedirect;
