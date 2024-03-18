import React from 'react';
import styles from './index.module.scss';

export interface TitleType {
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  /**
   * 검은색 부분의 택스트입니다. 먼저 출력됩니다.
   */
  black: string;
  /**
   * 노랑색 부분의 텍스트입니다. 나중에 출력됩니다.
   */
  yellow: string;
}

const Title = ({
  marginBottom = 0,
  marginRight = 0,
  marginLeft = 0,
  marginTop = 0,
  black,
  yellow,
}: TitleType) => {
  return (
    <div
      style={{ marginLeft, marginRight, marginTop, marginBottom }}
      className={styles.Title}
    >
      <h1>{black}</h1>
      <h1 className={styles.Yellow}>{yellow}</h1>
    </div>
  );
};

export default Title;
