import React from 'react';
import styles from './index.module.scss';

export interface ProjectTitleType {
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  /**
   * 검은색의 두꺼운 부분의 택스트입니다. 먼저 출력됩니다.
   */
  blackBold: string;
  /**
   * 검은색보통 두께 택스트입니다. 2번째로 출력됩니다.
   */
  regular1: string;
  /**
   * 노랑색 부분의 텍스트입니다. 3번째 출력됩니다.
   */
  yellowBold: string;
  /**
   * 검은색보통 두께 택스트입니다. 4번째로 출력됩니다.
   */
  regular2: string;
}

const ProjectTitle = ({
  marginBottom = 0,
  marginRight = 0,
  marginLeft = 0,
  marginTop = 0,
  blackBold,
  regular1,
  yellowBold,
  regular2,
}: ProjectTitleType) => {
  return (
    <p
      style={{ marginLeft, marginRight, marginTop, marginBottom }}
      className={styles.Title}
    >
      <strong className={styles.BlackBold}>{blackBold}</strong>
      <span className={styles.BlackBold}>{regular1}</span>
      <strong className={styles.YellowBold}>{yellowBold}</strong>
      <span>{regular2}</span>
    </p>
  );
};

export default ProjectTitle;
