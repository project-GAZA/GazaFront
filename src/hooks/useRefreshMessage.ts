import { messageReqIDAtom } from '@/store';
import { useSetRecoilState } from 'recoil';

const useRefreshMessage = () => {
  const setReqID = useSetRecoilState(messageReqIDAtom);
  return () => {
    setReqID(prev => prev + 1);
  };
};

export default useRefreshMessage;
