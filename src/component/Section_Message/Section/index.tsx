import { RefObject } from 'react';

import Comments from '@/component/Section_Message/Modules/Comments';
import SortButtons from '@/component/Section_Message/Modules/SortButtons';
import InputComment from '@/component/Section_Message/Attom/InputComment';
import MessageTitle from '@/component/Section_Message/Attom/MessageTitle';

import styles from './index.module.scss';

interface SectionMessageProps {
  msgRef?: RefObject<HTMLDivElement>;
}

const SectionMessage = ({ msgRef }: SectionMessageProps) => {
  return (
    <div className={styles.container} ref={msgRef}>
      <MessageTitle
        topText="전세계 각지에서"
        bottomText="많은 사람들이 응원글 작성에 참여하고 있어요"
      />
      <div className={styles.sortContainer}>
        <SortButtons theme="secondary" />
      </div>
      <Comments />
      <div className={styles.inputContainer}>
        <InputComment placeholder="가자지구 아이들에게 응원의 메세지를 남겨보세요." />
      </div>
    </div>
  );
};

export default SectionMessage;
