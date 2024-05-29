import { RefObject, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import instance from '@/utils/clientaxios';

import Comments from '@/component/Section_Message/Modules/Comments';
import MobileComments from '@/component/Section_Message/Modules/MobileComments';
import SortButtons from '@/component/Section_Message/Modules/SortButtons';
import InputComment from '@/component/Section_Message/Attom/InputComment';
import MessageTitle from '@/component/Section_Message/Attom/MessageTitle';

import { useRecoilValue } from 'recoil';
import { deviceState } from '@/store/deviceState';
import { MessageType } from '@/types/dataType';
import styles from './index.module.scss';

interface SectionMessageProps {
  msgRef?: RefObject<HTMLDivElement>;
}

const SectionMessage = ({ msgRef }: SectionMessageProps) => {
  const [comments, setComments] = useState<MessageType[] | null>(null);
  const device = useRecoilValue(deviceState);
  useEffect(() => {
    instance
      .get(`/message?size=100&page=1&sort=new`)
      .then(res => setComments(res.data))
      .catch(_e => toast.error('서버에서 에러가 났습니다.'));
  }, []);
  return (
    <div className={styles.container} ref={msgRef}>
      <MessageTitle
        topText="전세계 각지에서"
        bottomText="많은 사람들이 응원글 작성에 참여하고 있어요"
      />
      <div className={styles.sortContainer}>
        <SortButtons theme="secondary" />
      </div>
      {device === 'desktop' && comments !== null && (
        <div className={styles.commentsContainer}>
          <Comments comments={comments} />
        </div>
      )}
      {device === 'mobile' && comments !== null && (
        <div className={styles.commentsContainer}>
          <MobileComments comments={comments} />
        </div>
      )}
      <div className={styles.inputContainer}>
        <InputComment
          setComments={setComments}
          placeholder="가자지구 아이들에게 응원의 메세지를 남겨보세요."
        />
      </div>
    </div>
  );
};

export default SectionMessage;
