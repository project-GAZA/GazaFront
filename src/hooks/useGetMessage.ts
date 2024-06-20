import { useEffect, useState } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { messageAsyncState } from '@/store';
import { MessageType } from '@/types/dataType';
import toast from 'react-hot-toast';

const useMessageData = () => {
  const [data, setData] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(true);
  const messageLoadable = useRecoilValueLoadable(messageAsyncState);

  useEffect(() => {
    toast.dismiss();
    if (messageLoadable.state === 'hasError') {
      toast.error(messageLoadable.contents.message);
      setLoading(false);
      setData([]);
    } else if (messageLoadable.state === 'hasValue') {
      setLoading(false);
      setData(messageLoadable.contents);
    } else if (messageLoadable.state === 'loading') {
      toast.loading('메세지를 받아오는 중 입니다.');
      setLoading(true);
    }
  }, [messageLoadable]);

  return { data, loading };
};

export default useMessageData;
