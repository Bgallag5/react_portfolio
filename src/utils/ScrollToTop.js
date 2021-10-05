import {useEffect} from 'react';
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}


///helper function that loads each page at the top; was loading my contact ...
//page at the bottom where I had clicked it in the footer