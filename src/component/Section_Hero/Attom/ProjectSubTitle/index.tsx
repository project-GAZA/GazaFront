import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';

export interface ProjectSubTitleType {
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: number;
  /**
   * 폰트 컬러입니다.
   */
  color: 'black' | 'primary' | 'secondary_dark';
  /**
   * 내용입니다.
   */
  content: string;
}

const ProjectSubTitle = ({
  marginBottom = 0,
  marginRight = 0,
  marginLeft = 0,
  marginTop = 0,
  color,
  content,
}: ProjectSubTitleType) => {
  const classes = classNames(styles.content, {
    [styles.primary]: color === 'primary',
    [styles.secondary_dark]: color === 'secondary_dark',
  });
  return (
    <p
      style={{ marginLeft, marginRight, marginTop, marginBottom }}
      className={classes}
    >
      {content}
    </p>
  );
};

export default ProjectSubTitle;
