//libs
import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  //create a current path & setter
  const { pathname } = window.location;
  const [currentPath, setCurrentPath] = useState(pathname);
  //change pathname on nav event
  useEffect(() => {
    const onLocationChange = () => {
      const { pathname } = window.location;
      setCurrentPath(pathname);
    };
    //run location change function on nav event
    window.addEventListener('popstate', onLocationChange);
    //cleanup funcion to remove nav event listener
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  //check current path against component path
  //render appropriate component based on component path
  return currentPath === path ? children : null;
};

export default Route;
