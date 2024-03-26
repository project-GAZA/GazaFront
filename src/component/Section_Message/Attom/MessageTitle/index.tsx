import React from 'react';
import styles from './index.module.scss';

export interface MessageTitleType {
  topText: string;
  bottomText: string;
}

const MessageTitle = ({ topText, bottomText }: MessageTitleType) => {
  return (
    <div className={styles.messageTitleLayout}>
      <p className={styles.topText}>{topText}</p>
      <p className={styles.bottomText}>{bottomText}</p>
    </div>
  );
};

export default MessageTitle;
