import React, { useEffect, useState } from 'react';

function useMediaQuery(query: string): boolean {
  const getMatches = (): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches());

  const handleChange = React.useCallback(() => {
    setMatches(getMatches());
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    // Triggered at the first client-side load and if query changes
    handleChange();
    matchMedia.addEventListener('change', handleChange);
    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
