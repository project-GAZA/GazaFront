import React, { useEffect, useRef } from 'react';

interface SectionContainerType {
  children: React.ReactNode;
}

const SectionContainer = ({ children }: SectionContainerType) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('fadeInUpAnimation');
    }
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default SectionContainer;
