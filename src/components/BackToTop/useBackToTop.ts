import { useCallback, useEffect, useState } from 'react';

export const useBackToTop = () => {
  const [show, setShow] = useState(false);
  const [lastScrollVertical, setLastScrollVetical] = useState(0);

  const handleControlScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setShow(false);

      return;
    }

    if (window.innerHeight + window.scrollY > lastScrollVertical) {
      setShow(false);
    } else {
      setShow(true);
    }

    setLastScrollVetical(document.body.offsetHeight);
  }, [lastScrollVertical]);

  useEffect(() => {
    window.addEventListener('scroll', handleControlScroll);

    return () => window.removeEventListener('scroll', handleControlScroll);
  }, [handleControlScroll]);

  return { show };
};
