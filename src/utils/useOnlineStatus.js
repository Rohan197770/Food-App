import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check if online
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    //these are function given by browser or window to check status
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //boolean value
  return onlineStatus;
};

export default useOnlineStatus;
