import { useRecoilValueLoadable } from 'recoil';
import { messageAsyncState } from '@/store';
import toast from 'react-hot-toast';

const useMessageData = () => {
  const messageLoadable = useRecoilValueLoadable(messageAsyncState);
  toast.dismiss();

  if (messageLoadable.state === 'hasError') {
    toast.error(messageLoadable.contents.message);
    return [];
  }

  if (messageLoadable.state === 'hasValue') {
    return messageLoadable.contents;
  }

  if (messageLoadable.state === 'loading') {
    toast.loading('메세지를 받아오는 중 입니다.');
    return [];
  }

  return [];
};

export default useMessageData;
