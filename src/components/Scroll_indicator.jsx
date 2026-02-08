import { useEffect, useState } from "react";

function ScrollIndicator({ onScroll }) {

    const [scoll,setScroll] = useState()
  function handlePercentage() {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrollHeight <= 0) {
      onScroll(0);
      return;
    }
    const scrollPercentage = (scrolled / scrollHeight) * 100;
    onScroll(scrollPercentage);
    setScroll(scrollPercentage)
  }
  console.log(scoll);
  


  useEffect(() => {
    window.addEventListener("scroll", handlePercentage);
   
    return () => {
      window.removeEventListener("scroll", handlePercentage);
    };
  }, []);

  return null;
}

export default ScrollIndicator;
