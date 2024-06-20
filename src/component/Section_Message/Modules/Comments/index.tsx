import { useRecoilValue } from 'recoil';

import useMessageData from '@/hooks/useGetMessage';
import { deviceState } from '@/store';
import styles from './index.module.scss';
import MobileComments from './MobileComments';
import DesktopComments from './DesktopComments';

const Comments = () => {
  const { data: comments, loading } = useMessageData();
  const device = useRecoilValue(deviceState);
  if (loading) {
    return null;
  }

  return (
    <>
      {device === 'desktop' && (
        <div className={styles.commentsContainer}>
          <DesktopComments comments={comments} />
        </div>
      )}
      {device === 'mobile' && (
        <div className={styles.commentsContainer}>
          <MobileComments comments={comments} />
        </div>
      )}
    </>
  );
};

export default Comments;
