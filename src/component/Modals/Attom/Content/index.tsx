import React from 'react';
import styles from './index.module.scss';

interface ContentProps {
  content: string;
  lineheight: string;
  color: 'white' | 'black';
  align: 'center' | 'left';
}

const Content = ({
  content,
  lineheight = 'normal',
  color = 'white',
  align = 'center',
}: ContentProps) => {
  return (
    <p
      style={{ lineHeight: lineheight }}
      className={`${styles.p} ${color === 'white' && styles.white} ${
        align === 'left' && styles.left
      }`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Content;
