import React, { useEffect } from 'react';
import styles from './index.module.scss';

export interface MainPictureType {
  /**
   * 모서리 부분의 둥근 정도입니다.
   */
  borderRadius: number;
  /**
   * 보여줄 사진의 url 모음 입니다.
   */
  urls: Array<string>;
}

const MainPicture = ({ borderRadius, urls }: MainPictureType) => {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const windowHeight = window.innerHeight; // 브라우저 창의 높이
          const docHeight = document.body.offsetHeight; // 문서 전체의 높이
          const maxScroll = docHeight - windowHeight; // 최대 스크롤 가능 거리
          const speed = 1;
          document
            .querySelectorAll(`.${styles.parallax_section}`)
            .forEach((el: Element, index, arr) => {
              const htmlEl = el as HTMLElement;
              let yPos = scrolled * speed; // Y축 이동 거리 계산
              if (index === arr.length - 1 && scrolled > maxScroll) {
                yPos = maxScroll * speed; // 마지막 섹션에서는 스크롤 위치가 최대 스크롤 위치를 넘지 않도록 설정
              }
              htmlEl.style.transform = `translateY(-${yPos * 0.8}px)`;
            });

          // 스크롤 위치가 0일 때 추가 동작을 구현할 수 있습니다.
          // 예: 첫 번째 사진으로 스크롤 이동 등

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div style={{ borderRadius }} className={styles.wrapper_outer}>
      <div className={styles.wrapper}>
        {urls.map(v => (
          <div key={v} className={styles.parallax_section}>
            <div
              style={{ backgroundImage: `url('${v}')` }}
              className={styles.parallax_bg}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPicture;
