import React, { useEffect, useRef } from 'react';

interface SectionContainerType {
  children: React.ReactNode;
}

const SectionContainer = ({ children }: SectionContainerType) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divEl = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting은 타겟 엘리먼트가 뷰포트에 들어왔는지 여부를 나타냅니다.
        if (entry.isIntersecting) {
          if (divEl) divEl.classList.add('fadeInUpAnimation');
        }
      },
      {
        // 여기서는 루트 마진을 설정하지 않았지만, 필요에 따라 설정할 수 있습니다.
        // 예: rootMargin: '0px'
        threshold: 0.4, // 10% 이상 보이면 콜백을 실행합니다.
      },
    );
    if (divEl) {
      observer.observe(divEl);
    }
    return () => {
      if (divEl) {
        observer.unobserve(divEl);
      }
    };
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default SectionContainer;
