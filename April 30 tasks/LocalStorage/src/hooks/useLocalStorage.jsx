import React, { useEffect, useState } from "react";

function useLocalStorage() {
  const [local, setLocal] = useState(
    localStorage.getItem("local")
      ? JSON.parse(localStorage.getItem("local"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(local));
  }, [local]);
  return [local, setLocal];
}

export default useLocalStorage;
