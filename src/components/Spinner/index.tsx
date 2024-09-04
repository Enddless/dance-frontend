import { useEffect, useState } from 'react';

function Spinner() {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(true);
    }, 500); // Установите желаемую задержку в миллисекундах

    return () => clearTimeout(timer);
  }, []);

  return (
    showLoader && (
      <div className='spinner'>
        <div className='spinner__ring'></div>
        <span>Loading...</span>
      </div>
    )
  );
}

export default Spinner;
