import { RefObject } from 'react';

const scrollToTarget = (targetRef: RefObject<HTMLDivElement>): void => {
  // targetRef.current가 null이 아니라면 해당 요소로 스크롤
  if (targetRef.current) {
    const targetPosition = targetRef.current.offsetTop; // 대상 요소의 상단 위치
    const startPosition = window.pageYOffset; // 현재 스크롤 위치
    const distance = targetPosition - startPosition; // 이동 거리
    const duration = 1000; // 지속 시간 (ms)
    let start: number | null = null;

    // CHATGPT에게 박수~~~
    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    // 애니메이션 함수
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);

      window.scrollTo(0, easeInOutCubic(percent, startPosition, distance, 1));

      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
};

export default scrollToTarget;
