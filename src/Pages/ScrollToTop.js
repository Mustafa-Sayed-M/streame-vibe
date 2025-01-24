import React from 'react';
import { useLocation } from 'react-router-dom';
function ScrollToTop() {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return;
}
export default ScrollToTop;