import { RefObject } from 'react';

import Comments from '@/component/Section_Message/Modules/Comments';
import SortButtons from '@/component/Section_Message/Modules/SortButtons';
import InputComment from '@/component/Section_Message/Attom/InputComment';
import MessageTitle from '@/component/Section_Message/Attom/MessageTitle';

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { modalState } from '@/store/modalState';
import { deviceState } from '@/store/deviceState';
import styles from './index.module.scss';

interface SectionMessageProps {
  msgRef?: RefObject<HTMLDivElement>;
}

const SectionMessage = ({ msgRef }: SectionMessageProps) => {
  const setModal = useSetRecoilState(modalState);
  const device = useRecoilValue(deviceState);
  return (
    <div className={styles.container} ref={msgRef}>
      <MessageTitle
        topText="전세계 각지에서"
        bottomText="많은 사람들이 응원글 작성에 참여하고 있어요"
      />
      <div className={styles.sortContainer}>
        <SortButtons theme="secondary" />
      </div>
      {device === 'desktop' && (
        <div className={styles.commentsContainer}>
          <Comments />
        </div>
      )}
      <div className={styles.inputContainer}>
        <InputComment
          placeholder="가자지구 아이들에게 응원의 메세지를 남겨보세요."
          onSubmit={e => {
            e.preventDefault();
            setModal('cheer');
          }}
        />
      </div>
    </div>
  );
};

export default SectionMessage;
