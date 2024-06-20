import { useRecoilValue } from 'recoil';

import useMessageData from '@/hooks/useGetMessage';
import { deviceState } from '@/store';
import styles from './index.module.scss';
import MobileComments from './MobileComments';
import DesktopComments from './DesktopComments';

const Comments = () => {
  const [comments, loading] = useMessageData();
  const device = useRecoilValue(deviceState);
  if (loading) {
    return null;
  }

  console.log('hi');
  return (
    <>
      {device === 'desktop' && comments !== null && (
        <div className={styles.commentsContainer}>
          <DesktopComments comments={comments} />
        </div>
      )}
      {device === 'mobile' && comments !== null && (
        <div className={styles.commentsContainer}>
          <MobileComments comments={comments} />
        </div>
      )}
    </>
  );
};

export default Comments;
